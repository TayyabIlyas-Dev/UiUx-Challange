import Link from 'next/link';
import React from 'react';

const HeroThree = () => {
  const products = [
    {
      name: 'Trenton modular sofa_3',
      price: 'Rs. 25,000.00',
      image: 'Trenton modular sofa_3 1.png'
    },
    {
      name: 'Granite dining table with dining chair',
      price: 'Rs. 25,000.00',
      image: 'Granite dining table with dining chair 1.png'
    },
    {
      name: 'Outdoor bar table and stool',
      price: 'Rs. 25,000.00',
      image: 'Outdoor bar table and stool 1.png'
    },
    {
      name: 'Plain console with teak mirror',
      price: 'Rs. 25,000.00',
      image: 'Plain console with teak mirror 1.png'
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Top Picks For You</h2>
        <p className="text-gray-500 mb-8">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={`./${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-500 text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
        <button className="text-black text-2xl font-semibold underline py-3 px-6 rounded-lg transition-all duration-300 hover:scale-110">
          <Link href="/Shop">
          Veiw more</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;