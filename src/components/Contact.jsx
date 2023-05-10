import React from "react";
import Group10750 from "../assets/Group10750.svg";
import Group10749 from "../assets/Group10749.svg";
import Group10748 from "../assets/Group10748.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Github from "../assets/Github.svg";
import Linkedin from "../assets/Linkedin.svg";
import Input from "./Input";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-1xl pt-4 sm:text-2xl md:text-3xl text-[#01CB63] italic text-center">
          Contact Us
        </h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold py-4 sm:py-8 pb-8 sm:pb-16 text-center">
          Reach Out With Any <br /> Questions You Have
        </h1>
      </div>

      <div className="w-full bg-[#F8F9FB]">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="flex flex-col items-center lg:items-start sm: pl-6 md:pl-12 lg:pl-24 xl:pl-48 my-4 sm:my-16 w-full">
            <h1 className="mt-2 sm:mt-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-2 sm:mb-8 tracking-wider">
              Contact Information
            </h1>
            <div className="flex items-center flex-row mt-4">
              <div className="w-10 sm:w-14 md:w-20">
                <img src={Group10750} alt="number" />
              </div>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold tracking-wider">
                contact@coursepro.com
              </p>
            </div>
            <div className="flex items-center flex-row mt-4">
              <div className="w-10 sm:w-14 md:w-20">
                <img src={Group10749} alt="number" />
              </div>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg  font-semibold tracking-wider">
                1800-562-895, 1800-869-877
              </p>
            </div>
            <div className="flex items-center flex-row mt-4">
              <div className="w-10 sm:w-14 md:w-20">
                <img src={Group10748} alt="number" />
              </div>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg  font-semibold tracking-wider">
                102 Street, India
              </p>
            </div>
            <h1 className="mt-5 sm:mt-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-2 sm:mb-8 tracking-wider">
              Social Media Channel
            </h1>

            <div className="flex flex-row items-center gap-2 mb-4 sm:gap-4 xl:gap-12 justify-between">
              <div className="w-10 sm:w-8 md:w-14 lg:w-20">
                <img src={Facebook} alt="number" />
              </div>
              <div className="w-10 sm:w-8 md:w-14 lg:w-20">
                <img src={Twitter} alt="number" />
              </div>
              <div className="w-10 sm:w-8 md:w-14 lg:w-20">
                <img src={Github} alt="number" />
              </div>
              <div className="w-10 sm:w-8 md:w-14 lg:w-20">
                <img src={Linkedin} alt="number" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start px-1 md:px-3 lg:pl-8 xl:px-12 sm:my-2 md:my-16 w-full">
            <h1 className="mt-10 text-center font-bold text-sm sm:text-md md:text-xl lg:text-2xl mb-8 tracking-wider">
              Fill up the form and our team will <br />
              get back to you within 24 hours
            </h1>

            <div className="flex flex-col lg:flex-row -mx-3 mb-0 lg:mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <Input
                  border={true}
                  id="name"
                  label="Name"
                  disabled={() => {}}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-0 lg:px-3">
                <Input
                  border={true}
                  id="email"
                  label="Email"
                  disabled={() => {}}
                  register={() => {}}
                  errors={() => {}}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row -mx-3 mb-0 mt-4 lg:mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <Input
                  border={true}
                  id="phone"
                  label="Phone"
                  disabled={() => {}}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-0 lg:px-3">
                <Input
                  className="sm:w-1/2 md:w-1 px-0 lg:px-3"
                  border={true}
                  id="subject"
                  label="Subject"
                  disabled={() => {}}
                  register={() => {}}
                  errors={() => {}}
                  required
                />
              </div>
            </div>
            <div className="flex -mx-3 mb-6 my-8">
              <div className="bg-white border-2 border-[#01CB63] lg:w-[520px] w-[256px] rounded-none md:mb-0">
                <textarea
                  placeholder="Message"
                  className="placeholder-[#86919D] placeholder:italic w-[250px] lg:w-[512px] h-[128px] sm:h-[176px] lg:h-[272px] rounded-none text-gray-700 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
