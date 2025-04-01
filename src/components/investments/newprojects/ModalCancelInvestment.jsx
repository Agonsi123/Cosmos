import React from 'react'
import Button from '../../Button'
import { FaTimes } from 'react-icons/fa'

const ModalCancelInvestment = ({setShow, show}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
    <div className="bg-white p-6 rounded-lg h-auto space-y-3 shadow-lg w-auto">
    
          <p>cancel</p>
          <span className="w-full"><Button variant="tertiary" size="sm">Go back to Investment</Button></span>
          
    </div>
  </div>
  )
}

export default ModalCancelInvestment
