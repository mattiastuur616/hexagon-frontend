import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import hexLogo from '../../assets/HexLogo.png'

const Menu = () => {
  return (
    <>
    <p><a href='#welcome'>Welcome</a></p>
    <p><a href='#whex'>The Hex</a></p>
    <p><a href='#books'>Books</a></p>
    <p><a href='#aboutUs'>About Us</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hex__navbar">
      <div className="hex__navbar-links">
        <div className="hex__navbar-links_logo">
          <img src={hexLogo} alt='hexLogo'/>
        </div>
        <div className='hex__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='hex__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sing up</button>
      </div>
      <div className='hex__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='hex__navbar-menu_container scale-up-center'>
            <div className='hex__navbar-menu_container-links'>
              <Menu />
              <div className='hex__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sing up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
