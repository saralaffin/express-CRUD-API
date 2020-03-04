const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  Overallrank: Number,
  Countryorregion: String,
  Score: Number,
  GDPpercapita: Number,
  Socialsupport: Number,
  Healthylifeexpectancy: Number,
  Freedomtomakelifechoices: Number,
  Generosity: Number,
  Perceptionsofcorruption: Number
});

const peakSchema = new Schema({
  Name: String,
  Range: String,
  Location: [countrySchema],
  Prominence: Number,
  Height: Number
});

module.exports = mongoose.model("Peak", peakSchema);