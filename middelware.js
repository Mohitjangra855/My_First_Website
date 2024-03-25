const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js")
const { reviewSchema } = require("./schema.js")
// login checking to create new listing

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // redirectURL save
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in First!");
        return res.redirect("/login");
    }
    next();
};
// jis bhi route se login karte hai ushi route par chale jaye ge 
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
// check the owner then give access ..
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to proceed with the action !!");
        return res.redirect(`/listing/${id}`);
    }
    next();
};

module.exports.validateSchema = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    // console.log(error);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);

    } else {
        next();
    }
}

// review isOwner funtion
module.exports.reviewisOwner = async (req, res, next) => {
    let {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to proceed with the action !!");
        return res.redirect(`/listing/${id}`);
    }
    next();
};