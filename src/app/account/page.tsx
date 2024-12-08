import React from 'react'
import AccountSecOne from '../components/AccountSecOne'
import AccountHeader from '../components/AccountHeader'
import FreeDeliverySec from '../components/FreeDeliverySec'

const page = () => {
  return (
    <div>
        <div>
            <AccountHeader/>
        </div>
        <div>
            <AccountSecOne/>
        </div>
        <div>
            <FreeDeliverySec/>
        </div>
    </div>
  )
}

export default page