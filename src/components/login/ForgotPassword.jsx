import React from "react";
import { TbLockPassword } from "react-icons/tb";
import Button from "../Button";

const ForgotPassword = ({nextSlide}) => {
  return (
    <div className="w-full px-16">
      <div className="flex gap-2 items-center">
        <div className="">
          <TbLockPassword size={30} />
        </div>
        <h1 className='font-normal font-sanns md:text-[24px] lg:text-[34px]'>Forgot Password?</h1>
      </div>
      <form>
          <div className="py-2">
            <label className="font-normal text-base" htmlFor="email">
              Email Address
            </label>
            <input
              className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
              type="email"
              name="email"
              id="email"
              placeholder="   Enter Email address"
            />
          </div>
          <div className="py-3">
            {" "}
            <Button onClick={nextSlide} variant="tertiary" size="lg">
              Continue
            </Button>
          </div>
        </form>
    </div>
  );
};

export default ForgotPassword;
