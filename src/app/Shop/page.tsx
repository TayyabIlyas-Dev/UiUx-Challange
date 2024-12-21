import React from 'react'
import ShopSecOne from '../components/ShopSecOne'
import ShopSecTwo from '../components/ShopSecTwo'
import ShopSecThree from '../components/ShopSecThree'
import FreeDeliverySec from '../components/FreeDeliverySec'


const page = () => {
  return (
 <div className='pt-14'>
    <div>
        <ShopSecOne/>
    </div>
    <div>
        <ShopSecTwo/>
    </div>
    <div>
        <ShopSecThree/>
    </div>
    <div>
        <FreeDeliverySec/>
    </div>
 </div>
  )
}

export default page