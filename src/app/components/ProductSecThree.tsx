'use client'
import React, { useState } from "react";

const ProductSecThree = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-8">
      {/* Tabs */}
      <div className="relative flex justify-center space-x-8 text-lg font-medium border-b">
        {["description", "additionalInfo", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab ? "text-black" : "text-gray-500"
            }`}
          >
            {tab === "description" && "Description"}
            {tab === "additionalInfo" && "Additional Information"}
            {tab === "reviews" && "Reviews [5]"}
          </button>
        ))}

        {/* Dynamic underline */}
        <div
          className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
          style={{
            width:
              activeTab === "description"
                ? "110px"
                : activeTab === "additionalInfo"
                ? "180px"
                : "110px",
            transform:
              activeTab === "description"
                ? "translateX(-160px)"
                : activeTab === "additionalInfo"
                ? "translateX(0)"
                : "translateX(160px)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="mt-6 text-center">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600 mb-6">
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-600 mb-12">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage-styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === "additionalInfo" && (
          <p className="text-gray-600">
            Here you can add additional information about the product, such as
            specifications or features.
          </p>
        )}
        {activeTab === "reviews" && (
          <p className="text-gray-600">
            User reviews will be displayed here. You can include ratings,
            comments, and more.
          </p>
        )}
      </div>

      {/* Image Gallery */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="p-4 bg-[#FFF6E8] rounded-lg">
          <img
            src="/Cloud sofa three seater + ottoman_1 1.png"
            alt="Sofa Style 1"
            className="rounded-lg"
          />
        </div>
        <div className="p-4 bg-[#FFF6E8] rounded-lg">
          <img
            src="/Cloud sofa three seater + ottoman_2 1.png"
            alt="Sofa Style 2"
            className="rounded-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ProductSecThree;
