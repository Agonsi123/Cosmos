import React from 'react';
import advanceFilter from '../../../assets/advanceFilter.svg';

const AdvancedSearchModal = () => {
  return (
    <div className="bg-blue-200 absolute flex flex-col gap-2 py-7 px-4 top-0 right-5">
      <div>
        <img src={advanceFilter} alt="Filter Icon" />
        <h6>Advance search and filter</h6>
      </div>
    </div>
  );
}

export default AdvancedSearchModal