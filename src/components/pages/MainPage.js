import { Brand, Navbar } from '..';
import React, { useEffect } from 'react';
import background from '../../assets/HexRings.png';
import LoggedInNav from '../loggedInNav/LoggedInNav';
import { Footer, WhatHex, Header } from '../../containers';
import './mainPage.css';

const MainPage = () => {

  useEffect(() => {
    document.title = "Home - The Hexagon Story";
  })

  function ShowCorrectPage() {
    if (localStorage.getItem("user") !== null) {
      return (
        <div className="App">
          <div className='gradient__bg'>
            <LoggedInNav />
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
    } else {
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
  }

  return (
    <ShowCorrectPage />
  )
}

export default MainPage
