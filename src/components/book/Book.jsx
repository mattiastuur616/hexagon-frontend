import React from 'react'
import './book.css'

const book = ({ imgUrl, chapter, title }) => {
  return (
    <div className='hex__blog-container_book'>
      <div className='hex__blog-container_book-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='hex__blog-container_book-content'>
        <div>
          <p>{chapter}</p>
          <h1>{title}</h1>
        </div>
        <p>Open The Book</p>
      </div>
    </div>
  )
}

export default book
