import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroFour = () => {
  return (
    <section className="bg-[#FFF9E5] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10">
      <div className="lg:w-2/3">
      <Image
    src="/Asgaard sofa 1.png" // Path to your image
    alt="Asgaard Sofa" // Alternative text
    className="w-full" // Retain Tailwind class for styling
    width={800} // Specify the width (you can adjust as needed)
    height={600} // Specify the height (you can adjust as needed)
    priority // Optional: Ensures this image loads faster
  />
      </div>
      <div className="lg:w-1/3 text-center justify-center items-center lg:text-left mt-6 lg:mt-0 flex flex-col">
        <h2 className="text-xl lg:text-2xl text-center font-semibold text-gray-800 mb-4">New Arrivals</h2>
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-gray-900 mb-6">Asgaard Sofa</h1>
       <Link href={'/product'}>
       <button className=" text-black text-sm border-2 border-black font-medium py-2 px-16 sm:px-20 mx-12  hover:bg-gray-800 hover:text-white transition">
          Order Now
        </button>
       </Link>
      </div>
    </section>
  )
}

export default HeroFour