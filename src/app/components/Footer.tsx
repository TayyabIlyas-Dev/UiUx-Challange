import React from 'react';
import Image from 'next/image';
import { BiSupport } from "react-icons/bi";
import { LiaQuestionCircle } from "react-icons/lia";
import Link from 'next/link';
import { CiLinkedin,CiInstagram ,CiTwitter  } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Address Section */}
          <div className="w-full flex flex-col justify-center items-center sm:items-start lg:w-1/4 mb-6 lg:mb-0">
          <div className='py-3'>
          <Image
                      src="/logoNav.png"
                      alt="logo"
                      className="w-36"
                      width={144}
                      height={36}
                    />
          </div>
            <p className="text-gray-500 text-xs">
              Q2 UI/UX Hackathon GIAIC KARACHI 2024,
              <br /> Q2 264840 PK.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center sm:text-start hidden md:block">
            <h3 className="text-gray-500 font-medium mb-2">Links</h3>
            <ul className="text-gray-900 space-y-3">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="/Shop" className="hover:text-gray-900">Shop</a></li>
              <li><a href="/About" className="hover:text-gray-900">About</a></li>
              <li><a href="Contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center sm:text-start">
            <h3 className="text-gray-500 font-medium mb-2">Help</h3>
            <ul className="text-gray-900 space-y-3">
              <li><a href="#" className="hover:text-gray-900">Payment Options</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-gray-700 font-medium mb-2">Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow text-xs px-3 py-1 border focus:outline-none focus:ring-2 "
              />
              <button
                type="submit"
                className="  text-black underline rounded-md "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t flex justify-around border-gray-300 pt-4">
        <div className='flex text-lg gap-3'>
            <BiSupport/>
            <LiaQuestionCircle/>

          </div>
        <div>
        <p className="text-gray-500 text-center text-xs sm:text-sm">
          ©2024 Readywood.com All rights reserved
          </p>
        </div>
          <div className='flex text-lg gap-3'>
           <div className='cursor-pointer hover:text-amber-700 transition'><Link href='#'>
           <CiTwitter/>
           </Link>
           </div>
           <div className='cursor-pointer hover:text-amber-700 transition'><Link href='https://www.instagram.com/syco_king9935/'>
           <CiInstagram/>
           </Link>
           </div>
           <div className='cursor-pointer hover:text-amber-700 transition'><Link href='https://www.linkedin.com/in/tayyab-ilyas-ai-engineer/'>
           <CiLinkedin/>
           </Link>
           </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
