import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

let conn = null;

const connectDb = async () => {
  if (conn) {
    return conn;
  }

  try {
    const db = await mongoose.connect(MONGO_URI);

    conn = db.connection;
    return conn;
  } catch (error) {
    console.error("An error occurred in database connection:", error.message);
    process.exit(1);
  }
};

export default connectDb;
