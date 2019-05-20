const express = require("express");
const router = express.Router();
const Itinerary = require("../../models/Itinerary");

router.get("/", function(req, res) {
  Itinerary.find()
    .then(itineraries => {
      if (!itineraries) {
        return res.status(404).json("oops! no itineraries");
      }
      res.json(itineraries);
    })
    .catch(err => res.status(404).json("sorry Error"));
});

router.get("/:name", function(req, res) {
  var city = req.params.name;
  Itinerary.find({ city: city }, (err, itineraries) => {
    if (!itineraries) {
      return res.status(404).json(err);
    } else {
      res.send(itineraries);
    }
  });
});

module.exports = router;
