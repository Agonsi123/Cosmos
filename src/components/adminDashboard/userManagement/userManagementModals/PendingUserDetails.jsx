import React, {useContext} from 'react';
import {AppContext} from '../../../../context/Index';
import { CiCircleRemove, CiSaveDown2 } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Face from '../../../../assets/Face2.jpg';
import { GiTruce } from 'react-icons/gi';
import ApproveVerification from '../userManagementModals/ApproveVerification';
import RejectWarning from "../userManagementModals/RejectWarning";


const PendingUserDetails = ({
  setShowMoreAction,
}) => {
  const { showVerify, setShowVerify, setShowPendingUserDetails, showWarning, setShowWarning } =
    useContext(AppContext);

  const handleVerifyUser = () => {
    console.log('this code wan whine me');
    setShowVerify(true);
  };

  const handleRejectUser = () => {
    setShowWarning(true);
  };

  return (
    <>
      <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex items-center justify-center inset-0">
      <div className="flex flex-col gap-2 py-2 px-6 max-w-[500px] w-full rounded-xl bg-white shadow-lg relative">
        <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)] ">
          <h3 className="font-sans text-2xl font-medium text-[#6b911b]">New User Document Check</h3>
          <div className="cursor-pointer mt-2" onClick={() => {
            setShowPendingUserDetails(false);
            // console.log(showPendingUserDetails);
          }}>
            <CiCircleRemove className="size-6 " />
          </div>
        </div>
        
        <div className="flex flex-col gap-6 mt-3">
          <div className="flex gap-3">
            <img src={Face} alt="Avatar" className="size-14 rounded-full" />
            <div>
              <h3 className="font-sanns font-medium text-2xl text-[#000000]">Udo Agonsi</h3>
              <div className="flex gap-3 font-sanns font-normal text-base text-[rgba(0,0,0,0.5)]">
                <p className="pr-3 border-r-2 border-e-red-950">udoagonsi@gmail.com</p>
                <p className="w-[140px]">+234 8033533213</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 pb-4 border-b border-[rgba(0,0,0,0.5)] ">
            <HoverStat title="ACCOUNT STATUS" badge="Pending" />
            <HoverStat title="USER STATUS" badge="Pending" />
            <HoverStat title="KNOWN ISSUES" badge="0" />
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
          <div className='flex gap-[18px] font-semibold text-base'>
            <button className='py-2 px-10 rounded-[4px] bg-[#6b911b] text-white'
              onClick={handleVerifyUser}
            >
              Verify User</button>
            <button className='py-2 px-10 rounded-[4px] border border-[#c50000] bg-[#fbe2e2] text-[#b20000]'
              onClick={handleRejectUser}
            >
              Reject User Registration</button>
          </div>
        </div>
      </div>
    </div>
    {
      showVerify && <ApproveVerification/>
    }
    {
      showWarning && <RejectWarning/>
    }
    </>
  );
}

export default PendingUserDetails;

export const HoverStat = ({title, badge}) => {
    return (
      <div
        className={
          title === "KNOWN ISSUES"
            ? "rounded pt-4 pl-6 pr-11 pb-1 bg-[rgba(250,248,224,1)]"
            : "border-[0.5px] border-[rgba(0,0,0,0.5)] rounded-md pt-4 pl-6 pr-11 pb-1 bg-[rgba(250,250,250,1)] w-36"
        }
      >
        <div className="w-1/2">
          <h5 className="font-manrope font-normal text-[10px] text-[rgba(0,0,0,0.5)]">{title}</h5>
        </div>
        <div
          className={
            badge === "Pending"
              ? "py-0.5 pr-2 pl-1.5 bg-[rgba(249,250,224,1)] border-[0.5px] border-[rgba(229,122,0,1)] rounded-2xl text-center"
              : ""
          }
        >
          <p
            className={
              badge === "Pending"
                ? "font-sanns font-medium text-xs text-[rgba(229,122,0,1)]"
                : "font-sanns font-semibold text-base text-[rgba(113,63,18,1)]"
            }
          >
            {badge}
          </p>
        </div>
      </div>
    );
}
