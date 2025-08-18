import { Router } from "express";
import {
  login,
  logout,
  refresh,
  register,
} from "../controllers/auth.controller.js";
import Tokenizer from "../util/tokenizer.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", Tokenizer.verifyToken, logout);
authRouter.post("/refresh", refresh);

export default authRouter;
