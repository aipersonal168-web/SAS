import dotenv from "dotenv";
import app from "./scr/app.js";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
