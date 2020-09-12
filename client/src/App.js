import React, { Component, useState, useEffect } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import API from "./utils/API";
import Input from "./components/Input/index";
import Search from "./components/SearchBtn/index"

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    loadArticles();
  }, [])

  const loadArticles = () => {
    const countryCode = "us";
    API.headlinesCountry(countryCode)

      .then(res => {
        console.log(res.data.articles);
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticles(res.data.articles);//this does not filter
      })
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Happily Woke!</h1>
        <Input />
        <Search />
        <CardGrid articles={articles} />
      </div>
    </div>
  );
}

export default App;
