const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // should be hashed
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
