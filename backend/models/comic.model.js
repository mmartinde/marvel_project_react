const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  penciler: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("comics", comicSchema);

