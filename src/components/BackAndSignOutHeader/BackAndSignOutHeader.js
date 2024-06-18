import { signOut } from "firebase/auth";
import React from "react";
import { Auth } from "../Firebase/Firebase.js";
import { useNavigate } from "react-router-dom";

function BackAndSignOutHeader({ trailer, pathname }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(Auth).then(() => {
        localStorage.removeItem("accessTocon");
        navigate("/signin");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchMovie = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchMovie.value;
    navigate(`/dashboard/${inputValue}`);
  };

  return (
    <div
      className={`flex py-3  items-center  sticky top-0 z-30 ${
        trailer
          ? "bg-[#EEEEEE] md:px-20 sm:px-12 px-8  justify-between"
          : `bg-black px-12 ${
              pathname !== "/dashboard" ? "justify-between" : "justify-end"
            }`
      }`}
    >
      {pathname !== "/dashboard" ? (
        <button
          onClick={() => window.history.back()}
          type="button"
          className="py-3 me-3 px-3 md:px-6 bg-gradient-to-r from-[#395790] to-[#182657]  text-white flex justify-center items-center bg-slate-300 rounded-3xl z-30"
        >
         <div className="hidden md:block me-4">
         GO BACK
         </div>
          <i className="fa-solid fa-backward "></i>
        </button>
      ) : (
        ""
      )}
      <form className={`border bg-transparent md:w-5/12 w-9/12 flex py-2 px-5 rounded-full ${ pathname !== "/dashboard"?"":"md:me-10 me-4"} ${trailer?"border-black text-black":" text-white"}`} action="" onSubmit={handleSearchMovie}>
      
        <button type="submit"><i className="fa-solid fa-magnifying-glass mr-4"></i></button>
        <input
          type="text"
          name="searchMovie"
          id="searchMovie"
          placeholder="Find Movies"
          className="outline-none border-none w-8/12  bg-transparent"
        />
      </form>
      <button
        className="z-30 text-white md:px-6 py-3 px-3 rounded-3xl bg-gradient-to-r from-[#EA5B67] to-[#F1A180] flex justify-center items-center ms-3"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-arrow-right-from-bracket "></i><div className="hidden md:block ms-3">SIGN OUT</div>
      </button>
    </div>
  );
}

export default BackAndSignOutHeader;
