import React from 'react'
import { Store } from '../containers'
import StoreNav from './storeNav/StoreNav'
import Brand from './brand/Brand'

const PurchasePage = () => {
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
}

export default PurchasePage
