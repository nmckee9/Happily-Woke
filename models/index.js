const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  author: String,
  urlToImage: String,
  description: String,
  title: String,
  compoundScore: Number,
  publishedAt: String
 
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
