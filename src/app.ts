import express from "express";
import passwordRoutes from "./routes/recovery-pass.routes.js";

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passwordRoutes);

app.get("/", (req, res) => res.send("Servicio de correo activo"));

export default app;
