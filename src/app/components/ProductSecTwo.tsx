import React from 'react'
import { CiLinkedin,CiInstagram ,CiTwitter  } from "react-icons/ci";

const ProductSecTwo = () => {
  return (
  
        <div className="flex flex-wrap gap-8 p-8 bg-white">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <img
              src="/sp1.png"
              alt="Product Image 1"
              className="w-16 h-16 bg-[#FFF9E5] rounded-lg object-fit"
            />
            <img
              src="/sp2.png"
              alt="Product Image 2"
              className="w-16 h-16 bg-[#FFF9E5] rounded-lg object-fit"
            />
            <img
              src="/sp3.png"
              alt="Product Image 3"
              className="w-16 h-16 bg-[#FFF9E5] rounded-lg object-fit"
            />
            <img
              src="/sp4.png"
              alt="Product Image 4"
              className="w-16 h-16 bg-[#FFF9E5] rounded-lg object-fit"
            />
          </div>
    
          {/* Main product view */}
          <div className="flex-1 px-6 h-[40vh] sm:h-[60vh] rounded-lg bg-[#FFF9E5]">
            <img
              src="/productMainPic.png"
              alt="Main Product Image"
              className="w-full rounded-lg object-fit"
            />
          </div>
    
          {/* Product details */}
          <div className="max-w-lg pl-3">
            <h1 className="text-3xl font-semibold mb-2">Asgaard Sofa</h1>
            <p className="text-xl text-[#9F9F9F] mb-4">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className='text-xl px-2 text-gray-400'>
              | 
              </span>
              <span className="ml-2 text-sm text-gray-600">5 Customer Reviews</span>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound.
            </p>
    
            {/* Size options */}
            <div className="mb-4">
              <p className="font-medium mb-2">Size</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-[#FBEBB5] border rounded-md">L</button>
                <button className="px-4 py-2 bg-[#FAF4F4] border rounded-md">XL</button>
                <button className="px-4 py-2 bg-[#FAF4F4] border rounded-md">XS</button>
              </div>
            </div>
    
            {/* Color options */}
            <div className="mb-4">
              <p className="font-medium mb-2">Color</p>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-purple-500"></button>
                <button className="w-8 h-8 rounded-full bg-black"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
              </div>
            </div>
    
            {/* Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button className="px-4 py-2">-</button>
                <span className="px-4">1</span>
                <button className="px-4 py-2">+</button>
              </div>
              <button className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white border-2 transition border-black rounded-md">
                Add to Cart
              </button>
            </div>
    
            {/* Additional info */}
            <hr className=' bg-gray-200 h-[2px] rounded-full my-4'/>
            <div className="mt-6 ">
              <p className="text-gray-600  mb-1">SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: SS001</p>
              <p className="text-gray-600  mb-1">Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Sofas</p>
              <p className="text-gray-600  mb-1">
                Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Sofa, Chair, Home, Shop
              </p>
              <p className="text-gray-600  flex mb-1">
                Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="#" className="text-gray-600 text-xl"><CiInstagram/></a> &nbsp;&nbsp;  &nbsp; <a href="#" className="text-gray-600 text-xl">  <CiLinkedin/></a> &nbsp;&nbsp;&nbsp;<a href="#" className="text-gray-600 text-xl"> <CiTwitter/></a>
              </p>
            </div>
    
           
           
          </div>
        </div>
   
    
  )
}

export default ProductSecTwo