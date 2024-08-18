const express = require("express");
const Router = express.Router();
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middelware");
const Listing = require("../models/listing.js");
//Controller..............................
const userController = require("../controller/user");

Router.get("/category/:name", async (req, res) => {
  let alllistings = await Listing.find({});

  let filterData = alllistings.filter((listing) => {
    return (
      listing.category &&
      typeof listing.category === "string" &&
      listing.category.toLowerCase() === req.params.name.toLowerCase()
    );
  });

  if (filterData.length === 0) {
    req.flash("error", "Sorry this category not any listing");
  }

  res.render("listing/index.ejs", { alllistings: filterData });
});


// sign up.................................
Router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapasync(userController.signup));

// login ..............
Router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// logout................
Router.get("/logout", userController.logout);
module.exports = Router;
