'use client'
import React, { useState } from "react";
import { LuHeart } from "react-icons/lu";

const FavDropDown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <button
        type="button"
        id="dropdownToggle"
        onClick={toggleDropdown}
      >
       
       <LuHeart {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
      /> 
        
      </button>

      <div
        id="dropdownMenu"
        className={`absolute ${
          isDropdownOpen ? "block" : "hidden"
        } hadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2 translate-x-[-80%]`}
      >
        <div className="flex items-center justify-between px-4 mb-4">
          <p className="text-xs text-blue-600 cursor-pointer">Clear all</p>
          <p className="text-xs text-blue-600 cursor-pointer">Go to Cart</p>
        </div>

        <ul className="divide-y">
          <li className="p-4 flex items-center hover:bg-gray-50 cursor-pointer">
            <img
              src="https://via.placeholder.com/48"
              alt="Product 1"
              className="w-12 h-12 rounded-full shrink-0"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Product Name 1</h3>
              <p className="text-xs text-gray-500 mt-2">Qty: 1 | Price: $20.00</p>
            </div>
          </li>

          <li className="p-4 flex items-center hover:bg-gray-50 cursor-pointer">
            <img
              src="https://via.placeholder.com/48"
              alt="Product 2"
              className="w-12 h-12 rounded-full shrink-0"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Product Name 2</h3>
              <p className="text-xs text-gray-500 mt-2">Qty: 2 | Price: $40.00</p>
            </div>
          </li>

          <li className="p-4 flex items-center hover:bg-gray-50 cursor-pointer">
            <img
              src="https://via.placeholder.com/48"
              alt="Product 3"
              className="w-12 h-12 rounded-full shrink-0"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Product Name 3</h3>
              <p className="text-xs text-gray-500 mt-2">Qty: 1 | Price: $15.00</p>
            </div>
          </li>
        </ul>

        <div className="px-4 mt-6">
          <p className="text-sm text-[#333] font-semibold">
            Total: <span className="text-blue-600">$75.00</span>
          </p>
        </div>
        <button className="block w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default FavDropDown;
