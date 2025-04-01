import React from 'react'
import { GrFormNext } from "react-icons/gr";

const SeeMore = () => {
  return (
    <div className='relative'>
      <div >
          <div className="relative">
            <button className="text-[#6B911B] text-sm  sm:text-base rounded-full py-2 px-8">
              See More
            </button>
            <span className="absolute right-[5px] text-[#6B911B] top-[12px]">
              <GrFormNext size={20} />
            </span>
          </div>
        </div>
    </div>
  )
}

export default SeeMore
