import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBarHeader from "../components/adminDashboard/adminSideBar/AdminSideBarHeader";
import AdminSideBarMenu from "../components/adminDashboard/adminSideBar/AdminSideBarMenu";
import AdminSideBarFooterTwo from "../components/adminDashboard/adminSideBar/AdminSideBarFooterTwo";
import AdminSideBarFooter from "../components/adminDashboard/adminSideBar/AdminSideBarFooter";

const AdminSideBar = () => {
  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-[245px_1fr]">
        <div className="border-r-2">
          <div className=" sticky top-0 h-screenn overflow-y-auto ">
            <AdminSideBarHeader />
            <AdminSideBarMenu />
            <AdminSideBarFooter />
            <AdminSideBarFooterTwo />
          </div>

        </div>
        <div>
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
