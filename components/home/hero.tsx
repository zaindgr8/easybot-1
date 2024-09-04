"use client";
import React from "react";
import Image from "next/image";
import hero from "@/public/images/Hero-BackGround-1.jpg";
import TPhones from "@/public/images/Two-Phones.png";
import Clock from "@/public/images/Grupo-18223.png";
import Drop from "@/public/images/Grupo-18222.png";
import Illustration from "@/public/images/Ilustracion-436.png";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${hero.src})` }}
      className="bg-local min-h-[700px] w-full bg-cover bg-center px-4 md:px-2 xl:px-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {/* first block of grid */}
        <div className="flex lg:justify-end w-full lg:min-w-[50%] pl-2 pt-20 lg:pt-40">
          <div className="flex flex-col w-full justify-center text-center sm:text-start lg:justify-items-end ">
            <h1 className="text-4xl font-semibold leading-10 tracking-wide">
              Crypto Trading Made <span className=" text-blue-600">Eazy:</span>
              <br /> Start Trading Today,
              <br /> No Experience Required!
            </h1>
            <div className="flex justify-center items-center lg:hidden">
              <Image
                src={TPhones}
                alt="two phones"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <p className="pt-4 font-normal text-lg lg:text-sm leading-6 tracking-wide">
              Our user-friendly crypto trading bot simplifies the process for
              you. In just minutes,
              <br className="hidden lg:block" />
              you can deploy multiple bots,
              <span className="hidden lg:inline font-semibold text-blue-600">
                <br className="hidden lg:block tex " /> ready to trade {""}
              </span>
              on your behalf using either built-in, proven
              <br className="hidden lg:inline" /> strategies or {""}
              <span className="hidden lg:inline font-semibold text-blue-600">
                your own preferred strategy.
              </span>
            </p>

            <div>
              <button
                onClick={() => {}}
                className="bg-blue-600 w-full lg:w-fit text-white rounded-full shadow-2xl shadow-hcolor py-3 px-20 mt-12"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* second block of grid */}
        <div className="min-w-[50%] pt-10 md:block hidden">
          <Image
            src={TPhones}
            alt="two phones"
            width={600}
            height={600}
            className="hidden lg:block"
          />
        </div>
      </div>
      <div className="relative hidden lg:block">
        <BottomGrid />
      </div>
    </div>
  );
}

const BottomGrid = () => {
  return (
    <div className="absolute top-0">
      <div className="flex flex-col md:flex md:flex-row md:justify-evenly">
        <div className="flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Clock} alt="clock" width={50} height={50} />
          <h3 className="text-blue-600">Earn Crypto 24/7</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Earn Passive Income 24/7. Withdraw Your Profits Anytime.
          </p>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Illustration} alt="illustration" width={50} height={50} />
          <h3 className="text-blue-600">Designed For Profit Only</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            EazyBot is Intelligently Programmed to respond to any market
            condition, so your profits go up even when the market is down.
          </p>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Drop} alt="drop" width={50} height={50} />
          <h3 className="text-blue-600">Eazy 1-Click Strategy Setup</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Start Closing Profitable Trades Today With EazyBot’s Proven 1-Click
            Strategy.
          </p>
        </div>
      </div>
    </div>
  );
};
