const Peak = require("../models/Peak");

const summitData = require("./summitdata");
const happinessData = require("./2019happiness");

//loop over summit data and find matching country names
summitData.map(summit => {
  let countries = summit.Location.split(", ");
  countries.map(countryStr => {
    //check all happiness entries for a match
  });
});
let summit = {
  Name: summit.Peak,
  Range: summit.Range,
  Location: summit.split(", "), //and look up happinessData
  Prominence: parseInt(summit["Prominence (m)"]),
  Height: parseInt(summit["Height (m)"])
};
