import { body, param } from "express-validator";

export const validateNewsIdParam = [
  param("id")
    .notEmpty()
    .withMessage("News ID is required")
    .isMongoId()
    .withMessage("Invalid News ID"),
];
export const validateNewsBody = [];
