import React from "react";
import Image from "next/image";
import bgform from "@/public/images/bg-form.jpg";
import phone from "@/public/images/mobile-img.png";

const GetStarted = () => {
  return (
    <div
      className="flex flex-col lg:flex-row px-6 xl:px-48 h-fit lg:h-[600px] "
      style={{ backgroundImage: `url(${bgform.src})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center space-y-12 w-full lg:w-1/2 ">
        <div className="text-4xl">
          Start Now
          <br />
          <span className="font-semibold leading-normal text-blue-600">
            Fast & Simple
          </span>
        </div>
        <div className="font-light text-sm leading-6 tracking-wide">
          Forget the tech headaches. You don’t even need to stress
          <br /> about picking the perfect strategy. We provide historical data
          <br /> for each built-in setting, so you can quickly identify the best
          <br /> strategy for your needs.
        </div>
        <div className="font-semibold text-xl leading-6 tracking-wide ">
          This is the opportunity
          <br /> you’ve been waiting for.
        </div>
        <div className="font-bold text-2xl ">So why wait any longer?</div>
      </div>

      <div className="flex justify-center lg:items-end w-full  lg:w-1/2 ">
        <Image src={phone} alt="phone" className="ml-10 " />
      </div>
    </div>
  );
};

export default GetStarted;
