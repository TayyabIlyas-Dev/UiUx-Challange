import React from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

const HeroOne = () => {
  return (
   <div className='pt-16 bg-black'>
     <section
      className="bg-cover h-[59vh] md:h-full bg-center bg-no-repeat py-12 md:py-16 pt-32"
      style={{
        backgroundImage: "url('/bgMainPic.png')", // Replace with the correct path to your image
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center  md:pt-72">
          <div className="lg:w-1/3 text-center justify-center items-center lg:text-left mt-6 lg:mt-0 text-black flex flex-col slide-up">
            <h2 className="text-xl lg:text-2xl text-center font-semibold text-[#fffffac2] mb-4">
              New Arrivals
            </h2>
            <h1 className="text-3xl lg:text-5xl text-center font-bold text-[#fffffac2] mb-3">
              Asgaard Sofa
            </h1>
            <IoIosArrowDown className="text-4xl text-[#fffffac2]" />
            <Link href={'/product'}>
              <button className="text-white text-sm border-2 border-black font-medium py-2 px-20 mx-12 bg-black hover:bg-[#5a2c17] hover:text-white transition">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>


    </section>
   </div>
  );
};

export default HeroOne;
