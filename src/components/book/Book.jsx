import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './book.css';

const Book = ({ imgUrl, chapter, title }) => {
  const navigate = useNavigate()

  function moveToBook() {
    localStorage.setItem("title", title);
    localStorage.setItem("chapter", chapter);

    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/book");
  }
  
  return (
    <div className='hex__book-container_book'>
      <div className='hex__book-container_book-image'>
        <img src={imgUrl} alt='bookCover' />
      </div>

      <div className='hex__book-container_book-content'>
        <div>
          <p>Chapter {chapter}</p>
          <h1>{title}</h1>
        </div>
        
        <div>
          <motion.button 
          whileHover={{ scale: 1.1 }} 
          type='button' 
          onClick={moveToBook}>
            Open The Book
            </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Book
