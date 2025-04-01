import React from "react";
import { useState } from "react";
import CardModal from "./CardModal";
import AccountModal from "./AccountModal";

const Billings = () => {
  const[card, setCard] = useState(false)
  const[account, setAccount] = useState(false)

  const HideCard= () => {
    setCard(false)
  }
  const showAccount= () => {
    setAccount(false)
  }
  return (
    <div className="p-4 ">
      <h1 className="font-sanns text-xl font-medium py-3">
        Update Your Billing Information
      </h1>
      <h1 className="font-sanns text-xl font-medium py-3">Card Details</h1>
      <div>
        <div className="flex justify-between">
          <form action="">
            <div>
              <label htmlFor="fname">Card Name</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="Ojiteli Kosi"
              />
            </div>
            <div>
              <label htmlFor="fname">Card Number</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="2344-5678-8909-987"
              />
            </div>
          </form>
          <form action="">
            <div>
              <label htmlFor="fname">Expiry</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="02/2028"
              />
            </div>
            <div>
              <label htmlFor="fname">CVV</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="467"
              />
            </div>
          </form>
        </div>
        <div className="flex my-4 justify-end">
          <button onClick={() => setCard(true)} className="border-[#6B911B] border px-2 py-1 rounded-md text-[#6B911B]">
            {" "}
            + Add New Card
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-sanns text-xl font-medium py-3">
          Bank Account Details
        </h1>
        <div className="flex py-4 justify-between">
          <form className="" action="">
            <div>
              <label htmlFor="fname">Account Holder Name</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="Ojiteli Kosi"
              />
            </div>
            <div>
              <label htmlFor="fname">Account Number</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="5678-8909-987"
              />
            </div>
          </form>
          <form action="">
            <div>
              <label htmlFor="fname">Bank Name</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="Access Bank"
              />
            </div>
            <div>
              <label htmlFor="fname">Account Type</label>
              <input
                className="border w-full py-1 rounded-md my-1"
                type="text"
                name="fname"
                id="fname"
                placeholder="Savings"
              />
            </div>
          </form>
        </div>
        <div className="flex my-4 justify-end">
          <button onClick={() => setAccount(true)} className="border-[#6B911B] border px-2 py-1 rounded-md text-[#6B911B]">
            {" "}
            + Add Bank Account
          </button>
        </div>
      </div>
      <div className="flex my-4 justify-start mt-20">
        <button className="border-[#6B911B] border px-2 py-1 rounded-md text-[#6B911B]">
          {" "}
          + Save Changes
        </button>
      </div>
      {card && <CardModal setCard={HideCard} />}
      {account && <AccountModal setAccount={showAccount}/>}
      

    </div>
  );
};

export default Billings;
