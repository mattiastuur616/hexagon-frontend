import React from 'react'
import { Library } from '../containers'
import LibraryNav from './libraryNav/LibraryNav'
import Brand from './brand/Brand'

const LibraryPage = () => {
  return (
    <div>
        <div>
          <LibraryNav />
        </div>
        <div className='gradient__books'>
          <Library />
        </div>
        <div>
          <Brand />
        </div>
    </div>
  )
}

export default LibraryPage
