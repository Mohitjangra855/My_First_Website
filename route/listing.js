const express = require("express");
const Router = express.Router();
const wrapAsync = require("../utils/wrapasync");
const { isLoggedIn, isOwner, validateSchema } = require("../middelware.js");
const multer = require("multer");


// for upload file...........................
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Controller..............
const listingController = require("../controller/listing.js")


Router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        upload.single('listing[image]'),
        validateSchema,
        wrapAsync(listingController.createListing))



// new root.....................
Router.get("/new", isLoggedIn, listingController.renderNewForm)

Router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, upload.single('listing[image]'), validateSchema, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, wrapAsync(listingController.deleteListing));

// Edit root.....................
Router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm))


module.exports = Router;