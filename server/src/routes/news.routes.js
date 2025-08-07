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
import handleValidationErrors from "../middleware/validations_errors.middleware.js";

const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get(
  "/:id",
  validateNewsIdParam,
  handleValidationErrors,
  getNewsById
);
newsRouter.post("/", validateNewsBody, handleValidationErrors, createNews);
newsRouter.put(
  "/:id",
  validateNewsIdParam,
  validateNewsBody,
  handleValidationErrors,
  updateNews
);
newsRouter.delete(
  "/:id",
  validateNewsIdParam,
  handleValidationErrors,
  deleteNews
);

export default newsRouter;
