import React, {useState} from 'react';
import notification from '../../../assets/notification.svg';
import { CiCircleRemove } from "react-icons/ci";
import kycGood from '../../../assets/kycGood.svg';
import kycOff from '../../../assets/kycOff.svg';
import horiDownload from '../../../assets/horiDownload.svg';
import greenFailed from '../../../assets/greenFailed.svg';
import greenDoubleArrow from '../../../assets/greenDoubleArrow.svg';


const UsermanagementHeader = ({title, text, img}) => {
    const[showNotification, setShowNotification] = useState(false);
    return (
      <>
        <div className="py-4 px-4">
          <div className="">
            <div className="flex gap-8 justify-between items-center">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-[#1E1E1E] font-semibold text-xl font-manrope">{title}</h2>
                  <div className="flex items-center gap-3">
                    <p className="text-[#00000080] font-normal text-sm">{text}</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer" onClick={() => setShowNotification(true)}>
                {img}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
            <hr />
          </div>
        </div>

        {/* Notification modal */}
        {showNotification === true ? (
          <div className=" shadow-xl absolute right-0 top-14 z-50">
            <div className="flex justify-between border-b border-[rgba(0,0,0,0.25)] py-4 px-6 rounded-t-xl bg-white w-[379px]">
              <h3 className="font-sans text-2xl font-medium text-[#6b911b]">Notifications</h3>
              <div className="cursor-pointer mt-2" onClick={() => setShowNotification(false)}>
                <CiCircleRemove className="size-6 " />
              </div>
            </div>
            <div className="flex gap-7 pt-4 pb-8 px-6 rounded-b-xl bg-white w-[379px]">
              <div className="flex flex-col gap-5 ">
                <h5 className="font-[Mulish] font-extrabold text-sm text-[#6b911b]">
                  You have 5 notifications
                </h5>
                <div className="flex gap-3">
                  <div className="bg-[#e9f8ca] p-3 rounded-full">
                    <img src={kycGood} alt="" />
                  </div>
                  <div className="font-sanns">
                    <p className="font-semibold text-sm text-[#424242]">KYC Verification</p>
                    <p className="font-normal text-xs text-[#a8a8a8]">
                      David Olana successfully verified
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#e9f8ca] p-3 rounded-full">
                    <img src={greenDoubleArrow} alt="" />
                  </div>
                  <div className="font-sanns">
                    <p className="font-semibold text-sm text-[#424242]">Large Unusual Transaction</p>
                    <p className="font-normal text-xs text-[#a8a8a8]">
                      N5,000,000 - First-time transaction from...
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#e9f8ca] p-3 rounded-full">
                    <img src={kycOff} alt="" />
                  </div>
                  <div className="font-sanns">
                    <p className="font-semibold text-sm text-[#424242]">Identity Verification Pending</p>
                    <p className="font-normal text-xs text-[#a8a8a8]">
                      Lisa Effiong - NIN unverified
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#e9f8ca] p-3 rounded-full">
                    <img src={horiDownload} alt="" />
                  </div>
                  <div className="font-sanns">
                    <p className="font-semibold text-sm text-[#424242]">High-Risk Login Attempt</p>
                    <p className="font-normal text-xs text-[#a8a8a8]">
                      Unverified login details
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-[#e9f8ca] p-3 rounded-full">
                    <img src={greenFailed} alt="" />
                  </div>
                  <div className="font-sanns">
                    <p className="font-semibold text-sm text-[#424242]">Mu;tiple Failed Transactions</p>
                    <p className="font-normal text-xs text-[#a8a8a8]">
                      John Doe is having multipl...
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2 bg-[#e7e9e2]">
                <div className='bg-[#ebfacd] w-full h-[76px]'></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
      </>
    );
}

export default UsermanagementHeader