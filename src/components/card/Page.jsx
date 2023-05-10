import React from "react";
import Card from "./Card";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center py-4 sm:py-12 md:py-12">
        <div>
          <h1 className="text-1xl sm:text-2xl md:text-3xl text-[#01CB63] italic text-center">
            courses
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold py-4 sm:py-8 pb-8 sm:pb-16 text-center">
            Our Most Popular Courses
          </h1>
        </div>

        <div
          className=" 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3
          justify-items-center
          gap-4
          md:w-[90%]
          lg:w-[80%]
          max-w-[2520px]
          mx-auto
          px-4
          "
        >
          <Card
            handleClick={() => {}}
            image="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            title="Ultimate Business Intelligence Analyst A to Z Course 2021"
            count="46,995"
            hour="11 hr 20 mins"
            lecture="44"
            img="https://images.unsplash.com/photo-1564595016712-175004de04ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80"
            author="Albert Hitler"
            amount="₹2000"
            deletedAmount="₹2000"
          />
          <Card
            handleClick={() => {}}
            image="https://media.istockphoto.com/id/1443385051/photo/women-leader-in-her-business.jpg?s=170667a&w=0&k=20&c=GCFSoK7g7ZGhfA1Uw6TvMbe-c-E2fpBoAkQELS2UO0M="
            title="Adobe Photoshop Training: From Beginner to Pro"
            count="6,995"
            lecture="24"
            hour="6 hr 20 mins"
            img="data:image/jpeg;base64,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"
            author="Wanda Wilson"
            amount="3000"
            deletedAmount="₹3000"
          />
          <Card
            handleClick={() => {}}
            image="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            title="Social Media Marketing - A to Z Content Marketing class 2021"
            count="46,995"
            hour="11 hr 20 mins"
            lecture="44"
            img="https://images.unsplash.com/photo-1564595016712-175004de04ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80"
            amount="₹2000"
            deletedAmount="₹2000"
            author="Albert Hitler"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
