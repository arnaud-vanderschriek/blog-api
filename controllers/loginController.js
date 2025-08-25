import User from "../models/User.js";
import Login from "../models/Login.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({
        success: false,
        data: null,
        message: "Email ou mot de passe incorrect",
      });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({
        success: false,
        data: null,
        message: "Email ou mot de passe incorrect",
      });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.json({ success: true, data: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const logout = async (req, res) => {
  res.json({ message: "Déconnecté" });
};
