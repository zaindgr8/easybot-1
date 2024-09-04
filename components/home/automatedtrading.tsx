import React from "react";
import Image from "next/image";
import bg from "@/public/images/2.jpg";
import Bot from "@/public/images/Bot-Icon.png";
import g1 from "@/public/images/g1.png";
import g2 from "@/public/images/g2.png";
import g3 from "@/public/images/g3.png";
import g4 from "@/public/images/g4.png";

const list = [
  {
    icon: g1,
    title: "Trade Around the Clock",
    text: "EazyBot trades 24/7 on your behalf, constantly scanning the market for new opportunities.",
  },
  {
    icon: g2,
    title: "Quickly Open & Close Trades",
    text: "When your trade hits a winning position, EazyBot closes it instantly and opens a new trade at the next opportunity!",
  },
  {
    icon: g3,
    title: "Save Valuable Time",
    text: "For seasoned traders, EazyBot automates your trade entries and exits, freeing you from spending hours on signals and timing.",
  },
  {
    icon: g4,
    title: "Improve Results Over Time",
    text: "EazyBot continuously learns and evolves, getting smarter with every trade. The smarter your bot, the better your results!",
  },
];

const AutomatedTrading = () => {
  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center bg-cover bg-center py-20 relative"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Image
        src={Bot}
        alt="bit"
        className="absolute top-[-50px]"
        width={100}
        height={100}
      />
      <div
        id="second_main"
        className="flex flex-col justify-center items-center space-y-8 px-4 lg:px-20"
      >
        <div className="flex flex-col justify-center items-center space-y-10 mt-20">
          <div className="text-center text-4xl leading-normal">
            Tap into the Power of {""}
            <span className="font-semibold text-blue-600">
              Automated
              <br /> Crypto Trading
            </span>
          </div>
          <div className="text-center tracking-wide leading-6 font-light text-sm">
            EazyBot simplifies crypto trading, delivering consistent results
            <br />
            with its {""}
            <span className="font-semibold text-blue-600">
              pre-programmed, tested strategies {""}
            </span>
            and intelligent AI that handles all your trades.
            <br /> And there is even more.
          </div>

          <div className="text-center tracking-wide leading-6 font-semibold text-md">
            EazyBot offers many more amazing benefits just for you...
          </div>
        </div>

        <div
          id="grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-0 mx-auto max-w-7xl"
        >
          {list.map((value, iteration) => (
            <div
              key={iteration}
              className="flex flex-col items-center md:items-start justify-center space-y-4 py-4 px-4"
            >
              <Image src={value.icon} alt="icon" width={50} height={50} />
              <div className="text-lg font-semibold">{value.title}</div>
              <div className="text-center md:text-start tracking-wide leading-6 font-light text-sm">
                {value.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomatedTrading;

// import React from "react";
// import Image from "next/image";
// import bg from "@/public/images/2.jpg";
// import Bot from "@/public/images/Bot-Icon.png";
// import g1 from "@/public/images/g1.png";
// import g2 from "@/public/images/g2.png";
// import g3 from "@/public/images/g3.png";
// import g4 from "@/public/images/g4.png";

// const list = [
//   {
//     icon: g1,
//     title: "Stay In The Market 24/7",
//     text: "EazyBot will not only do the trading 24/7 for you, but it also scours the market to find new opportunities.",
//   },
//   {
//     icon: g2,
//     title: "Open & Close Trades In Seconds",
//     text: "When your trade is in a winning position, it immediately closes the trade. Then, it instantly opens a new trade when it sees an opportunity!",
//   },
//   {
//     icon: g3,
//     title: "Save Your Time",
//     text: "For experienced traders, EazyBot can help you enter and exit your trades based on your preference. You won’t need to spend hours looking at signals, entry, and exit points.",
//   },
//   {
//     icon: g4,
//     title: "Get Better Results Over Time",
//     text: "EazyBot is always learning and evolving. It gets smarter and smarter while doing its job. The smarter your bot is, the better your results will be!",
//   },
// ];

// const AutomatedTrading = () => {
//   return (
//     <div
//       id="main"
//       className="flex flex-col justify-center items-center h-auto bg-cover bg-center py-20 relative"
//       style={{ backgroundImage: `url(${bg.src})` }}
//     >
//       <Image
//         src={Bot}
//         alt="bit"
//         className="absolute top-[-50px]"
//         width={100}
//         height={100}
//       />
//       <div
//         id="second_main"
//         className="flex flex-col justify-center items-center space-y-8 px-4 lg:px-20"
//       >
//         <div className="flex flex-col justify-center items-center space-y-10 mt-20">
//           <div className="text-center text-4xl leading-normal">
//             Tap Into The Power Of &nbsp;
//             <span className="font-semibold">
//               Automated
//               <br /> Crypto Trading
//             </span>
//           </div>
//           <div className="text-center tracking-wide leading-6 font-light text-sm">
//             EazyBot makes crypto trading easy with more consistent results
//             thanks
//             <br />
//             to its
//             <span className="font-semibold">
//               pre-programmed tested strategies
//             </span>
//             and the smart AI that does all
//             <br /> the trades for you. But that’s not all.
//           </div>
//           <div className="text-center tracking-wide leading-6 font-semibold text-md">
//             There are so many other great
//             <br /> things that EazyBot can do for you…
//           </div>
//         </div>

//         <div
//           id="grid"
//           className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 mx-4 lg:mx-0"
//         >
//           {list.map((value, iteration) => (
//             <div
//               key={iteration}
//               className={`flex flex-col items-center md:items-start justify-center md:justify-start space-y-4 py-4 px-4 h-full w-full bg-white rounded-lg shadow-lg ${
//                 iteration === 2 ? "lg:col-span-2" : ""
//               }`}
//             >
//               <div>
//                 <Image
//                   src={value.icon}
//                   alt="icon"
//                   width={50}
//                   height={50}
//                   className=""
//                 />
//               </div>
//               <div className="text-lg font-semibold"> {value.title}</div>
//               <div className="text-center md:text-start tracking-wide leading-6 font-light text-sm">
//                 {value.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutomatedTrading;

// import React from "react";
// import Image from "next/image";
// import bg from "@/public/images/2.jpg";
// import Bot from "@/public/images/Bot-Icon.png";
// import g1 from "@/public/images/g1.png";
// import g2 from "@/public/images/g2.png";
// import g3 from "@/public/images/g3.png";
// import g4 from "@/public/images/g4.png";

// const list = [
//   {
//     icon: g1,
//     title: "Stay In The Market 24/7",
//     text: "EazyBot will not only do the trading 24/7 for you, but it also scours the market to find new opportunities.",
//   },
//   {
//     icon: g2,
//     title: "Open & Close Trades In Seconds",
//     text: "When your trade is in a winning position, it immediately closes the trade. Then, it instantly opens a new trade when it sees an opportunity!",
//   },
//   {
//     icon: g3,
//     title: "Save Your Time",
//     text: "For experienced traders, EazyBot can help you enter and exit your trades based on your preference. You won’t need to spend hours looking at signals, entry, and exit points.",
//   },
//   {
//     icon: g4,
//     title: "Get Better Results Over Time",
//     text: "EazyBot is always learning and evolving. It gets smarter and smarter while doing its job. The smarter your bot is, the better your results will be!",
//   },
// ];

// const AutomatedTrading = () => {
//   return (
//     <div
//       id="main"
//       className="flex flex-col justify-center items-center h-[1100px] bg-cover bg-center space-y-0 relative "
//       style={{ backgroundImage: `url(${bg.src})` }}
//     >
//       <Image
//         src={Bot}
//         alt="bit"
//         className="absolute top-[-50px]"
//         width={100}
//         height={100}
//       />
//       <div
//         id="second_main"
//         className="flex flex-col justify-center items-center space-y-8  lg:mx-96"
//       >
//         <div className="flex flex-col justify-center items-center space-y-10 mt-20 ">
//           <div className="text-center text-4xl leading-normal">
//             Tap Into The Power Of &nbsp;
//             <span className="font-semibold">
//               Automated
//               <br /> Crypto Trading
//             </span>
//           </div>
//           <div className="text-center tracking-wide leading-6 font-light text-sm">
//             EazyBot makes crypto trading easy with more consistent results
//             thanks
//             <br />
//             to its
//             <span className="font-semibold">
//               pre-programmed tested strategies
//             </span>
//             and the smart AI that does all
//             <br /> the trades for you. But that’s not all.
//           </div>
//           <div className="text-center tracking-wide leading-6 font-semibold text-md">
//             There are so many other great
//             <br /> things that EazyBot can do for you…
//           </div>
//         </div>

//         <div id="grid" className="grid grid-cols-1 md:grid-cols-2 mx-10 ">
//           {list.map((value, iteration) => {
//             return (
//               <div key={iteration}>
//                 <div className="flex flex-col items-center md:items-start justify-center md:justify-start space-y-4 py-4 px-4  h-full w-full ">
//                   <div>
//                     <Image
//                       src={value.icon}
//                       alt="icon"
//                       width={50}
//                       height={50}
//                       className=""
//                     />
//                   </div>
//                   <div className=""> {value.title}</div>
//                   <div className="text-center md:text-start tracking-wide leading-6 font-light text-sm ">
//                     {value.text}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutomatedTrading;
