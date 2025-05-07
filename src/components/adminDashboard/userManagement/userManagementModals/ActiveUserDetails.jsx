import React, {useState, useContext} from 'react';
import { AppContext } from '../../../../context/Index';
import warning from '../../../../assets/warning.svg';
import goodred from '../../../../assets/goodred.svg';
import { CiCircleRemove, CiSaveDown2 } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Face from '../../../../assets/Face2.jpg';
import face from "../../../../assets/face.jpeg";
import { HoverStat } from './PendingUserDetails';
import (HoverStat);

const ActiveUserDetails = ({}) => {
    const {setShowActiveUserDetails} = useContext(AppContext);
     const [activeStep, setActiveStep] = useState("details");
  return (
    <>
      <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex items-center justify-center inset-0">
        <div className="flex flex-col gap-2 py-2 px-6 max-w-[500px] w-full rounded-xl bg-white shadow-lg relative">
          <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)] ">
            <h3 className="font-sans text-2xl font-medium text-[#6b911b]">User Profile</h3>
            <div
              className="cursor-pointer mt-2"
              onClick={() => {
                setShowActiveUserDetails(false);
                // console.log(showPendingUserDetails);
              }}
            >
              <CiCircleRemove className="size-6 " />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-3">
            <div className="flex gap-3">
              <img src={face} alt="Avatar" className="size-14 rounded-full" />
              <div>
                <h3 className="font-sanns font-medium text-2xl text-[#000000]">Kosi Ojiteli</h3>
                <div className="flex gap-3 font-sanns font-normal text-base text-[rgba(0,0,0,0.5)]">
                  <p className="pr-3 border-r-2 border-e-red-950">kosiojiteli@gmail.com</p>
                  <p className="w-[140px]">+234 8116070090</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 pb-4 border-b border-[rgba(0,0,0,0.5)] ">
              <HoverStat title="TOTAL FUND INVESTED" badge="13,000,000" />
              <HoverStat title="NUMBER OF INVESTMENTS" badge="0" />
              <HoverStat title="USER STATUS" badge="Pending" />
              <HoverStat title="ACCOUNT STATUS" badge="Pending" />
              <HoverStat title="KNOWN ISSUES" badge="0" />
              <HoverStat title="USER STATUS" badge="Pending" />
            </div>
            <div className="flex gap-4 pb-8 border-b border-[rgba(0,0,0,0.5)] items-center ">
              <h4 className="font-semibold text-base text-[#1e1e1e]">Verification Document</h4>
              <div className="flex items-center gap-4">
                <h4 className="font-medium text-sm text-[rgba(30,30,30,0.75)]">NIN</h4>
                <button className="py-[5px] px-[10px] bg-[#e6e6e6] rounded-[14px] font-semibold text-xs text-[#000000]">
                  View
                </button>
                <PiDownloadSimpleBold className="size-5" />
              </div>
            </div>
            <div className="flex gap-9 pb-8 border-b-[0.5px] border-[rgba(0,0,0,0.5)]">
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-base text-[#1e1e1e]">User Information</h5>
                <div className="flex gap-9 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Address</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
                <div className="flex gap-4 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Occupation:</p>
                  <p className="font-medium">FrontEnd Developer</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-base text-[#1e1e1e]">Investment Details</h5>
                <div className="flex gap-12 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Reg Date:</p>
                  <p className="font-medium">March 1, 2025</p>
                </div>
                <div className="flex gap-14 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">End Date:</p>
                  <p className="font-medium">December 31, 2025</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-base text-[#1e1e1e]">Note</h5>
              <p className="font-normal text-sm text-[rgba(30,30,30,0.75)]">
                Any note or message should go here
              </p>
            </div>
            <div className="flex gap-[18px] font-semibold text-base">
              <button
                className="py-2 px-10 rounded-[4px] bg-[#6b911b] text-white"
                onClick={() => setActiveStep("approveVerification")}
              >
                Verify User
              </button>

              <button
                className="py-2 px-10 rounded-[4px] border border-[#c50000] bg-[#fbe2e2] text-[#b20000]"
                onClick={() => setActiveStep("rejectWarning")}
              >
                Reject User Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveUserDetails