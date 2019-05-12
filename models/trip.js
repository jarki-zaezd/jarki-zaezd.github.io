const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  picture: {
    type: String,
    required: true,
    trim: true
  },
  firstRoute: {
    type: Array,
    default: []
  },
  secondRoute: {
    type: Array,
    default: []
  },
  polygon: {
    type: Array,
    default: []
  },
  bestTime: {
    type: String,
    trim: true
  },
  lastTime: {
    type: String,
    trim: true
  },
  distance: {
    type: String
  }
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
