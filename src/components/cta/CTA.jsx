import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cta.css'

const CTA = () => {
  const navigate = useNavigate()

  function moveToLibrary() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("library");
  }

  function moveToStore() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("store");
  }

  function moveToSignUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("signup");
  }

  function ShowCorrectBar() {
    if (localStorage.getItem("user") !== null) {
      return (
        <div className="hex__cta">
          <div className="hex__cta-content">
            <h3>Get the books and start discovering the story.</h3>
          </div>
          <div className="hex__cta-btn">
            <button type="button" onClick={moveToLibrary}>Your book library</button>
            <button type="button" onClick={moveToStore}>The Book Store</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="hex__cta">
          <div className="hex__cta-content">
            <h3>Create your own user account to discover more!</h3>
          </div>
          <div className="hex__cta-btn">
            <button type="button" onClick={moveToSignUp}>Create Account</button>
          </div>
        </div>
      )
    }
  }

  return (
    <ShowCorrectBar />
  )
}

export default CTA
