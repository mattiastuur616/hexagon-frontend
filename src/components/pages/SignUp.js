import React from 'react'
import background from '../../assets/signUp/signUpPic.png'
import SignUpNav from '../signUp/navbar/SignUpNav'
import SignUpForm from '../signUp/form/SignUpForm'

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
