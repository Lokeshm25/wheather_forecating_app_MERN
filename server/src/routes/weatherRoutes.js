import { Router } from "express";
import { getWeatherByCity } from "../controllers/weatherController.js";

const router = Router();

router.get("/:city", getWeatherByCity);

export default router;
