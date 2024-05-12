import React from 'react';
import { motion } from 'framer-motion';
import mainHex from '../../assets/MainPageHex.png';
import './header.css';

const Header = () => {
  return (
    <div className='hex__header section__padding' id='welcome'>
      <div className='hex__header-content'>
        <motion.h1 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 3 }} 
        className='gradient__text'>
          The World is Only an Iceberg for Those who don't know - Annihilation is Imminent and Protection Essential . . .
          </motion.h1>

        <motion.p 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 4, delay: 3 }}>
          Welcome to The Hexagon Story's web page in which you may experience the new saga.
          Here you can obtain books each containing a chapter of The Horror Fantasy Story.
          Grab the books and start experiencing a world full of Endless Possibilities and Magic.
          </motion.p>
      </div>
      
      <div className='hex__header-image'>
        <motion.img 
        initial={{ x: 0, scale: 0.1 }} 
        animate={{ x: 0, scale: 1, rotate: -360 }} 
        transition={{ type: "tween", duration: 3 }} 
        src={mainHex} 
        alt='mainHex' />
      </div>
    </div>
  )
}

export default Header
