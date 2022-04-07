const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find().then;
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId });
  },
  createThought(req, res) {},
  updateThought(req, res) {},
  deleteThought(req, res) {},

  addReaction(req, res) {},

  deleteReaction(req, res) {},
};
