import HistoryIcon from "@/assets/Icons/HistoryIcon";
import LogoutIcon from "@/assets/Icons/LogoutIcon";
import ProfileIcon2 from "@/assets/Icons/ProfileIcon2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const sidebarItems = [
        { icon: <ProfileIcon2 />, title: "Profile", path: "/sidebar" },
        { icon: <HistoryIcon />, title: "Order History", path: "history" }, 
        { icon: <LogoutIcon />, title: "Log-out", path: "/logout" },
      ];
      

  return (
    <div className=" border-[1px] w-[428px] rounded-lg mr-7 h-[250px] mt-[45px]">
      <h3 className="text-textGray text-xl font-medium leading-[30px] pt-6 pb-4 pl-5">
        Navigation
      </h3>

      {sidebarItems.map((item, index) => (
        <div key={index} className="flex items-center gap-[10px]">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-secondaryOrange w-[428px] h-14 gap-[10px] pl-5 py-4 text-[16px] flex"
                : "bg-white text-[16px] w-[428px] h-14 gap-[10px] pl-5 py-4 flex"
            }
            to={item.path}
          >
            <div className="w-6 h-6 p-1">{item.icon}</div>
            <div className=" text-[16px] font-normal leading-6 mb-4">
              {item.title}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
