import React from 'react'
import { Store } from '../../containers'
import StoreNav from '../storeNav/StoreNav'
import Brand from '../brand/Brand'

const PurchasePage = () => {

  function CheckStatus() {
    if (localStorage.getItem("user") !== null) {
      return (
        <div>
          <div>
              <StoreNav />
          </div>
          <div className='gradient__store'>
              <Store />
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

export default PurchasePage
