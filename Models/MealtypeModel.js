// create schema instance
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const MealtypeSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});
// create model
const MealtypeModel = mongoose.model("mealtyle", MealtypeSchema, "mealtypes");
// export model
module.exports = MealtypeModel;
