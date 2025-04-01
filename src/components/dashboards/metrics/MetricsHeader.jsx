import React from "react";
import face from "../../../assets/face.jpeg";
import wave from "../../../assets/wave.png";
import bell from "../../../assets/bell.png";


const MetricsHeader = () => {
  return (
    <div className="py-4">
      <div className="">
        <div className="flex gap-8 justify-between items-center">
          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-full" src={face} alt="face" />
            <div>
              <h2 className="text-[#1E1E1E] font-semibold text-lg">
                Ojiteli Kosi
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-[#00000080] font-normal text-sm">
                  Welcome back to Cosmos
                </p>
                <img src={wave} alt="wave" />
              </div>
            </div>
          </div>
          <div>
            <img src={bell} alt="bell" />
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <hr />
      </div>
    </div>
  );
};

export default MetricsHeader;
