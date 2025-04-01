import React from "react";
import bell from "../../assets/bell.png";

const DashBoardsHeader = ({ title, text, image }) => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="py-2">
          <h1 className="font-manrope text-xl font-semibold">{title}</h1>
          <p className="font-sanns pt-2 font-normal text-sm text-[#00000080]">
            {text}
          </p>
        </div>

        <div>
          <img src={image} alt={bell} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DashBoardsHeader;
