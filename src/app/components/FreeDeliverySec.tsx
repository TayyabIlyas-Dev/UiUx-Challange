import React from 'react'

const FreeDeliverySec = () => {
    
    const features = [
        {
          title: "Free Delivery",
          description: "For all orders over $50, consectetur adipiscing elit.",
        },
        {
          title: "90 Days Return",
          description: "If goods have problems, consectetur adipiscing elit.",
        },
        {
          title: "Secure Payment",
          description: "100% secure payment, consectetur adipiscing elit.",
        },
      ];
  return (
    <section className="bg-[#FAF4F4] py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
        {features.map((feature, index) => (
          <div key={index} className="p-6">
            <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FreeDeliverySec