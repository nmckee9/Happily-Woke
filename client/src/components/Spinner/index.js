import React from 'react'
import spinner from '../images/snakeSpinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner