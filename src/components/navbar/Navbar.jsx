import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hexLogo from '../../assets/HexLogo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => {
  return (
    <>
    <motion.p whileHover={{ color: "#FFFF00" }}><a href='#welcome'>Welcome</a></motion.p>
    <motion.p whileHover={{ color: "#FFFF00" }}><a href='#whex'>The Hex and Books</a></motion.p>
    <motion.p whileHover={{ color: "#FFFF00" }}><a href='#aboutUs'>About Us</a></motion.p>
    </>
  )
}

const Navbar = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const [toggleMenu, setToggleMenu] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
        ...data,
        [e.target.name]: value
    });
  }

  function logIn() {

    axios.get(`http://localhost:8080/api/checkUser?email=${data.email}&password=${data.password}`)
    .then(res => {
      console.log(res.data)
      if (res.data === true) {
        localStorage.setItem("user", data.email);
        window.location.reload(false);
      } else {
        alert("Wrong email or password")
      }
    })
  }

  function moveToSignUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("signup");
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
        {signIn 
          ? <motion.p whileHover={{ color: "#FFFF00" }} onClick={() => setSignIn(false)}>Close</motion.p> 
          : <motion.p whileHover={{ color: "#FFFF00" }} onClick={() => setSignIn(true)}>Sign in</motion.p>
        }
        {signIn && (
          <motion.div animate={{ scale: 1.1 }} className='hex__sign-up_container scale-up-center'>
            <div>
              <label className='hex__sign-up_container-comp'>
                  <p>Enter email:</p>
                  <input 
                  type="text" 
                  name='email' 
                  placeholder='Email' 
                  value={data.email} 
                  onChange={handleChange} />
              </label>

              <label className='hex__sign-up_container-comp'>
                  <p>Password:</p>
                  <input 
                  type="password" 
                  name='password' 
                  placeholder='Password' 
                  value={data.password} 
                  onChange={handleChange} />
              </label>
            </div>

            <label className='hex__sign-up_container-comp'>
              <motion.button 
              whileHover={{ scale: 1.1 }} 
              type='button' 
              onClick={logIn}>Log in</motion.button>
            </label>
          </motion.div>
        )}
        
        <motion.button whileHover={{ scale: 1.1 }} type='button' onClick={moveToSignUp}>Sing up</motion.button>
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
                {signIn 
                  ? <p onClick={() => setSignIn(false)}>Close</p> 
                  : <p onClick={() => setSignIn(true)}>Sign in</p>
                }
                {signIn && (
                  <div className='hex__sign-up_container scale-up-center'>
                    <label className='hex__sign-up_container-comp'>
                        <p>Enter email:</p>
                        <input 
                        type="text" 
                        name='email' 
                        placeholder='Email' 
                        value={data.email} 
                        onChange={handleChange} />
                    </label>

                    <label className='hex__sign-up_container-comp'>
                        <p>Password:</p>
                        <input 
                        type="password" 
                        name='password' 
                        placeholder='Password' 
                        value={data.password} 
                        onChange={handleChange} />
                    </label>

                    <label className='hex__sign-up_container-comp'>
                      <button type='button' onClick={logIn}>Log in</button>
                    </label>
                  </div>
                )}

                <button type='button' onClick={moveToSignUp}>Sing up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
