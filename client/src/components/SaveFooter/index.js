import React, { useState } from 'react'
import API from "../../utils/API";

function SaveFooter({ article, isLoggedIn }) {
  // console.log("SAVE", article)
  const[saved, setSaved] = useState(false);
  const saveArticle = () => {
    const savedArticle = {
      urlToImage: article.urlToImage,
      title: article.title,
      publishedAt: article.publishedAt,
      description: article.description,
      url: article.url,
      compoundScore: article.compoundScore
    }
    API.saveArticle(savedArticle).then(res => {
      console.log(res)
      setSaved(true)
    }).catch(err => console.log(err))
    
  };

  return (

    <footer className="card-footer">
        {/* <p
          className="card-footer-item senti-item">Sentiment Analysis (Hover)</p> */}
        <button onClick={saveArticle} className="card-footer-item button-border button">{saved ? "Article Saved!" : "Save Article"}</button>
      </footer>

  )
}

export default SaveFooter
