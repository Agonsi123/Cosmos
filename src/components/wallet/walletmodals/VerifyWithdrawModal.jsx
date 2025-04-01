import React from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";

const VerifyWithdrawModal = ({setVerify, setConWithdraw}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 rounded-lg space-y-3 shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-[#1E1E1E] font-semibold text-base">
            Verify Your Withdrawal
          </h2>
          <span onClick={setVerify} className="text-[#1E1E1E80]">
            <FaTimes size={20} />
          </span>
        </div>
        <hr className="py-2" />
        <p className="font-medium text-base text-[#00000080]">Enter Verification Code Sent to Your Email</p>
        <p className="font-medium text-base text-[#00000080]">Code expires in 5:00</p>
        <div className="flex justify-between items-center pb-3">
            <div className="bg-[#F9F9FA] text-center rounded-xl w-10 h-14 font-semibold text-5xl text-[#000000]">5</div>
            <div className="bg-[#F9F9FA] text-center rounded-xl w-10 h-14 font-semibold text-5xl text-[#000000]">2</div>
            <div className="bg-[#F9F9FA] text-center rounded-xl w-10 h-14 font-semibold text-5xl text-[#000000]">2</div>
            <div className="bg-[#F9F9FA] text-center rounded-xl w-10 h-14 font-semibold text-5xl text-[#000000]"><p className=" border-x-2"></p></div>
            <div className="bg-[#F9F9FA] text-center rounded-xl w-10 h-14 font-semibold text-5xl text-[#000000]"></div>
        </div>
        <span>
          <Button onClick={setConWithdraw} variant="submitt" size="lg">
            Verfiy
          </Button>
        </span>
        <p className="font-medium text-base text-[#00000080]">Didn’t get code? <a href="#">RESEND CODE</a></p>
      </div>
    </div>
  );
};

export default VerifyWithdrawModal;
