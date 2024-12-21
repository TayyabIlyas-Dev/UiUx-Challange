import React from 'react'
import ProductSecOne from '../components/ProductSecOne'
import ProductSecTwo from '../components/ProductSecTwo'
import ProductSecThree from '../components/ProductSecThree'
import ProductSecFour from '../components/ProductSecFour'

const page = () => {
  return (
    <div>
        <div>
            <ProductSecOne/>
        </div>
        <div>
            <ProductSecTwo/>
        </div>
        <hr className=' bg-gray-200 h-[2px] rounded-full my-4'/>
        <div>
            <ProductSecThree/>
        </div>
        <div>
            <ProductSecFour/>
        </div>
    </div>
  )
}

export default page