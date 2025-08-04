import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import Tokenizer from "../util/tokenizer.js";

export const register = async (req, res) => {
  const [username, age, pass] = [
    req.body.username,
    req.body.age,
    req.body.pass,
  ];

  const user = new User({ username: username, age: age, password: pass });

  user.save().then(
    (user) => {
      console.log(user);
      res.cookie("user", username, { httpOnly: true, maxAge: 60000 });
      res.send("USUARIO REGISTRADO CON EXITO");
    },
    (err) => {
      console.log(err);
      res.send(`ERROR: ${err}`);
    }
  );
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

    res.cookie("access_tkn", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Login Succesful", auth: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("user", { maxAge: 0 });
  res.send({ mensaje: "SESION CERRADA" });
};
