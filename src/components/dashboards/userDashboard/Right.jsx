import React from "react";
import RightChart from "./RightChart";
import cocoa from "../../../assets/coke.png";
import coke from "../../../assets/cocoa.png";
import veg from "../../../assets/veg.png";

const Right = ({ name, percentage, color }) => {
  return (
    <div className="mt-14 w-1/2 space-y-8 rounded-2xl pt-8 shadow-xl ">
      <h1 className="text-[#4D4D4D] text-sm pl-6 font-semibold font-sanns">Investments</h1>
      <div>
        {" "}
        <RightChart
          name="Cocoa"
          percentage={74}
          color="linear-gradient(to right, #FFBF1A, #FF4080)"
          img={cocoa}
        />
        
        <RightChart
          name="Vegetable"
          percentage={52}
          color="linear-gradient(to right, #FFBF1A, #FF4080)"
          img={veg}
        />
        
        <RightChart
          name="Cassava"
          percentage={36}
          color="linear-gradient(to right, #FFBF1A, #FF4080)"
          img={coke}
        />
        
      </div>
    </div>
  );
};

export default Right;
