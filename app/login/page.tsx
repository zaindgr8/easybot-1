"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Eazybot from "@/public/images/logo-dark.png";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "./footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex-flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
        <div className="flex flex-col gap-y-8 justify-center items-center md:items-start py-10 md:py-0 px-20 h-full bg-[#2A354B]">
          <div id="logo">
            <Image src={Eazybot} width={200} height={100} alt="" />
          </div>
          <div id="WELCOMEBACK" className="text-white font-semibold  text-2xl">
            WELCOME
            <br />
            <span className="text-hcolor tracking-[10px] text-3xl">BACK</span>
          </div>
          <div
            id="txt"
            className="text-white text-center lg:text-start w-fit  font-light text-xl"
          >
            <p>
              It&apos;s not how much money you make, but
              <br className="hidden sm:block" /> how much money you keep, how
              hard it
              <br className="hidden sm:block" /> works for you, and how many
              generations
              <br className="hidden sm:block" /> you keep it for.
            </p>
            <p className="mx-4 px-2 my-4 ">-Robert Kiyosaki</p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-6 md:px-40 bg-[#F2F2F2] bg-no-repeat">
          <div className="flex flex-col gap-y-10 m-6 w-full">
            <p className="font-semibold w-full text-2xl">Sign in to Eazybot</p>

            <Link
              href="https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20profile%20email&state=YOUR_RANDOM_STATE"
              // href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=977625639670-ue67jp2k6tkauf3is6f5717athqqt3eh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmy.eazybot.com%2Fauth%2Fgoogle%2Fcallback&scope=openid%20profile%20email&response_type=code&state=vxGTTnqbWOc584DiMDf7m02TsTWpMmXBdDEqEZMy&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow"
              className="flex items-center justify-center border border-black"
            >
              <FaGoogle className="m-2 text-red-600 font-bold size-6" />
              <p className="font-medium w-full text-lg max-w-fit">
                Sign in with Google
              </p>
            </Link>
          </div>

          <div className="flex justify-center items-center py-4 w-full">
            <div className="w-full h-0 border border-gray-500" />
            <p className="px-6">OR</p>
            <div className="w-full h-0 border border-gray-500" />
          </div>

          <div
            id="forms"
            className="flex flex-col justify-start gap-y-3 w-full"
          >
            <input
              placeholder="Email"
              type="email"
              className="h-10 p-2 rounded-sm border-4 border-gray-300"
            />

            {/* Password Field with Show/Hide Toggle */}
            <div className="relative w-full">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="h-10 p-2 rounded-sm border-4 border-gray-300 w-full"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center w-full">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 rounded-sm border-2 border-gray-300 mr-2"
              />
              <div className="flex justify-between items-center w-full">
                <label htmlFor="remember-me" className="text-gray-700">
                  Remember me
                </label>
                <Link href="" className="hover:text-hcolor">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="bg-[#696C6F] text-center text-uppercase w-full py-2 mt-4 text-white text-xl font-semibold">
              SIGN IN
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
