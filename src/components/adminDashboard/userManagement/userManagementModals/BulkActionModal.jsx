import React, { useState } from 'react';
import WarningModal from './WarningModal';
import { GiOrange, GiSandsOfTime } from "react-icons/gi";
import { CiCircleCheck, CiCircleRemove, CiWarning } from "react-icons/ci";
import hourglassgreen from "../../../../assets/hourglassgreen.svg";
import hourglassorange from "../../../../assets/hourglassorange.svg";
import goodgreen from "../../../../assets/goodgreen.svg";
import goodorange from "../../../../assets/goodorange.svg";

const BulkActionModal = ({setShowBulkModal}) => {

    const [active, setActive] = useState(null);


  return (
    <>
      <div
        className="bg-transparent fixed min-h-screen z-10 w-[100%] top-0 left-0"
        // onClick={() => setShowBulkModal(false)}
      >
        <div className="flex flex-col gap-2 py-8 px-4 rounded-xl bg-white shadow-lg absolute top-[58%] right-[4.5%]">
          <button
            className="border-b-[0.5px] border-[rgba(0,0,0,0.08)] p-2 text-left text-sm font-[600] text-[#424242]"
            onClick={() => setActive("reactivateAccount")}
          >
            Reactivate Selected Accounts
          </button>

          <button className="border-b-[0.5px] border-[rgba(0,0,0,0.08)] p-2 text-left text-sm font-[600] text-[#424242]">
            Suspend Selected Accounts
          </button>

          <button className="bg-[#fbe2e2] p-2 rounded-md text-[#b20000] text-left text-sm font-[600]">
            Delete Selected Accounts
          </button>
        </div>
      </div>

      {/* Modals for Bulk Action */}
      {/* Accounts reactivation warning */}

      {active === "reactivateAccount" ? (
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
                    onClick={() => setActive(null)}
                  >
                    <CiCircleRemove className="size-6" />
                  </div>
                </div>
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  Are you sure you want to reactivate <br />
                  12 selected user accounts?
                </p>
              </div>
              <button
                className="bg-[#6b911b] text-white py-2 px-6 rounded-[4px]"
                onClick={() => setActive("reactivateSuccessful")}
              >
                Yes, Reactivate Users
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Accounts reactivation success  */}

      {active === "reactivateSuccessful" ? (
        <div className="bg-black bg-opacity-40 fixed h-screen z-30 w-full flex items-center justify-center inset-0">
          <div className="bg-white w-[32.5%] mt-2 rounded-xl shadow-lg">
            <div className="m-6 flex flex-col gap-4 items-center">
              <div className="flex relative">
                <div className="border-8 border-[#f5fbe9] bg-[#ecf7d4] rounded-full">
                  <img src={goodgreen} alt="Good Icon" />
                </div>
                <div
                  className="absolute right-[-164px] -top-2"
                  onClick={() => setActive(null)}
                >
                  <CiCircleRemove className="size-6" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center text-base font-semibold text-[#1e1e1e]">
                  User Accounts Successfully Reactivated
                </p>
                <p className="text-center text-sm text-[rgba(0,0,0,0.5)] font-normal">
                  You have successfully reactivated 12 <br />
                  selected user accounts
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BulkActionModal