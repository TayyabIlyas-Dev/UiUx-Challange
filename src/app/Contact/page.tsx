import React from 'react'
import ContactSecOne from '../components/ContactSecOne'
import FreeDeliverySec from '../components/FreeDeliverySec'
import ContactSecTwo from '../components/ContactSecTwo'

const page = () => {
  return (
    <div>
        <div>
            <ContactSecOne/>
        </div>
        <div>
            <ContactSecTwo/>
        </div>


        <div>
            <FreeDeliverySec/>
        </div>

    </div>
  )
}

export default page