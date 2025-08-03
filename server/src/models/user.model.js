import mongoose from "mongoose";

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

const User = mongoose.model("user", userSchema);

export default User;
