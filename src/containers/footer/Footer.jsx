import React from 'react';
import { motion } from 'framer-motion';
import author from '../../assets/creators/author.png';
import writer from '../../assets/creators/writer.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='hex__footer section__padding' id='aboutUs'>
      <div className='hex__footer-heading'>
        <h1 className='gradient__footer'>About Us</h1>
      </div>

      <div className='hex__footer-people'>
        <div className='hex__profile'>
          <motion.img whileHover={{ scale: 1.1 }} src={author} alt='mainHex' />
          <h1>Mattias Tüür</h1>
          <p>Original Idea Author and Web Page Creator</p>
        </div>

        <div className='hex__profile'>
          <motion.img whileHover={{ scale: 1.1 }} src={writer} alt='mainHex' />
          <h1>Sten Muinast</h1>
          <p>Story Writer</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
