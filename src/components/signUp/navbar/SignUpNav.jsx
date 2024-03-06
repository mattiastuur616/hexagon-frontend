import React from 'react'
import './signUpNav.css'
import { useNavigate } from 'react-router-dom'
import hexLogo from '../../../assets/HexLogo.png'

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
                    <button type='button' onClick={moveToMainPage}>Main Page</button>
                </div>
                <div className='hex__sign-up-navbar-header'>
                    <h1>Create Your Account</h1>
                </div>
            </div>
        </div>
    )
}

export default SignUpNav
