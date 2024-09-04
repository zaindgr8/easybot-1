import React from "react";
import Image from "next/image";
import bgimage from "@/public/images/Section-3-Background.jpg";
import phone from "@/public/images/Phone-932x1024.png";

export default function ComponentB() {
  return (
    <div
      className="h-auto min-h-[1500px] lg:min-h-[1250px] flex flex-col items-start justify-start "
      //   style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      <div className="flex flex-col w-full lg:flex-row lg:justify-end mt-20 min-h-full max-w-[100vw] ">
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 ">
          <Image
            src={phone}
            alt="phone"
            className="index-10 max-w-full max-h-full w-[100%] h-full xl:w-[600px] xl:h-[700px]"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4 xl:ml-10 pl-0 flex flex-col justify-center space-y-6 ">
          <div className=" px-2 lg:px-4 leading-loose text-2xl lg:text-4xl ">
            Why We Do{" "}
            <span className="font-semibold text-blue-600">What We Do?</span>
          </div>

          <p className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            Today, {""}
            <span className="font-semibold text-blue-600">
              even experienced traders can miss opportunities {""}
            </span>
            or lose their investment because it’s nearly impossible to monitor
            signals, entry, and exit points continuously without a break.
          </p>

          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            We want to offer a solution that allows them to {""}
            <span className="font-semibold text-blue-600">
              maximize profits while minimizing risk {""}
            </span>
            by letting AI handle the heavy lifting.
          </div>
          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            For beginners, we believe EazyBot is the {""}
            <span className="font-semibold text-blue-600">
              easiest entry point
            </span>{" "}
            into the {""}
            <span className="font-semibold text-blue-600">
              lucrative crypto market {""}
            </span>
            —a true shortcut to success.
          </div>
          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            With this software, beginners can{" "}
            <span className="font-semibold text-blue-600">
              trade crypto easily and confidently
            </span>
            , using our proven strategies to make profitable trades.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start md:justify-center md:items-center font-light gap-y-10 w-full pt-16 lg:pt-32">
        <div className="text-4xl">
          Our Dedicated Team {""}
          <span className="font-semibold text-blue-600">
            Brings It All Together
          </span>
        </div>

        <div className="text-start md:text-center">
          EazyBot wasn’t built overnight — it’s the result of a {""}
          <span className="font-semibold text-blue-600">
            relentless and dedicated team {""}
          </span>
          focused on developing
          <br /> exceptional software that addresses the needs of {""}
          <span className="font-semibold text-blue-600">
            our users. Our platform is highly accessible {""}
          </span>
          and {""}
          <span className="font-semibold text-blue-600">
            loaded with impressive features, {""}
          </span>
          <br /> all thanks to their hard work.
        </div>
      </div>
    </div>
  );
}
