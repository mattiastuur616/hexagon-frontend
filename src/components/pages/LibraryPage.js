import React from 'react';
import Brand from '../brand/Brand';
import { Library } from '../../containers';
import LibraryNav from '../libraryNav/LibraryNav';

const LibraryPage = () => {

  function CheckStatus() {
    if (localStorage.getItem("user") !== null) {
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

export default LibraryPage
