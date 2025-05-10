"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(!click)
  }

  return (
    <div className="w-full">
      <nav className="container max-w-screen-2xl border-b flex flex-wrap items-center justify-between mx-auto p-4 border-gray-200 text-black pl-10">
       
        <Link href="/" className="flex flex-col items-center justify-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-pink-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>

            <span className="text-lg md:text-xl font-bold ">BreastCare AI</span>
            
          </div>
        </Link>

      

      <button
          onClick={toggle}
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={click ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {click ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        <div
          className={`${
            click ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
            <div className="flex flex-medium flex-col justify-center items-center font-base p-4 md:px-10 md:py-0 mt-4 md:gap-3 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:rounded-xl bg-gray-100 md:bg-white ">
          
            <Link href="/" className="text-black font-medium md:bg-transparent block py-2 px-3 ">Home</Link>
          
            <Link href="#" className="text-black hover:text-gray-500 font-medium md:bg-transparent block py-2 px-3 hover:underline underline-offset-4">About</Link>
          
            <Link href="#" className="text-black hover:text-gray-500 font-medium md:bg-transparent block py-2 px-3 hover:underline underline-offset-4">Detection Tool</Link>
            <Link href="#" className="text-black hover:text-gray-500 font-medium md:bg-transparent block py-2 px-3 hover:underline underline-offset-4">Resources</Link>
       
        </div>
        </div>
        
      </nav>
    </div>
  );
}
