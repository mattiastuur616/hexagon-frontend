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

  return (
    <div className="hex__cta">
      <div className="hex__cta-content">
        <h3>Get the books and start discovering the story.</h3>
      </div>
      <div className="hex__cta-btn">
        <button type="button" onClick={moveToLibrary}>Go to books</button>
        <button type="button" onClick={moveToStore}>Purchase the books</button>
      </div>
    </div>
  )
}

export default CTA
