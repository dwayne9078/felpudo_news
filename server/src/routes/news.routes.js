import { Router } from "express";

import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller";

const newsRouter = Router();

newsRouter.get("/news", getAllNews);
newsRouter.get("/news", getNewsById);
newsRouter.post("/news", createNews);
newsRouter.put("/news", updateNews);
newsRouter.delete("/news", deleteNews);

export default newsRouter;
