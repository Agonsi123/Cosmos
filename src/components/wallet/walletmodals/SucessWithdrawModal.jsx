import React from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";
import right from "../../../assets/right.png";

const SucessWithdrawModal = ({ setSucessWithdraw }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 text-center rounded-lg space-y-3shadow-lg w-96">
        <span
          onClick={() => setSucessWithdraw(false)}
          className="text-[#1E1E1E80] flex justify-end"
        >
          <FaTimes size={20} />
        </span>

        <div className="flex justify-center py-3 items-center">
          <img src={right} alt="right" />
        </div>
        

        <h1 className="text-[#1E1E1E] font-semibold text-base">
          Payment Successful!
        </h1>
        <p className="text-[#00000080] font-normal py-2 text-sm">
          Your withdrawal request has been processed. Your funds will be
          credited into your account in 5 minutes time{" "}
        </p>
        <div className="py-3">
          <Button
            onClick={() => setSucessWithdraw(false)}
            variant="submitt"
            size="lg"
          >
            Go Back to Wallet page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SucessWithdrawModal;
