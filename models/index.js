const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  urlToImage: String,
  title: String,
  publishedAt: String,
  description: String,
  url: String,
  compoundScore: Number

});

const News = mongoose.model("News", newsSchema);

module.exports = News;
