import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import mainHex from '../../assets/MainPageHex.png'

const Header = () => {
  return (
    <div className='hex__header section__padding' id='welcome'>
      <div className='hex__header-content'>
        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3 }} className='gradient__text'>The World is Only an Iceberg for Those who don't know - Annihilation is Imminent and Protection Essential . . .</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4 }}>Experience The Saga. Stories about The Only League in The Planet providing Safety from what's to come. A War between The Realms. A Game of The Souls. Life againt The Death.</motion.p>
      </div>
      
      <div className='hex__header-image'>
        <motion.img initial={{ x: 900 }} animate={{ x: 0, rotate: -360 }} transition={{ type: "tween", duration: 2 }} src={mainHex} alt='mainHex' />
      </div>
    </div>
  )
}

export default Header
