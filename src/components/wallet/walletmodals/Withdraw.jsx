import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const Withdraw = ({setVerify, setWithdraw}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 rounded-lg space-y-3 shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-lg text-[#6B911B] font-semibold">
            Withdraw from Your Wallet
          </h2>
          <span onClick={setWithdraw} className="text-[#1E1E1E80]">
            <FaTimes size={20} />
          </span>
        </div>
        <hr className="py-2" />
        <h1 className="text-[#1E1E1E] font-semibold text-base">
          Withdrawal Details
        </h1>
        <form className="text-normal">
          <label  className="pr-3 text-[#1E1E1EBF] text-normal font-medium " htmlFor="amt">
            Enter the Amount You Want to Withdraw
          </label>
          <input
            className=" border-[#C2C3C1] border-[1px] mt-2 rounded w-full px-2 py-1 placeholder: text-[#567416]"
            type="text"
            name="amt"
            id="amt"
            placeholder="  Note : Minimum Amount - ₦20,000"
          />
          <div>
            <p className="text-[#1E1E1EBF] text-normal py-3 font-medium">Select Your Bank Account</p>
            <div className="py-2">
              <input type="radio" name="" id="" />
              <label htmlFor="">First Bank : ****5678 (Tina Edwards)</label>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor="">Zenith Bank : ****1234 (Tina Edwards)</label>
            </div>
          </div>
          <div className="flex pt-3 justify-between items-center">
            <p>**** **** **** 5426</p>
            <div className="text-[#6B911B] font-semibold text-normal">
              <span>+</span>Add New Card
            </div>
          </div>
          <div className="flex gap-4 py-2 items-center"></div>
        </form>
        <div className="flex py-4 justify-between items-center">
          <span>
            <Button variant="cancel" size="lg">
              Cancel
            </Button>
          </span>
          <span>
            <Button onClick= {() => {setVerify(true); setWithdraw(false)} }variant="submitt" size="lg">
              Click to Continue
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
