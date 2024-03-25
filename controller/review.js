const Review = require("../models/review");
const Listing = require("../models/listing.js");

// Review
//Create Review Route.....
module.exports.createReview = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    newReview.author = req.user._id;
    await newReview.save();
    await listing.save();
    req.flash("success", "New comment added...");
    res.redirect(`/listing/${id}`);
}

// Delete  Reviews Route.....
module.exports.destoryReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    let a = await Review.findByIdAndDelete(reviewId);
    console.log(a);
    req.flash("delete", "Comment deleted!");
    res.redirect(`/listing/${id}`)
}