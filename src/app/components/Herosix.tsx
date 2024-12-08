import React from 'react'

const Herosix = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/bcImage.png')" }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Instagram</h1>
      <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
      <button className="bg-white text-gray-900 font-medium py-2 px-9 rounded-full shadow-md border border-gray-300 hover:bg-gray-100">
        Follow Us
      </button>
    </section>
  )
}

export default Herosix