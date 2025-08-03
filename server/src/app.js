import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { COOKIE_SECRET } from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

export default app;
