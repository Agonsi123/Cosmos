import React, {useState, useRef, useEffect} from 'react';
import FilterModal from '../adminInvestments/FilterModal';

const SearchSection = ({tittle, icon, icon2, icon3, text, setStatusFilter}) => {

  const [showFilterModal, setShowFilterModal] = useState(false);
  
    //Add ref to modal and button 
    const filterModalRef = useRef(null);
    const buttonWrapperRef = useRef(null);
  
    //Detect outside click
     useEffect(() => {
       const handleOutsideClick = (event) => {
        const clickedOutsideModal = filterModalRef.current && !filterModalRef.current.contains(event.target);
        const clickedOutsideButton =
          buttonWrapperRef.current && !buttonWrapperRef.current.contains(event.target);
  
         if (showFilterModal && clickedOutsideModal && clickedOutsideButton) {
           // Close the open modal
           setShowFilterModal(false); 
         }
       };
  
       document.addEventListener("mousedown", handleOutsideClick);
       return () => {
         document.removeEventListener("mousedown", handleOutsideClick);
       };
     }, [showFilterModal]);

     const handleClick = () => {
      setShowFilterModal((prev) => !prev);
     };


  return (
    <div className="py-3 px-1 flex justify-between  items-center w-full bg-[#f8f8f8]">
      <h1 className="w-full font-sanns font-medium text-xl">{tittle}</h1>
      <div className="flex gap-2">
        <div
          className="flex justify-between items-center border-[1px] py-1 px-3 border-[#00000026] w-[27rem] rounded"
          ref={buttonWrapperRef}
        >
          <div className="flex gap-5">
            <div className="size-3 mb-4">{icon}</div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
            />
          </div>
          <div className="" onClick={handleClick}>
            {icon2}
          </div>
        </div>

        {/* Filter Modal for Investment page */}
        {showFilterModal && (
          <div ref={filterModalRef} className="absolute right-14 -mt-48 ">
            <FilterModal 
            setShowFilterModal={setShowFilterModal}
            setStatusFilter={setStatusFilter} 
            />
          </div>
        )}

        <div className="flex gap-1 items-center border-[1.07px] border-[#00000026] px-3 rounded bg-[#fcfcfc]">
          {icon3}
          <p className="font-sanns font-[500] text-[13.66px] text-[#00000080]">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchSection