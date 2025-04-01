import React from 'react'

const SearchSection = ({tittle, icon, icon2, icon3, text}) => {
  return (
    <div className="py-3 px-7 flex justify-between  items-center w-full bg-[#f8f8f8]">
      <h1 className="w-full font-sanns font-medium text-xl">{tittle}</h1>
      <div className="flex gap-3">
        <div className="flex justify-between items-center border-[1px] py-1 px-4 border-[#00000026] w-[27rem] rounded">
          <div className="flex gap-2 items-center">
            <div className='size-7'> {icon}</div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
            />
          </div>
          <div className="">{icon2}</div>
        </div>
        <div className="flex gap-1 items-center border-[1.07px] border-[#00000026] px-3 rounded bg-[#fcfcfc]">
          {icon3}
          <p className="font-sanns font-[500] text-[13.66px] text-[#00000080]">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchSection