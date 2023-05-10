import React from "react";
import { Rectangle251 } from "../../assets";
import Banner from "../banner/Banner";

const Carousel = () => {
  return (
    <div className="max-w-[2520px]">
      <div className="pt-12 md:pt-24">
        <div className="flex flex-row items-center justify-center">
          <div className="bg-[#01CB63] object-contain w-full h-full">
            <div className="p-4 m-4 sm:p-8 sm:m-0 pt-4 md:pt-16 pl-0 md:pl-16">
              <p className="text-4xl md:text-6xl px-4 sm:px-8 md:px-16 pt-2 font-bold text-white">
                Anytime, Anywhere
              </p>
              <p className="text-4xl md:text-6xl px-4 sm:px-8 md:px-16 pt-2 font-bold text-white">
                Learn On Your Schedule
              </p>
              <p className="text-4xl md:text-6xl px-4 sm:px-8 md:px-16 pt-2 font-bold text-white">
                From Any Device
              </p>
              <p className="text-2xl font-light pt-4 px-4 sm:px-8 md:px-16 text-black">
                We Believe everyone has the capacity to be creative <br />
                <span className="text-white font-semibold tracking-wider">
                  Course Pro
                </span>
                is a place where people develop their <br /> own potential
              </p>
              <div className="pt-4 px-4 sm:px-8 md:px-16 w-25">
                <button
                  className="px-4 text-white disabled:opacity-70
                disabled:cursor-not-allowed rounded-lg hover:opacity-80
                transition w-[144px] bg-[#000] h-[60px] py-3
                text-md font-semibold"
                  onClick={() => {}}
                >
                  Let's Get Start
                </button>
              </div>
            </div>
          </div>
          {/* <div className="w-full h-full">
            <img
              src={Rectangle251}
              alt="Woman"
              className="bg-[#000] object-contain w-full h-full"
            />
          </div> */}
        </div>

        <Banner />
      </div>
    </div>
  );
};

export default Carousel;
