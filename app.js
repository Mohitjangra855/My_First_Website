if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override');
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js")


// Routers.......................................
const listingRouter = require("./route/listing");
const reviewRouter = require("./route/review");
const userRouter = require("./route/user");
const { error } = require('console');

// Middlewares...................................
app.engine("ejs", ejsMate);
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = process.env.ATLASDB_URL;
const store = mongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});
store.on("error",()=>{
    console.log("Session Store Error!"+ err);
})
const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};


app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// passport option copy and paste from passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mongoose Connect ..............


main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}


app.listen(port, () => {
    console.log("App is listening...................");
})



// Flash.............................................
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.deleteMsg = req.flash("delete");
    res.locals.errorMsg = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
app.get("/",(req,res)=>{
    res.render("listing/root.ejs")
})
// Router use ................................
app.use("/listing", listingRouter);
app.use("/listing/:id/reviews", reviewRouter)
app.use("/", userRouter);



// Error-handler.......................................
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Exists..!"));
})

app.use((err, req, res, next) => {
    let { status = 500, message = "something went worng" } = err;
    // res.status(status).send(message);
    res.render("error.ejs", { message })

})
