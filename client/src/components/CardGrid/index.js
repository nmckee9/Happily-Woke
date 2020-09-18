import React from 'react';
import { CardYesImage, CardNoImage } from "../Card"
import "./style.css";
import Spinner from "../Spinner"

const CardGrid = ({articles, isLoading}) => {
  
  return isLoading ? (
    <Spinner />
  ) : ( 
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

