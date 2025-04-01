import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const Modalprojectdetails = ({ selected, setSelected, setShow }) => {
  if (!selected) return null;

  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl pb-2 text-[#6B911B] font-medium">
            Project Details
          </h2>
          <span className="text-[#1E1E1E80]" onClick={setSelected}>
            <FaTimes size={20} />
          </span>
        </div>
        <h1 className="text-base pt-2 pb-1 font-semibold text-[#1E1E1E]">
          Project Overview
        </h1>
        <div className="font-normal space-y-1 text-sm text-[#1E1E1EBF]">
        <p>Project Name: {selected.name}</p>
        <p>Status: {selected.status}</p>
        <p className="">Description: {selected.text}</p>
        </div>

        <h1 className="text-base py-3 font-semibold text-[#1E1E1E]">
          Investment Details
        </h1>
        <div className="font-normal space-y-1 text-sm text-[#1E1E1EBF]">
        <p className="">Minimum Investment: #{selected.min}</p>
        <p>Expected Roi: {selected.roi}</p>
        <p>Start Date: March 1, 2025</p>
        <p>End Date: December 31, 2025</p>
        </div>

        <h1 className="text-base py-3 font-semibold text-[#1E1E1E]">
          Key Highlights
        </h1>
        <div className="font-normal text-sm space-y-1 text-[#1E1E1EBF]">
        <p>Opportunity to contribute to sustainable farming</p>
        <p>High ROI within a short time frame</p>
        </div>
        <div onClick={() => setShow(true)} className="py-3">
          <Button variant="tertiary" size="md">
            Invest Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modalprojectdetails;
