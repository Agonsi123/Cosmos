import React from "react";
import vectorOne from "../../assets/v5.png";
import vectorTwo from "../../assets/v6.png";
import vectorThree from "../../assets/shield.png";

const Why = () => {
  return (
    <div className="md:px-16 px-8 md:py-16 py-10 lg:px-28">
      <div>
        <h1 className="font-semibold text-header text-center py-4 md:py-6 md:text-4xl">
          Why choose Cosmos?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center flex flex-col justify-center py-4 items-center border-[1px] border-[#E3E3E3] ">
            <div>
              <img src={vectorOne} alt="vectorOne" />
            </div>
            <h1 className="text-blacky font-semibold md:text-xl">High Return</h1>
            <p className="font-normal md:text-base text-graybg">
              Competitive ROI for agricultural investment
            </p>
          </div>
          <div className="text-center border-[1px] flex flex-col justify-center items-center border-[#E3E3E3] ">
            <div>
              <img src={vectorTwo} alt="vectorOne" />
            </div>
            <h1 className="text-blacky font-semibold md:text-xl">
              Diversified Portfolio
            </h1>
            <p className="font-normal md:text-base text-graybg">
              Multiple crop types and investment option
            </p>
          </div>
          <div className="text-center border-[1px] flex flex-col justify-center items-center border-[#E3E3E3] ">
            <div className="">
              <img src={vectorThree} alt="vectorOne" />
            </div>
            <h1 className="text-blacky font-semibold md:text-xl">Transparency</h1>
            <p className="font-normal md:text-base text-graybg">
              Regular updates and clear reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
