import React from "react";
import Image from "next/image";
import Phone from "@/public/images/Phone-1.png";
import bgimage from "@/public/images/Section-3-Background.jpg";

const ComponentA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="flex flex-col justify-start items-start gap-y-8 w-50%">
        <p className="text-4xl font-semibold">About Us</p>
        <p>
          EazyBot is a crypto trading bot designed to make {""}
          <span className="font-semibold text-blue-600">
            automated trading simple {""}
          </span>
          and accessible to everyone, even {""}
          <span className="font-semibold text-blue-600">
            complete beginners {""}
          </span>
          with no experience in cryptocurrency or trading.
        </p>

        <div className="block md:hidden">
          <Image src={Phone} alt="" className="z-50" />
        </div>
        <p className="leading-10 text-3xl">
          <span className="font-semibold text-4xl text-blue-600">
            Automated
          </span>{" "}
          Crypto
          <br />
          Trading,{" "}
          <span className="font-semibold text-blue-600">For Everyone</span>
        </p>
        <p>
          While many crypto trading bots are available,
          <span className="font-semibold text-blue-600">
            they’re often too complex for beginners. {""}
          </span>
          Most give up before even deploying their first bot. {""}
          <span className="font-semibold text-blue-600">
            We’re here to change that.
          </span>
        </p>

        <p>
          We’re changing the game with automated trading software that features{" "}
          {""}
          <span className="font-semibold text-blue-600">
            built-in winning strategies {""}
          </span>
          and AI that handles all the trading for you. It’s so straightforward
          that beginners can start making profitable trades {""}
          <span className="font-semibold   text-blue-600">
            within minutes of setting up EazyBot.
          </span>
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={Phone} alt="" className="z-50" />
      </div>
    </div>
  );
};

export default ComponentA;
