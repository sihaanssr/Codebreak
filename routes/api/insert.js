const express = require("express");
const router = express.Router();

const Coordinates = require("../../models/Coordinates");

router.get("/insertin", (req, res) => {
  const newEntry = new Coordinates({
    name: "Hardik",
    coordinates: {
      xcoordinate: 11,
      ycoordinate: 12
    }
  });

  newEntry
    .save()
    .then(user => res.send("index"))
    .catch(err => console.log(err));
});

module.exports = router;
