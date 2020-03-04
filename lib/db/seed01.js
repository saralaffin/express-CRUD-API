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

//   newPeak.save(function(err) {
//     if (err) return handleError(err);
//   });
//   newPeak.populate("Location", function(err, peak) {
//     if (err) return handleError(err);
//     console.log("The location is %s", peak.Location);
//   });
//     });
//   });
// });

// let summitData = [summitDatas[0]];
// //loop over summit data and find matching country names
// Peak.deleteMany({}).then(() => {
//   summitData
//     .forEach(summit => {
//       const getCountryIds = new Promise(function(resolve, reject) {
//         let countries = summit.Location.split(", ").map(countryStr => {
//           Country.findOne({ Countryorregion: countryStr }).then(
//             countryMongoDoc => {
//               console.log(countryMongoDoc._id);
//               return countryMongoDoc._id;
//             }
//           );
//         });

//         resolve(countries);
//       });
//       getCountryIds.then(countries => {
//         // console.log(value);
//         console.log("countries: ", countries);
//         const newPeak = new Peak({
//           Name: summit["Peak"],
//           Range: summit.Range,
//           Location: countries,
//           Prominence: parseInt(summit["Prominence (m)"].split(",").join("")),
//           Height: parseInt(summit["Height (m)"].split(",").join(""))
//         });
//       });
//     })
//     .then(() => {
//       newPeak.save(function(err) {
//         if (err) return handleError(err);
//       });
//       newPeak.populate("Location", function(err, peak) {
//         if (err) return handleError(err);
//         console.log("The location is %s", peak.Location);
//       });
//     });
// });
