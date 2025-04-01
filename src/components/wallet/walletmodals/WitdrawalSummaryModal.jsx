import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const WitdrawalSummaryModal = ({setConWithdraw, setVerify, setSucessWithdraw}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 rounded-lg space-y-3 shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-[#6B911B] font-medium text-2xl">
          Confirm Your Withdrawal
          </h2>
          <span onClick={() => {setConWithdraw(false); setVerify(false);}} className="text-[#1E1E1E80]">
            <FaTimes size={20} />
          </span>
        </div>
        <hr className="py-2" />
        <div className="space-y-2">
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
              Withdrawal amount :
            </span>
            <span className="font-medium pl-2 text-[#1E1E1E] text-sm">
              500,000
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Destination Account :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
            First Bank, ****5678
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Fee (+VAT) :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
              500
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Net Amount :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
            ₦499,500
            </span>
          </div>
        </div>
        <div className="py-2">
            <Button onClick= {() =>{setSucessWithdraw(true);setConWithdraw(false); setVerify(false); }} variant="submitt" size="lg">
              Withdraw Funds
            </Button>
          </div>
      </div>
    </div>
  );
};

export default WitdrawalSummaryModal;
