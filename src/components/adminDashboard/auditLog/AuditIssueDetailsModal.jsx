import React, {useState} from 'react';
import { CiCircleRemove, CiSaveDown2 } from "react-icons/ci";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { HoverStat } from '../userManagement/userManagementModals/PendingUserDetails';
import Face from "../../../assets/Face2.jpg";
import hourglassgreen from "../../../assets/hourglassgreen.svg";
import goodgreen from "../../../assets/goodgreen.svg";
import warning from "../../../assets/warning.svg";
import goodred from "../../../assets/goodred.svg";
import greenFlowerGood from "../../../assets/greenFlowerGood.svg";

const AuditIssueDetailsModal = ({ setShowAuditIssueDetails }) => {
    const [isActive, setIsActive] = useState("details");

  return (
    <>
      <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex items-center justify-center inset-0">
        <div className="flex flex-col gap-2 py-2 px-6 max-w-[500px] w-full rounded-xl bg-white shadow-lg relative">
          <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)] ">
            <h3 className="font-sans text-2xl font-medium text-[#6b911b]">Action Details</h3>
            <div className="cursor-pointer mt-2" onClick={() => setShowAuditIssueDetails(false)}>
              <CiCircleRemove className="size-6 " />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex gap-3">
              <img src={Face} alt="Avatar" className="size-14 rounded-full" />
              <div>
                <p className="font-medium text-base text-[#00000050]">Action performed by:</p>
                <div className="flex relative">
                  <h3 className="font-sanns font-medium text-2xl text-[#000000]">Udo Agonsi</h3>
                  <img src={greenFlowerGood} alt="Good icon" className="absolute left-[132px]" />
                </div>
                <div className="flex gap-3 font-sanns font-normal text-base text-[rgba(0,0,0,0.5)]">
                  <p className="pr-3 border-r-2 border-e-red-950">udoagonsi@gmail.com</p>
                  <p className="w-[140px]">+234 8033533213</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 pb-4 border-b border-[rgba(0,0,0,0.5)] ">
              <HoverStat title="PERFORMER ROLE" badge="Verified Admin" />
              <HoverStat title="DATE OF ACTION" badge="12/2/2025" />
              <HoverStat title="TIME OF ACTION" badge="4:06 PM" sp="(WAT)" />
            </div>
            <div className="flex flex-col gap-3 pb-4 border-b-[0.5px] border-[rgba(0,0,0,0.5)] text-[#1e1e1e] pr-12">
              <h5 className="font-semibold text-base">Description of Action:</h5>
              <p className="font-normal text-sm">
                Write short or detailed description of action that was carried out e.g. Admin John
                Doe suspended User123 for violating platform policies.
              </p>
              <span className="font-normal text-sm">
                User was given a warning before suspension due to multiple violations.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-base text-[#1e1e1e]">
                Note to Consider (If Applicable):
              </label>
              <textarea
                name=""
                id=""
                // rows="3"
                placeholder="Write a descriptive note you need to keep something on this action taken"
                className="border border-[#c2c3c1] rounded-md py-2 px-3 h-[113px] bg-white"
              ></textarea>
            </div>
            <div className="flex gap-4 pb-8 border-b border-[rgba(0,0,0,0.5)] items-center ">
              <h4 className="font-semibold text-base text-[#1e1e1e]">Supporting Document / Link</h4>
              <div className="flex items-center gap-4">
                <button className="py-[5px] px-[10px] bg-[#e6e6e6] rounded-[14px] font-semibold text-xs text-[#000000]">
                  View
                </button>
                <PiDownloadSimpleBold className="size-5" />
              </div>
            </div>
            <div className="flex gap-2.5 font-semibold text-base">
              <button
                className="py-2 px-10 rounded-[4px] w-56 border border-[#6b911b] bg-white text-[#6b911b]"
                onClick={() => setShowAuditIssueDetails(false)}
              >
                Cancel
              </button>

              <button
                className="py-2 px-[22px] rounded-[4px] w-56 border border-[#6b911b] bg-[#6b911b] text-white"
                onClick={() => setIsActive("updateAction")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Action Modal */}
      {isActive === "updateAction" ? (
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
                      setIsActive("details");
                      console.log("This code done start again");
                    }}
                  >
                    <CiCircleRemove className="size-6" />
                  </div>
                </div>
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Please confirm that you want to <br />
                  update the selected action.
                </p>
              </div>
              <button
                className="bg-[#6b911b] text-white py-2 px-6 rounded-[4px]"
                onClick={() => setIsActive("approveUpdate")}
              >
                Yes, Please Update
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Update Approved Modal */}

      {isActive === "approveUpdate" ? (
        <div className="bg-black bg-opacity-40  fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
                  <img src={goodgreen} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setIsActive("details")}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Action Successfully Updated
                </p>
                <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
                  You have updated the selected <br />
                  action Successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AuditIssueDetailsModal