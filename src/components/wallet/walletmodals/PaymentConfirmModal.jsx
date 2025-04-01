import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const PaymentConfirmModal = ({ setConfirm, setPaySucess }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 rounded-lg space-y-3shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-lg text-[#6B911B] font-semibold">
            Confirm Your Payment
          </h2>
          <span className="text-[#1E1E1E80]" onClick={setConfirm}>
            <FaTimes size={20} />
          </span>
        </div>
        <hr className="py-2" />
        <div className="space-y-2">
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
              Payment Method :
            </span>
            <span className="font-medium pl-2 text-[#1E1E1E] text-sm">
              Credit/Debit Card
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Amount to Add :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
            ₦500,000
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Transaction Fee :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
              2000
            </span>
          </div>
          <div>
            <span className="text-sm font-normal text-[#1E1E1E]">
            Total Amount :
            </span>
            <span className="font-medium text-[#1E1E1E] pl-2 text-sm">
              40000
            </span>
          </div>
        </div>

        <div className="py-3">
          <Button onClick= {() => setPaySucess(true)} variant="submitt" size="lg">
            Add Funds
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmModal;
