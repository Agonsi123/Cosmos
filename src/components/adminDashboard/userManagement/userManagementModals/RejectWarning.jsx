import React, { useContext } from 'react';
import warning from '../../../../assets/warning.svg';
import { CiCircleRemove } from "react-icons/ci";
import RejectReason from './RejectReason';
import { AppContext } from '../../../../context/Index';

const RejectWarning = () => {
  
    const { setShowWarning, showReason, setShowReason} = useContext(AppContext);
  return (
    <>
      <div className="bg-black bg-opacity-40 fixed h-screen z-20 w-full flex items-center justify-center inset-0">
        <div className="bg-white w-[32.5%] rounded-xl shadow-lg">
          <div className="m-6 flex flex-col gap-4">
            <div className=" flex flex-col gap-5 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#fdf2f1] bg-[rgba(214,78,68,0.25)] rounded-full">
                  <img src={warning} alt="Warning Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setShowWarning(false)}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <p className="text-center text-base font-semibold text-[#1e1e1e]">
                Are you sure you want to reject new <br />
                user registration
              </p>
            </div>
            <button
              className="bg-[#bc332a] text-white py-2 px-6 rounded-[4px]"
              onClick={() => {
                setShowReason(true);
              }}
            >
              Yes, Please Reject!
            </button>
          </div>
        </div>
      </div>
      {showReason && <RejectReason />}
    </>
  );
}

export default RejectWarning