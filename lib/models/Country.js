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

module.exports = mongoose.model("Country", countrySchema);
