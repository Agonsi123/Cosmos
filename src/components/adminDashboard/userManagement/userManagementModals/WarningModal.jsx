import React from 'react';
import Button from '../../../Button';


const WarningModal = ({icon1, icon2, text, btnText, bgColor, setWarnModal}) => {
  return (
    <div className="bg-[rgba(16,24,40,0.05)] backdrop-blur-md fixed min-h-screen z-10 w-[100%] top-0 left-0">
      <div className="bg-white w-[30%] absolute top-[35%] left-[35%] rounded-xl">
        <div className="flex flex-col gap-5 p-5">
          <div className="flex">
            <div className='relative'>{icon1}</div>
            <div className="absolute right-3 top-2" onClick={() =>setWarnModal(false)}>{icon2}</div>
          </div>
          <h5 className="text-[1rem] font-[600] text-[#1e1e1e]">{text}</h5>
          <div className="rounded bg-[#bc332a] py-2 px-6 text-center">
            <button className='text-[14px] font-[600] text-white'>{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningModal