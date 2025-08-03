import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";
import Tokenizer from "../util/tokenizer.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/logout", Tokenizer.verifyToken, logout);

export default authRouter;
