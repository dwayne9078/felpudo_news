import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import User from "../models/user.model.js";
import Tokenizer from "../util/tokenizer.js";
import hashPassword from "../util/password_hasher.js";
import Token from "../models/token.model.js";

export const register = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ message: "Missing or Incorrect Fields" });
  }

  const { username, email, password } = req.body;

  try {
    // Verify if user is already registered
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "An error occurred during the register" });
    }

    const createdUser = new User({
      username: username,
      email: email,
      password: await hashPassword(password),
    });

    const isUserSaved = await createdUser.save();

    if (!isUserSaved) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const token = Tokenizer.createToken(
      {
        user: {
          username: createdUser.username,
          isAdmin: createdUser.isAdmin,
        },
      },
      createdUser._id
    );

    res.cookie("access_tkn", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Registration Successful", auth: true });
  } catch (error) {
    console.error("An error has occurred: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(username, password);

    const foundUser = await User.findOne({ username: username });
    console.log(foundUser);

    if (!foundUser) {
      return res.status(401).json({ message: "Incorrect Credentials" });
    }

    const isPasswordMatched = bcrypt.compare(password, foundUser.password);

    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Incorrect Credentials" });
    }

    const token = Tokenizer.createToken(
      {
        user: {
          username: foundUser.username,
        },
      },
      foundUser._id
    );

    const refreshToken = Tokenizer.createRefreshToken(foundUser._id);

    const persistentRefreshToken = new Token({
      userId: foundUser._id,
      token: refreshToken,
    });

    await persistentRefreshToken.save();

    res.cookie("access_tkn", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      sameSite: "strict",
    });

    res.cookie("refresh_tkn", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Login Succesful", auth: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("access_tkn", { maxAge: 0 });
  res.send({ mensaje: "SESION CERRADA" });
};
