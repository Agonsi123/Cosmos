import React, {useContext, useState} from 'react';
import AdvancedSearchModal from './AdvancedSearchModal';
import { AppContext } from '../../../context/Index';

const AuditSearchSection = ({tittle, icon, icon2}) => {
  const {showAdvanceSearch, setShowAdvanceSearch} = useContext(AppContext);

  // const[isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 px-7 flex justify-between  items-center w-full bg-[#f8f8f8] relative">
      <h1 className="w-full font-sanns font-medium text-xl">{tittle}</h1>
      <div className="flex gap-3">
        <div className="flex justify-between items-center border-[1px] py-1 px-4 border-[#00000026] w-[27rem] rounded">
          <div className="flex gap-2 items-center">
            <div className="size-7"> {icon}</div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
            />
          </div>
          <div
            className="cursor-pointer"
            // onClick={setShowAdvanceSearch((prev) => !prev)}
            // onClick={setShowAdvanceSearch(true)}
          >
            {icon2}
          </div>
          {showAdvanceSearch && <AdvancedSearchModal />}
        </div>
      </div>
    </div>
  );
}

export default AuditSearchSection