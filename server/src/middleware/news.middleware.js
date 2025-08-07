import { body, param } from "express-validator";

export const validateNewsIdParam = [
  param("id")
    .notEmpty()
    .withMessage("News ID is required")
    .isMongoId()
    .withMessage("Invalid News ID"),
];
export const validateNewsBody = [
  body("title").notEmpty().isString().withMessage("Title is required").escape(),
  body("content")
    .notEmpty()
    .isString()
    .withMessage("Content is required")
    .escape(),
  body("categories")
    .optional()
    .isArray()
    .withMessage("Categories must be an array"),
  body("author")
    .notEmpty()
    .withMessage("Author is required")
    .isMongoId("Invalid ID"),
];
