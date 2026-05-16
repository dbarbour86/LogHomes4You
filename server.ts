import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, interest, message } = req.body;

    console.log("Received contact form submission:", { firstName, lastName, email, interest, message });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not found in environment variables. Email not sent.");
      return res.status(200).json({ 
        success: true, 
        message: "Form received (Mock mode: No API key provided). Check server logs." 
      });
    }

    try {
      const resend = new Resend(RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: 'Kings Cabins <onboarding@resend.dev>',
        to: ['derek.barbour@gmail.com'], // The user's email
        subject: `New Quote Request: ${interest} - ${firstName} ${lastName}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(400).json({ success: false, error });
      }

      console.log("Email sent successfully:", data);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
