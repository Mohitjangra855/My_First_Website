const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")
let userSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    // username or password automatic apna passport-local-mongoose define kar deta hai 
})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);