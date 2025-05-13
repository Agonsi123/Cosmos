import React, {useState} from 'react';
import AdvancedSearchModal from './AdvancedSearchModal';

const AuditSearchSection = ({tittle, icon, icon2}) => {

  const[isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 px-7 flex justify-between  items-center w-full bg-[#f8f8f8]">
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
          <div className=""
          onClick={setIsOpen((prev) => !prev)}
          >
            {icon2}
          </div>
        </div>
      </div>
      {isOpen && <AdvancedSearchModal/>}
    </div>
  );
}

export default AuditSearchSection