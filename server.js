import dotenv from "dotenv";
import app from "./scr/app.js"; // correct relative path

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
