import React from 'react';
import Image from 'next/image'; // Import the Image component

const HeroTwo = () => {
  return (
    <section className="bg-[#FAF4F4] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Side Tables & Sofa</h2>
          <p className="text-gray-700 mb-6">
            Elevate your living space with our exquisite side tables, crafted with precision and style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div>
            {/* Using Next.js Image component */}
            <Image
              src="/Granite square side table 1.png"
              alt="Side Table"
              className="w-full h-auto"
              width={500} // Specify width
              height={500} // Specify height
              priority // Optional: Ensures the image loads faster
            />
            <div className="px-10">
              <h3 className="text-3xl font-medium mt-4">Side Table</h3>
              <button className="text-black text-sm font-semibold underline py-3 rounded-lg transition-all duration-300 hover:scale-110">
                <a href="#">View more</a>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/Cloud sofa three seater + ottoman_3 1.png"
              alt="Side Sofa"
              className="w-full h-auto"
              width={500} // Specify width
              height={500} // Specify height
            />
            <div className="px-10">
              <h3 className="text-3xl font-medium mt-4">Side Sofa</h3>
              <button className="text-black text-sm font-semibold underline py-3 rounded-lg transition-all duration-300 hover:scale-110">
                <a href="#">View more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
