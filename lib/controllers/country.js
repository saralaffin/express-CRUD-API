const Country = require("../models/Country");
module.exports = {
  index: (req, res) => {
    Country.find({}).then(bachelors => {
      res.json(bachelors);
    });
  },
  showYear: (req, res) => {
    Country.find({ year: req.params.year }).then(bachelor => {
      res.json(bachelor);
    });
  },
  showName: (req, res) => {
    Country.find({ name: req.params.name }).then(bachelor => {
      res.json(bachelor);
    });
  },
  create: (req, res) => {
    Country.create(req.body).then(bachelor => {
      res.json(bachelor);
    });
  },
  edit: (req, res) => {
    Country.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(bachelor => {
      res.json(bachelor);
    });
  },
  delete: (req, res) => {
    Country.findOneAndRemove({ name: req.params.name }).then(bachelor => {
      res.json(bachelor);
    });
  }
};
