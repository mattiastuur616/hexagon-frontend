import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book } from '../../components';
import { chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './imports';
import './library.css';

const Library = () => {

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
          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter1} 
            chapter="1" 
            title="The Protector of The Realm" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter2} 
            chapter="2" 
            title="Between The Unreal" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter3} 
            chapter="3" 
            title="The World of Tomorrow" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter4} 
            chapter="4" 
            title="No Time to Sleep" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter5} 
            chapter="5" 
            title="The Maze in The Storm" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter6} 
            chapter="6" 
            title="The Project Unspeakable" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter7} 
            chapter="7" 
            title="The Risk of Necromancer" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter8} 
            chapter="8" 
            title="Timelines of The Parasyte" />
          </motion.div>

          <motion.div whileHover={{ scale:1.1, boxShadow: "0px 0px 16px rgb(255,251,0)" }}>
            <Book 
            imgUrl={chapter9} 
            chapter="9" 
            title="The Death Congress" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Library
