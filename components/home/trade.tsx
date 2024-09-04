import React from "react";
import Image from "next/image";
import one from "@/public/images/1b.png";
import two from "@/public/images/2b.png";
import three from "@/public/images/3b.png";
import four from "@/public/images/4b.png";

const Trade = () => {
  return (
    <div className="flex flex-col space-y-20 justify-center items-center text-center py-40 px-6 xl:px-48 h-full">
      <div className="flex flex-col space-y-8 justify-center items-center text-center">
        <div className="text-4xl">
          Trade <span className="font-semibold">Like a Pro</span> with
          <span className="text-hcolor"> EazyBot</span>
        </div>
        <div className="font-semibold"> Here’s what you’ll enjoy:</div>
      </div>
      {/* ----------------------------------------------------------------- */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
          <Image src={one} alt="one" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Intelligent trading AI that operates 24/7, using your chosen
            settings to trade smartly on your behalf
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
          <Image src={two} alt="two" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Proven, built-in strategies designed and tested by crypto experts
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
          <Image src={three} alt="three" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            User-friendly software with no learning curve, allowing you to start
            trading immediately
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
          <Image src={four} alt="four" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Maximize your results with a bot that constantly analyzes the market
            and executes trades in seconds
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      <div className="flex flex-col space-y-7">
        <div className="md:text-center text-start text-xl leading-normal tracking-wide">
          <span className="font-semibold text-blue-600"> All this,</span> plus
          the peace of mind knowing you can
          <br className="hidden md:block" /> achieve&nbsp;
          <span className="font-semibold text-blue-600">
            consistent results
          </span>{" "}
          no matter which way
          <br className="hidden md:block" /> the market moves.
        </div>
        <div className=" text-blue-600 text-2xl md:text-xl md:text-center text-start font-semibold">
          Sounds good, doesn’t it?
        </div>
      </div>
    </div>
  );
};

export default Trade;
