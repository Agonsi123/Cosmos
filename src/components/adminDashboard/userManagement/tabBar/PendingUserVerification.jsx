import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import UserManagePagination from '../UserManagePagination';

const PendingUserVerification = () => {

    const userData = [
      {
        reg: 67890,
        name: "April Dave",
        email: "April@gmail.com",
        inv: 2,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 12345,
        name: "Rice Black",
        email: "Rice@gmail.com",
        inv: 25,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 23456,
        name: "Cocoa Sheen",
        email: "Cocoa@gmail.com",
        inv: 7,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 89012,
        name: "Suliat Nton",
        email: "Suliat@gmail.com",
        inv: 8,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 34567,
        name: "Adeolu Nelson",
        email: "Adeolu@gmail.com",
        inv: 22,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 45678,
        name: "Bean Kyle",
        email: "Kyle@gmail.com",
        inv: 4,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 56789,
        name: "Peter Cass",
        email: "Peter@gmail.com",
        inv: 25,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 78901,
        name: "Piper Mills",
        email: "Millsp@gmail.com",
        inv: 2,
        date: "Jan 05, 2025",
        doc: "View",
      },
    ];

  return (
    <div className="py-6 overflow-x-auto ">
      <table className="min-w-full">
        <thead className="shadow-sm">
          <tr className="font-sans text-[#4F5144] font-medium text-[14px]">
            <th className=" py-2 w-1/6"></th>
            <th className=" py-2 w-1/5 text-left">REG NO</th>
            <th className=" py-2 w-1/6 text-left">USER NAME</th>
            <th className=" py-2 w-1/6 text-left">USER EMAIL</th>
            <th className=" py-2 w-1/6 text-left"># OF INV</th>
            <th className=" py-2 w-1/6 text-left">DATE REGISTERED</th>
            <th className=" py-2 w-1/7 text-center">DOCUMENT</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((data, index) => (
            <tr
              className="border-b border-gray-110"
              key={index}
            >
              <td className="font-sanns font-normal text-sm text-[#4F5144] px-6 py-[24px]">
                <input
                  className=" border border-[#b0babf] bg-[#f6f8f9]"
                  type="checkbox"
                  name=""
                  id=""
                />
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                {data.reg}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                {data.name}
              </td>
              <td className="font-sanns font-normal text-[14px] text-[#4F5144] py-[24px]">
                {data.email}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144] px-6 py-[24px]">
                {data.inv}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                {data.date}
              </td>
              <td className="font-sanns font-bold text-sm text-gray-600 py-[24px]">
                <span className="bg-[#e6e6e6] px-2 py-1 rounded-full text-center">{data.doc}</span>
              </td>
              <td>
                <BsThreeDotsVertical className="text-[#98a2b3]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserManagePagination />
    </div>
  );
}

export default PendingUserVerification