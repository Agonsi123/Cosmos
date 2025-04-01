import help from "../../../assets/help.png";
import setting from "../../../assets/setting.png";
import { NavLink } from "react-router-dom";

const SideBarFooter = () => {
  return (
    <div className="px-4  mt-[100px] overflow-y-auto sticky">
      <div className="py-6 space-y-3">
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $`}></div>
          <img src={setting} alt="invest" />
          <div className="font-sanns text-base font-medium">
            <NavLink to="/sidebar/settings">
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
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={help} alt="help" />
          <div className="font-sanns text-base font-medium">
            <NavLink to="/sidebar/help">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Help & Support</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SideBarFooter;
