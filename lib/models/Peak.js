const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const peakSchema = new Schema({
  Name: String,
  Range: String,
  Location: [
    {
      Overallrank: Number,
      Countryorregion: String,
      Score: Number,
      GDPpercapita: Number,
      Socialsupport: Number,
      Healthylifeexpectancy: Number,
      Freedomtomakelifechoices: Number,
      Generosity: Number,
      Perceptionsofcorruption: Number
    }
  ],
  Prominence: Number,
  Height: Number
});

module.exports = mongoose.model("Peak", peakSchema);
