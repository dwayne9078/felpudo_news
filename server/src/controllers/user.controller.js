import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();

  if (users) {
    res.json(users);
  }
};

export const getUser = async (req, res) => {
  let cookie = req.cookies;
  console.log(cookie);
  res.send(cookie);
};
