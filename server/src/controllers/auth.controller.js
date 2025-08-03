import User from "../models/user.model";

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
  console.log(username, password);

  const foundUser = await userModel.findOne({ username: username });
  console.log(foundUser);

  if (foundUser !== null) {
    res.cookie("user", username, { httpOnly: true, maxAge: 60000 });
    res.send({ mensaje: "Bienvenido a Felpudo News", status: 200 });
  } else {
    res.send({ mensaje: "Credenciales Incorrectas", status: 404 });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("user", { maxAge: 0 });
  res.send({ mensaje: "SESION CERRADA" });
};
