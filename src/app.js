import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import rutasProductos from "./routes/products.routes.js";
import rutasAuth from "./routes/auth.routes.js";

const app = express();

const corsConfig = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use("/api", rutasProductos);
app.use("/auth", rutasAuth);

app.use((req, res) => {
  res.status(404).send("Recurso no encontrado o ruta inválida");
});

app.use((err, req, res, next) => {
  console.error("Error no controlado:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

export default app;
