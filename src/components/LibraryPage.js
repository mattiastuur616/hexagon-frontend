import React from 'react'
import { Library } from '../containers'
import BackButton from './BackButton'

const LibraryPage = () => {
  return (
    <div>
        <div>
            <BackButton />
        </div>
        <div className='gradient__books'>
            <Library />
        </div>
    </div>
  )
}

export default LibraryPage
