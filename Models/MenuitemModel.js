// create schema instance
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create schema
const MenuitemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: String },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

// create model
const MenuitemModel = mongoose.model("menuitem", MenuitemSchema, "menuitems");
// export model
module.exports = MenuitemModel;
