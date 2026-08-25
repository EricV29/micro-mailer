import { Request, Response, NextFunction } from "express";

// Middleware: valida x-api-key en headers
export function requiereApiKey(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const key = req.headers["x-api-key"];
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: "API key inválida o faltante" });
  }
  next();
}
