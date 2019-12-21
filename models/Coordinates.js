const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoordinateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: SVGAnimatedInteger,
    required: true
  }
});

module.exports = Coordinates = mongoose.model("coordiates", CoordinateSchema);
