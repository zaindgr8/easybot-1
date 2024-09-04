import React from "react";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import BotIcon from "@/public/images/Bot-Icon.png";
const packages = [
  {
    // save: "Save 0% On Every Trade",
    save: "",
    packageName: "Started Pkg",
    price: "100",
    currency: "USDT",
    billingPeriod: "yr",
    monthlyCost: "8 USDT Per Month - Billed Annually",
    softwareServiceFee: "0.4% of trade amount",
    ssfExample: "EX: $100 Closing Trade / $0.40 SSF",
    features: {
      tradeBots: "5 Bots",
      connections: "1 Connection",
      groupSupport: true,
      affiliateEarnings: true,
      membershipApp: true,
      foundersClubEligible: true,
    },
  },
  {
    save: "Save 25% On Every Trade",
    packageName: "ADV Pkg",
    price: "250",
    currency: "USDT",
    billingPeriod: "yr",
    monthlyCost: "20 USDT Per Month - Billed Annually",
    softwareServiceFee: "0.3% of trade amount",
    ssfExample: "EX: $100 Closing Trade / $0.30 SSF",
    features: {
      tradeBots: "10 Bots",
      connections: "2 Connections",
      groupSupport: true,
      affiliateEarnings: true,
      membershipApp: true,
      foundersClubEligible: true,
    },
  },
  {
    save: "Save 38% On Every Trade",
    packageName: "VIP Pkg",
    price: "995",
    currency: "USDT",
    billingPeriod: "yr",
    monthlyCost: "82 USDT Per Month - Billed Annually",
    softwareServiceFee: "0.25% of trade amount",
    ssfExample: "EX: $100 Closing Trade / $0.25 SSF",
    features: {
      tradeBots: "25 Bots",
      connections: "5 Connections",
      oneToOneSupport: true,
      groupSupport: false,
      affiliateEarnings: true,
      membershipApp: true,
      foundersClubEligible: true,
    },
  },
  {
    save: "Save 50% On Every Trade",
    packageName: "VIP+ Pkg",
    price: "1495",
    currency: "USDT",
    billingPeriod: "yr",
    monthlyCost: "124 USDT Per Month - Billed Annually",
    softwareServiceFee: "0.2% of trade amount",
    ssfExample: "EX: $100 Closing Trade / $0.20 SSF",
    features: {
      tradeBots: "100+ Bots",
      connections: "5 Connections",
      oneToOneSupport: true,
      groupSupport: false,
      affiliateEarnings: true,
      membershipApp: true,
      foundersClubEligible: true,
    },
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 bg-white py-32">
      <div className="text-center text-3xl font-semibold">
        Select Your <span className=" text-blue-600">Package</span>
      </div>
      <div className="flex items-center justify-center">
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;

const PricingTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 items-stretch">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className=" bg-white rounded-lg shadow-lg p-6 flex flex-col h-full max-w-xs"
        >
          <Image src={BotIcon} width={100} height={100} alt="" />
          <div className="w-full text-end  text-blue-600 font-semibold">
            <span className="">
              {pkg.save.split(" ").slice(0, 2).join(" ")}
            </span>
            <br />
            {pkg.save.split(" ").slice(2).join(" ")}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">{pkg.packageName}</h2>
            <h2 className="text-sm">Platform Access</h2>
          </div>
          <div className="mb-2 w-full text-center  text-blue-600 text-sm">
            {pkg.currency}
          </div>
          <div className="text-gray-700 text-3xl font-semibold text-center mb-2">
            {pkg.price} / {pkg.billingPeriod}
          </div>
          <div className="text-gray-500 text-xs mb-4">{pkg.monthlyCost}</div>
          <div className="font-semibold">Software Service Fee (SSF)</div>
          <div className="text-gray-600 text-sm mb-2">
            {pkg.softwareServiceFee}
          </div>
          <div className="text-gray-500 text-xs mb-2">{pkg.ssfExample}</div>
          <div className="flex justify-start items-center w-full mb-4">
            <div className="w-[150px] h-0 border border-gray-300" />
            <FaDotCircle className="text-gray-300" />
          </div>
          <ul className="flex flex-col flex-grow gap-y-5 mt-4">
            <li className="flex justify-start items-center gap-x-1">
              <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
              Trade&nbsp;
              <span className=" text-blue-600 font-bold">
                {pkg.features.tradeBots.split(" ")[0]}
              </span>
              <span className="ml-1">
                {pkg.features.tradeBots.split(" ").slice(1).join(" ")}
              </span>
            </li>
            <li className="flex justify-start items-center gap-x-3">
              <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
              <span className=" text-blue-600 font-bold">
                {pkg.features.connections.split(" ")[0]}
              </span>
              {pkg.features.connections.split(" ").slice(1).join(" ")}
            </li>
            {pkg.features.groupSupport && (
              <li className="flex justify-start items-center gap-x-3">
                <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
                Group Support
              </li>
            )}
            {pkg.features.affiliateEarnings && (
              <li className="flex justify-start items-center gap-x-3">
                <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
                Affiliate Earnings
              </li>
            )}
            {pkg.features.membershipApp && (
              <li className="flex justify-start items-center gap-x-3">
                <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
                Membership App
              </li>
            )}
            {pkg.features.foundersClubEligible && (
              <li className="flex justify-start items-center gap-x-3">
                <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
                Founders Club Eligible
              </li>
            )}
            {pkg.features.oneToOneSupport && (
              <li className="flex items-center">
                <IoIosCheckmarkCircle className="mr-2 size-6  text-blue-600 " />
                <span>
                  {index === 2 || index === 3 ? (
                    <span>
                      <span className=" text-blue-600">1-1</span> Support
                    </span>
                  ) : (
                    pkg.features.oneToOneSupport
                  )}
                </span>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};
