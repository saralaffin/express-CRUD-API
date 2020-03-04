const Peak = require("../models/Peak");
module.exports = {
  index: (req, res) => {
    Peak.find({}).then(Peaks => {
      res.json(Peaks);
    });
  },
  showYear: (req, res) => {
    Peak.find({ year: req.params.year }).then(Peak => {
      res.json(Peak);
    });
  },
  showName: (req, res) => {
    Peak.find({ name: req.params.name }).then(Peak => {
      res.json(Peak);
    });
  },
  create: (req, res) => {
    Peak.create(req.body).then(Peak => {
      res.json(Peak);
    });
  },
  edit: (req, res) => {
    Peak.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(Peak => {
      res.json(Peak);
    });
  },
  delete: (req, res) => {
    Peak.findOneAndRemove({ name: req.params.name }).then(Peak => {
      res.json(Peak);
    });
  }
};
