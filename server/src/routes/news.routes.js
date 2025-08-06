import { Router } from "express";

import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";

const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", getNewsById);
newsRouter.post("/", createNews);
newsRouter.put("/:id", updateNews);
newsRouter.delete("/:id", deleteNews);

export default newsRouter;
