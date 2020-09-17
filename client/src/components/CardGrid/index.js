import React from 'react';
import { CardYesImage, CardNoImage } from "../Card"
import "./style.css";

const CardGrid = ({articles}) => {
  
  return (
    <div className='cards'>
      {articles.map((article, index) => (
        article.urlToImage ? <CardYesImage key=
        {index} 
        article={article} 
        // isFlipped={currentFlippedIndex}
        
        /> : <CardNoImage key=
        {index} article={article} />
      ))}
    </div>
  )
}

export default CardGrid

