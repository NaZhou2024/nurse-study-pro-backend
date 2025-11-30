import mongoose from "mongoose";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const run = async () => {
  try {
    await User.create({
      name: "Test User",
      email: "test@example.com",
      password: "123456",
    });
    console.log("User created!");
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.disconnect();
  }
};

run();
