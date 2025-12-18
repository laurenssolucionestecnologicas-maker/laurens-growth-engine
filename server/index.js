const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

// Leer lista de orígenes permitidos: "a,b,c"
const allowedOrigins = (process.env.FRONTEND_ORIGINS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean)
  .map(o => o.replace(/\/$/, ""));

app.use(cors({
  origin: (origin, cb) => {
    // curl/postman no envían origin
    if (!origin) return cb(null, true);

    const cleanOrigin = origin.replace(/\/$/, "");
    if (allowedOrigins.includes(cleanOrigin)) return cb(null, true);

    return cb(new Error(`CORS blocked: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false
}));

app.use(express.json());

// Para Render (si abres la URL en el navegador)
app.get("/", (_, res) => res.send("Laurens API OK. Use /health or POST /api/contact"));
app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, business, phone, social, product, budget, goal } = req.body || {};

    if (!name || !business || !phone || !product || !goal) {
      return res.status(400).json({ ok: false, message: "Faltan campos requeridos." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const subject = `Nuevo lead - Laurens Growth Engine: ${business}`;

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

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.GMAIL_USER,
      to: process.env.MAIL_TO || process.env.GMAIL_USER,
      subject,
      text: html.replace(/<[^>]*>/g, ""),
      html
    });

    return res.json({ ok: true, message: "Correo enviado." });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ ok: false, message: "Error enviando el correo." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
