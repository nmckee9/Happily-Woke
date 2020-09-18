import React from 'react'
import negative from '../images/negative.png';

const Negative = () => {
  return (
    <img
      src={negative}
      style={{ width: '20px'}}
      alt='Negative'
      className='mood'
    />
  )
}

export default Negative