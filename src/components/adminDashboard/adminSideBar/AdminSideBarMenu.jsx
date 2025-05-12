import investment from "../../../assets/investment.png";
import overview from "../../../assets/overview.png";
import wallet from "../../../assets/wallet.png";
import v5 from "../../../assets/v5.png";
import auditIcon from "../../../assets/auditIcon.svg";
import securityIcon from "../../../assets/securityIcon.svg";
import userManage from "../../../assets/userManage.svg";
import projectsIcon from "../../../assets/projectsIcon.svg";
import { LuUsers, LuLayoutGrid } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const AdminSideBarMenu = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="font-manrope text-[#00000040] text-base font-semibold">Menu</h2>
      <div className="py-6 space-y-10 px-2 font-sanns">
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={overview} alt="overview" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-[3px] pr-16 py-2 rounded-md" : ""
              }
              to="adminDashboard"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>DashBoard</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={userManage} alt="user" />
          <div className="font-sanns text-[#1E1E1E] text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-6 py-2 rounded-md" : ""
              }
              to="userManagement"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>User Management</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={projectsIcon} alt="projects" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-16 py-2 rounded-md" : ""
              }
              to="projects"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Projects</span>
                </>
              )}
            </NavLink>
          </div>
        </div>

        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={v5} alt="v5" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-16 py-2 rounded-md" : ""
              }
              to="reports"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Reports</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={securityIcon} alt="security" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-16 py-2 rounded-md" : ""
              }
              to="security"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Security</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={auditIcon} alt="audit" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-16 py-2 rounded-md" : ""
              }
              to="auditLog"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] -top-2 h-12 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Audit Log</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBarMenu;
