import express from "express";
import path from "node:path";
import movieRouter from "./routes/movieRoutes.js";

const app = express();
const PORT = 3000;

// Moteur de vues
app.set("view engine", "ejs");

// Dossier des vues
app.set("views", path.join(import.meta.dirname, "views"));

// Fichiers statiques (CSS, images)
app.use(express.static(path.join(import.meta.dirname, "public")));

// Routes
app.use("/", movieRouter);

// Page 404
app.use((req, res) => {
  res.status(404).render("404");
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
