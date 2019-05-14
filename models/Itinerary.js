const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  profilepic: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hashtag: {
    type: Array,
    required: true
  }
});
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);