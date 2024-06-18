import React from 'react'

function DashboardShimmerEffect() {
  return (
    <div className="sm:px-20 px-10 pb-9">
      <div className='h-10 md:h-20 mt-6 w-full rounded-lg bg-gray-300'></div>
          <div className=" w-full relative p-4 aspect-[16/6]">
            <div className="w-full  aspect-[16/6] bg-gray-300 rounded-2xl"></div>
            <div className="w-5/12 absolute bottom-10 left-10 z-10  bg-gray-300 h-3/6 rounded-2xl"></div>
          </div>
          <div className="md:w-4/12 w-6/12 md:h-16 h-11 mx-3 rounded-2xl mb-4 md:mt-8 mt-4 bg-gray-300"></div>
          <div className="flex gap-4 px-3 overflow-x-scroll [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="h-60 w-36 flex-shrink-0 rounded-2xl bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
          </div>
          <div className="md:w-4/12 w-6/12 h-11 md:h-16 mx-3 rounded-2xl mb-4 mt-8 bg-gray-300"></div>
          <div className="flex gap-4 px-3 overflow-x-scroll [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="h-60 w-36 flex-shrink-0 rounded-2xl bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
            <div className="h-60 w-36 rounded-2xl flex-shrink-0 bg-gray-300"></div>
          </div>
        </div>
  )
}

export default DashboardShimmerEffect
