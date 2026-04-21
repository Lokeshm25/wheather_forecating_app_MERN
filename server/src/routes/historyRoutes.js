import { Router } from "express";
import { getSearchHistory } from "../controllers/historyController.js";

const router = Router();

router.get("/", getSearchHistory);

export default router;
