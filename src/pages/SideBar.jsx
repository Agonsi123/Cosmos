import { Outlet } from "react-router-dom";
import SideBarFooter from "../components/dashboards/sidebar/SideBarFooter";
import SideBarHeader from "../components/dashboards/sidebar/SideBarHeader";
import SideBarMenu from "../components/dashboards/sidebar/SideBarMenu";
import SideFooterTwo from "../components/dashboards/sidebar/SideFooterTwo";

const SideBar = () => {
  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-[220px_1fr]">
        <div className="border-r-2">
          <div className=" sticky top-0 h-screenn overflow-y-auto ">
            <div className=" ">
              <SideBarHeader/>
              <SideBarMenu />
            </div>
            <div className="">
              <SideBarFooter/>
            </div>
            <div>
            <SideFooterTwo />
          </div>
          </div>
          
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
