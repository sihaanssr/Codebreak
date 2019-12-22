const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoordinateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    xcoordinate: {
      type: Number,
      required: true
    },
    ycoordinate: {
      type: Number,
      required: true
    }
  }
});

module.exports = Coordinates = mongoose.model("coordinate", CoordinateSchema);
