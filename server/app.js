import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const DB_PORT = 27017;
const DB_NAME = "felpudo_news";
const DB_URI = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`;

mongoose.connect(DB_URI).then(
  (a) => console.log("CONECTADO A MONGO CORRECTAMENTE"),
  (err) => {
    console.log("HA OCURRIDO UN ERROR");
    console.log(err);
  }
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    trim: true,
  },
});

const userModel = mongoose.model("user", userSchema);

export const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser("secret123"));

app.get("/users", async (req, res) => {
  const users = await userModel.find();

  if (users) {
    res.send({ usuarios: users });
  }
});

app.get("/user", async (req, res) => {
  let cookie = req.cookies;
  console.log(cookie);
  res.send(cookie);
});

app.post("/register", async (req, res) => {
  const [username, age, pass] = [
    req.body.username,
    req.body.age,
    req.body.pass,
  ];

  const user = new userModel({ username: username, age: age, password: pass });

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
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const foundUser = await userModel.findOne({ username: username });
  console.log(foundUser);

  if (foundUser !== null) {
    res.cookie("user", username, { httpOnly: true, maxAge: 60000 });
    res.send({ mensaje: "Bienvenido a Felpudo News", status: 200 });
  } else {
    res.send({ mensaje: "Credenciales Incorrectas", status: 404 });
  }
});

app.post("/logout", async (req, res) => {
  res.clearCookie("user", { maxAge: 0 });
  res.send({ mensaje: "SESION CERRADA" });
});

export default app;
