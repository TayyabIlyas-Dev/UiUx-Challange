import React from 'react'
import CartSecOne from '../components/CartSecOne'
import FreeDeliverySec from '../components/FreeDeliverySec'
import CartHeader from '../components/CartHeader'

const page = () => {
  return (
  <div>
    <div>
      <CartHeader/>
    </div>
    <div>
        <CartSecOne/>
    </div>
    <div>
        <FreeDeliverySec/>
    </div>
  </div>
  )
}

export default page