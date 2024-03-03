import React from 'react'
import { Link } from 'react-router-dom'
import './libraryNav.css'
import hexLogo from '../../assets/HexLogo.png'

const LibraryNav = () => {
  return (
    <div className='hex__libraryNav'>
      <div className="hex__libraryNav-btn">
        <img src={hexLogo} alt='hexLogo'/>
        <Link className='hex__libraryNav-link' to="/">Go back to Main Page</Link>
        <Link className='hex__libraryNav-link' to="/store">Go to store</Link>
      </div>
    </div>
  )
}

export default LibraryNav
