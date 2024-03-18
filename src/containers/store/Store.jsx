import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../components';
import { chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './imports';
import './store.css';

const Store = () => {
  return (
    <div className='hex__store section__padding' id='store'>
      <div className='hex__store-heading'>
        <h1 className='gradient__text'>Welcome to Store</h1>
      </div>

      <div className='hex__store-container'>
        <div className='hex__store-container_group'>
          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter1} 
            title="The Protector of The Realm" 
            productInfo="The Book about the first chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="1" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter2} 
            title="Between The Unreal" 
            productInfo="The Book about the second chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="2" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter3} 
            title="The World of Tomorrow" 
            productInfo="The Book about the third chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="3" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter4} 
            title="No Time to Sleep" 
            productInfo="The Book about the fourth chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="4" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter5} 
            title="The Maze in The Storm" 
            productInfo="The Book about the fifth chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="5" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter6} 
            title="The Project Unspeakable" 
            productInfo="The Book about the sixth chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="6" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter7} 
            title="The Risk of Necromancer" 
            productInfo="The Book about the seventh chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="7" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter8} 
            title="Timelines of The Parasyte" 
            productInfo="The Book about the eighth chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="8" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 16px rgb(255,255,255)" }}>
            <Product 
            imgUrl={chapter9} 
            title="The Death Congress" 
            productInfo="The Book about the ninth chapter in Hexagon Saga" 
            prize="25,99 €" 
            chapter="9" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Store
