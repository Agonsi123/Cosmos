import React from "react";
import { TbLockPassword } from "react-icons/tb";
import Button from "../Button";

const Verify = ({nextSlide}) => {
  return (
    <div className="w-full px-16">
      <div className="flex gap-2 items-center">
        <div className="">
          <TbLockPassword size={30} />
        </div>
        <h1 className="font-normal font-sanns md:text-[24px] lg:text-[34px]">
          Forgot Password?
        </h1>
      </div>
      <p>Enter Verification Code</p>

      <div className="flex gap-2 items-center py-6">
        <div className="lg:w-[77px] w-[50px] h-[42px] md:w-[65px] md:h-[85px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          5
        </div>

        <div className="lg:w-[77px] md:w-[65px] md:h-[85px] w-[50px] h-[42px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          7
        </div>

        <div className="lg:w-[77px] md:w-[65px] md:h-[85px] w-[50px] h-[42px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          1
        </div>

        <div className="lg:w-[77px] lg:h-[20px] text-[#CADDA0] flex flex-col justify-center items-center">
          -
        </div>

        <div className="lg:w-[77px] md:w-[65px] md:h-[85px] w-[50px] h-[42px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          4
        </div>

        <div className="lg:w-[77px] md:w-[65px] md:h-[85px] w-[50px] h-[42px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          6
        </div>

        <div className="lg:w-[77px] md:w-[65px] md:h-[85px] w-[50px] h-[42px] lg:h-[100px] border-[1px] border-[#D6E5B4] rounded-lg flex flex-col justify-center items-center bg-[#F9F9FA]">
          9
        </div>
      </div>
      <Button type="submit" onClick={nextSlide} variant="tertiary" size="lg">
              Verify
            </Button>
    </div>
  );
};

export default Verify;
