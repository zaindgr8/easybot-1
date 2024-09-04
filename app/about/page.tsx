import React from "react";
import bgimage from "@/public/images/Section-3-Background.jpg";
import ComponentA from "./componentA";
import ComponentB from "./componentB";
import StartLearning from "./componentB";
import TradingBot from "./componentB";
import Map from "@/components/getintouch";
const About = () => {
  return (
    <div className="h-full">
      <div
        className="bg-[#F5F8FD] flex flex-col justify-center items-center bg-none xl:bg-cover bg-local bg-center relative overflow-hidden z-0 px-6 pt-20 lg:px-40"
        style={{ backgroundImage: `url(${bgimage.src})` }}
      >
        <ComponentA />
        <ComponentB />
      </div>
      <Map />
    </div>
  );
};

export default About;
