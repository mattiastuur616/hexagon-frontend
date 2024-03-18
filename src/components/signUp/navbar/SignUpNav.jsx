import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import hexLogo from '../../../assets/HexLogo.png';
import './signUpNav.css';

const SignUpNav = () => {
    const navigate = useNavigate()

    function moveToMainPage() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/");
    }

    return (
        <div className='hex__sign-up-navbar'>
            <div className='hex__sign-up-navbar-links'>
                <div className='hex__navbar-links_logo'>
                    <img src={hexLogo} alt='hexLogo' />
                </div>

                <div className='hex__sign-up-navbar-sign'>
                    <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    type='button' 
                    onClick={moveToMainPage}>Main Page</motion.button>
                </div>

                <div className='hex__sign-up-navbar-header'>
                    <motion.h1 
                    initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ type: "tween", duration: 1.5 }}>Create Your Account</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default SignUpNav
