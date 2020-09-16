import React from 'react'
import negative from '../images/negative.jpg';

const Negative = () => {
  return (
    <img
      src={negative}
      style={{ width: '50px'}}
      alt='Negative'
      className='mood'
    />
  )
}

export default Negative