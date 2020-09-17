const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  urlToImage: String,
  description: String,
  title: string,
  compoundScore: Number,
  publishedAt: String,
 
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
