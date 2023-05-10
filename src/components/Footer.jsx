import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="font-bold tracking-wider text-xs sm:text-sm md:text-md lg:text-lg">
              2021-2022 © Course Pro Private Limited
            </div>
            <div className="flex flex-row gap-4 pr-0">
              <div className="tracking-wider relative md:h-[60px] flex items-center justify-start text-black text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
                Term & Condition
              </div>
              <div className="tracking-wider relative md:h-[60px] text-black flex justify-start items-center text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
