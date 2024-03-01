import React from 'react'
import { Library } from '../containers'
import LibraryNav from './libraryNav/LibraryNav'

const LibraryPage = () => {
  return (
    <div>
        <div>
            <LibraryNav />
        </div>
        <div className='gradient__books'>
            <Library />
        </div>
    </div>
  )
}

export default LibraryPage
