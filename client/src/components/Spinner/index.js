import React from 'react'
import spinner from '../images/snakeSpinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ margin: 'auto', marginTop: '300px', marginBottom: '300px', display: 'block', width: '65x', height: '65px' }}
      alt='Loading'
    />
  )
}

export default Spinner