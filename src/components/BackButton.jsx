import React from 'react'
import { Link } from 'react-router-dom'
import './cta/cta.css'

const BackButton = () => {
  return (
    <div id='books'>
      <div className="hex__cta-btn">
        <Link className='hex__cta-link' to="/">Go back</Link>
        <button type="button">Buy the books</button>
      </div>
    </div>
  )
}

export default BackButton
