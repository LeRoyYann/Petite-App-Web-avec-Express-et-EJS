import { Router } from "express";
import { showMovies } from "../controllers/movieController.js";

const router = Router();

router.get("/", showMovies);

export default router;
