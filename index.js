const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());

app.use("/", require("./lib/routes/index"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
