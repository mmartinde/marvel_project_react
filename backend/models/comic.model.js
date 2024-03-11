const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  published: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: false,
  },
  series: {
    type: String,
    required: false,
  },
  writer: {
    type: String,
    required: true,
  },
  penciler: {
    type: String,
    required: false,
  },
  cover: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("comics", comicSchema);

