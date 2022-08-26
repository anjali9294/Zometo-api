// create schema instance
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create schema

const UserSchema = new Schema({
  full_name: { type: String },
  email: { type: String },
  mobile: { type: Number },
  password: { type: String },
});
// create model
const UserModel = mongoose.model("user", UserSchema, "users");
// export model
module.exports = UserModel;
