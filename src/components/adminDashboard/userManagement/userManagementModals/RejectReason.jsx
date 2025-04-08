import React from 'react';
import { CiCircleRemove } from "react-icons/ci";

const RejectReason = ({setShowReason}) => {
  return (
    <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
      <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
          <h3 className="font-sans text-2xl font-medium text-[#bc332a]">
            Reason For Rejecting User Registration
          </h3>
          <div className="cursor-pointer mt-1" onClick={() => setShowPending(false)}>
            <CiCircleRemove className="size-7 " onClick={() => setShowReason(false)} />
          </div>
        </div>
        <p className="font-semibold text-base text-[#1e1e1e]">Payment Information</p>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm text-[rgba(30,30,30,0.75)]" htmlFor="">
            Please add reason for suspending this account
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            placeholder="E.g N45,000"
            className="border border-[#c2c3c1] rounded-md py-2 h-[143px] bg-white"
          ></textarea>
        </div>
        <div className="flex gap-3 font-semibold text-base">
          <div className="border border-[#bc332a] rounded py-2 pr-4 pl-3 w-[262px] text-center">
            <button className="text-[#bc3324]">Cancel</button>
          </div>
          <div className="border bg-[#bc332a] rounded py-2 pr-4 pl-3 w-[262px] text-center">
            <button className='text-white'>Reject Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RejectReason