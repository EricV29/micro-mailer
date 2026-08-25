import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: { error: "Demasiadas solicitudes, intenta más tarde" },
});
