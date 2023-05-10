import React from "react";
import { Group12142 } from "../assets";

const Refer = () => {
  return (
    <>
      <div className="flex flex-col items-start py-4 sm:py-12 md:py-12">
        <div>
          <h1 className="text-1xl sm:text-2xl md:text-3xl px-12 sm:px-24 text-[#01CB63] italic text-left">
            Refer
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-4xl px-12 sm:px-24 font-semibold py-4 sm:py-8 pb-8 sm:pb-16 text-left">
            How It Works
          </h1>
        </div>
        <div className="w-full object-contain">
          <img className="" src={Group12142} alt="" />
        </div>
      </div>
    </>
  );
};

export default Refer;
