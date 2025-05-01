import React, { useContext, useState } from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import hourglassgreen from "../../../../assets/hourglassgreen.svg";
import {AppContext} from '../../../../context/Index';
import ApproveSuccess from '../userManagementModals/ApproveSuccess';
// import ApproveSuccess from "./ApproveSuccess";

const ApproveVerification = ({
  setShowMoreAction,
  setShowWarning,

}) => {
  const{ setShowVerify,  showSuccess, setShowSuccess} = useContext(AppContext);
  const handleSuccess = () => {
    console.log('you dey whine me');
    // setShowSuccess(true);
    {setShowSuccess(true) ? setShowVerify(false) : setShowSuccess(true)}
    // setShowVerify(false);
  };

  return (
    <>
      <div className="bg-black bg-opacity-40 fixed h-screen z-10 w-full flex items-center justify-center inset-0">
      <div className="bg-white w-[32.5%] rounded-xl shadow-lg">
        <div className="m-6 flex flex-col gap-4">
          <div className=" flex flex-col gap-5 items-center">
            <div className="flex relative">
              <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
                <img src={hourglassgreen} alt="hourglass" />
              </div>
              <div
                className="absolute right-[-164px] -top-2"
                onClick={() => {
                  // setShowSuccess(false);
                  setShowVerify(false);
                  // setShowPending(false);
                  // setShowMoreAction(false);
                  // setShowWarning(false);
                  console.log('This code done start again');
                }}
              >
                <CiCircleRemove className="size-6" />
              </div>
            </div>
            <p className="text-center text-base font-semibold text-[#1e1e1e]">
              Please confirm that you want to <br />
              approve user verification!
            </p>
          </div>
          <button
            className="bg-[#6b911b] text-white py-2 px-6 rounded-[4px]"
            onClick={handleSuccess}
            // onClick={() => {
            //   setShowSuccess(true);
            //   // setShowVerify(false);
            //   // setShowPendingUserDetails(false);
            //   console.log("code at it again");
            // }}
          >
            Yes, Please Approve
          </button>
        </div>
      </div>
    </div>
    {
      showSuccess && <ApproveSuccess/>
    }
    </>
  );
};

export default ApproveVerification;
