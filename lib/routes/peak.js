const express = require("express");
const router = express.Router();
const peakController = require("../controllers/peak");

console.log(peakController.index());

router.get("/", peakController.index);
router.get("/:name", peakController.showName);
router.post("/", peakController.create);
router.put("/:name", peakController.edit);
router.delete("/:name", peakController.delete);

module.exports = router;
