import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/growlogo.svg"

const AdminSideBarHeader = () => {
  return (
    <div>
    <NavLink to="/">
      <img className='font-normal text-3xl py-4 px-6 ' src={logo} alt="logo" />
    </NavLink>
     
    
    <div className='px-8'><hr/></div>
  </div>
  )
}

export default AdminSideBarHeader
