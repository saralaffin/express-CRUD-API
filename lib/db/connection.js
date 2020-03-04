const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/peak_happiness", {
  useNewUrlParser: true
});
module.exports = mongoose;
