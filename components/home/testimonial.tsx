"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Avatar from "@/public/images/Avatar.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Beautifully presented and with professional-grade design, EazyBot is in a different league compared to other cryptocurrency trading bots.",
    icon: Avatar,
  },
  {
    quote:
      "EazyBot is the best cryptocurrency trading bot platform for a beginner bot trader.",
    icon: Avatar,
  },
  {
    quote:
      "EazyBot is a truly amazing tool. I made a profit the same day I started. And learned so much from the community in the process. Incredible!",
    icon: Avatar,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center mt-16 w-full ">
      <div className="flex items-center space-x-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-black"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-black" />
        </button>

        {/* Testimonial Content */}
        <div className="overflow-hidden relative w-full max-w-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-row items-center space-x-4 text-center"
              >
                <Image
                  src={testimonial.icon}
                  alt="Icon"
                  width={80}
                  height={80}
                  className=""
                />
                <p className="text-gray-700 text-start leading-6 font-light text-md tracking-wide">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-black"
          aria-label="Next"
        >
          <FaChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="h-[400px] lg:px-48 bg-white flex flex-col justify-start pt-20">
      <div className="text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
        <span className=" text-blue-600">Need Proof?</span> Hear It Straight
        <br /> From These Users…
      </div>

      <div className="flex justify-center items-center">
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonial;
