import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bookImage from '../../assets/whatHexBoxes/bookImage.png';
import './boxesStyle.css';

const BooksSectionBox = () => {
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
        <div className="books_section">
            <div className="books_section-text">
                <h3>Start Your journey by grabbing the books</h3>
            </div>
            <div className="books_section-nav">
                <div className="books_section-nav_buttons">
                    <motion.button className="books_section-nav_buttons-button"
                    whileHover={{ scale: 1.1 }} 
                    type="button" 
                    onClick={moveToLibrary}>Go to library</motion.button>
                    
                    <motion.button className="books_section-nav_buttons-button" 
                    whileHover={{ scale: 1.1 }} 
                    type="button" 
                    onClick={moveToStore}>The Book Store</motion.button>
                </div>
                <div className="books_section-nav_image">
                    <img src={bookImage} alt="bookImage" />
                </div>
            </div>
        </div>
    )
}

export default BooksSectionBox
