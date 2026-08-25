import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import type { Variables } from "../types/index.js";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || "onboarding@resend.dev",
    to,
    subject: variables.asunto || "Notificación",
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
