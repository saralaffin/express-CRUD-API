let csvToJson = require("convert-csv-to-json");

let fileInputName = "data/2019.csv";
let fileOutputName = "data/2019happiness.json";

csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(fileInputName, fileOutputName);

//also ran from command line: csvtojson data/most_topographically_prominent_summits.csv > data/summitdata.json
