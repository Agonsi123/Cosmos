import React, {useContext, useState} from 'react';
// import {AppContext} from '../../../../context/Index';
import { CiCircleRemove, CiSaveDown2 } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Face from '../../../../assets/Face2.jpg';
import hourglassgreen from "../../../../assets/hourglassgreen.svg";
import goodgreen from "../../../../assets/goodgreen.svg";
import warning from '../../../../assets/warning.svg';
import goodred from '../../../../assets/goodred.svg';
import { GiTruce } from 'react-icons/gi';


const PendingUserDetails = ({ setShowMoreAction, setShowPendingUserDetails}) => {
  const [activeStep, setActiveStep] = useState("details");
  // const { showVerify, setShowVerify, setShowPendingUserDetails, showWarning, setShowWarning } =
  //   useContext(AppContext);

  return (
    <>
      <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex items-center justify-center inset-0">
        <div className="flex flex-col gap-2 py-2 px-6 max-w-[500px] w-full rounded-xl bg-white shadow-lg relative">
          <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)] ">
            <h3 className="font-sans text-2xl font-medium text-[#6b911b]">
              New User Document Check
            </h3>
            <div
              className="cursor-pointer mt-2"
              onClick={() => {
                setShowPendingUserDetails(false);
                // console.log(showPendingUserDetails);
              }}
            >
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
            <div className="flex gap-2.5 font-semibold text-base">
              <button
                className="py-2 px-10 rounded-[4px] w-52 bg-[#6b911b] text-white"
                onClick={() => setActiveStep("approveVerification")}
              >
                Verify User
              </button>

              <button
                className="py-2 px-[22px] rounded-[4px] border border-[#c50000] bg-[#fbe2e2] text-[#b20000]"
                onClick={() => setActiveStep("rejectWarning")}
              >
                Reject User Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account approved warning Modal */}

      {activeStep === "approveVerification" ? (
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
                      setActiveStep("details");
                      console.log("This code done start again");
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
                onClick={() => setActiveStep("approveSuccess")}
              >
                Yes, Please Approve
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Account approved modal */}

      {activeStep === "approveSuccess" ? (
        <div className="bg-black bg-opacity-40  fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
                  <img src={goodgreen} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => {
                    setActiveStep("details");
                    // setShowVerify(false);
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
      ) : null}

      {/* Account rejection warning modal */}

      {activeStep === "rejectWarning" ? (
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
                    onClick={() => setActiveStep("details")}
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
                  setActiveStep("rejectReason");
                }}
              >
                Yes, Please Reject!
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Reject Reason modal */}

      {activeStep === "rejectReason" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
              <h3 className="font-sans text-2xl font-medium text-[#bc332a]">
                Reason For Rejecting User Registration
              </h3>
              <div className="cursor-pointer mt-1" onClick={() => setActiveStep("details")}>
                <CiCircleRemove className="size-7 " />
              </div>
            </div>
            <p className="font-semibold text-base text-[#1e1e1e]">Payment Information</p>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-[rgba(30,30,30,0.75)]" htmlFor="">
                Please add reason for rejecting this account
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="E.g ₦45,000"
                className="border border-[#c2c3c1] rounded-md py-2 h-[143px] bg-white"
              ></textarea>
            </div>
            <div className="flex gap-3 font-semibold text-base">
              <div
                className="border border-[#bc332a] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveStep("details")}
              >
                <button className="text-[#bc3324]">Cancel</button>
              </div>
              <div
                className="border bg-[#bc332a] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveStep("rejectSuccess")}
              >
                <button className="text-white">Reject Registration</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* user rejection warning modal */}

      {activeStep === "rejectSuccess" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-40 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4">
              <div className=" flex flex-col gap-5 items-center">
                <div className="flex relative">
                  <div className="border-8 border-[#fdf2f1] bg-[rgba(214,78,68,0.25)] rounded-full">
                    <img src={goodred} alt="Warning Icon" />
                  </div>
                  <div
                    className="absolute right-[-164px] -top-2"
                    onClick={() => setActiveStep("details")}
                  >
                    <CiCircleRemove className="size-6" />
                  </div>
                </div>
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  You have successfully rejected the <br /> selected account
                </p>
              </div>
              <button
                className="bg-[#bc332a] text-white py-2 px-6 rounded-[4px]"
                onClick={() => setActiveStep("details")}
              >
                Yes, Please Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PendingUserDetails;

export const HoverStat = ({title, badge, sp}) => {
    return (
      <div
        className={
          title === "KNOWN ISSUES"
            ? "rounded pt-4 pl-6 pr-11 pb-1 bg-[rgba(250,248,224,[154px]"
            : title === "TOTAL FUND INVESTED"
            ? "rounded-md pt-4 pl-6 pb-1 bg-[#f7f9f3] w-[154px]"
            : title === "ISSUES RAISED PENDING ATTENTION"
            ? "rounded pt-4 pl-6 pb-1 bg-[#f9f3f3] w-[218px]"
            : title === "NUMBER OF INVESTMENTS"
            ? "rounded pt-4 pl-6 pb-1 bg-[#edf5ff] w-[154px]"
            : title === "ISSUES RESOLVED"
            ? "rounded pt-4 pl-6 pb-1 bg-[#FAF8E0] w-[154px]"
            : title === "PERFORMER ROLE"
            ? "rounded pt-4 pl-4 pb-1 bg-[#F7F9F3] w-[154px]"
            : title === "DATE OF ACTION" || "TIME OF ACTION"
            ? "rounded pt-4 pl-4 pb-1 bg-[#F5F5F5] w-[154px]"
            : "border-[0.5px] rounded-md pt-4 pl-6 pr-6 pb-1 bg-[rgba(250,250,250,1)] w-[154px]"
        }
      >
        <div className="w-1/2">
          <h5 className="font-manrope font-normal text-[10px] text-[rgba(0,0,0,0.5)]">{title}</h5>
        </div>
        <div
          className={
            badge === "Pending"
              ? "py-0.5 pr-2 pl-1.5 bg-[rgba(249,250,224,1)] border-[0.5px] border-[rgba(229,122,0,1)] rounded-2xl text-center w-[106px]"
              : badge === "Active"
              ? "py-0.5 pr-2 pl-1.5 bg-[rgba(236,253,243,1)] border-[0.5px] border-[rgba(27,160,25,1)] rounded-2xl text-center w-[106px]"
              : badge === "Verified"
              ? "py-0.5 pr-2 pl-1.5 bg-[rgba(236,253,243,1)] border-[0.5px] border-[rgba(27,160,25,1)] rounded-2xl text-center w-[106px]"
              : ""
          }
        >
          <p
            className={
              badge === "Pending"
                ? "font-sanns font-medium text-xs text-[rgba(229,122,0,1)]"
                : badge === "Active"
                ? "font-sanns font-medium text-xs text-[rgba(2,122,72,1)]"
                : badge === "Verified"
                ? "font-sanns font-medium text-xs text-[rgba(2,122,72,1)]"
                : badge === "13,000,000"
                ? "text-[#6b911b] font-sanns font-semibold text-base"
                : badge === "3"
                ? "text-[rgba(202,0,0,0.8)] font-sanns font-semibold text-base"
                : badge === "4"
                ? "text-[#121a71] font-sanns font-semibold text-base"
                : badge === "Verified Admin"
                ? "text-[#6b911b] font-sanns font-semibold text-base"
                : badge === "12/2/2025" || "4:06PM (WAT)"
                ? "text-[#474747] font-sanns font-semibold text-base"
                : "font-sanns font-semibold text-base text-[rgba(113,63,18,1)]"
            }
          >
            {badge}
            <span className='font-semibold text-[10px] text-[#474747] pl-1'>{sp}</span>
          </p>
        </div>
      </div>
    );
}
