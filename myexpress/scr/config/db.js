import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

try {
  await db.authenticate();
  console.log("Database connected successfully");
} catch (err) {
  console.error("Database connection failed:", err);
}

export default db;
