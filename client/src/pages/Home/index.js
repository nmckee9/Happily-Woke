import React, { useState, useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import API from "../../utils/API";
import Input from "../../components/Input";
import Search from "../../components/SearchBtn";
import Modal from "../../components/Modal";



const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [articles, setArticles] = useState([]);
  const [mood, setMood] = useState("");

  useEffect(() => {
    loadArticles();
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

          const filteredArray = res.data.articles.filter(article => article.compoundScore >= 0.05);
          setArticles(filteredArray);
        }
      })
      .catch((err) => setError(err));

    //setArticles(res.data.articles);//this does not filter
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    API.everythingQuery(search)
      .then(res => {setArticles(res.data.articles)
      console.log(res.data.articles)})
      .catch(err => console.log(err));
  };




  // handleBtnClick = (event) => {
  //   const btnName = event.target.getAttribute("data-value");
  //   if (btnName === "positive") {
  //     setMood(btnName);
  //   }
  //   if (btnName === "everything") {
  //     setMood(btnName);
  //   }
  // };


  return (
    <div className="container">
      <Input onChange={handleInputChange} value={ search } />
      <Search onClick={handleFormSubmit}/>
      <CardGrid articles={articles} />
    </div>
  );
};

export default Home;