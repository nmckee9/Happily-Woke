import axios from "axios";


export default {
  //headlines= TOP news headlines. Uses the 2-letter ISO 3166-1 code of the country
  getTopHeadlines: function () {
    return axios.get("/api/getnews");
  },
  getSearchedHeadlines: function (query) {
    return axios.get(`/api/getsearchednews/${query}`);
  },

  
  //API routes to mongo db
  
  // Get all aticles
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  //get all articles
  getArticles: function () {
    return axios.get("/api/articles");
  },

// Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },

  // Romoves the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
}
