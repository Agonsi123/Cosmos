import React from 'react'

const RoiGrowth = () => {
  return (
    <div className='font-sanns flex justify-between items-center py-6 px-4'>
        <h1 className='text-[#1E1E1E] font-medium text-xl'>ROI Growth Overtime </h1>
        <div className='flex gap-3 bg-[#6B911B0D] items-center'>
            <div className='text-header px-[4px] py-1 rounded-md font-medium text-[9px]'>Daily</div>
            <div className='text-header px-[4px] py-1 rounded-md font-medium text-[9px]'>Weekly</div>
            <div className='bg-bgGray my-1 px-[4px] py-1 rounded-md font-medium text-[9px] text-white'>Annualy</div>
        </div>
      
    </div>
  )
}

export default RoiGrowth
