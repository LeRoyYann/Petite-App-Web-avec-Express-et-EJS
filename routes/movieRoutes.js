import { Router } from "express";
import { showMovies, showMovieDetail } from "../controllers/movieController.js";

const router = Router();

router.get("/", showMovies);
router.get("/:id", showMovieDetail);

export default router;
