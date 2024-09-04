import React from "react";
import Image from "next/image";
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import CrypTotrading from "@/components/home/cryptotrading";
import TradingBot from "@/components/home/tradingbot";
import StartLearning from "@/components/home/startlearning";
import AutomatedTrading from "@/components/home/automatedtrading";
import Testimonial from "@/components/home/testimonial";
import GetStarted from "@/components/home/getstarted";
import Trade from "@/components/home/trade";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <CrypTotrading />
      <TradingBot />
      <StartLearning />
      <AutomatedTrading />
      <Testimonial />
      <GetStarted />
      <Trade />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
