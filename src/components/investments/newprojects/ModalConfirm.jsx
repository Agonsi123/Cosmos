import { FaTimes } from 'react-icons/fa'
import Button from '../../Button'

const ModalConfirm = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-[#6B911B] font-medium">
            Investment Confirmation
          </h1>
          <span className="text-[#1E1E1E80]" onClick={setShow}>
            <FaTimes size={20} />
          </span>
        </div>
        <p>Your investment of ₦100,000 on the Rice Farming Initiative project has been successfully processed..</p>
            <span className="w-full"><Button variant="tertiary" size="sm">Go back to Investment</Button></span>
            
      
      </div>
    </div>
  )
}

export default ModalConfirm
