import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String, // stored hashed password
  completedQuizzes: [{ topicId: String, score: Number, date: Date }],
  bookmarks: [String],
});

// Hash raw password before save
userSchema.pre("save", async function (next) {
  // If passwordHash is already hashed or not modified → skip
  if (!this.isModified("passwordHash")) return next();

  // Hash the value inside passwordHash
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);

  next();
});

// Add method to verify password
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

export default mongoose.model("User", userSchema);
