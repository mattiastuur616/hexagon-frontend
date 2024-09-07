import React, { useEffect } from 'react';
import SignUpNav from '../signUp/navbar/SignUpNav';
import SignUpForm from '../signUp/form/SignUpForm';
import './mainPage.css';

const SignUp = () => {

  useEffect(() => {
    document.title = "Sign Up - The Hexagon Story";
  })

  return (
    <div className='sign_up_form'>
      <SignUpNav />
    <SignUpForm />
    </div>
  )
}

export default SignUp
