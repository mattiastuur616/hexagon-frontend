import React from 'react';
import { Link } from 'react-router-dom';
import hexLogo from '../../assets/tuurstoriescommunity_hexlogo.png';
import './storeNav.css';

const StoreNav = () => {
  return (
    <div className='hex__storeNav'>
      <div className="hex__storeNav-btn">
        <img src={hexLogo} alt='hexLogo'/>
        
        <Link className='hex__storeNav-link' to="/">Go back to Main Page</Link>
        <Link className='hex__storeNav-link' to="/library">Go to your library</Link>
      </div>
    </div>
  )
}

export default StoreNav
