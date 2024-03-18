import React from 'react';
import SignUpNav from '../signUp/navbar/SignUpNav';
import SignUpForm from '../signUp/form/SignUpForm';
import background from '../../assets/signUp/signUpPic.png';

const SignUp = () => {
  return (
    <div style={{backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 1540
        }}>
      <SignUpNav />
    <SignUpForm />
    </div>
  )
}

export default SignUp
