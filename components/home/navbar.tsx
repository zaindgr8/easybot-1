"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Eazybot from "@/public/images/CryptoBotXlog.png";
import BotIcon from "@/public/images/Bot-Icon.png";
import LogoC from "@/public/images/logo-cut.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FFFFFF] py-2 font-light px-8 text-sm">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-around items-center">
        <div id="nav-logo">
          <Image src={Eazybot} alt="logo" height={180} width={180} />
        </div>
        <div id="nav-navigation" className="flex">
          <ul className="flex flex-row space-x-12">
            <li>
              <Link href="/" className=" text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className=" hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className=" hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contactus" className=" hover:text-blue-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/help" className=" hover:text-blue-600">
                Help
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="border-2 text-md font-normal border-black rounded-full  hover:bg-blue-600 hover:border-0 px-6 py-3"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center">
        <div id="nav-logo">
          <Image
            src={LogoC}
            alt="logo"
            height={80}
            width={120}
            // className="border-2 border-black"
          />
        </div>
        <div>
          <Image
            src={BotIcon}
            alt="logo"
            height={100}
            width={90}
            // className="border-2 border-black"
          />
        </div>
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {/* Stack Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col py-3 w-full md:hidden mt-4">
          <ul className="flex flex-col justify-center items-center space-y-4 text-sm w-full">
            <li className="w-full">
              <Link
                href="/"
                className="text-white block py-3 bg-hcolor rounded-full text-center w-full"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="about"
                className=" text-blue-600 py-3 block text-center w-full"
              >
                About Us
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/pricing"
                className=" text-blue-600 py-3 block text-center w-full"
              >
                Pricing
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/contactus"
                className=" text-blue-600 py-3 block text-center w-full"
              >
                Contact Us
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/help"
                className=" text-blue-600 py-3 block text-center w-full"
              >
                Help
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/login"
                className=" text-blue-600 block text-md font-normal text-center w-full"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
