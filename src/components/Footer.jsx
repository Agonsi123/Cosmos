import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { PiCopyrightFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import tw from "../assets/tw.png";
import fb from "../assets/fb.png";
import lin from "../assets/lin.png";
import logowhite from "../assets/growhitee.png"

const Footer = () => {
  return (
    <div className=" bg-bgGray font-sanns text-[#FFFFFF]">
      <div className="md:flex lg:justify-between md:gap-10 block items-center lg:px-28 sm:px-18 px-8">
        <div>
          <div className="font-medium md:text-3xl py-8 md:py-0 sm:text-2xl text-[33px]">
            <NavLink to="/"><img src={logowhite} alt="white logo" /></NavLink>
          </div>
          <p className="py-3 font-normal md:text-base">
            Invest in amazing agro opportunities that <br /> create more happy
            people in the world.
          </p>
          <div className="flex gap-2 items-center">
            <span>
              <MdOutlineEmail size={16} />
            </span>
            <p>Companyemail@email.com</p>
          </div>
          <div className="flex gap-2 py-2 items-center">
            <span>
              <IoIosCall />
            </span>
            <p>+234 812 345 6789</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 font-medium text-sm  md:text-base">
          <div>
            <h1 className="text-[#EDCF6F] pt-10 pb-4">Investments</h1>
            <ul>
              <li className="py-2">
                <NavLink to="/career">Plaintain</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/investment">Cassava</NavLink>
              </li>
              <li className="flex gap-1 items-center">
                <div><NavLink to="/maize">
                  Maize
                </NavLink>{" "}</div>
                <button className="bg-white px-4 py-1 rounded-2xl text-black">
                      New
                    </button>
              </li>
              <li className="py-2">
                <NavLink to="/yam">Yam Tubers</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/millet">Millet</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/contact">Maize</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#EDCF6F] pt-10 pb-4">Company</h1>
            <ul>
              <li className="py-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/about">About Us</NavLink>
              </li>
           
              <li className="py-2">
                <NavLink to="/career">Career</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/investment">Investment</NavLink>
              </li>
              <li className="py-2 font-sanns font-medium text-base">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#EDCF6F] pt-10 pb-4">Legal</h1>
            <ul>
              <li className="py-2">
                <NavLink to="/terms">Terms</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/privacy">Privacy</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/cookies">Cookies</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#354D04] py-8">
        <div className="flex items-center justify-between lg:px-28 sm:px-18 px-8">
          <div className="flex items-center">
            <span>
              <PiCopyrightFill />
            </span>
            <p className="font-interr text-xs md:text-base">2024 Grow. All rights reserved.</p>
          </div>
          <div className="flex gap-3 items-center">
            <NavLink to="#">
              <img src={tw} alt="tw" />
            </NavLink>
            <NavLink to="#">
              <img src={lin} alt="lin" />
            </NavLink>
            <NavLink>
              <img src={fb} alt="fb" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
