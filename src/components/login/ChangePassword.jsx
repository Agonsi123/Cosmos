import React from "react";
import Button from "../Button";
import { TbLockPassword } from "react-icons/tb";

const ChangePassword = ({ nextSlide }) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div className="">
          <TbLockPassword size={30} />
        </div>
        <h1 className="font-normal font-sanns md:text-[24px] lg:text-[34px]">
        Change Password!
        </h1>
      </div>
      <form>
        <div className="py-2">
          <label className="font-normal text-base" htmlFor="email">
          New Password
          </label>
          <input
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="password"
            name="pw"
            id="pw"
            placeholder="   Enter New Password"
          />
        </div>
        <div className="py-2">
          <label className="font-normal text-base" htmlFor="email">
          Confirm New password
          </label>
          <input
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="password"
            name="pw"
            id="pw"
            placeholder="   Confirm New Password"
          />
        </div>
        <div>
          <Button
            type="submit"
            onClick={nextSlide}
            variant="tertiary"
            size="lg"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
