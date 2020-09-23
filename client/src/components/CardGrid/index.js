import React from 'react';
import { CardYesImage, CardNoImage } from "../Card"
import "./style.css";
import Spinner from "../Spinner"

const CardGrid = ({articles, isLoading, isLoggedIn}) => {
  
  return isLoading ? (
    <Spinner />
  ) : ( 
      <div className='cards'>
      {articles.map((article, index) => (
        article.urlToImage ? <CardYesImage key=
        {index} 
        article={article} isLoggedIn={isLoggedIn}
        // isFlipped={currentFlippedIndex}
        
        /> : <CardNoImage key=
        {index} article={article} isLoggedIn={isLoggedIn}/>
      ))}
    </div>
   
  )
}

export default CardGrid

