const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry:{
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
<<<<<<< HEAD
      },
      category:{
        type:String,
        enum:["Trending","Rooms","Iconic Cities","Mountains","Castles","Amazing Pool","Camping","Farms","Arctic"],
=======
>>>>>>> dd59eb4a779d7cc7eb51b0bc94ac9c652eb99cee
      }

})
const Listing = mongoose.model("Listing", listingSchema);


listingSchema.post("findOneAndDelete", async (listing) => {

    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

})

module.exports = Listing;