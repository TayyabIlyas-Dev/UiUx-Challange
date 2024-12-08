import React from 'react'
import Link from 'next/link'

const CartSecOne = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 ">
    {/* Cart Table */}
    <div className="flex-1 bg-white rounded-lg shadow-md ">
      {/* Table Header */}
      <div className="grid grid-cols-4 text-xs sm:text-sm  overflow-hidden px-2 pl-3 py-6 bg-[#FFF9E5] font-semibold text-gray-700 mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Product Row */}
      <div className="grid grid-cols-4 items-center gap-2 pt-3">
        {/* Product Info */}
        <div className="flex items-center col-span-1 px-2">
          <img
            src="/cartSm1.png"
            alt="Asgaard Sofa"
            className="w-15 h-16 object-fit rounded-lg"
          />
          <span className="ml-4 text-xs sm:text-sm font-medium">Sofa</span>
        </div>
        {/* Price */}
        <span className="col-span-1 text-xs sm:text-sm text-gray-700">250k</span>
        {/* Quantity */}
        <input
          type="number"
          defaultValue={1}
          min={1}
          className="col-span-1 w-10 p-1 text-center border border-gray-300 rounded-lg"
        />
        {/* Subtotal */}
        <div className="flex items-center justify-between col-span-1">
          <span className="text-gray-700">Rs. 250,000</span>
          {/* Delete Button */}
          <button className="text-yellow-500 hover:text-yellow-700">
            🗑️
          </button>
        </div>
      </div>
    </div>

    {/* Cart Totals */}
    <div className="bg-[#FFF9E5] rounded-lg shadow-md p-6 flex-1 max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Cart Totals</h2>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between text-gray-800 font-semibold mb-6">
        <span>Total</span>
        <span className="text-yellow-500">Rs. 250,000.00</span>
      </div>
     <Link href={'/checkout'}>
     <button className="w-full py-2 px-4 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition">
        Check Out
      </button>
     </Link>
    </div>
  </div>
  )
}

export default CartSecOne