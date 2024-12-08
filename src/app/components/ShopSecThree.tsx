import React from "react";

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
  link: string; // Add a unique link property
};

const products: Product[] = [
  {
    id: 1,
    image: "/Trenton modular sofa_3 1.png", // Replace with actual image URL
    name: "Trenton modular sofa_3",
    price: "Rs. 85,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 2,
    image: "/p2.png",
    name: "Granite dining table with dining chair",
    price: "Rs. 55,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 3,
    image: "/p3.png",
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 4,
    image: "/Plain console with teak mirror 1.png",
    name: "Plain console with teak mirror",
    price: "Rs. 30,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 5,
    image: "/p4.png",
    name: "Grain coffee table",
    price: "Rs. 50,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 6,
    image: "/p5.png",
    name: "Kent coffee table",
    price: "Rs. 40,000.00",
    link: "/product", // Product-specific link
  },
  {
    id: 7,
    image: "/p6.png",
    name: "Round coffee table",
    price: "Rs. 60,000.00",
    link: "/product",
  },
  {
    id: 8,
    image: "/p7.png",
    name: "Reclaimed teak coffee table",
    price: "Rs. 55,000.00",
    link: "/product",
  },
  {
    id: 9,
    image: "/p8.png",
    name: "Classic dining table",
    price: "Rs. 85,000.00",
    link: "/product",
  },
  {
    id: 10,
    image: "/p9.png",
    name: "Wooden armoire",
    price: "Rs. 95,000.00",
    link: "/product",
  },
  {
    id: 11,
    image: "/p10.png",
    name: "Outdoor lounge set",
    price: "Rs. 120,000.00",
    link: "/product",
  },
  {
    id: 12,
    image: "/p11.png",
    name: "Minimalist chair set",
    price: "Rs. 45,000.00",
    link: "/product",
  },
  {
    id: 13,
    image: "/p12.png",
    name: "Square coffee table",
    price: "Rs. 38,000.00",
    link: "/product",
  },
  {
    id: 14,
    image: "/p13.png",
    name: "Rattan chair set",
    price: "Rs. 55,000.00",
    link: "/product",
  },
  {
    id: 15,
    image: "/p14.png",
    name: "Luxury three-seater sofa",
    price: "Rs. 150,000.00",
    link: "/product",
  },
  {
    id: 16,
    image: "/p15.png",
    name: "Modern outdoor sofa set",
    price: "Rs. 200,000.00",
    link: "/product",
  },
  // Add more products as n[#FFF9E5]
]
const ShopSecThree: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link} // Link to the product's page
              className=" p-3 rounded-lg hover:shadow-lg transition block"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-fit rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.price}</p>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="mx-2 px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded">
            1
          </button>
          <button className="mx-2 px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded">
            2
          </button>
          <button className="mx-2 px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded">
            3
          </button>
          <button className="mx-2 px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopSecThree;
