import React from "react";
import right from "../../../assets/right.png";
import { FaTimes } from "react-icons/fa";
import Button from "../../Button";
const ModalSuccess = ({setSucess}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <span className="text-[#1E1E1E80] flex justify-end">
          <FaTimes size={20} onClick={setSucess}  />
        </span>
        <div className="flex justify-center items-center">
          <img src={right} alt="right" />
        </div>
        <h1 className="text-[#1E1E1E] py-3 text-base font-semibold text-center">
          Investment Successful!
        </h1>
        <p className="text-sm font-normal text-[#00000080]">
          Your investment of ₦100,000 on the Rice Farming Initiative project has
          been successfully processed.
        </p>
        <div className="my-2">
          <Button onClick={setSucess} variant="tertiary" size="md">
            Go Back to Investment Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
