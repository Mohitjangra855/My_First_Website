const Joi = require('joi');
let listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
<<<<<<< HEAD
        category:Joi.string()
=======
>>>>>>> dd59eb4a779d7cc7eb51b0bc94ac9c652eb99cee

    }).required(),
})
let reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required()


    }).required()
})
module.exports= {reviewSchema , listingSchema};