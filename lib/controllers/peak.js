const Peak = require("../models/Peak");
module.exports = {
  index: (req, res) => {
    Peak.find({}).then(Peaks => {
      res.json(Peaks);
    });
  },
  showName: (req, res) => {
    Peak.find({ Name: req.params.name }).then(Peak => {
      res.json(Peak);
    });
  },
  create: (req, res) => {
    Peak.create(req.body).then(Peak => {
      res.json(Peak);
    });
  },
  edit: (req, res) => {
    Peak.findOneAndUpdate({ Name: req.params.name }, req.body, {
      new: true
    }).then(Peak => {
      res.json(Peak);
    });
  },
  delete: (req, res) => {
    Peak.findOneAndRemove({ Name: req.params.name }).then(Peak => {
      res.json(Peak);
    });
  }
};
