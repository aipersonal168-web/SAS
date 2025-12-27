import express from "express";
import { loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/users", loginUser);

export default router;
