import aprilmaize from "../assets/aprilmaize.png";

const SubHeader = () => {
  return (
    <div className="w-full font-sanns text-[#FFFFFF]  p-4 lg:px-28 sm:px-18 px-2  bg-[#000000BF]">
      <div className="flex  md:justify-between md:gap-0 gap-4 items-center">
      <div>
        <p className="font-semi-bold text-xs md:text-base">
          April Maize <strong>Funding</strong> Cycle, Limited slots available!
        </p>
      </div>
      <div className="text-xs md:text-base">
        <p>
          Ends in{" "}
          <span>
            <strong>10 Days</strong>,
          </span>{" "}
          <span>
            {" "}
            <strong>12 Hours</strong>,
          </span>{" "}
          <span>
            {" "}
            <strong>30 Minutes</strong>
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SubHeader;
