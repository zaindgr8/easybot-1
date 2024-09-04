"use client";
import React from "react";
import Link from "next/link";
import bgimage from "@/public/images/Hero-BackGround-1.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactUS = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center bg-cover items-center gap-y-6 py-24"
        style={{ backgroundImage: `url(${bgimage.src})` }}
      >
        <div className="text-4xl font-semibold">Contact Us</div>
        <div className="text-md leading-6 tracking-wider">
          You can communicate with {""}
          <span className="font-semibold text-blue-600">EazyBot Team</span>{" "}
          using email {""}
          <br />
          <span className="font-semibold text-blue-600">
            support@EazyBot.com {""}
          </span>
          or our
          <span className="font-semibold text-blue-600">
            Official Telegram Channel. {""}
          </span>
        </div>
        <div>
          <div className="flex justify-center items-start w-full pb-6">
            <button
              onClick={() => {}}
              className=" bg-blue-600 text-white rounded-full w-full md:w-fit shadow-2xl  hover:to-blue-600 hover:bg-white hover:text-blue-600 py-3 px-10 transition duration-300 transform hover:-translate-y-2"
            >
              Telegram Chanel
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white px-6 py-20 lg:p-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start w-fit    ">
          <div className="flex justify-start items-start md:pl-6 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14449.696761716237!2d55.3767378!3d25.1213459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f650bb0789f33%3A0xefb53b346ce43dc0!2sEazyBot!5e0!3m2!1sen!2sus!4v1699976647261!5m2!1sen!2sus"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-y-6 bg-cover w-full  md:w-50% px-6 py-6 "
            style={{ backgroundImage: `url(${bgimage.src})` }}
          >
            <div className="font-semibold text-4xl leading-relaxed ">
              Want To
              <br /> Get In Touch?
            </div>
            <div>
              Not surprisingly, we encourage you to get in touch with us.
              <br />
              Whether you have questions, feedback, or just want to
              <br /> write to us—we’d love to hear from you.
            </div>
            <div className="flex flex-col gap-y-3 font-semibold">
              <div>
                <Link href="">Support@EazyBot.com</Link>
              </div>
              <div>
                <Link href="">Official Telegram cha</Link>t
              </div>
            </div>
            <div>
              <p className="text-xl pb-2">
                Be a part of&nbsp;
                <span className="font-semibold">the community</span>
              </p>
              <div className="flex items-start justify-center h-fit w-full">
                <ul className="flex flex-row items-start justify-center max-w-fit gap-x-0 md:gap-x-8 lg:gap-x-10">
                  <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                    <Link href="#">
                      <FaTelegramPlane />
                    </Link>
                  </li>
                  <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                    <Link href="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span className="font-semibold text-sm">
                EAZY BOT COMPUTER SYSTEMS SOFTWARE TRADING L.L.C,
              </span>
              <br />
              Dubai Silicon Oasis, Techno Hub 1 Building office No. 173,
              <br /> Dubai – United Arab Emirates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
