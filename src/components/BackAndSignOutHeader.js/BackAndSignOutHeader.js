import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Auth } from "../Firebase/Firebase.js";
import { useNavigate } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovie.js";

function BackAndSignOutHeader({ trailer, pathname }) {

  // const [movieSearchInput, setMovieSearchInput] = useState("")
  const navigate = useNavigate()



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
  const handleSearchMovie = (e)=>{
    e.preventDefault()

    // const formData = new FormData(e.target)
    // const formDataObj = Object.fromEntries(formData.entries());
    const inputValue = e.target.elements.searchMovie.value;
    navigate(`/dashboard/${inputValue}`)
    
    // setMovieSearchInput(inputValue)
    
  
  }
  // console.log(results)
  // console.log(error)


  return (
    <div
      className={`flex   items-center  sticky top-0 z-30 ${
        trailer ? "bg-[#EEEEEE] px-20  justify-between" : `bg-black px-12 ${pathname !== "/dashboard"?'justify-between': 'justify-end'}`
      }`}
    >
      {pathname !== "/dashboard"?<button
        onClick={() => window.history.back()}
        type="button"
        className="py-3 px-6 bg-gradient-to-r from-[#395790] to-[#182657]  text-white flex justify-center items-center bg-slate-300 rounded-3xl z-30"
      >
        GO BACK
        <i className="fa-solid fa-backward ms-4"></i>
      </button>:""}
      <form action="" onSubmit={handleSearchMovie}>
  <input type="text" name="searchMovie" id="searchMovie" placeholder="search movie" />
  <button type="submit">Submit</button>
</form>
      <button
        className="z-30 text-white px-5 py-3  rounded-3xl bg-gradient-to-r from-[#EA5B67] to-[#F1A180] flex justify-center items-center m-3"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-arrow-right-from-bracket me-3"></i>SIGN OUT{" "}
      </button>
    </div>
  );
}

export default BackAndSignOutHeader;
