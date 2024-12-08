'use client'
import React, { useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {  FaTimes} from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { TbUserExclamation } from "react-icons/tb";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
 
  } from "@/components/ui/sheet"


  


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const closeSheet = () => {
    document.body.dispatchEvent(new Event("sheet-close"));
  };

  useEffect(() => {
    const handleSheetClose = () => {
      // Add your sheet close logic here, e.g., updating state
      console.log("Sheet should close now");
    };

    document.body.addEventListener("sheet-close", handleSheetClose);
    return () => {
      document.body.removeEventListener("sheet-close", handleSheetClose);
    };
  }, []);

  <link
  href="https://fonts.googleapis.com/css2?family=Popin:wght@400;700&display=swap"
  rel="stylesheet"
/>

  return (
    
        <header className={"flex bg-[#FBEBB5] fixed text-black font-sans min-h-[70px] tracking-wide w-full z-50 bg-[#FBEBB5]/30 backdrop-blur-2xl"}>
          <div className="flex flex-wrap items-center justify-between sm:px-10 px-2 py-1 gap-4 w-full max-w-screen-xl mx-auto">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-20 sm:42"
                width={128}
                height={42}
              />
            </Link>
    
            <div
              id="collapseMenu"
              className={`max-lg:hidden lg:block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <button
                id="toggleClose"
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                onClick={toggleMenu}
              >
<FaTimes className="w-5 h-5 fill-black" {...({ className: "w-5 h-5 fill-black" } as React.SVGProps<SVGSVGElement>)} />
</button>
    
              <ul className="lg:flex lg:gap-x-10 text-black max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <Link href="/">
                    <Image
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                      width={144}
                      height={36}
                    />
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link href="/" className="hover:text-amber-800  text-[15px] font-semibold  block">
                    Home
                  </Link>
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                  <Link
                    href="/Shop"
                    className="hover:text-amber-800 text-[15px] font-semibold block"
                  >
                    Shop
                  </Link>
                 
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                <Link
                    href="/account"
                    className="hover:text-amber-800 text-[15px] font-semibold block"
                  >
                    Account
                  </Link>
                 
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                <Link
                    href="/Contact"
                    className="hover:text-amber-800 text-[15px] font-semibold block"
                  >
                    Contact
                  </Link>
                 
                </li>
              </ul>
            </div>
    
            <div className="flex items-center space-x-8 max-lg:ml-auto">
              <span className="relative text-xl cursor-pointer">
              <Link href={'/account'}>
              <TbUserExclamation  {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
      size={20}/> 
              </Link>
                
              </span>

              <span className="hidden md:block relative text-xl cursor-pointer">
    <Link href={'/cart'}>
    <LuHeart {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
     />
    </Link> 
                 <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#ffe798] px-1 py-0 text-xs text-black">
                  2
                </span>
              </span>

              <span className="block md:hidden relative text-xl cursor-pointer">
                 <Link href={'/cart'}>
                 <LuHeart {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
                   /> 
                 </Link>
                 <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#ffe798] px-1 py-0 text-xs text-black">
                  2
                </span>
              </span>
          

<Sheet>
  <SheetTrigger>
    <span className="relative text-xl cursor-pointer ">
      <HiOutlineShoppingCart
        {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
      />
      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#ffe798] px-1 py-0 text-xs text-black">
        4
      </span>
    </span>
  </SheetTrigger>
  <SheetContent>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <hr className="mb-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Use Next.js Image Component */}
          <Image
            src="/cartSideItem1.png"
            alt="Asgaard sofa"
            width={96} // width of 24px x 4 (tailwind spacing)
            height={96} // height of 24px x 4 (tailwind spacing)
            className="rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-semibold">Asgaard Sofa</h3>
            <p className="text-xs">
              <span className="font-bold">1</span>{" "}
              <span className="font-bold">x</span>{" "}
              <span className="font-semibold text-[#d4a200]">
                Rs. 250,000.00
              </span>
            </p>
          </div>
        </div>
        <button className="text-gray-500 font-bold hover:text-red-600">✕</button>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">Subtotal</span>
        <span className="text-xs font-semibold text-[#d4a200]">
          Rs. 250,000.00
        </span>
      </div>
      <div className="mt-56 flex gap-4">
      <Link href={'/cart'}>
      <button className="flex-1 text-xs sm:text-sm py-2 px-8 border-2 hover:bg-black hover:text-white  border-black rounded-full text-center">
          View Cart
        </button>
      </Link>
        <Link href={'/checkout'}> 
        <button className="flex-1 text-xs sm:text-sm py-2 px-8 bg-black hover:bg-white hover:text-black hover:border-black hover:border-2 text-white rounded-full text-center">
          Checkout
        </button>
        </Link>
      </div>
    </div>
    <SheetClose>
      <button className="absolute top-4 right-4 text-lg"></button>
    </SheetClose>
  </SheetContent>
</Sheet>;

            
    
              <LuSearch
    {...({ className: "cursor-pointer" } as React.SVGProps<SVGSVGElement>)}
    size={20}
  />    
              <div id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>

              <Sheet>
  <SheetTrigger>
    <RiMenuUnfold4Line
      {...({ className: "w-7 h-7" } as React.SVGProps<SVGSVGElement>)}
    />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="lg:flex">
          <li className="mb-6 hidden max-lg:block">
            <Link href="/" onClick={closeSheet}>
              <Image
                src="/logoNav.png"
                alt="logo"
                className="w-36"
                width={144}
                height={36}
              />
            </Link>
          </li>

          <li className="max-lg:border-b max-lg:py-3">
            <Link
              href="/"
              onClick={closeSheet}
              className="hover:text-amber-800 text-[15px] font-semibold block"
            >
              Home
            </Link>
          </li>

          <li className="group max-lg:border-b max-lg:py-3 relative">
            <Link
              href="/Shop"
              onClick={closeSheet}
              className="hover:text-amber-800 text-[15px] font-semibold block"
            >
              Shop
            </Link>
          </li>

          <li className="group max-lg:border-b max-lg:py-3 relative">
            <Link
              href="/account"
              onClick={closeSheet}
              className="hover:text-amber-800 text-[15px] font-semibold block"
            >
              account
            </Link>
          </li>

          <li className="group max-lg:border-b max-lg:py-3 relative">
            <Link
              href="/Contact"
              onClick={closeSheet}
              className="hover:text-amber-800 text-[15px] font-semibold block"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="py-6">
          <Link href="/account" onClick={closeSheet}>
            <span className="relative text-xl cursor-pointer px-4">
              <TbUserExclamation
                {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
                size={20}
              />
            </span>
          </Link>

          <Link href="/favorites" onClick={closeSheet}>
            <span className="relative text-xl cursor-pointer px-4">
           <Link href={'/cart'}>
           <LuHeart
                {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
                size={20}
              />
           </Link>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#ffe798] px-1 py-0 text-xs text-black">
                2
              </span>
            </span>
          </Link>

          <Link href="/cart" onClick={closeSheet}>
            <span className="relative text-xl cursor-pointer px-4">
              <HiOutlineShoppingCart
                {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
                size={20}
              />
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#ffe798] px-1 py-0 text-xs text-black">
                4
              </span>
            </span>
          </Link>

          <Link href="/search" onClick={closeSheet}>
            <span className="relative text-xl cursor-pointer px-4">
              <LuSearch
                {...({ className: "inline" } as React.SVGProps<SVGSVGElement>)}
                size={20}
              />
            </span>
          </Link>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


              </div> 
            </div>
          </div>
        </header>
    
    
  );
};

export default Navbar;
