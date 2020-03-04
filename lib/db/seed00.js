const Country = require("../models/Country");

const happinessData = require("./2019happiness");

Country.deleteMany({}).then(
  Country.create(happinessData)
    .then(countries => {
      console.log(countries);
    })
    .catch(err => {
      console.log(err);
    })
);
