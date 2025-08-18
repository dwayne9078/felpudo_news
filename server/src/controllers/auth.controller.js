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

    const isPasswordMatched = await bcrypt.compare(
      password,
      foundUser.password
    );

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
  try {
    const { refresh_tkn } = req.cookies;

    if (!refresh_tkn) {
      return res
        .status(200)
        .json({ message: "Logout successful: No refresh token found." });
    }

    const updatedToken = await Token.updateOne(
      { token: refresh_tkn },
      { isActive: false }
    );

    if (updatedToken.modifiedCount > 0) {
      res.clearCookie("access_tkn");
      res.clearCookie("refresh_tkn");
      return res.status(200).json({ message: "Logout successful." });
    }

    res.clearCookie("access_tkn");
    res.clearCookie("refresh_tkn");
    return res.status(200).json({
      message: "Logout successful: Token not found or already logged out.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error during logout." });
  }
};

export const refresh = async (req, res) => {
  try {
    const { refresh_tkn } = req.cookies;

    if (!refresh_tkn) {
      return res.status(401).json({ message: "Refresh token is missing." });
    }

    const decodedToken = Tokenizer.verifyRefreshToken(refresh_tkn);

    const storedRefreshToken = await Token.findOne({ token: refresh_tkn });

    if (!storedRefreshToken) {
      return res.status(401).json({ message: "Invalid or revoked token." });
    }

    if (!storedRefreshToken.isActive) {
      return res
        .status(401)
        .json({ message: "Refresh token has been revoked." });
    }

    // Get user data from id in refresh token
    const foundUser = await User.findOne({ _id: decodedToken.sub });

    const newAccessToken = Tokenizer.createToken(
      {
        user: {
          username: foundUser.username,
        },
      },
      foundUser._id
    );
    const newRefreshToken = Tokenizer.createRefreshToken(foundUser._id);

    await storedRefreshToken.updateOne({ isActive: false });

    await Token.create({
      userId: decodedToken.sub,
      token: newRefreshToken,
    });

    res.cookie("access_tkn", newAccessToken, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      sameSite: "strict",
    });

    res.cookie("refresh_tkn", newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(201).json({ message: "Refresh token succesfully refreshed" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid or expired refresh token." });
  }
};
