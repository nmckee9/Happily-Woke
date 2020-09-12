import React from 'react';
import Card from "../Card"
import "./style.css";

const CardGrid = ({articles}) => {
  return (
    <div className='cards'>
      {articles.map((article, index) => (
        <Card key=
        {index} article={article}></Card>
      ))}
    </div>
  )
}

export default CardGrid

