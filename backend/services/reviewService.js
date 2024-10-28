exports.createReview = async (reviewData) => {
  const review = new Review(reviewData);
  return await review.save();
};

// populate the user details when fetching reviews
exports.getAllReviews = async () => {
  return await Review.find().populate("userId", "username email");
};
