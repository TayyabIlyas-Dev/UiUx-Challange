import React from 'react'
import Link from 'next/link'

const HeroOne = () => {
  return (
    <section className="bg-[#f6e7b5] py-12 md:py-16 pt-32  ">
    <div className="container mx-auto px-4">
      
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
         <Link href={'/product'}>
         <img
            src="/oneSeaterSofa.png"
            alt="Rocket Single Seater"
            className="w-full h-auto "
          />
         </Link>
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Rocket Single Seater</h2>
          <p className="text-gray-700 mb-6">
          Experience the thrill of solo flight with our state-of-the-art Rocket Single Seater. This compact aircraft will take your adventurous spirit to new heights.          </p>
          <button className="text-black text-2xl font-semibold underline py-3 px-6 rounded-lg transition-all duration-300 hover:scale-110">
              Shop Now
            </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroOne