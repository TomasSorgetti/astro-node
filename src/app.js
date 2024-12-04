import express from "express";
import morgan from "morgan";
import { handler as astroHandler } from "./public/dist/server/entry.mjs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(morgan("dev"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de la API
app.get("/api/example", (req, res) => {
  res.json({ message: "¡Hola desde la API!" });
});

app.use(express.static(path.join(__dirname, "/public/dist/client")));

app.all("*", async (req, res, next) => {
  try {
    if (!astroHandler) {
      return res.status(500).send("Astro handler no cargado todavía.");
    }
    await astroHandler(req, res);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal en el servidor.");
});

export default app;
