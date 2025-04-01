import SetttingHeader from "../components/settings/SetttingHeader";
import SettingsMenu from "../components/settings/SettingsMenu";
import { Outlet } from "react-router-dom";


const Setting = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="px-4 ">
        <SetttingHeader />
      </div>
      <div className="grid grid-cols-[260px_1fr] ">
        <div className="sticky top-0">
          <SettingsMenu />
          

        </div>
        <div className="border rounded-md m-4 mt-[70px] border-[#E3E3E3]">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Setting;
