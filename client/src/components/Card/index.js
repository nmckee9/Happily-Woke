import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom';
import SaveFooter from '../SaveFooter';
import DeleteFooter from '../DeleteFooter';

export const CardYesImage = ({ article }) => {
  let location = useLocation();

  //convert time
  const moment = require('moment-timezone');
  let utcTime = article.publishedAt;
  const local_date = moment.tz(utcTime, "America/New_York").format('MMM Do YYYY h:mmA');
  console.log("local_date", local_date);

  return (
    <div
      className="card equal-height">
      <div className="card-image">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <figure className="image is-3by2">
            <img
              src={article.urlToImage} alt={article.title}>
            </img>
          </figure>
        </a>
      </div>
      <div className="card-content">
        <a href={article.url}
          className="title is-4 art-title" target="_blank" rel="noopener noreferrer">{article.title}</a>

        <p>Published on {local_date} EST by {article.source.name}</p>

        <br>
        </br>

        <p>{article.description}</p>

      </div>
      {location.pathname === "/" ? <SaveFooter article={article} /> : <DeleteFooter />}
    </div>
  )
};

export const CardNoImage = ({ article }) => {
  let location = useLocation();

  //convert date and time
  const moment = require('moment-timezone');
  let utcTime = article.publishedAt;
  const local_date = moment.tz(utcTime, "America/New_York").format('MMM Do YYYY h:mmA');
  console.log("local_date", local_date);

  return (
    <div className="card equal-height">

      <div className="card-content center-no-image-par">
        <div className="center-no-image-ch">
          <a href={article.url} target="_blank" rel="noopener noreferrer"
            className="title is-4 art-title">{article.title} </a>

          <p>Published on {local_date} EST by {article.source.name}</p>
          <br>
          </br>

          <p>{article.description}</p>

        </div>
      </div>

      {location.pathname === "/" ? <SaveFooter article={article} /> : <DeleteFooter />}
    </div>
  )
};
