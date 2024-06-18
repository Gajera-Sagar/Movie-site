import React from "react";

export default function LoginTopic({title, description}) {
  return (
    <div className="sm:w-6/12  px-8  sm:py-0  sm:h-full sm:flex flex-col justify-center">
      <h1 className="sm:text-4xl md:text-5xl text-3xl text-center sm:text-start font-bold sm:mb-5 mb-3 leading-10 sm:leading-10 md:leading-[3.5rem]">{title}</h1>
      <p className="md:text-[25px] text-xl text-center sm:text-start md:leading-8 leading-6">
       {description}
      </p>
    </div>
  );
}
