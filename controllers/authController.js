import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid email" });

    // 2. Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    // 3. Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 4. Send token + user
    res.json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
