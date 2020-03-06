const express = require("express");
const router = express.Router();

router.use("/", require("./peak"));

module.exports = router;
