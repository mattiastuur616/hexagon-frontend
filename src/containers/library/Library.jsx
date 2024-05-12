import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Book } from '../../components';
import { chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './imports';
import './library.css';
import axios from 'axios';

const Library = () => {

  var delay = -0.2;
  const booksToBeShown = [];
  const [userPurchases, setUserPurchases] = useState([]);
  const allBooks = [
    { number: "1", title: "The Protector of The Realm", image: chapter1 },
    { number: "2", title: "Between The Unreal", image: chapter2 },
    { number: "3", title: "The World of Tomorrow", image: chapter3 },
    { number: "4", title: "No Time to Sleep", image: chapter4 },
    { number: "5", title: "Maze in The Storm", image: chapter5 },
    { number: "6", title: "The Project Unspeakable", image: chapter6 },
    { number: "7", title: "The Risk of Necromancer", image: chapter7 },
    { number: "8", title: "Timelines of The Parasyte", image: chapter8 },
    { number: "9", title: "The Death Congress", image: chapter9 },
  ];

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/booksOfUser?email=${localStorage.getItem("user")}`)
    .then(res => {
      setUserPurchases(res.data);
    }).catch(error => {
      console.log(error);
    })
  })

  allBooks.map(book => {
    if (userPurchases.includes(book.number)) {
      booksToBeShown.push(book);
    }
  })

  useEffect(() => {
    document.title = "Library - The Hexagon Story";
  })

  return (
    <div className='hex__library section__padding' id='books'>
      <div className='hex__library-heading'>
        <h1 className='gradient__text'>All the chapters</h1>
      </div>

      <div className='hex__library-container'>
        <div className='hex__library-container_group'>
          {booksToBeShown.map(book => {
            delay = delay + 0.2;
              return <motion.div initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: delay, type: "tween" }}>
                      <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
                        <Book 
                        imgUrl={book.image} 
                        chapter={book.number} 
                        title={book.title} />
                      </motion.div>
                    </motion.div>
                  }
          )}
        </div>
      </div>
    </div>
  )
}

export default Library
