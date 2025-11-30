import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/nurseDB"; // or your Atlas URL

async function createUser() {
  await mongoose.connect(MONGO_URL);

  const hashed = await bcrypt.hash("123456", 10);

  await User.create({
    email: "test@example.com",
    password: hashed,
  });

  console.log("Test user created!");
  mongoose.disconnect();
}

createUser();