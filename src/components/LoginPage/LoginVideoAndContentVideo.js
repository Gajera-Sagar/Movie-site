import React from "react";

export default function LoginVideoAndContentVideo({children }) {
  console.log(children)
  return (
    <>
      <div className="sm:h-[500px]  items-center bg-black ">
        <div className=" sm:marker:px-[10%] py-8 sm:h-full sm:flex flex-col sm:flex-row items-center text-white w-full">
          {children}
        </div>
      </div>
    </>
  );
}
