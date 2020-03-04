//need to npm install convert-csv-to-json before running this file, but it's not needed for the app. I removed the dependenciesfrom package.json after getting my json files. This is more of a reminder for how I got my data in the first place

let csvToJson = require("convert-csv-to-json");

let fileInputName = "data/2019.csv";
let fileOutputName = "data/2019happiness.json";

csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(fileInputName, fileOutputName);

//also ran from command line: csvtojson data/most_topographically_prominent_summits.csv > data/summitdata.json to get the trickier data formatted
