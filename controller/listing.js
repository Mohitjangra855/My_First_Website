const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index = async (req, res) => {
//     const { country } = req.query;
//     const allListings = await Listing.find({});
//     let countryListing = country
//       ? allListings.filter(
//           (listing) => listing.country.toLowerCase() === country.toLowerCase()
//         )
//       : allListings;
//     // console.log(countryListing);
//     if (countryListing.length == 0) {
//       req.flash("error", "not available");
//       res.redirect("/listings");
//     }
//     res.render("listings/index.ejs", { allListings: countryListing });
//   };

// all......................
module.exports.index = async (req, res) => {
  const { country } = req.query;
  const alllistings = await Listing.find();
  let countryListing = country
    ? alllistings.filter(
        (listing) => listing.country.toLowerCase() === country.toLowerCase()
      )
    : alllistings;
  // console.log(countryListing);
  if (countryListing.length == 0) {
    req.flash("error", "not available");
    res.redirect("/listing");
  }

  res.render("listing/index.ejs", { alllistings: countryListing });
};

// new form......
module.exports.renderNewForm = (req, res) => {
  res.render("listing/new.ejs");
};

// create.............
module.exports.createListing = async (req, res, next) => {
  let result = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  const url = req.file.path;
  const filename = req.file.filename;
  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = result.body.features[0].geometry;
  await newListing.save();
  console.log(newListing);
  req.flash("success", "New listing added...");
  res.redirect("/listing");
  console.log("added data");
};

//Show .....................
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const alllistings = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!alllistings) {
    req.flash("error", "listing is not exists...");
    res.redirect("/listing");
  }
  res.render("listing/show.ejs", { alllistings });
};

//Edit..................
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  let originalImage = listing.image.url;
  originalImage = originalImage.replace("/upload", "/upload");
  // originalImage = originalImage.replace("/upload","/upload/e_art:eucalyptus");
  res.render("listing/edit.ejs", { listing, originalImage });
};

//update.................
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  let result = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  listing.geometry = result.body.features[0].geometry;
  await listing.save();
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated...");
  res.redirect(`/listing/${id}`);
};

//delete.....................
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id).populate("reviews");
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (listing) {
    let reviews = listing.reviews;
    for (let review of reviews) {
      await Review.findByIdAndDelete(review._id);
    }
  }
  req.flash("delete", " listing deleted!");
  res.redirect("/listing");
};
