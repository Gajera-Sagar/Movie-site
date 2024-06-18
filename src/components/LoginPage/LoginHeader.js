import React from "react";
import { useNavigate } from "react-router-dom";

const LoginHeader = ({ signin }) => {
  const navigate = useNavigate();

  function handleNavigateForSinup() {
    navigate("/signin");
  }
  function handleNavigateForSinin() {
    navigate("/");
  }

  return (
    <div className="z-10 w-full absolute top-0 py-5 xl:px-40 md:px-24 sm:px-14 px-6   flex justify-between items-center">
      <div className=" h-10  ">
        <img
          className="h-full w-auto "
          src="/images/netflixLogo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="flex gap-4">

        <button
          className="font-bold text-sm m-1 text-white px-6  py-3 rounded-lg bg-red-600"
          onClick={signin ? handleNavigateForSinin : handleNavigateForSinup}
        >
          {signin ? "sign up" : "sign in "}
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
