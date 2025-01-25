import { useState } from "react";
import HistoryIcon from "@/assets/Icons/HistoryIcon";
import LogoutIcon from "@/assets/Icons/LogoutIcon";
import ProfileIcon2 from "@/assets/Icons/ProfileIcon2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sidebarItems = [
    { icon: <ProfileIcon2 />, title: "Profile", path: "/sidebar" },
    { icon: <HistoryIcon />, title: "Order History", path: "/history" },
    {
      icon: <LogoutIcon />,
      title: "Log-out",
      path: "#",
      onClick: () => setIsModalOpen(true), // Open modal on click
    },
  ];

  const handleItemClick = (index, onClick) => {
    setActiveIndex(index); // Update the active state
    if (onClick) onClick(); // Call the custom onClick if provided
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="border-[1px] w-[428px] rounded-lg mr-7 h-auto mt-[45px]">
        <h3 className="text-textGray text-xl font-medium leading-[30px] pt-6 pb-4 pl-5">
          Navigation
        </h3>

        {sidebarItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[10px]">
            <NavLink
              className={`w-[428px] h-14 gap-[10px] pl-5 py-4 flex ${
                activeIndex === index
                  ? "bg-secondaryOrange text-textGray" // Active styles
                  : "bg-white text-[#666]" // Inactive styles
              } text-[16px]`}
              to={item.path}
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation for logout
                handleItemClick(index, item.onClick);
              }}
            >
              <div className="w-6 h-6 p-1">{item.icon}</div>
              <div className="text-[16px] font-normal leading-6 mb-4">
                {item.title}
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal if clicking outside
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <p className="text-[32px] text-[#2F2F2F] leading-[44px]">
              Are You Sure, You Want to Sign Out?
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="px-[44px] py-1 rounded-3xl bg-primaryOrange text-2xl text-white"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="px-[44px] py-1 rounded-3xl text-2xl bg-primaryOrange text-white"
                onClick={handleCloseModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
