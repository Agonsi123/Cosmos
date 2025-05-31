import React from 'react';
import { NavLink } from 'react-router-dom';
import setting from "../../../assets/setting.png";

const AdminSideBarFooter = () => {
  return (
    <div className="px-4  mt-[100px] overflow-y-auto sticky">
      <div className="py-6 space-y-3">
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $`}></div>
          <img src={setting} alt="invest" />
          <div className="font-sanns text-base font-medium">
            <NavLink to="/adminSidebar/adminSettings">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AdminSideBarFooter
