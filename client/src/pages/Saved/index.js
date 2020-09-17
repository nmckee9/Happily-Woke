import React, { useState, useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import API from "../../utils/API";
import Search from "../../components/SearchBtn";



function Saved() {
  // Setting our component's initial state
  const [articles, setArticles] = useState([]);

  // Load all news and store them with setNews
  useEffect(() => {
    loadSavedNews();
  }, []);

  // Loads all saved news and sets them to news
  function loadSavedNews() {
    API.getArticles().then((res) => {
      console.log(res.data)
    setArticles(res.data)})
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="container">
      <CardGrid articles={articles}> </CardGrid>
    </div>
  );
}

export default Saved;
