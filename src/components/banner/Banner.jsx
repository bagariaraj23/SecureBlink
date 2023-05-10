import React from "react";
import { Group12141 } from "../../assets";

const fetchedImgSrc = Group12141;

const Banner = () => {
  return (
    <div className="max-w-[2520px]">
      <div
        className="w-full h-full object-contain"
        style={{ backgroundImage: `url(${fetchedImgSrc})` }}
      >
        <div className="flex flex-row justify-evenly items-center py-16 md:flex-2">
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-md md:text-2xl font-bold text-[#86919D]">
              Total Students
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-black">
              5140
            </h3>
            <div className="border-b-4 sm:border-b-8 border-[#01CB63]"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-md md:text-2xl font-bold text-[#86919D]">
              Partners
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-black">
              4123
            </h3>
            <div className="border-b-4 sm:border-b-8 border-[#01CB63]"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-md md:text-2xl font-bold text-[#86919D]">
              Affiliate Distribution
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-black">
              4.18 Lac
            </h3>
            <div className="border-b-4 sm:border-b-8 border-[#01CB63]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
