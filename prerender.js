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
  '/floor-plans',
  '/floor-plans/first-chronicles',
  '/floor-plans/second-chronicles',
  '/floor-plans/second-peter',
  '/floor-plans/jude',
  '/small-log-homes',
  '/nationwide-log-homes',
  '/investors',
  '/about',
  '/process',
  '/package'
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
      
      // We must configure sparticuz/chromium correctly for the Vercel build environment
      const browser = await puppeteer.launch({
        args: isDev ? [] : chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: isDev ? undefined : await chromium.executablePath(),
        headless: isDev ? 'new' : chromium.headless,
        channel: isDev ? 'chrome' : undefined // Use local chrome when running locally
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
