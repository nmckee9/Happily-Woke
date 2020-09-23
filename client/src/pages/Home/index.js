import React, { useState, useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Home = ({isLoggedIn}) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [preference, setPreference] = useState(JSON.parse(localStorage.getItem("preference")) || [true, true, true]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadArticles();   
  }, [active]);


  const loadArticles = () => {
    // const countryCode = "us";
    API.getTopHeadlines()
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        filterNews(res);
      })
      .catch((err) => setError(err));
  };

  const filterNews = res => {
    const vader = require("vader-sentiment");
        
        for (let i = 0; i < res.data.articles.length; i++) {
          let compoundScore;
          const article = res.data.articles[i];
          const input = article.description || article.title;
          const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(
            input
          );
          let arraysOfScores = Object.entries(intensity);
          compoundScore = arraysOfScores[3][1];
          article.compoundScore = compoundScore;

          const filteredArray = res.data.articles.filter(article => {
            if (preference[0] && article.compoundScore >= 0.05) {
              return article
            }
            if (preference[1] && article.compoundScore < 0.05 && article.compoundScore > -0.05) {
              return article
            }
            if (preference[2] && article.compoundScore <= -0.05) {
              return article
            }
          })
          setArticles(filteredArray);
          setIsLoading(false)
        }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getSearchedHeadlines(search)
      .then(res => {
        filterNews(res)
      })
      .catch(err => console.log(err));
  };
  

  return (
    <div>
      <Navbar onChange={handleInputChange} value={search} onClick={handleFormSubmit} setpreference={setPreference} preference={preference} active={active} setActive={setActive} isLoggedIn={isLoggedIn}/>
      <div className="container">
        <CardGrid articles={articles} isLoading={isLoading} isLoggedIn={isLoggedIn}/>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;