import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import hexLogo from '../../assets/HexLogo.png'
import axios from 'axios'
import './bookPage.css'

const BookPage = (title) => {
  title = localStorage.getItem("title");
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState(0);

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
          <button className='hex__bookPage-btn' type='button' onClick={() => setPageNumber(pageNumber + 1)}>Go On</button>
        </div>
      )
    } else {
      return (
        <div className='hex__bookPage-pageChange'>
          <button className='hex__bookPage-btn' type='button' onClick={() => setPageNumber(pageNumber - 1)}>Go Back</button>
          <button className='hex__bookPage-btn' type='button' onClick={() => setPageNumber(pageNumber + 1)}>Go On</button>
        </div>
      )
    }
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
          <ShowContent />
          <p className='hex__bookPage-pageNumber'>{pageNumber}</p>
        </div>
        <RenderButtons />
      </div>
    </div>
  )
}

export default BookPage
