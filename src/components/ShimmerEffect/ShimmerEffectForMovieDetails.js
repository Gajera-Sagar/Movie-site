import React from "react";

function ShimmerEffectForMovieDetails() {
  return (
    <div className="sm:px-20 pt-5 px-10 pb-9 bg-[#EEEEEE]">
      <div className="h-16 w-full bg-gray-500 rounded-lg"></div>
      <div className=" w-full p-4">
        <div className="w-full  aspect-[16/6] bg-gray-500 rounded-2xl"></div>
      </div>
      <div className=" p-4 flex flex-col md:flex-row">
        <div className="md:w-3/12 w-60  mx-auto rounded-xl h-60  bg-gray-500"></div>
        <div className="md:w-9/12 mt-7 w-full md:ms-4  h-full rounded-xl  ">
          <div className="h-14 rounded-lg md:w-8/12 w-7/12 my-1.5 bg-gray-500"></div>
          <div className="h-8 rounded-lg md:w-8/12 w-full my-1.5 bg-gray-500"></div>
          <div className="h-16 rounded-lg md:w-8/12 w-full my-1.5 bg-gray-500"></div>
        </div>
      </div>
      <div className="h-24 rounded-lg my-1.5 bg-gray-500"></div>
      <div className="flex justify-center  md:gap-11 gap-3  mt-5">
        <div className="w-16 h-16 rounded-full bg-gray-500"></div>
        <div className="w-16 h-16 rounded-full bg-gray-500"></div>
        <div className="w-16 h-16 rounded-full bg-gray-500"></div>
        <div className="w-16 h-16 rounded-full bg-gray-500"></div>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-7 my-10">
        <div className="h-52 md:w-40 w-36 bg-gray-500 rounded-lg"></div>
        <div className="h-52 md:w-40 w-36 bg-gray-500 rounded-lg"></div>
      </div>
    </div>
  );
}

export default ShimmerEffectForMovieDetails;
