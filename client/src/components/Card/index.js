import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom';
import SaveFooter from '../SaveFooter';
import DeleteFooter from '../DeleteFooter';
import Positive from "../FeelingDots/Postive";
import Negative from "../FeelingDots/Negative";
import Neutral from "../FeelingDots/Neutral";

export const CardYesImage = ({ article, isLoggedIn }) => {
  let location = useLocation();

  //convert time
  const moment = require('moment-timezone');
  let utcTime = article.publishedAt;
  const local_date = moment.tz(utcTime, "America/New_York").format('MMM Do YYYY h:mmA');

  return (
    <div
      className="card equal-height">
      <div className="card-image">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <figure className="image is-3by2">
            <img
              classname="image-size" src={article.urlToImage} alt={article.title}>
            </img>
          </figure>
        </a>
      </div>
      <div className="card-content">
        <a href={article.url}
          className="title is-4 art-title" target="_blank" rel="noopener noreferrer">{article.title}</a>

        <p>Published on {local_date} EST</p>

        <br>
        </br>

        <p>{article.description}</p>

      </div>
      {location.pathname === "/" || location.pathname === "/home" ? <SaveFooter article={article} /> : <DeleteFooter article={article}/>}
      {(() => {
        if (article.compoundScore >= 0.05) {
          return <Positive />;
        } else if (-0.05 < article.compoundScore < 0.05) {
          return <Negative />;
        } else {
          return <Neutral />;
        }
      })()}
    </div>
  )
};

export const CardNoImage = ({ article, isLoggedIn }) => {
  let location = useLocation();

  //convert date and time
  const moment = require('moment-timezone');
  let utcTime = article.publishedAt;
  const local_date = moment.tz(utcTime, "America/New_York").format('MMM Do YYYY h:mmA');

  return (
    <div className="card equal-height">

      <div className="card-content center-no-image-par">
        <div className="center-no-image-ch">
          <a href={article.url} target="_blank" rel="noopener noreferrer"
            className="title is-4 art-title">{article.title} </a>

          <p>Published on {local_date} EST</p>
          <br>
          </br>

          <p>{article.description}</p>

        </div>
      </div>

      {location.pathname === "/" || location.pathname === "/home" ? <SaveFooter article={article} /> : <DeleteFooter />}

      {(() => {
        if (article.compoundScore >= 0.05) {
          return <Positive />;
        } else if (-0.05 < article.compoundScore < 0.05) {
          return <Negative />;
        } else {
          return <Neutral />;
        }
      })()}
    </div>
  )
};
