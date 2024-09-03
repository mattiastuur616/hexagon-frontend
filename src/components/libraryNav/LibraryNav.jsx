import React from 'react';
import { Link } from 'react-router-dom';
import hexLogo from '../../assets/tuurstoriescommunity_hexlogo.png';
import './libraryNav.css';

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
