import { useState, useRef, useEffect } from "react";
import HistoryIcon from "@/assets/Icons/HistoryIcon";
import LogoutIcon from "@/assets/Icons/LogoutIcon";
import ProfileIcon2 from "@/assets/Icons/ProfileIcon2";
import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react"; // Optional icons for toggling
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle sidebar visibility
  const sidebarRef = useRef(null); // Reference to the sidebar

  const sidebarItems = [
    { icon: <ProfileIcon2 />, title: "Profile", path: "/sidebar" },
    { icon: <HistoryIcon />, title: "Order History", path: "/sidebar/history" },
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
    setIsSidebarOpen(false); // Close the sidebar after clicking an item (for mobile)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsModalOpen(false);
  };

  // Detect clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Toggle Button (Visible for screens <1200px) */}
      <button
        className="xl:hidden fixed top-[150px] left-[10px] z-50 bg-primaryOrange text-white p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <MdDashboard size={24} />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef} // Reference to the sidebar
        className={`fixed xl:static xl:mt-3 mt-[200px] top-0 left-0 z-40 h-screen xl:h-auto bg-white xl:bg-transparent xl:w-[428px] w-[250px] shadow-lg xl:shadow-none transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        <h3 className="text-textGray text-xl font-medium leading-[30px] pt-6 pb-4 pl-5">
          Navigation
        </h3>

        <div>
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[10px]">
              <NavLink
                className={`w-full h-14 gap-[10px] pl-5 py-4 flex ${
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
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal if clicking outside
        >
          <div
            className="bg-white lg:min-w-[400px] md:min-w-[380px] sm:min-w-[370px] rounded-lg shadow-lg p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <p className="xl:text-[32px] xlg:text-2xl text-xl text-center text-[#2F2F2F] xl:leading-[44px]">
              Are You Sure, You Want to Sign Out?
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/signin">
              <button
                className="px-[44px] py-1 rounded-3xl bg-primaryOrange text-2xl text-white"
                onClick={handleLogout}
              >
                Yes
              </button>
              </Link>
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
