import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BooksSectionBox } from '../../components';
import './cta.css';
import QuestionsBox from '../boxes/QuestionsBox';

const CTA = () => {
  const navigate = useNavigate()

  function moveToSignUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("signup");
  }

  function ShowCorrectBar() {
    if (localStorage.getItem("user") !== null) {
      return (
        <div className="hex__cta">
          <div>
            <BooksSectionBox />
          </div>
          <div>
            <QuestionsBox />
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
            <motion.button 
            whileHover={{ scale: 1.1, color: "#0000FF" }} 
            type="button" 
            onClick={moveToSignUp}>Create Account</motion.button>
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
