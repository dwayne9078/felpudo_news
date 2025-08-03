import * as dotenv from "dotenv";
import { PORT } from "./src/config/config.js";
import app from "./app.js";

dotenv.config();

app.listen(PORT);
console.log(`Servidor local en http://localhost:${PORT}/`);
