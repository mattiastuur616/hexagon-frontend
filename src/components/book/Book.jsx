import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import './book.css'

const Book = ({ imgUrl, chapter, title }) => {
  const navigate = useNavigate()

  function moveToBook() {
    localStorage.setItem("title", title);
    localStorage.setItem("chapter", chapter);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/book");
  }

  function ShowOptions() {
    const [purchased, setPurchased] = useState(false);

    React.useEffect(() => {
      axios.get(`http://localhost:8080/api/isPurchased?email=${localStorage.getItem("user")}&chapter=${chapter}`)
      .then(res => {
        setPurchased(res.data)
      }).catch(error => {
        console.log(error)
      })
    })

    if (purchased === true) {
      return (
        <div>
          <motion.button whileHover={{ scale: 1.1 }} type='button' onClick={moveToBook}>Open The Book</motion.button>
        </div>
      )
    } else {
      return (
        <div>
          <p>Go to store and buy the book</p>
        </div>
      )
    }
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
        <ShowOptions />
      </div>
    </div>
  )
}

export default Book
