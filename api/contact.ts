import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS handling for Vercel
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { firstName, lastName, email, interest, message, phone, projectStage } = req.body || {};

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
    const subject = `New Inquiry: ${firstName} ${lastName} - ${interest || projectStage || 'General'}`;
    
    const { data, error } = await resend.emails.send({
      from: 'Kings Cabins <onboarding@resend.dev>',
      to: ['dannyturner09@gmail.com'], 
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h1 style="color: #634d3a; border-bottom: 2px solid #ce9e62; padding-bottom: 10px;">New Website Inquiry</h1>
          <p>You have received a new message from your website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>` : ''}
            ${interest || projectStage ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Inquiry Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${interest || projectStage}</td>
            </tr>` : ''}
          </table>
          
          <div style="margin-top: 20px; padding: 20px; background: #f9f6f2; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #634d3a;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
            This email was sent from the Kings Cabins website contact form.
          </p>
        </div>
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
}
