import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import Button from "./Button";

const Funding = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-bgFund bg-center bg-cover bg-no-repeat  absolute inset-0"></div>
      <div className="bg-gradient-to-tr from-[#101d0e] to-transparent absolute inset-0"></div>
      <div className="flex items-center text-center lg:py-36 xl:28 py-56 sm:py-60 justify-center md:py-44 flex-col  relative z-10  text-white">
        <h1 className="font-semibold  text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-sanns lg:leading-[76px] sm:leading-[45px] md:leading-[60px] leading-[35px]">
          Funding Farmers, Harvesting <br /> Hope for the Future
        </h1>
        <p className="font-medium font-sanns sm:pt-6 pt-0 sm:py-8 text-sm sm:text-base lg:text-lg  text-center">
          Join thousands of investors funding Nigeria’s agricultural <br />
          growth while earning sustainable returns
        </p>
        <div className=" gap-2 my-12 sm:my-0 relative ">
          <Button variant="secondary" size="lg">
            Begin Your Investment Journey Today
          </Button>
          <span className="absolute right-[5px] top-[7px]">
            <GrFormNextLink size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Funding;
