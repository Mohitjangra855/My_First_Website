const mongoose = require("mongoose");
const initData = require("./myData.js");
const Listing = require("../models/listing.js");

// const MONGO_URL ='mongodb://127.0.0.1:27017/wonderlust';
const MONGO_URL = 'mongodb+srv://mohit:bangbang@atlascluster.fwua22j.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=> 
    ({...obj,owner:"66013415dae7efb0da828663"}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
