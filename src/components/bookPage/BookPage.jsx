import React from 'react'
import { useNavigate } from 'react-router-dom'
import hexLogo from '../../assets/HexLogo.png'
import './bookPage.css'

const BookPage = (title, source) => {
  let pageNumber = 0;
  source = `/chapters/${localStorage.getItem("chapter")}/${pageNumber}.txt`;
  title = localStorage.getItem("title");
  const navigate = useNavigate()
  function moveToLibrary() {
    localStorage.removeItem("title");
    localStorage.removeItem("chapter")
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/library");
  }
  function goOn() {
    pageNumber = pageNumber + 1;
  }
  function goBack() {
    pageNumber = pageNumber - 1;
  }
  return (
    <div>
      <div className='hex__bookPage'>
        <div className="hex__bookPage-nav">
            <img src={hexLogo} alt='hexLogo'/>
            <button className='hex__bookPage-btn' type='button' onClick={moveToLibrary}>Go back to all Books</button>
        </div>
      </div>
      <div className='gradient__bg'>
        <div className='hex__bookPage-heading'>
          <h1 className='gradient__text'>Hexagon: {title}</h1>
        </div>
        <div className='hex__bookPage-page'>
          <p>{pageNumber}</p>
        </div>
        <div className='hex__bookPage-pageChange'>
          <button className='hex__bookPage-btn' type='button' onClick={goBack}>Go Back</button>
          <button className='hex__bookPage-btn' type='button' onClick={goOn}>Go On</button>
        </div>
      </div>
    </div>
  )
}

export default BookPage
