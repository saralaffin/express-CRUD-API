const Peak = require("../models/Peak");

const summitData = require("./summitdata");
const happinessData = require("./2019happiness");

//loop over summit data and find matching country names
let peaksData = summitData.map(summit => {
  let countries = summit.Location.split(", ").map(countryStr => {
    let countryObj = {};
    happinessData.forEach(happinessObj => {
      if (happinessObj.Countryorregion == countryStr) {
        countryObj = happinessObj;
      }
    });
    return countryObj;
  });

  return {
    Name: summit["Peak"],
    Range: summit.Range,
    Location: countries,
    Prominence: parseInt(summit["Prominence (m)"].split(",").join("")),
    Height: parseInt(summit["Height (m)"].split(",").join(""))
  };
});

Peak.remove({}).then(
  Peak.create(peaksData)
    .then(peaks => {
      console.log(peaks[0]);
    })
    .catch(err => {
      console.log(err);
    })
);
