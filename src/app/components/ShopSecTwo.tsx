import React from "react";
import Image from "next/image";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const ShopSecTwo = () => {
  return (
    <div className=" flex justify-around items-center h-28 bg-[#FAF4F4]">
      <div className="flex gap-5 justify-center items-center">
        <div className=" flex gap-5">
          <Image
            src="/filter icon.png"
            alt="logo"
            className="w-4 "
            width={144}
            height={36}
          />
          <span className="hidden sm:block">Filter</span>
        </div>
         <HiViewGrid/>
         <BsViewList/>
         
        <div className="flex justify-center items-center"> 
            <span className="text-2xl">| </span>
            <span className="px-5 hidden sm:block">
        Showing 1–16 of 32 results
        </span>

        </div>
      </div>
{/* between  */}
      <div className="flex gap-6">
     <div className="text-xs sm:text-sm">
        show <span className="bg-[#FFFFFF] text-[#9F9F9F] text-xs sm:text-sm py-3 px-3 ml-4"> 16 </span>
     </div>
     <div className="text-xs sm:text-sm">
     sort by  <span className="bg-[#FFFFFF] text-[#9F9F9F] text-xs sm:text-sm py-3 px-3 sm:px-8 ml-4"> Defualt </span>
     </div>
      </div>
    </div>
  );
};

export default ShopSecTwo;
