import React from "react";
import Image from "next/image";

const ContactSecOne = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/ShopBCPic.png')" }}
    >
      <Image
        src="/Meubel House_Logos-05.png"
        alt="logo"
        className="w-16"
        width={144}
        height={26}
      />

      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-600 py-2 text-xl mb-6"><span className="text-black">Home 	&gt;</span> Contact</p>
     
    </section>
  );
};

export default ContactSecOne;
