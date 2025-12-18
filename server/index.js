require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  methods: ["POST", "GET"],
}));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, business, phone, social, product, budget, goal } = req.body;

    // Validación básica
    if (!name || !business || !phone || !product || !goal) {
      return res.status(400).json({ error: "Faltan campos requeridos." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.GMAIL_USER;

    const subject = `Nuevo lead - ${business} (${name})`;
    const text =
`Nuevo formulario de contacto:

Nombre: ${name}
Negocio: ${business}
Teléfono/WhatsApp: ${phone}
Redes: ${social || "N/A"}
Qué vende: ${product}
Presupuesto: ${budget || "N/A"}
Objetivo: ${goal}
`;

    await transporter.sendMail({
      from: `"Laurens Landing" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      replyTo: process.env.GMAIL_USER,
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "No se pudo enviar el correo." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
