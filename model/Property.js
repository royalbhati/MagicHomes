const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: String,
    required: true
  },
  pimg: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  oname: {
    type: String,
    require: true
  },
  onum: {
    type: String,
    require: true
  },
  ameni: {
    type: String,
    require: true
  },
  size: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const property = mongoose.model("property", propertySchema);

module.exports = property;
