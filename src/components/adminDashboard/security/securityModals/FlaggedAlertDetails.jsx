import React from 'react';
import { CiCircleRemove } from "react-icons/ci";

const FlaggedAlertDetails = ({setActiveModal}) => {
  return (
    <div className="bg-black bg-opacity-40 fixed h-screen z-5 w-full flex flex-col justify-center inset-0">
      <div className="flex justify-between border-b border-[rgba(0,0,0,0.25)] py-4 px-6 max-w-[419px] w-full rounded-t-xl bg-white relative left-[610px]">
        <h3 className="font-sans text-2xl font-medium text-[#6b911b]">Transaction Details</h3>
        <div className="cursor-pointer mt-2" onClick={() => setActiveModal(false)}>
          <CiCircleRemove className="size-6 " />
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-4 pb-8 px-6 max-w-[419px] w-full rounded-b-xl bg-white relative left-[610px]">
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-base text-[#1e1e1e]">Overview</h5>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">User Name:</p>
              <p className="font-medium">John Doe</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Transaction Amount:</p>
              <p className="font-medium">₦2,000,000</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Reason for Flagging:</p>
              <p className="font-medium">Unusual Transfer</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Date:</p>
              <p className="font-medium">January 10, 2025</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Status:</p>
              <p className="font-medium py-[2px] px-2 bg-[#fed6cb] text-[#713f12] rounded-lg">
                Flagged
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-base text-[#1e1e1e]">Admin Action</h5>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <input type="radio" name="" id="" className="accent-[#027a48]" />
              <p>Resolved</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" className="accent-[#027a48]" />
              <p>Flagged</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlaggedAlertDetails