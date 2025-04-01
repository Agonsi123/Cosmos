import React from 'react'

const Impact = () => {
  return (
    <div className='px-10 md:px-24 lg:px-36 py-8 font-sanns'>
      <h1 className='font-bold text-header md:text-2xl text-xl lg:text-3xl text-center'>Impact in Numbers</h1>
      <div className='flex justify-between items-center pt-6'>
        <div>
            <h1 className='font-bold md:text-4xl text-xl sm:text-2xl lg:text-6xl'>500</h1>
            <p className='lg:text-lg text-xs md:text-base sm:text-sm font-semibold text-gray'>Farmers Empowered</p>
        </div>
        <div>
            <h1 className='font-bold sm:text-2xl text-xl md:text-4xl lg:text-6xl'>10k+</h1>
            <p className='lg:text-lg text-xs md:text-base sm:text-sm font-semibold text-gray'>Hectares Cultivated</p>
        </div>
        <div>
            <h1 className='font-bold sm:text-2xl text-xl md:text-4xl lg:text-6xl'>5k+</h1>
            <p className='lg:text-lg text-xs md:text-base sm:text-lg font-semibold text-gray'>Happy Investors</p>
        </div>
        <div>
            <h1 className='font-bold text-xl md:text-4xl sm:text-2xl lg:text-6xl'>70k</h1>
            <p className='lg:text-lg text-xs md:text-base sm:text-sm font-semibold text-gray'>Ton Harvested</p>
        </div>

      </div>
    </div>
  )
}

export default Impact
