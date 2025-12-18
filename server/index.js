const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

/**
 * FRONTEND_ORIGINS puede venir así:
 * FRONTEND_ORIGINS=http://localhost:5173,https://laurensmarketing.com,https://www.laurensmarketing.com
 */
const allowedOrigins = (process.env.FRONTEND_ORIGINS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Permite requests sin origin (Postman/curl/servidor a servidor)
    if (!origin) return callback(null, true);

    if (allowedOrigins.length === 0) return callback(null, true); // fallback
    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  }
}));

app.use(express.json());

// Health check
app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, business, phone, social, product, budget, goal } = req.body || {};

    if (!name || !business || !phone || !product || !goal) {
      return res.status(400).json({ ok: false, message: "Faltan campos requeridos." });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({ ok: false, message: "Config de correo incompleta (GMAIL_USER / GMAIL_APP_PASSWORD)." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = `Nuevo lead - Laurens: ${business}`;

    const text = `
Nuevo lead desde la landing:

Nombre: ${name}
Negocio: ${business}
Tel/WhatsApp: ${phone}
Instagram/Facebook: ${social || "N/A"}
Qué vende: ${product}
Presupuesto: ${budget || "N/A"}
Objetivo: ${goal}
`.trim();

    const html = `
      <h2>Nuevo lead desde la landing</h2>
      <ul>
        <li><b>Nombre:</b> ${name}</li>
        <li><b>Negocio:</b> ${business}</li>
        <li><b>Tel/WhatsApp:</b> ${phone}</li>
        <li><b>Instagram/Facebook:</b> ${social || "N/A"}</li>
        <li><b>Qué vende:</b> ${product}</li>
        <li><b>Presupuesto:</b> ${budget || "N/A"}</li>
        <li><b>Objetivo:</b> ${goal}</li>
      </ul>
    `;

    const mailFrom = process.env.MAIL_FROM || process.env.GMAIL_USER;
    const mailTo = process.env.MAIL_TO || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text,
      html,
    });

    return res.json({ ok: true, message: "Correo enviado." });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ ok: false, message: "Error enviando el correo." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
