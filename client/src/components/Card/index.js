import React from 'react'
// import ArticleMood from '../ArticleMood';
import './style.css'

const Card = ({ article }) => {
  console.log(article)
  return (
    <div className="card">
      <div className="card-image">
        <a href={article.url}>
        <figure className="image is-3by2">
          <img
          src={article.urlToImage} alt={article.title}>
          </img>
        </figure>
        </a>
      </div>
      <div className="card-content">
        <a href={article.url}
        className="title is-4 art-title">{article.title} </a>
        
        <p>Published: {article.publishedAt}</p>
        <br>
        </br>
        
        <p>{article.description}</p>
      </div>
      {/* <ArticleMood/> */}
    </div>
  )
};

export default Card
