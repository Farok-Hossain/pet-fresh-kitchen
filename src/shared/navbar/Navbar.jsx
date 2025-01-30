import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import CardIcons from "@/assets/Icons/CardIcons";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import DropDownIcon from "@/assets/Icons/DropDownIcon";
import SignInIcon from "@/assets/Icons/SignInIcon";
import SignUpIcon from "@/assets/Icons/SignUpIcon";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Recipes & Nutrition", path: "/recipe" },
    { title: "How it Works", path: "/work" },
    { title: "From the Vet", path: "/vet" },
    { title: "About Us", path: "/about" },
    { title: "Order Now", path: "/orders" },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center py-[10px]">
        {/* Logo */}
        <Link to="/">
          <div>
            <img src={logo} alt="logoImg" />
          </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-primaryOrange"
          >
            <Menu size={32} />
          </button>
        </div>

        {/* Nav Items (Hidden on smaller screens) */}
        <div className="hidden xl:flex xl:gap-4 2xl:gap-10">
          {navItems.map((item, index) => (
            <div key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primaryOrange text-xl"
                    : "text-textBlack text-xl"
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Account Button with Hover */}
        <div className="hidden xl:flex gap-6 items-center">
          <Link to="/productdetails">
            <CardIcons />
          </Link>

          {/* Profile button */}
          <div
            className="relative flex gap-6 items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="flex justify-center items-center gap-[10px] text-xl bg-primaryOrange rounded-[40px] px-6 py-[10px] text-white font-medium">
              <span>
                <ProfileIcon />
              </span>
              <span>Account</span>
              <span>
                <DropDownIcon />
              </span>
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute top-12 right-0 bg-primaryOrange rounded-[10px] mt-2 border-[2px] flex flex-col gap-2 shadow-lg transform transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <Link to="/signin">
                <button className="flex justify-center items-center gap-3 bg-primaryOrange text-white py-2 px-6 rounded-lg transition duration-300">
                  <SignInIcon />
                  <span className="text-xl font-medium">Sign In</span>
                </button>
              </Link>
              <div className="border-[1px]"></div>
              <Link to="/signup">
                <button className="flex justify-center items-center gap-3 bg-primaryOrange text-white py-2 px-6 rounded-lg transition duration-300">
                  <SignUpIcon />
                  <span className="text-xl font-medium">Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for Smaller Screens */}
      <div
        ref={sidebarRef} // Attach the ref here
        className={`fixed top-0 right-0 transform transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-[200px] xlg:w-[250px] lg:w-[230px] md:w-[220px] sm:w-[210px] h-full bg-white shadow-lg z-50 flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="logoImg" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-primaryOrange"
          >
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primaryOrange text-lg"
                  : "text-textBlack text-lg"
              }
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-4 p-4 mt-auto">
          <Link to="/signin">
            <button className="flex justify-center xlg:px-3 lg:px-3 md:px-3 sm:px-3 xs:px-3 px-3 gap-3 items-center  bg-primaryOrange text-white py-2 rounded-lg">
              <SignInIcon />
              <span>Sign In</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="flex justify-center xlg:px-3 lg:px-3 md:px-3 sm:px-3 xs:px-3 px-3 items-center gap-[7px] bg-primaryOrange text-white py-2 rounded-lg">
              <SignUpIcon />
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
