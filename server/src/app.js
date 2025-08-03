import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import express from "express";
import cookieParser from "cookie-parser";

import { COOKIE_SECRET } from "./config/config.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

const userLimiter = rateLimit({
  window: 60 * 60 * 1000,
  max: 100,
  message: "Too many requests to user API, try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  window: 60 * 60 * 1000,
  max: 5,
  message: "Too many requests to auth API, try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/v1/auth", authLimiter, authRouter);

export default app;
