import { findUserByname } from "../models/user.model.js";

export const loginUser = async (req, res) => {
  const { name, pass, role } = req.body;

  // Input validation
  if (!name) return res.status(400).json({ message: "Name is required" });
  if (!pass) return res.status(400).json({ message: "Password is required" });
  if (!role) return res.status(400).json({ message: "Role is required" });

  try {
    const user = await findUserByname(name);

    if (!user) {
      return res.status(401).json({ message: "Invalid name" });
    }

    if (user.role !== role) {
      return res.status(401).json({ message: "Invalid role" });
    }

    if (user.pass !== pass) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

