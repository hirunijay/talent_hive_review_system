const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User schema
  itemId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Reviews", reviewSchema);
module.exports = Review;
