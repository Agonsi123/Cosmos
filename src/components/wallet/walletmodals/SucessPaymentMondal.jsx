import { FaTimes } from "react-icons/fa";
import Button from "../../Button";
import { NavLink } from "react-router-dom";
import right from "../../../assets/right.png";

const SucessPaymentModal = ({
  setAddFunds,
  setConfirm,
  setPaySucess,
  setGoBack,
}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 text-center rounded-lg space-y-3shadow-lg w-96">
        <span 
          className="text-[#1E1E1E80] flex justify-end"
          onClick={() => {
            setPaySucess(false);
            setConfirm(false);
          }}
        >
          <FaTimes size={20} />
        </span>
        <div className="flex justify-center py-2 items-center">
          <img src={right} alt="right" />
        </div>
        <h2 className="text-lg text-[#6B911B] font-semibold">
          Confirm Your Payment
        </h2>

        
        <h1 className="text-[#1E1E1E] py-2 font-semibold text-base">
          Payment Successful!
        </h1>
        <p className="text-[#00000080] font-normal py-2 text-sm">
          Your payment of ₦502,500 has been successfully processed. Your wallet
          has been updated.
        </p>
        <div className="py-3">
          <Button
            onClick={() => {
              setPaySucess(false);
              setConfirm(false);
            }}
            variant="submitt"
            size="lg"
          >
            Go Back to Wallet page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SucessPaymentModal;

