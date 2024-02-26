import React from 'react'
import './header.css'
import mainHex from '../../assets/MainPageHex.png'

const Header = () => {
  return (
    <div className='hex__header section__padding' id='welcome'>
      <div className='hex__header-content'>
        <h1 className='gradient__text'>The World is Only an Iceberg for Those who don't know - Annihilation is Imminent and Protection Essential . . .</h1>
        <p>Experience The Saga. Stories about The Only League in The Planet providing Safety from what's to come. A War between The Realms. A Game of The Souls. Life againt The Death.</p>
      </div>
      
      <div className='hex__header-image'>
        <img src={mainHex} alt='mainHex' />
      </div>
    </div>
  )
}

export default Header
