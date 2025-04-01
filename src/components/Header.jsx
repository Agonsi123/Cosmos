import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../assets/growlogo.svg"



const navbars = [
  {
    id: 1,
    title: "About Us",
    link: "about",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "portfolio",
  },
  {
    id: 3,
    title: "Testimonials",
    link: "testimonials",
  },
  {
    id: 4,
    title: "Contact Us",
    link: "contact",
  },
];

const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen((open) => !open);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };

  
  return (
    <header
      className={`relative font-inter py-4 font-sans text-base font-medium justify-between pt-4  ${
        open && "overflow-hidden h-screen"
      }`}
    >
      <div
        className={`flex justify-between items-center py-1 bg-header lg:px-28 sm:px-18 px-8 `}
      >
        <div className="font-sanns text-blacky font-medium text-[28px] sm:[30px] md:text-[40px] lg:text-[48px] leading-[60px]">
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className="md:hidden block" onClick={onClickHandler}>
          {open ? <FaTimes /> : <IoMdMenu />}
        </div>
        <ul className="md:flex gap-4 hidden">
          {navbars.map((navbar) => (
            <li
              className="text-blacky font-normal px-2 sm:text-sm lg:text-base"
              key={navbar.id}
            >
              <Navbar navbar={navbar} />
            </li>
          ))}
        </ul>
        <div className="md:flex gap-4 hidden">
          <Button onClick={() => navigate("/login")} variant="login" size="sm">
            Login
          </Button>
          <Button onClick={() => navigate("/signup")} variant="signup" size="sm">
            Sign up
          </Button>
        </div>

        <ul onClick={onCloseHandler}
          className={`w-full absolute top-16 h-screen gap-2 text-center flex flex-col  mt-2 overflow-hidden ${
            open ? "bg-graybg inset-0 " : "hidden"
          }`}
        >
          {navbars.map((navbar) => (
            <li
              onClick={onCloseHandler}
              className="text-blacky mt-12 py-8 font-normal px-2 sm:text-sm lg:text-base"
              key={navbar.id}
            >
              <Navbar navbar={navbar} />
            </li>
          ))}
          <div className="px-8 ">
            <div className="">
              <Button onClick={() => navigate("/login")} variant="login" size="sm">
                Login
              </Button>
            </div>
            <div className="mt-4">
              <Button onClick={() => navigate("/signup")} variant="signup" size="sm">
                Sign up
              </Button>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;

const Navbar = ({ navbar }) => {
  return (
    <div>
      <NavLink to={navbar.link}>{navbar.title}</NavLink>
    </div>
  );
};
