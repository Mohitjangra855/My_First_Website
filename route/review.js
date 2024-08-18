const express = require("express");
const Route = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapasync");
const { validateReview, isLoggedIn, reviewisOwner } = require("../middelware.js");

// Controller.........
const reviewController = require("../controller/review.js");


// Review
//Create  Reviews Route.....

Route.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))


// Delete  Reviews Route..... 
Route.get("/:reviewId", isLoggedIn, reviewisOwner, wrapAsync(reviewController.destoryReview))

module.exports = Route;