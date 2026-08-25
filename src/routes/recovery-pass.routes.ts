import { Router, Request, Response } from "express";
import { requiereApiKey } from "../middlewares/apiKey.js";
import { limiter } from "../middlewares/rateLimiter.js";
import { sendEmail } from "../utils/sendEmail.js";
import type { SendPasswordBody } from "../types/index.js";

const router = Router();

router.post(
  "/recovery-pass",
  requiereApiKey,
  limiter,
  async (req: Request<{}, {}, SendPasswordBody>, res: Response) => {
    try {
      const { system, email, password } = req.body;
      if (!system || !email || !password) {
        return res
          .status(400)
          .json({ error: "system, email y password son requeridos" });
      }

      await sendEmail("recoveryPass", email, {
        asunto: `Recuperación de contraseña - ${system}`,
        system,
        password,
        nombreEmpresa: process.env.NOMBRE_EMPRESA || system,
        logoUrl: process.env.LOGO_URL || "",
      });

      res.json({ ok: true });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

export default router;
