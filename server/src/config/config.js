import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.API_PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
