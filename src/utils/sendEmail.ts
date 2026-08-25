import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import type { Variables } from "../types/index.js";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Función para enviar correos
export async function sendEmail(
  template: string,
  to: string,
  variables: Variables = {},
): Promise<void> {
  const rutaTemplate = path.join(
    __dirname,
    "..",
    "templates",
    `${template}.html`,
  );
  if (!fs.existsSync(rutaTemplate)) {
    throw new Error(`Template "${template}" no existe`);
  }

  let html = fs.readFileSync(rutaTemplate, "utf-8");
  for (const [clave, valor] of Object.entries(variables)) {
    html = html.replaceAll(`{{${clave}}}`, valor);
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: variables.asunto || "Notificación",
    html,
  });
}
