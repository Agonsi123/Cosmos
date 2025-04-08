import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import goodgreen from "../../../../assets/goodgreen.svg";

const ApproveSuccess = ({ setShowSuccess, setShowVerify }) => {
  return (
    <div className="bg-transparent fixed h-screen z-30 w-full flex items-center justify-center inset-0">
      <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
        <div className="m-6 flex flex-col gap-4 items-center">
          <div className="flex relative">
            <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
              <img src={goodgreen} alt="Good Icon" />
            </div>
            <div
              className="absolute right-[-164px] -top-2"
              onClick={() => {
                setShowSuccess(false)
              }}
            >
              <CiCircleRemove className="size-6" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center text-base font-semibold text-[#1e1e1e]">
              User Account Successfully Verified
            </p>
            <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
              You have approved the selected <br />
              accounts Successfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveSuccess