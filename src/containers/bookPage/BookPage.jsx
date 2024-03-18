import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hexLogo from '../../assets/HexLogo.png';
import './bookPage.css';

const BookPage = (title) => {
  title = localStorage.getItem("title");
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState(FindPageNumber());
  const [pageTurn, setPageTurn] = useState(0);

  function FindPageNumber() {
    React.useEffect(() => {
      axios.get(`http://localhost:8080/api/pageNumber?email=${localStorage.getItem("user")}&chapter=${localStorage.getItem("chapter")}`)
      .then(res => {
          setPageNumber(res.data);
      }).catch(error => {
        console.log(error)
      });
    }, []);
  }

  const saveBookMark = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/api/bookMark?email=${localStorage.getItem("user")}&chapter=${localStorage.getItem("chapter")}&bookMark=${pageNumber}`)
    .then(
      alert("Bookmark was saved")
    ).catch(error => {
      console.log(error)
    });
  }

  function moveToLibrary() {
    localStorage.removeItem("title");
    localStorage.removeItem("chapter")
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/library");
  }

  function ShowContent() {
    const [content, setContent] = useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/content/chapter${localStorage.getItem("chapter")}/${pageNumber}`)
        .then(res => {
            setContent(res.data);
        }).catch(error => {
          console.log(error)
        });
    }, []);

    const dividedParts = content.map((paragraph) => {
      if (paragraph.includes("Chapter")) {
        return (
        <h1>{paragraph}</h1>
        )
      } else {
        return (
        <p>{paragraph}</p>
        )
      }
    })

    return (
        <div>
          {dividedParts}
        </div>
    )
  }

  function RenderButtons() {
    if (pageNumber === 0) {
      return (
        <div className='hex__bookPage-pageChange'>
          <motion.button 
          whileHover={{ scale: 1.1 }} 
          className='hex__bookPage-btn' 
          type='button' 
          onClick={() => {setPageNumber(pageNumber + 1); setPageTurn(50); 
          window.scrollTo({ top: 147, behavior: "smooth" })
          }}>
            Go On
            </motion.button>
        </div>
      )
    } else {
      return (
        <div className='hex__bookPage-pageChange'>
          <motion.button 
          whileHover={{ scale: 1.1 }} 
          className='hex__bookPage-btn' 
          type='button' 
          onClick={() => {setPageNumber(pageNumber - 1); setPageTurn(-50); 
          window.scrollTo({ top: 147, behavior: "smooth" })
          }}>
            Go Back
            </motion.button>
          <motion.button 
          whileHover={{ scale: 1.1 }} 
          className='hex__bookPage-btn' 
          type='button' 
          onClick={() => {setPageNumber(pageNumber + 1); setPageTurn(50); 
          window.scrollTo({ top: 147, behavior: "smooth" })
          }}>Go On</motion.button>
        </div>
      )
    }
  }

  function CheckStatus() {
    if (localStorage.getItem("user") !== null) {
      return (
        <div>
          <div className='hex__bookPage'>
            <div className="hex__bookPage-nav">
                <img src={hexLogo} alt='hexLogo'/>
                <button 
                className='hex__bookPage-header-btn' 
                type='button' 
                onClick={moveToLibrary}>
                  Go back to all Books
                  </button>
            </div>
          </div>
          <div className='gradient__bg'>
            <div className='hex__bookPage-heading'>
              <h1 className='gradient__text'>Hexagon: {title}</h1>
            </div>
            <motion.div 
            initial={{ opacity: 0, x: pageTurn }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className='hex__bookPage-page'>
              <ShowContent />
              <p className='hex__bookPage-pageNumber'>{pageNumber}</p>
            </motion.div>
            <div className='hex__bookPage-pageChange'>
              <motion.button 
              whileHover={{ scale: 1.1 }} 
              className='hex__bookPage-bookMark' 
              type='button' 
              onClick={saveBookMark}>
                Save Bookmark
                </motion.button>
            </div>
            <RenderButtons />
          </div>
        </div>
      )
    } else {
      return (
        <div className='hex__sign-up-navbar-header'>
          <h1>No access, user has not logged in</h1>
        </div>
      )
    }
  }

  return (
    <div>
      <CheckStatus />
    </div>
  )
}

export default BookPage
