import { body, param } from "express-validator";

export const validateNewsIdParam = [
  param("id")
    .notEmpty()
    .withMessage("News ID is required")
    .isMongoId()
    .withMessage("Invalid News ID"),
];
export const validateNewsBody = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string")
    .escape(),
  body("content")
    .notEmpty()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content must be a string")
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
