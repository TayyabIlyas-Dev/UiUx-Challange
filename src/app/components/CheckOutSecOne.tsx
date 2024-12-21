import React from 'react'

const CheckOutSecOne = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-4 justify-between px-4 py-8 max-w-6xl mx-auto">
      {/* Billing Details */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded w-1/2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded w-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <select className="border border-gray-300 p-3 rounded w-full">
            <option>Country / Region</option>
            <option>Sri Lanka</option>
            <option>Pakistan</option>
            <option>India</option>
          </select>
          <input
            type="text"
            placeholder="Street address"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <select className="border border-gray-300 p-3 rounded w-full">
            <option>Province</option>
            <option>Western Province</option>
            <option>Southern Province</option>
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <textarea
            placeholder="Additional information"
            className="border border-gray-300 p-3 rounded w-full h-24"
          ></textarea>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/2 bgwhite p-6 rounded">
        <h2 className="text-2xl font-bold mb-6">Product</h2>
        <div className="mb-4 border-b pb-4">
          <div className="flex justify-between mb-2">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-bold mb-2">Payment Methods</p>
          <label className="flex items-center mb-2">
            <input type="radio" name="payment" className="mr-2" /> Direct Bank Transfer
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="payment" className="mr-2" /> Cash On Delivery
          </label>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>
        <button className="bg-white border-2 border-black hover:bg-black hover:text-white  text-black tansition w-full py-3 rounded">Place order</button>
      </div>
    </div>
  )
}

export default CheckOutSecOne