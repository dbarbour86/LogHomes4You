import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const DIST_DIR = path.resolve(__dirname, 'dist');

const routesToPrerender = [
  '/',
  '/find-a-log-home',
  '/log-home-plans',
  '/small-log-homes',
  '/guides',
  '/guides/how-much-does-a-log-home-cost',
  '/guides/log-home-kits-explained',
  '/guides/log-home-kit-vs-custom-build',
  '/guides/choosing-log-home-size',
  '/guides/building-a-log-home',
  '/about',
  '/builders/kings-cabins'
];

async function prerender() {
  console.log('Starting prerender server...');
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(DIST_DIR));
  
  // Fallback to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    
    try {
      console.log('Launching browser...');
      
      const isDev = process.env.NODE_ENV === 'development' || !process.env.VERCEL;
      
      let executablePath = undefined;
      let channel = undefined;

      if (!isDev) {
        executablePath = await chromium.executablePath();
      } else {
        const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
        if (fs.existsSync(edgePath)) {
          executablePath = edgePath;
        } else {
          channel = 'chrome';
        }
      }

      const browser = await puppeteer.launch({
        args: isDev ? ['--no-sandbox', '--disable-setuid-sandbox'] : chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath,
        headless: isDev ? 'new' : chromium.headless,
        channel
      });
      const page = await browser.newPage();
      
      for (const route of routesToPrerender) {
        console.log(`Prerendering ${route}...`);
        
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
        
        // Give React a tiny bit more time to ensure all useEffects have fired and DOM is settled
        await new Promise(r => setTimeout(r, 500));
        
        const html = await page.content();
        
        const routePath = route === '/' ? '' : route;
        const dir = path.join(DIST_DIR, routePath);
        
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(dir, 'index.html'), html);
        console.log(`Saved ${path.join(dir, 'index.html')}`);
      }
      
      await browser.close();
      console.log('Browser closed.');
    } catch (err) {
      console.error('Prerender error:', err);
      console.log('Skipping prerender due to error, falling back to Vercel SPA routing.');
    } finally {
      server.close(() => {
        console.log('Server stopped.');
        process.exit();
      });
    }
  });
}

prerender();
