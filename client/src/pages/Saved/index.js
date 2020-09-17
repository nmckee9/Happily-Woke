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
    API.getSavedNews()
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes news from the database with a given id, then reloads books from the db
  function deleteNews(id) {
    API.deleteNews(id)
      .then((res) => loadSavedNews())
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <CardGrid articles={articles}> </CardGrid>
      <Search color="success">
        Delete
      </Search>
    </div>
  );
}

export default Saved;
