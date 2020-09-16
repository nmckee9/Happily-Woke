import React from 'react'

function SaveFooter({ article }) {
  // console.log("SAVE", article)
  return (

    <footer class="card-footer">
        {/* <p
          className="card-footer-item senti-item">Sentiment Analysis (Hover)</p> */}
        <button className="card-footer-item button-border button">Save for Later</button>
      </footer>

  )
}

export default SaveFooter
