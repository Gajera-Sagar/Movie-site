import React, { useState } from "react";
import { Questions } from "./../utils/Data.js";

export default function FreelyAskedQue() {
  const [index, setIndex] = useState(null);
  function collapse(index) {
    setIndex(index);
  }
  return (
    <>
      <div className="bg-black sm:px-[10%] px-5 py-16 text-white">
        <h1 className="sm:text-5xl text-3xl font-bold mb-5 sm:leading-[3.5rem] leading-10 text-center pb-6">
          Frequently Asked Questions
        </h1>
        {Questions.map((question, i) => {
          return (
            <div className="sm:mx-10" onClick={() => collapse(i)}>
              <div className="sm:p-7 p-5 bg-gray-800 border-black border mt-2.5 flex justify-between items-center">
                <h1 className="sm:text-2xl text-xl ">{question.question}</h1>
                <img
                  className={`${i === index ? "rotate-45" : ""}`}
                  src="./images/plus.svg"
                  alt=""
                />
              </div>
              <div
                className={`p-7 bg-gray-800 border-black border ${
                  i === index ? "" : "hidden"
                }`}
              >
                {question.Answer.map((ans) => {
                  return <p className="text-2xl py-5">{ans}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
