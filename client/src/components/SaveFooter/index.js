import React from 'react'
import API from "../../utils/API"

class SaveFooter extends React.Component {
   state ={

   }
   componentDidMount =() => {
     console.log("Props",this.props)
   }
   saveNews=()=>{
     let data={
       title: this.props.article.title,
       urlToImage: this.props.article.urlToImage,
       description: this.props.article.description,
       author: this.props.article.author,
       compoundScore: this.props.article.compoundScore,
       publishedAt: this.props.article.publishedAt
     }
     console.log(data)
     API.saveArticle(data)
     .then((response)=>{
       console.log("Record saved", response)
     })
   }
  render(){
  return (

    <footer className="card-footer">
        {/* <p
          className="card-footer-item senti-item">Sentiment Analysis (Hover)</p> */}
        <button onClick={this.saveNews} className="card-footer-item button-border button">Save for Later</button>
      </footer>

  )
        }
}

export default SaveFooter
