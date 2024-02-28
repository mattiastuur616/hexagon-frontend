import React from 'react'
import { Book } from '../../components'
import { chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './imports'
import './library.css'

const Library = () => {
  return (
    <div className='hex__blog section__padding' id='books'>
      <div className='hex__blog-heading'>
        <h1 className='gradient__text'>All the chapters</h1>
      </div>
      <div className='hex__blog-container'>
        <div className='hex__blog-container_group'>
          <Book imgUrl={chapter1} chapter="Chapter 1" title="The Protector of The Realm" />
          <Book imgUrl={chapter2} chapter="Chapter 2" title="Between The Unreal" />
          <Book imgUrl={chapter3} chapter="Chapter 3" title="The World of Tomorrow" />
          <Book imgUrl={chapter4} chapter="Chapter 4" title="No Time to Sleep" />
          <Book imgUrl={chapter5} chapter="Chapter 5" title="The Maze in The Storm" />
          <Book imgUrl={chapter6} chapter="Chapter 6" title="The Project Unspeakable" />
          <Book imgUrl={chapter7} chapter="Chapter 7" title="The Risk of Necromancer" />
          <Book imgUrl={chapter8} chapter="Chapter 8" title="Timelines of The Parasyte" />
          <Book imgUrl={chapter9} chapter="Chapter 9" title="The Death Congress" />
        </div>
      </div>
    </div>
  )
}

export default Library
