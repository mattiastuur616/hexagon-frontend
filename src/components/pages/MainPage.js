import React from 'react'
import './mainPage.css';
import { Footer, WhatHex, Header } from '../../containers'
import { Brand, Navbar } from '..'
import background from '../../assets/HexRings.png'

const MainPage = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div style={{backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 1520
        }}>
        <WhatHex />
      </div>
      <div className='gradient__books'>
        <Footer />
      </div>
      <Brand />
    </div>
  )
}

export default MainPage
