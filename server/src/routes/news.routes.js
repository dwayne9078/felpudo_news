import { Router } from "express";

import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";
import {
  validateNewsIdParam,
  validateNewsBody,
} from "../middleware/news.middleware.js";

const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", validateNewsIdParam, getNewsById);
newsRouter.post("/", validateNewsBody, createNews);
newsRouter.put("/:id", validateNewsIdParam, validateNewsBody, updateNews);
newsRouter.delete("/:id", validateNewsIdParam, deleteNews);

export default newsRouter;
