import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-0 md:py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div className="flex flex-row gap-4 w-full justify-end">
              <button
                className="flex items-center justify-center relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition sm:w-[144px] bg-[#fff] h-[30px] sm:h-[60px] text-black px-4 py-3 sm:px-0 text-xs sm:text-xl font-semibold"
                onClick={() => {}}
              >
                Login
              </button>
              <button
                className="flex relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition sm:w-[144px] bg-[#01CB63] items-center justify-center h-[30px] sm:h-[60px] text-white px-4 sm:px-0 py-3 text-xs sm:text-xl font-semibold"
                onClick={() => {}}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
