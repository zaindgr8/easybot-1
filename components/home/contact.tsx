import React from "react";
import Link from "next/link";
import Image from "next/image";
import Eazybot from "@/public/images/Eazybot-Logo.png";
import circle from "@/public/images/circle-footer.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-full h-[500px] px-6 xl:px-48 bg-no-repeat bg-[#F5F9FE] bg-bottom lg:bg-center bg-contain py-10 flex"
      style={{
        backgroundImage: `url(${circle.src})`,
      }}
    >
      <div className="flex flex-row w-full">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 order-first md:order-none md:flex-col-2 w-1/2">
          <div className="flex flex-col justify-center items-start w-2/3 space-y-4">
            <div className="font-semibold text-lg">Our Mission</div>
            <div className="leading-6 font-light text-sm tracking-wide">
              Making crypto accessible for everyone
              <br className="hidden md:block" /> by offering an easy and
              seamless entry into trading.
            </div>
            <div className="font-semibold text-lg">Contact Support</div>
            <div className="leading-6 font-light text-sm tracking-wide">
              <ul>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-hcolor">
                    support@eazybot.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-hcolor">
                    Join our official Telegram chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-row md:flex-col md:justify-center gap-x-3 gap-y-3 md:gap-y-6 items-start text-center leading-6 font-light text-sm tracking-wide">
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          id="icons-logo"
          className="flex flex-col justify-evenly md:justify-around items-center w-auto lg:w-1/2"
        >
          <div className="flex items-start justify-center h-fit w-full">
            <ul className="flex flex-row items-start justify-center w-fit sm:space-x-4 md:space-x-8 lg:space-x-10">
              <li className="px-3 py-3 text-lg border-2  border-blue-600 rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2  border-blue-600 rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2  border-blue-600 rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaTelegramPlane />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2  border-blue-600 rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2  border-blue-600 rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-start w-full">
            <Image src={Eazybot} alt="EazyBot Logo" width={200} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
