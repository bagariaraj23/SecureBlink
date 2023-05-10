import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { date_range } from "../../assets";

const Card = ({
  handleClick,
  image,
  title,
  count,
  lecture,
  img,
  author,
  hour,
  amount,
  deletedAmount,
}) => {
  return (
    <div
      className="w-full cursor-pointer 2xl:w-[384px] lg:[228px] rounded-[15px] bg-[#fff] border-[1px] border-[#E5E5E5] hover:shadow-xl transition duration-500 ease-in-out"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[150px] object-cover rounded-[15px]"
      />
      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] mr-8">
            {title}
          </h3>
        </div>

        <div className="flex">
          <h3 className="font-semibold text-[12px] text-black text-left leading-[26px] pt-4">
            {count}
          </h3>
          <p className="font-light text-[12px] leading-[26px] text-[#000] px-2 pt-4">
            Students
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-row">
            <p className="mt-[2px] font-epilogue text-[12px] leading-[18px] text-[#86919D] font-bold sm: max-w-[120px] truncate">
              <AiOutlineClockCircle />
            </p>
            <p className="px-1 text-[12px] italic leading-[18px] text-[#86919D] font-bold sm: max-w-[120px] ">
              {hour}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img src={date_range} width={19} alt="" className=""/>
            <p className="px-1 text-[12px] italic pt-1 text-[#86919D] font-bold sm: max-w-[120px] ">
              {lecture} Lectures
            </p>
          </div>
        </div>

        <div className="border-b-2 pt-2"></div>

        <div className="flex items-center mt-[8px] gap-[12px]">
          <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={img} alt="user" className="h-full w-full rounded-full" />
          </div>
          <p className="flex-1 justify-between font-bold text-[12px] text-[#808191]">
            {author}
          </p>
          <p className="text-[#01CB63] font-bold">
            {amount}
            <span className="text-[10px] line-through font-light text-[#000]">
              {deletedAmount}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
