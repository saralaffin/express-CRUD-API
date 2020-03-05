const Peak = require("../models/Peak");

const summitData = require("./summitdata");
const happinessData = require("./2019happiness");

//loop over summit data and find matching country names
let peaksData = summitData.map(summit => {
  let countriesArr = summit.Location.split(", ");

  let countries = countriesArr.map(countryStr => {
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
    Countries: countriesArr,
    Happiness: countries,
    Prominence: parseInt(summit["Prominence (m)"].split(",").join("")),
    Height: parseInt(summit["Height (m)"].split(",").join(""))
  };
});

Peak.deleteMany({}).then(
  Peak.create(peaksData)
    .then(peaks => {
      console.log(peaks[0]);
    })
    .catch(err => {
      console.log(err);
    })
);
