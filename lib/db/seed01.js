const Peak = require("../models/Peak");
const Country = require("../models/Country");

const summitData = require("./summitdata");

let peaks = [];

Peak.deleteMany({}).then(() => {
  Country.find({})
    .then(countries => {
      peaks = summitData.map(summit => {
        let countriesInSummit = summit.Location.split(", ").map(countryStr => {
          //loop through countries to find the match to countryStr
          countryId = "";
          countries.forEach(countryMongoObj => {
            if (countryStr == countryMongoObj.Countryorregion) {
              countryId = countryMongoObj._id;
            }
          });
          return countryId;
        });

        return {
          Name: summit["Peak"],
          Range: summit.Range,
          Location: countriesInSummit,
          Prominence: parseInt(summit["Prominence (m)"].split(",").join("")),
          Height: parseInt(summit["Height (m)"].split(",").join(""))
        };
      });
    })
    .then(() => {
      peaks.forEach(peak => {
        const newPeak = new Peak(peak);
        newPeak.save(function(err) {
          if (err) return err;
        });
      });
    })
    .then(() => {
      Peak.findOne({ Name: "Mount Everest" }).populate("Location");
    });
});
