import React from 'react'
import Link from 'next/link'

const HeroFour = () => {
  return (
    <section className="bg-[#FFF9E5] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10">
      <div className="lg:w-2/3">
        <img
          src="/Asgaard sofa 1.png"
          alt="Asgaard Sofa"
          className="w-full "
        />
      </div>
      <div className="lg:w-1/3 text-center justify-center items-center lg:text-left mt-6 lg:mt-0 flex flex-col">
        <h2 className="text-xl lg:text-2xl text-center font-semibold text-gray-800 mb-4">New Arrivals</h2>
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-gray-900 mb-6">Asgaard Sofa</h1>
       <Link href={'/product'}>
       <button className=" text-black text-sm border-2 border-black font-medium py-2 px-20 mx-12  hover:bg-gray-800 hover:text-white transition">
          Order Now
        </button>
       </Link>
      </div>
    </section>
  )
}

export default HeroFour