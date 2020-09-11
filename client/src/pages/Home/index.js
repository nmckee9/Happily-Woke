import React, { useState, useEffect } from "react";

const Home = () => {
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    API.searchTerms(search)
      .then(res => {
        console.log(res.data.articles);
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        const vader = require('vader-sentiment');
        for (let i = 0; i < res.data.articles.length; i++) {
          const article = res.data.articles[i];
          const input = article.description || article.title;
          const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
          console.log("index of " + i + " ", input);
          console.log("index of " + i + " ", intensity);
          console.log("index of " + i + " entries", Object.entries(intensity))
          let arraysOfScores = Object.entries(intensity);
          let compoundScore = arraysOfScores[3][1];
          if (compoundScore > -0.05 && compoundScore < 0.05) {
            console.log("index of " + i + " ", "Neutral Sentiment")
          }
          if (compoundScore >= 0.05) {
            console.log("index of " + i + " ", "Positive Sentiment")
            setTitle(article.title);
            setUrl(article.url);
            setImage(article.urlToImage);
            setDescription(article.description);
          }
          if (compoundScore <= -0.05) {
            console.log("index of " + i + " ","Negative sentiment")
          }
        }
      })
      .catch(err => setError(err));
  }, [search]);
};

export default Home;