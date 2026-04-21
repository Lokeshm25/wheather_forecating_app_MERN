import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import historyRoutes from "./routes/historyRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(
  cors({
    origin: env.clientUrl
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/weather", weatherRoutes);
app.use("/api/history", historyRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
