import React from 'react'
import './footer.css'
import author from '../../assets/creators/author.png'
import mystery from '../../assets/creators/mystery.png'

const Footer = () => {
  return (
    <div className='hex__footer section__padding' id='aboutUs'>
      <div className='hex__footer-heading'>
        <h1 className='gradient__footer'>About Us</h1>
      </div>

      <div className='hex__footer-people'>
        <div className='hex__profile'>
          <img src={author} alt='mainHex' />
          <h1>Mattias Tüür</h1>
          <p>Original Idea Author and WebPage Creator</p>
        </div>
        <div className='hex__profile'>
          <img src={mystery} alt='mainHex' />
          <h1>Sten Muinast</h1>
          <p>Story Writer</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
