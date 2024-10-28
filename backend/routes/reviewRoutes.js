const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// create a review
router.post("/reviews", reviewController.createReview);

// get all reviews
router.get("/reviews", reviewController.getReviews);

module.exports = router;
