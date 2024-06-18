import React from 'react'
import BackAndSignOutHeader from '../BackAndSignOutHeader/BackAndSignOutHeader.js'
// import errorImg from "../../../public/images/error-page.jpg"

const MoviePageNotFound = () => {
  return (
    <div className='h-screen bg-black w-full'>
       <BackAndSignOutHeader />
      <img className='h-4/5 object-cover object-center mx-auto' src={`${process.env.PUBLIC_URL}/images/error.png`} alt="Movie not found" />
    </div>
  )
}

export default MoviePageNotFound
