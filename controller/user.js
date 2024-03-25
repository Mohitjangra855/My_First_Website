const User = require("../models/user");

//signup page.............
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

// signup....................
module.exports.signup = async (req, res) => {
    try {
        let { email, username, password } = req.body
        let newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust")
            res.redirect("/listing")
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup")

    }
}

// Login page............
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

// login...................
module.exports.login = async (req, res) => {
    req.flash("success", "Welocme again to Wanderlust")
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl)
}

// logout.....................
module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        req.flash("success", "Logged out successfully! See you soon!");
        res.redirect('/listing');
    })
}
