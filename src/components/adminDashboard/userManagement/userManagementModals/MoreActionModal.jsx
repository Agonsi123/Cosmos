import React, {useState} from 'react';
import { CiCircleRemove } from "react-icons/ci";
import hourglassgreen from "../../../../assets/hourglassgreen.svg";
import hourglassorange from "../../../../assets/hourglassorange.svg";
import goodgreen from "../../../../assets/goodgreen.svg";
import goodorange from "../../../../assets/goodorange.svg";


const MoreActionModal = () => {
  const [activeModal, setActiveModal] = useState("moreAction");
    
  return (
    <>
      <div
        className="bg-transparent fixed min-h-screen w-[100%] inset-0"
        // onClick={() => setIsOpen(!isOpen)}
        // onClick={() => setShowMoreAction(false)}
      >
        <div className="flex flex-col gap-2 py-7 px-4 rounded-xl bg-white shadow-lg absolute top-[35%] right-[4%]">
          <button
            className="border-b-[0.5px] border-[rgba(0,0,0,0.15)] p-1 text-left text-sm font-[600]"
            onClick={() => setActiveModal("reactivationWarning")}
            // onClick={() => setIsOpen('reactivationWarning')}
          >
            Reactivate User
          </button>
          <button
            className="border-b-[0.5px] border-[rgba(0,0,0,0.15)] p-1 text-left text-sm font-[600]"
            onClick={() => setActiveModal("suspendWarning")}
          >
            Suspended User
          </button>
          <button className="bg-[#6b911b] py-1.5 px-8 rounded-md text-white">
            <h5>View User Details</h5>
          </button>
        </div>
      </div>

      {/* Modals for Reactivate User */}
      {/*User Reactivation warning modal  */}

      {activeModal === "reactivationWarning" ? (
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
                    onClick={() => setActiveModal("moreAction")}
                  >
                    <CiCircleRemove className="size-6" />
                  </div>
                </div>
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Are you sure you want to reactivate
                  <br />
                  the selected account?
                </p>
              </div>
              <button
                className="bg-[#6b911b] text-white py-2 px-6 rounded-[4px]"
                onClick={() => setActiveModal("reactivationReason")}
              >
                Yes, Reactivate User
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Reactivation reason modal */}

      {activeModal === "reactivationReason" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
              <h3 className="font-sans text-2xl font-medium text-[#6b911b]">
                Reason For Reactivation
              </h3>
              <div className="cursor-pointer mt-1" onClick={() => setActiveModal("moreAction")}>
                <CiCircleRemove className="size-7 " />
              </div>
            </div>
            <p className="font-semibold text-base text-[#1e1e1e]">Payment Information</p>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-[rgba(30,30,30,0.75)]" htmlFor="">
                Please add reason for reactivating this account
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
              <div
                className="border border-[#6b911b] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveModal("moreAction")}
              >
                <button className="text-[#6b911b]">Cancel</button>
              </div>
              <div
                className="border bg-[#6b911b] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveModal("reactivationSuccess")}
              >
                <button className="text-white">Reactivate User</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Account Reactivation successful modal */}

      {activeModal === "reactivationSuccess" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
                  <img src={goodgreen} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setActiveModal("moreAction")}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  User Accounts Successfully Reactivated
                </p>
                <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
                  You have successfully reactivated the <br />
                  selected user account
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Modals for Suspended User */}
      {/* Account suspend warning modal */}

      {activeModal === "suspendWarning" ? (
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
                    onClick={() => setActiveModal("moreAction")}
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
                onClick={() => setActiveModal("suspensionReason")}
              >
                Yes, Please Suspend
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Suspension Reason modal */}

      {activeModal === "suspensionReason" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[45%] rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <div className="flex justify-between pt-2 pb-6 border-b border-[rgba(0,0,0,0.25)]">
              <h3 className="font-sans text-2xl font-medium text-[#e68c16]">
                Reason For Suspension
              </h3>
              <div className="cursor-pointer mt-1" onClick={() => setActiveModal("moreAction")}>
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
                placeholder="E.g N45,000"
                className="border border-[#c2c3c1] rounded-md py-2 h-[143px] bg-white"
              ></textarea>
            </div>
            <div className="flex gap-3 font-semibold text-base">
              <div
                className="border border-[#e68c16] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveModal("moreAction")}
              >
                <button className="text-[#e68c16]">Cancel</button>
              </div>
              <div
                className="border bg-[#e68c16] rounded py-2 pr-4 pl-3 w-[262px] text-center"
                onClick={() => setActiveModal("suspensionSuccess")}
              >
                <button className="text-white">Suspend Account</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Account suspend success modal */}

      {activeModal === "suspensionSuccess" ? (
        <div className="bg-black bg-opacity-90 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#fdf2f1] bg-[#f8e2c4] rounded-full">
                  <img src={goodorange} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setActiveModal("moreAction")}
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
    </>
  );
}

export default MoreActionModal