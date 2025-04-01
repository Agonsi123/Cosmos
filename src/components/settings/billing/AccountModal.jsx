import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../Button";
import { useState } from "react";


const AccountModal = ({ setAccount }) => {
  const [checkAccount, setCheckAccount] = useState({
    holder: "",
    bank: "",
    account: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckAccount({ ...checkAccount, [name]: value });
    console.log(checkAccount);
  }

  
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
          <div className="bg-white p-4 rounded-lg space-y-2 shadow-lg w-96">
            <div className="flex justify-between pb-2 items-center">
              <h2 className="text-lg text-[#6B911B] font-semibold">
                Bank Account Details
              </h2>
              <span className="text-[#1E1E1E80]" onClick={setAccount}>
                <FaTimes size={20} />
              </span>
            </div>
            <hr className="py-2" />

            <form action="">
              <label
                className="text-[#B1B2B0] text-[14px]] text-[14px]"
                htmlFor="amt"
              >
                Account Holder Name
              </label>
              <input onChange={handleChange}
                className="placeholder:text-[#B1B2B0] border-[1px] my-2 w-full py-2 border-[#C2C3C1] text-[14px]  roundedfont-medium"
                placeholder="    KOSI OJITELI"
                type="text"
                name="holder"
                id=""
              />

              <div>
                <label
                  className="text-[#1E1E1E] font-normal text-sm"
                  htmlFor="credit"
                >
                  Bank Account Detail
                  <input onChange={handleChange}
                    className="placeholder:text-[#B1B2B0] border-[1px] my-2 w-full py-2 border-[#C2C3C1] rounded text-[14px] font-medium"
                    type="text"
                    name="bank"
                    id=""
                  />
                </label>
              </div>

              <label className="text-[#1E1E1E] font-normal text-sm" htmlFor="">
                Account Number
                <input onChange={handleChange}
                  placeholder="1234567890"
                  className="placeholder:text-[#B1B2B0] rounded border-[1px] my-2 w-full py-2 border-[#C2C3C1] text-[14px] font-medium"
                  type="text"
                  name="account"
                  id=""
                />
              </label>
              <label className="text-[#1E1E1E] font-normal text-sm" htmlFor="">
                Account Type
                <input onChange={handleChange}
                  placeholder="savings"
                  className="placeholder:text-[#B1B2B0] border-[1px] my-2 w-full py-2 border-[#C2C3C1] text-[14px] font-medium rounded"
                  type="text"
                  name="type"
                  id=""
                />
              </label>
              <div className="flex py-4 justify-between items-center">
                <span>
                  <Button variant="cancel" size="lg">
                    Cancel
                  </Button>
                </span>
                <span>
                  <Button variant="submitt" size="lg">
                    Save Changes
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
