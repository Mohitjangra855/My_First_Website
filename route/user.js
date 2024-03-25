const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middelware");

//Controller..............................
const userController = require("../controller/user");


// sign up.................................
Router.route("/signup").get(userController.renderSignupForm).post(wrapasync(userController.signup))

// login ..............
Router.route("/login").get(userController.renderLoginForm).post(saveRedirectUrl,
    passport.authenticate("local",
        { failureRedirect: "/login", failureFlash: true }
    ), userController.login);

// logout................
Router.get("/logout", userController.logout)
module.exports = Router