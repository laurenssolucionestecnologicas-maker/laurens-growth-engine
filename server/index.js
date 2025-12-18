const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(express.json());

// ✅ CORS: acepta varios dominios separados por coma
const allowedOrigins = (process.env.FRONTEND_ORIGIN || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Permite Postman/curl y requests sin origin
      if (!origin) return callback(null, true);

      // Si no definiste whitelist, permite todo (útil en dev)
      if (allowedOrigins.length === 0) return callback(null, true);

      if (allowedOrigins.includes(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS: " + origin));
    },
  })
);

// ✅ Para Render / root
app.get("/", (_, res) => res.send("OK - Laurens API"));
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
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = `Nuevo lead - Laurens Growth Engine: ${business}`;
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

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.GMAIL_USER,
      to: process.env.MAIL_TO || process.env.GMAIL_USER,
      subject,
      text,
      html,
    });

    return res.json({ ok: true, message: "Correo enviado." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Error enviando el correo." });
  }
});

const PORT = process.env.PORT || 5000; // ✅ Render usa PORT automático
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
