import map from "../../assets/mapp.png";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Button from "../Button";
const Connect = () => {
  return (
    <div className="px-8 md:px-18  lg:flex gap-32 py-16 lg:px-28">
      <div className="lg:w-1/2">
        <h1 className="font-semibold text-black lg:text-3xl">
          Connect with us
        </h1>
        <p className="font-normal text-base py-6 text-gray">
          Questions, comments, or suggestions? Simply fill in the form and we’ll
          be in touch shortly.
        </p>
        <div className="flex gap-2 items-center">
          <span>
            <LuMapPin size={16} />
          </span>
          <p className="font-normal sm:text-base text-xs md:text-lg">1054 Eric Moore close, 71. New Site South Side.</p>
        </div>
        <div className="flex gap-2 py-4 items-center">
          <span>
            <IoIosCall size={16} />
          </span>
          <p className="font-normal text-xs sm:text-base md:text-lg">+234 768 9110 55</p>
        </div>

        <div className="flex gap-2 items-center">
          <span>
            <MdOutlineEmail size={16} />
          </span>
          <p className="font-normal text-xs sm:text-base md:text-lg">Companyemail@email.com</p>
        </div>
        <div className="pt-8 pb-4">
          <img className="w-full h-fit" src={map} alt="mapp" />
        </div>
      </div>
      <div className="lg:w-1/2">
        <form className="border-[1px] border-[#BDBDBD] px-8 py-6 shadow-inner">
          <div className="lg:flex gap-4 hidden py-2">
            <input
              className="border-[1px] shadow-md text-gray border-[#BDBDBD] py-1 px-2 rounded-lg"
              type="text"
              name="fname"
              id="fname"
              placeholder="   firstname*"
            />
            <input
              className="border-[1px] shadow-md text-gray border-[#BDBDBD] bodrer-[#828282] py-1 px-2  rounded-lg"
              type="text"
              name="lname"
              id="lname"
              placeholder="   lastname*"
            />
          </div>
          <input
            className="border-[1px] lg:hidden block shadow-md w-full text-gray border-[#BDBDBD] py-1 px-2 rounded-lg"
            type="text"
            name="fname"
            id="fname"
            placeholder="   firstname*"
          />
          <input
            className="border-[1px] lg:hidden block  w-full mt-3 shadow-md text-gray border-[#BDBDBD] bodrer-[#828282] py-1 px-2  rounded-lg"
            type="text"
            name="lname"
            id="lname"
            placeholder="   lastname*"
          />
          <input
            className="border-[1px] shadow-md text-gray border-[#BDBDBD] mt-3 w-full bodrer-[#828282] py-1 px-2 rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="   email*"
          />
          <input
            className="border-[1px] shadow-md text-gray border-[#BDBDBD] w-full my-3 bodrer-[#828282] py-1 px-2 rounded-lg"
            type="tel"
            name="tel"
            id="tel"
            placeholder="   Phone number*"
          />
          <textarea
            className="border-[1px] mb-3 w-full bodrer-[#828282] py-1 px-2 rounded-lg"
            name="text"
            id="text"
            cols={20}
            rows={7}
            placeholder="  your message..."
          ></textarea>
          <Button variant="primary" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
