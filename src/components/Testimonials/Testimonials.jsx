import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col items-start py-4 sm:py-12 md:py-12">
        <div>
          <h1 className="text-1xl sm:text-2xl md:text-3xl px-12 sm:px-24 text-[#01CB63] italic text-left">
            Testimonial
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-4xl px-12 sm:px-24 font-semibold py-4 sm:py-8 pb-8 sm:pb-16 text-left">
            Check Out What Our
            <br /> Students Think About Us
          </h1>
        </div>

        <div
          className=" 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          justify-items-center
          gap-4
          md:w-[90%]
          lg:w-[100%]
          max-w-[2520px]
          mx-auto
          px-4
          sm:px-10
          md:px-10
          lg:px-20

          "
        >
          <Card
           description="It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides" 
           author="Anshul Jain"
           />
          
          <Card 
          description="It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Provinding This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides" 
          author="Rajkumar Jain"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
