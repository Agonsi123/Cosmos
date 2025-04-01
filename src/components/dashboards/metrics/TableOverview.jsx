import React from 'react'

const tables = [
    {
        id: 1,
        name:"April Maze Cycle",
        status: "active",
        amount:100000,
        roi: 20,
        color: "text-[#02487A] bg-[#E2F1FC]",
        date: "Jan 05 2025"
    },
    {
        id: 2,
        name:"Rice Platform",
        status: "Completed",
        amount:150000,
        roi: 25,
        color: "text-[#027A48] bg-[#ECFDF3]",
        date: "Jan 05 2025"
    },
    {
        id: 3,
        name:"Cocoa Season",
        status: "pending",
        amount:50000,
        roi: 15,
        color: "text-[#713F12] bg-[#FEF9C3]",
        date: "Jan 05 2025"
    },
    {
        id: 4,
        name:"Cassava Cycle",
        status: "completed",
        amount:200000,
        roi: 18,
        color: "text-[#027A48] bg-[#ECFDF3]",
        date: "Jan 05 2025"
    }

]
const TableOverview = () => {
  return (
    <div className='py-6 overflow-x-auto '>
      <table className='min-w-full table-fixed'>
        <thead className='bg-[#0000000D] shadow-md'>
            <tr className='font-sans text-[#4F5144] font-medium text-sm'>
                <th className=' py-2 w-1/4 text-left'>  Project Name</th>
                <th className=' py-2 w-1/6 text-left'>Status</th>
                <th className=' py-2 w-1/5 text-left'>Investment Amount</th>
                <th className='py-2 w-1/6 text-left'>ROI (Projected)</th>
                <th className='py-2 w-1/3 text-left'>Last Updated</th>
               
            </tr>
        </thead>
        <tbody>
            {
                tables.map((table) => (
                    <tr className=' text-[#4F5144] text-sm font-normal border-b border-gray-300' key={table.id}>
                        <td>{table.name}</td>
                        <td>
                            <span className={ `px-4 py-1 rounded-md ${table.color}`}>{table.status}</span>
                        </td>
                        <td>₦{table.amount}</td>
                        <td className='px-2 py-4 ml-2'>{table.roi}</td>
                        <td>{table.date}</td>
                        

                    </tr>
                    
                )
                )
            }
        </tbody>
        
      </table>
    </div>
  )
}

export default TableOverview
