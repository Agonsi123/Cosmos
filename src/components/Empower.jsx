import React from "react";
import girl from "../assets/girlempower.png";
import bullets from "../assets/bulletchart.png";


const Empower = () => {
  return (
    <div className="md:flex font-sanns justify-between items-center py-20 gap-20 md:px-16 px-8  lg:px-28">
      <div className="md:hidden block">
        <img src={girl} alt="girl" />
      </div>
      <div className="md:w-1/2">
        <div>
          <h1 className="font-semibold lg:pb-4 text-header py-6 lg:py-0  text-2xl lg:text-4xl">
            Empowering Agriculture, 
            Enriching Lives!
          </h1>
          <p className="text-gray lg:text-lg">
            At Cosmos, we bridge the gap between investors and farmers. Your
            funding empowers local farmers to grow high-potential crops,
            increase yields, and contribute to food security.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-header text-xl py-6">
            Key Benefits
          </h1>
          <ul>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Invest in sustainable agriculture with confidence
            </li>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              {" "}
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Support small-scale farmers and rural communities.
            </li>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              {" "}
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Earn competitive returns while making an impact
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
};

export default Empower;
