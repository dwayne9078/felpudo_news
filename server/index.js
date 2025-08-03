import * as dotenv from "dotenv";
import { PORT } from "./src/config/config.js";
import connectDb from "./src/config/db.js";

import app from "./src/app.js";

dotenv.config();

app.listen(PORT, async () => {
  console.log(`Servidor local en http://localhost:${PORT}/`);
  await connectDb();
});
