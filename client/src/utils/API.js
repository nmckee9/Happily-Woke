import axios from "axios";


export default {
  //headlines= TOP news headlines. Uses the 2-letter ISO 3166-1 code of the country
  headlinesCountry: function (countryCode) {
    return axios.get(
      'http://newsapi.org/v2/top-headlines?' +
      'country=' + countryCode + 
       '&apiKey=' +process.env.REACT_APP_API_KEY
    );
  },
  
  //i.e. Top business headlines from Germany
  headlinesCountryAndCategory: function (countryCode, category) {
    return axios.get(
      'http://newsapi.org/v2/top-headlines?country=' + countryCode + '&category=' + category +
       '&apiKey=' +process.env.REACT_APP_API_KEY
    )
  },

  //i.e. Top headlines from BBC News. (You can't mix this param with the country or category params.)
  headlinesSources: function (sources) {
    return axios.get(
      'http://newsapi.org/v2/top-headlines?sources=' + sources + '&apiKey=' + process.env.REACT_APP_API_KEY
    );
  },

  //i.e. Top headlines about Trump
  headlinesQuery: function (query) {
    return axios.get(
      'http://newsapi.org/v2/top-headlines?q=' + query + '&apiKey=' + process.env.REACT_APP_API_KEY
    );
  },

  //everything= breaking news as well as lesser articles. Keywords or phrases to search for in the article title and body. i.e. All articles about Bitcoin
  everythingQuery: function (query) {
    return axios.get(
      'http://newsapi.org/v2/everything?q=' + query +  '&apiKey=' +process.env.REACT_APP_API_KEY
    );
  },

  //Keywords or phrases to search for in the article title only.
  everythingQueryinTitle: function (query) {
    return axios.get(
      'http://newsapi.org/v2/everything?qInTitle=' + query + '&apiKey=' + process.env.REACT_APP_API_KEY
    );
  },

  //A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. 
  everythingSources: function (sources) {
    return axios.get(
      'http://newsapi.org/v2/everything?sources=' + sources + '&apiKey=' + process.env.REACT_APP_API_KEY
    );
  },

  //Query with from/to dates and optional time of the oldest/newest articles allowed. This should be in ISO 8601 format (e.g. 2020-09-10 or 2020-09-10T00:11:56).
  everythingQueryFromTo: function (query, from, to) {
    return axios.get(
      'http://newsapi.org/v2/everything?q=' + query + '&from=' + from 
      + '&to=' + to + '&apiKey=' + process.env.REACT_APP_API_KEY
    );
  },

  //Query and sort (relevancy, popularity, publishedAt)
  everythingQuerySort: function (query, sortBy) {
    return axios.get(
      'http://newsapi.org/v2/everything?q=' + query + '&sortBy=' + sortBy 
      +  '&apiKey=' +process.env.REACT_APP_API_KEY
    );
  },

  //Combines the above two. I.e. All articles mentioning Apple from yesterday, sorted by popular publishers first
  everythingQueryFromToSort: function (query, from, to, sortBy) {
    return axios.get(
      'http://newsapi.org/v2/everything?q=' + query + '&from=' + from 
      + '&to=' + to + '&sortBy=' + sortBy 
      +  '&apiKey=' +process.env.REACT_APP_API_KEY
    );
  }
}
