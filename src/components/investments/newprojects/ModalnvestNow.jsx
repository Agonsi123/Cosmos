import React from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";
import ModalSuccess from "./ModalSuccess";

const ModalnvestNow = ({ show, setShow, setSucess }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-[#6B911B] font-medium">
            Investment Confirmation
          </h1>
          <span className="text-[#1E1E1E80]" onClick={setShow}>
            <FaTimes size={20} />
          </span>
        </div>
        <p>
          <span>Project Name :</span> <span>{show.name}</span>
        </p>
        <p>
          <span>Roi :</span> <span>{show.roi}</span>
        </p>
        <p>
          <span>On ₦100K Investment </span>{" "}
          <span>₦125,000 (₦25,000 profit)</span>
        </p>
        <form>
          <label className="pr-3 " htmlFor="amt">
          Enter Investment Amount
          </label>
          <input
            className=" border-[#C2C3C1] border-[1px] mt-2 rounded w-full px-2 py-1 placeholder: text-[#567416]"
            type="text"
            name="amt"
            id="amt"
            placeholder="Note : Minimum Amount - ₦50,000     "
          />
          <div className="flex gap-3 py-2">
            <input type="checkbox" name="confirm" id="confirm" />
            <p>I confirm this amount will be deducted from my wallet</p>
          </div>
          <div className="flex gap-4 py-2 items-center">
            <span className="w-full">
              <Button onClick={setShow} variant="tertiarysec" size="sm">
                Cancel
              </Button>
            </span>
            <span className="w-full">
              <Button
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission from causing a re-render
                  setShow(null);
                  setSucess(true);
                }}
                variant="tertiary"
                size="sm"
              >
                Confirm Investment
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalnvestNow;
