import React from 'react'
import positive from '../images/positive.jpg';

const Positive = () => {
  return (
    <img
      src={positive}
      style={{ width: '50px'}}
      alt='Positive'
      className='mood'
    />
  )
}

export default Positive