import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import '../navbar/navbar.css'
import hexLogo from '../../assets/HexLogo.png'
import axios from 'axios';

const Menu = () => {
  return (
    <>
    <p><a href='#welcome'>Welcome</a></p>
    <p><a href='#whex'>The Hex and Books</a></p>
    <p><a href='#aboutUs'>About Us</a></p>
    </>
  )
}

const LoggedInNav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    function logOut() {
        localStorage.removeItem("user");
        window.location.reload(false);
    }

    function WhatUser() {
        const [username, setUserName] = useState("");

        React.useEffect(() => {
            axios.get(`http://localhost:8080/api/userName?email=${localStorage.getItem("user")}`)
            .then(res => {
                setUserName(res.data);
            }).catch(error => {
                console.log(error)
            })
        })

        return <p>User {username} has logged in</p>
    }

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
                <WhatUser />
                <button type='button' onClick={logOut}>Log out</button>
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
                        <button type='button' onClick={logOut}>Log out</button>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default LoggedInNav
