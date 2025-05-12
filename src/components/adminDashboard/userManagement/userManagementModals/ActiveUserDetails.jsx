import React, {useState, useContext} from 'react';
import { AppContext } from '../../../../context/Index';
import warning from '../../../../assets/warning.svg';
import goodred from '../../../../assets/goodred.svg';
import { CiCircleRemove, CiSaveDown2 } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";
import hourglassorange from "../../../../assets/hourglassorange.svg";
import goodorange from "../../../../assets/goodorange.svg";
import Face from '../../../../assets/Face2.jpg';
import face from "../../../../assets/face.jpeg";
import { HoverStat } from './PendingUserDetails';


const ActiveUserDetails = ({}) => {
    const {setShowActiveUserDetails} = useContext(AppContext);
     const [activeStep, setActiveStep] = useState("details");
  return (
    <>
      <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex items-center justify-center inset-0">
        <div className="flex flex-col gap-2 py-2 px-6 max-w-[534px] w-full rounded-xl bg-white shadow-lg relative">
          <div className="flex justify-between pt-2 pb-3 border-b border-[rgba(0,0,0,0.25)] ">
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

          <div className="flex flex-col gap-6 mt-2">
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
            <div className="grid grid-cols-3 gap-3 pb-3 border-b border-[rgba(0,0,0,0.5)] ">
              <HoverStat title="TOTAL FUND INVESTED" badge="13,000,000" />
              <HoverStat title="NUMBER OF INVESTMENTS" badge="4" />
              <HoverStat title="ACCOUNT STATUS" badge="Active" />
              <HoverStat title="ISSUES RAISED PENDING ATTENTION" badge="3" />
              <HoverStat title="ISSUES RESOLVED" badge="12" />
              <HoverStat title="USER STATUS" badge="Verified" />
            </div>
            <div className="flex gap-4 pb-5 border-b border-[rgba(0,0,0,0.5)] items-center ">
              <h4 className="font-semibold text-base text-[#1e1e1e]">Verification Document</h4>
              <div className="flex items-center gap-4">
                <h4 className="font-medium text-sm text-[rgba(30,30,30,0.75)]">
                  International Passport
                </h4>
                <button className="py-[5px] px-[10px] bg-[#e6e6e6] rounded-[14px] font-semibold text-xs text-[#000000]">
                  View
                </button>
                <PiDownloadSimpleBold className="size-5" />
              </div>
            </div>
            <div className="flex gap-16 pb-5 border-b-[0.5px] border-[rgba(0,0,0,0.5)]">
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-base text-[#1e1e1e]">Recent Project</h5>
                <div className="flex gap-[29px] text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Project Name:</p>
                  <p className="font-medium">Rice Farming In</p>
                </div>
                <div className="flex gap-14 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Location:</p>
                  <p className="font-medium">Kaduna, Nigeria</p>
                </div>
                <div className="flex gap-10 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Description:</p>
                  <p className="font-medium">Rice Investment</p>
                </div>
                <div className="flex gap-[68px] text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Status:</p>
                  <p className="font-medium">Active</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-base text-[#1e1e1e]">Investment Details</h5>
                <div className="flex gap-12 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Investment:</p>
                  <p className="font-medium">N10,000,000</p>
                </div>
                <div className="flex gap-9 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Expected ROI:</p>
                  <p className="font-medium">25%</p>
                </div>
                <div className="flex gap-14 text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">Start Date:</p>
                  <p className="font-medium">March 1, 2025</p>
                </div>
                <div className="flex gap-[62px] text-xs text-[rgba(30,30,30,0.75)]">
                  <p className="font-normal">End Date:</p>
                  <p className="font-medium">December 31, 2025</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-base text-[#1e1e1e]">Note</h5>
              <p className="font-normal text-sm text-[rgba(30,30,30,0.75)]">
                Account Active and Viable
              </p>
            </div>
            <div className="flex gap-2.5 font-semibold text-base">
              <button
                className="py-2 px-10 rounded-[4px] bg-[#f9fae0] w-[238px] border border-[#e9922a] text-[#e9922a]"
                onClick={() => setActiveStep("suspendWarning")}
              >
                Suspend Account
              </button>

              <button
                className="py-2 px-10 rounded-[4px] w-[238px] border border-[#c50000] bg-[#fbe2e2] text-[#b20000]"
                onClick={() => setActiveStep("deleteWarning")}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals for Suspended User */}
      {/* Account suspend warning modal */}

      {activeStep === "suspendWarning" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-10 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4">
              <div className=" flex flex-col gap-5 items-center">
                <div className="flex relative">
                  <div className="border-8 border-[#fdf2f1] bg-[#f8e2c4] rounded-full">
                    <img src={hourglassorange} alt="hourglass" />
                  </div>
                  <div
                    className="absolute right-[-164px] -top-2"
                    onClick={() => setActiveStep("details")}
                  >
                    <CiCircleRemove className="size-6" />
                  </div>
                </div>
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Are you sure you want to suspend
                  <br />
                  the selected User account?
                </p>
              </div>
              <button
                className="bg-[#e68c16] text-white py-2 px-6 rounded-[4px]"
                onClick={() => setActiveStep("suspensionReason")}
              >
                Yes, Please Suspend
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Suspension Reason modal */}

      {activeStep === "suspensionReason" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
              <h3 className="font-sans text-2xl font-medium text-[#e68c16]">
                Reason For Suspension
              </h3>
              <div className="cursor-pointer mt-1" onClick={() => setActiveStep("details")}>
                <CiCircleRemove className="size-7 " />
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
                placeholder="E.g ₦45,000"
                className="border border-[#c2c3c1] rounded-md py-2 h-[143px] bg-white"
              ></textarea>
            </div>
            <div className="flex gap-3 font-semibold text-base">
              <div
                className="border border-[#e68c16] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveStep("details")}
              >
                <button className="text-[#e68c16]">Cancel</button>
              </div>
              <div
                className="border bg-[#e68c16] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveStep("suspensionSuccess")}
              >
                <button className="text-white">Suspend Account</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Account suspend success modal */}

      {activeStep === "suspensionSuccess" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#fdf2f1] bg-[#f8e2c4] rounded-full">
                  <img src={goodorange} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setActiveStep("details")}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Accounts Successfully Suspended
                </p>
                <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
                  You have suspended the selected <br />
                  user account suscessfully
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Modals for deleting User Account */}
      {/* Account delete warning modal */}

      {activeStep === "deleteWarning" ? (
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
                  Are you sure you want to delete the <br />
                  selected account?
                </p>
              </div>
              <button
                className="bg-[#bc332a] text-white py-2 px-6 rounded-[4px]"
                onClick={() => {
                  setActiveStep("deleteReason");
                }}
              >
                Yes, Please Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Delete Reason modal */}

      {activeStep === "deleteReason" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
              <h3 className="font-sans text-2xl font-medium text-[#bc332a]">
                Reason For Deleting Account
              </h3>
              <div className="cursor-pointer mt-1" onClick={() => setActiveStep("details")}>
                <CiCircleRemove className="size-7 " />
              </div>
            </div>
            <p className="font-semibold text-base text-[#1e1e1e]">Payment Information</p>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-[rgba(30,30,30,0.75)]" htmlFor="">
                Please add reason for deleting this account
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
                onClick={() => setActiveStep("deleteSuccess")}
              >
                <button className="text-white">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Modal for account delete successful */}
      {activeStep === "deleteSuccess" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#fdf2f1] bg-[#f8e2c4] rounded-full">
                  <img src={goodred} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setActiveStep("details")}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Accounts Successfully Deleted
                </p>
                <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
                  You have suscessfully deleted the <br />
                  selected account
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ActiveUserDetails