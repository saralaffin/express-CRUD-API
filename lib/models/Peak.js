const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const peakSchema = new Schema({
  Name: String,
  Range: String,
  Location: [{ type: Schema.Types.ObjectId, ref: "Country" }],
  Prominence: Number,
  Height: Number
});

module.exports = mongoose.model("Peak", peakSchema);
