import React from "react";
import { Right } from "../../assets";

const Card = ({ description, img, author }) => {
  return (
    <div className="w-full cursor-pointer 2xl:w-[512px] lg:[228px] rounded-[15px] bg-[#fff] border-[1px] border-[#E5E5E5] shadow-xl md:shadow-2xl transition duration-500 ease-in-out">
      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="indent-0 italic font-light text-[16px] text-black text-left tracking-wider leading-[26px] mr-8 py-8">
            {description}
          </h3>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex mt-[8px] gap-[12px]">
            <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#13131a]">
              <img
                src={img}
                alt="user"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="flex-1 justify-between font-semi-bold tracking-wider text-[15px] text-[#000]">
                {author}
              </p>
              <p className="flex-1 justify-between font-semi-bold tracking-wider italic text-[12px] text-[#545D7A]">
                Yesterday
              </p>
            </div>
          </div>

          <div className="">
            <img src={Right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
