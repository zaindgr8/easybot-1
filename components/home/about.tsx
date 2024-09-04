"use client";
import React from "react";
import Image from "next/image";
import Laptop from "@/public/images/Laptop-Phone1.png";

const About = () => {
  return (
    <div className="flex justify-start items-center  w-full min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full">
        <div className="w-full lg:w-1/2 max-h-fit order-last lg:order-first relative lg:min-h-screen">
          <Image
            src={Laptop}
            alt="laptop"
            className="object-cover z-10 lg:absolute lg:left-[-20%] w-full lg:w-[120%] max-h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full order-first lg:order-last flex flex-col space-y-11 pt-20 pr-40 pl-10">
          <div className="text-4xl">
            Start Trading
            <br /> With&nbsp;
            <span className="font-semibold">
              <span className="text-blue-600">EazyBot</span> Now!
            </span>
          </div>
          <div className="leading-6 font-light text-sm tracking-wide">
            Whether you are just beginning in crypto or an experienced trader
            <br /> looking to streamline your process,
            <span className="font-semibold"> EazyBot has got you covered.</span>
          </div>
          <div className="text-xl leading-6 font-normal tracking-wide">
            Take advantage of this revolutionary trading bot{" "}
            <span className="font-semibold text-blue-600">today!</span>
          </div>
          <div className="text-xl leading-6 font-normal tracking-wide">
            <span className="font-semibold text-blue-600">
              Discover a smarter way
            </span>{" "}
            to trade crypto with consistent results...
          </div>
          <div className="font-semibold text-xl leading-6 tracking-wide">
            The EazyBot Way.
          </div>
          <div className="flex justify-center items-start w-full pb-6">
            <button
              onClick={() => {}}
              className="bg-blue-600 text-white rounded-full w-full md:w-fit shadow-2xl hover:bg-white hover:text-blue-600 py-3 px-20 transition duration-300 transform hover:-translate-y-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
