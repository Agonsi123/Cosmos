import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const AddFundsModal = ({ setAddFunds, setConfirm }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 rounded-lg space-y-2 shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-lg text-[#6B911B] font-semibold">
            Add Funds to Your Wallet
          </h2>
          <span className="text-[#1E1E1E80]" onClick={setAddFunds}>
            <FaTimes size={20}/>
          </span>
        </div>
        <hr className="py-2" />
        <h1 className="text-[#1E1E1E] font-semibold text-base">
          Payment Information
        </h1>
        <form action="">
          <label
            className="text-[#B1B2B0] text-[14px]] text-[14px]"
            htmlFor="amt"
          >
            Enter the Amount You Want to Add
          </label>
          <input
            className="placeholder:text-[#B1B2B0] border-[1px] my-2 w-full py-2 border-[#C2C3C1] text-[14px] font-medium"
            placeholder="  E.g. ₦45,000"
            type="text"
            name=""
            id=""
          />
          <span className="text-[14px] font-medium text-[#567416]">
            Note : Minimum Amount - ₦20,000
          </span>
          <p className="text-[#B1B2B0 text-[14px] py-2 font-medium]">
            Select Your Preferred Payment Method
          </p>
          <div className="flex flex-col space-y-1 py-2">
            <label
              className="text-[#1E1E1E] font-normal text-sm"
              htmlFor="credit"
            >
              Credit / Debit Card
              <input type="radio" name="" id="" />
            </label>

            <label className="text-[#1E1E1E] font-normal text-sm" htmlFor="">
              Bank Transfer
              <input className="" type="radio" name="" id="" />
            </label>
          </div>
        </form>
        <h1>Saved Credit Card</h1>
        <div className="flex justify-between items-center">
          <p>**** **** **** 5426</p>
          <div className="text-[#6B911B] font-semibold text-normal">
            <span>+</span>Add New Card
          </div>
        </div>

        <div className="flex py-4 justify-between items-center">
          <span>
            <Button variant="cancel" size="lg">
              Cancel
            </Button>
          </span>
          <span>
            <Button onClick= {() => setConfirm(true)} variant="submitt" size="lg">
              Click to Continue
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddFundsModal;
