import React, { useState, useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [preference, setPreference] = useState([true, true, true]);

  useEffect(() => {
    setIsLoading(true)
    //set preference state
    loadArticles();
    // let pop_status = sessionStorage.getItem('pop_status');
    // if (!pop_status) {
    //   setActive(true);
    //   sessionStorage.setItem('pop_status', 1);
    // }
    // if (!active) return null;
  }, []);


  const loadArticles = () => {
    const countryCode = "us";
    API.headlinesCountry(countryCode)
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
            if (preference[1] && (0.05 >= article.compoundScore >= 0.05)) {
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
    API.everythingQuery(search)
      .then(res => {
        setIsLoading(false)
        filterNews(res)
      })
      .catch(err => console.log(err));
  };

  return (
    <div>

      <Navbar onChange={handleInputChange} value={search} onClick={handleFormSubmit} setPreference={setPreference}/>
      <div className="container">
        <CardGrid articles={articles} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;