const reviewService = require("../services/reviewService");

// create review controller
exports.createReview = async (req, res) => {
  try {
    const { rating, comment, userId, itemId } = req.body;
    const reviewData = { rating, comment, userId, itemId };
    const review = await reviewService.createReview(reviewData);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
