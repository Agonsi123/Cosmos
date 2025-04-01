import React from "react";
import OverFlowProps from "../dashboards/OverFlowProps";
import { NavLink } from "react-router-dom";
import vector from "../../assets/vec.png";
import AddFundsModal from "./walletmodals/AddFundsModal";
import Withdraw from "./walletmodals/Withdraw";
import { useState } from "react";
import Button from "../Button";
import PaymentConfirmModal from "./walletmodals/PaymentConfirmModal";
import SucessPaymentModal from "./walletmodals/SucessPaymentMondal";
import VerifyWithdrawModal from "./walletmodals/VerifyWithdrawModal";
import WitdrawalSummaryModal from "./walletmodals/WitdrawalSummaryModal";
import SucessWithdrawModal from "./walletmodals/SucessWithdrawModal";

const wallets = [
  {
    id: 1,
    title: "WALLET BALANCE",
    balance: 5000000,
  },
  {
    id: 2,
    title: "TOTAL ROI CREDITED",
    balance: 1000000,
  },
  {
    id: 3,
    title: "FUNDS WITHDRAWN",
    balance: 850000,
  },
  {
    id: 4,
    title: "PENDING TRANSACTIONS",
    balance: 1200000,
  },
];

const WalletOverview = () => {
  const [addFunds, setAddFunds] = useState(null);
  const [withdraw, setWithdraw] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [paySuccess, setPaySucess] = useState(null);
  const [sucessWithdraw, setSucessWithdraw] = useState(null);
  // const [goBack, setGoBack] = useState(null);
  const [verify, setVerify] = useState(null);
  const [conWithdraw, setConWithdraw] = useState(null);
  const closeFunds = () => {
    setAddFunds(false);
  };
  const closeWithdraw = () => {
    setWithdraw(false);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };
  const closePaySucess = () => {
    setPaySucess(false);
  };
  const closeGoBack = () => {
    setGoBack(false);
  };
  const closeVerify = () => {
    setVerify(false);
  };
  const closeConWithdraw = () => {
    setConWithdraw(false);
  };
  const closeSucessWithdraw = () => {
    setSucessWithdraw(false);
  };
  return (
    <div className="py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1E1E1E] font-medium text-[22px]">
          Quick Overview of Your Funds
        </h1>
        <div className="flex gap-2  items-center py-1 px-4 rounded text-white">
          <Button onClick={() => setAddFunds(true)} variant="cancel">
            Add Funds
          </Button>
          <Button onClick={() => setWithdraw(true)} variant="submitt">
            Withdraw
          </Button>
        </div>
      </div>
      <ul className=" flex justify-start gap-36 border-b-2 border-dotted py-6 ">
        {wallets.map((wallet) => (
          <li className="border-l-2  pl-2 first:border-l-0" key={wallet.id}>
            <OverFlowProps
              key={wallet.id}
              title={wallet.title}
              balance= {wallet.balance}
            />
          </li>
        ))}
      </ul>
      {addFunds && (
        <AddFundsModal
          setAddFunds={closeFunds}
          setConfirm={() => {
            setAddFunds(false);
            setWithdraw(false);
            setPaySucess(false);
            setVerify(false);
            setConfirm(true);
          }}
          setPaySucess={() => {
            setAddFunds(false)
            setConfirm(false)
            setPaySucess(true)
          }}
          setGoBack={() =>{
            setAddFunds(false)
            setConfirm(false)
            setPaySucess(false)
          }}
        />
      )}
      {withdraw && <Withdraw setVerify={setVerify} setWithdraw={closeWithdraw} />}
      {confirm && <PaymentConfirmModal confirm={confirm} setPaySucess={setPaySucess} setConfirm={closeConfirm} />}
      {paySuccess && <SucessPaymentModal paySuccess={paySuccess} setConfirm={closeConfirm} setPaySucess={closePaySucess} setGoBack={closeGoBack} />}
      {verify && <VerifyWithdrawModal setConWithdraw={setConWithdraw} setVerify={closeVerify}/>}
      {conWithdraw && <WitdrawalSummaryModal setSucessWithdraw={setSucessWithdraw} setVerify={setVerify} setConWithdraw={closeConWithdraw}/>}
      {sucessWithdraw && <SucessWithdrawModal setSucessWithdraw={closeSucessWithdraw}/>}
      

    </div>
  );
};

export default WalletOverview;
