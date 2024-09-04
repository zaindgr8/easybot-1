import React from "react";
import Image from "next/image";
import One from "@/public/images/01.png";
import Two from "@/public/images/02.png";
import Three from "@/public/images/03.png";

const CrypTotrading = () => {
  return (
    <div className="bg-white pt-20 lg:pt-80 px-4">
      <div className="text-start font-bold lg:text-center text-2xl md:text-4xl lg:font-semibold">
        <p className=" text-black">
          Crypto Trading Can Be{" "}
          <span className=" text-blue-600 ">Challenging</span> &{" "}
          <br className="sm:hidden" /> Complex
        </p>
      </div>
      <div className="flex flex-col  md:flex-row py-8 lg:py-20 lg:px-56 space-x-0 md:space-x-10">
        <div className="w-full md:w-1/2 space-y-10 md:space-y-14 ">
          <p className="leading-6 font-normal md:font-light text-base md:text-sm tracking-wide">
            Trading cryptocurrency is tougher than it looks. In fact, 95% of
            traders fail within their first few months. It often takes years of
            practice and costly mistakes before finding success
          </p>

          <h1 className="text-2xl lg:text-4xl">
            We created{" "}
            <span className="text-blue-600 font-semibold">EazyBot</span>{" "}
            to&nbsp;
            <br className="hidden md:block" />
            <span className="font-semibold">change this.</span>
          </h1>
          <p className="leading-6 font-normal md:font-light text-base md:text-sm tracking-wide">
            EazyBot is simple and user-friendly, with proven trading strategies
            built in. It empowers everyone, even total beginners, to confidently
            enter the market and trade successfully.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-between py-10 md:py-0 space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-start md:px-5 md:space-x-4">
            <Image
              src={One}
              alt="Step 1"
              width={70}
              height={70}
              className="md:( w-[50px] h-[50px] )"
            />
            <div className="flex flex-col md:text-start text-center space-y-4">
              <p className="leading-6 text-blue-600 font-semibold text-lg tracking-wide">
                Tired of the learning curve?
              </p>

              <p className="leading-6 font-normal md:font-light text-base md:text-sm tracking-wide">
                EazyBot is equipped with pre-set trading strategies that have
                been rigorously tested by professional traders.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:px-5 md:space-x-4">
            <Image
              src={Two}
              alt="Step 2"
              width={70}
              height={70}
              className="md:( w-[50px] h-[50px] )"
            />
            <div className="flex flex-col md:text-start text-center space-y-4">
              <p className=" text-blue-600 leading-6 font-semibold text-lg tracking-wide">
                Worried about losing your hard-earned money?
              </p>
              <p className="leading-6 font-normal md:font-light text-base md:text-sm  tracking-wide">
                Our proven trading strategies deliver consistent results, no
                matter if the market is rising or falling
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:px-5 md:space-x-4">
            <Image
              src={Three}
              alt="Step 3"
              width={70}
              height={70}
              className="md:( w-[50px] h-[50px] )"
            />
            <div className="flex flex-col md:text-start text-center space-y-4">
              <p className="text-blue-600 leading-6 font-semibold text-lg tracking-wide">
                Short on time for trading?
              </p>
              <p className="leading-6 font-normal md:font-light text-base md:text-sm  tracking-wide">
                Keep your day job. Let EazyBot handle the trading for you. Sit
                back and relax while our bots work for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypTotrading;
