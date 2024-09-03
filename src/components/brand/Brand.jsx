import React from 'react';
import { tyyrStoriesCommunityLogo, reactLogo } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div>
      <div className='hex__brand section__padding'>
        <div>
          <img src={tyyrStoriesCommunityLogo} alt='tyyr' />
        </div>

        <div>
          <img src={reactLogo} alt='reactLogo' />
        </div>
      </div>
      
      <div className='hex__footer-copyright'>
        <p>@2024 The Hexagon Story. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Brand
