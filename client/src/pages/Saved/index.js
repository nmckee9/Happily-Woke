import React, { useState, useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import SavedNav from "../../components/SavedNav";



function Saved() {
  // Setting our component's initial state
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [preference, setPreference] = useState(JSON.parse(localStorage.getItem("preference")) || [true, true, true]);
  const [active, setActive] = useState(false);


  // Load all news and store them with setNews
  useEffect(() => {
    setIsLoading(true);
    loadSavedNews();
  }, [active]);

  // Loads all saved news and sets them to news
  function loadSavedNews() {
    API.getArticles().then((res) => {
      console.log(res.data)
    setArticles(res.data)})
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <SavedNav setpreference={setPreference} preference={preference} active={active} setActive={setActive}/>
      <div className="container">
        <CardGrid articles={articles}> </CardGrid>
      </div>
      <Footer />
    </div>
  );
}

export default Saved;
