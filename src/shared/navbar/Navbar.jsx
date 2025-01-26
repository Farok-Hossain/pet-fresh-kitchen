import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import CardIcons from "@/assets/Icons/CardIcons";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import DropDownIcon from "@/assets/Icons/DropDownIcon";
import SignInIcon from "@/assets/Icons/SignInIcon";
import SignUpIcon from "@/assets/Icons/SignUpIcon";


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Recipes & Nutrition", path: "/recipe" },
    { title: "How it work", path: "/work" },
    { title: "From the Vet", path: "/vet" },
    { title: "About Us", path: "/about" },
    { title: "Order Now", path: "/orders" },
  ];

  return (
    <div className=" hidden xl:block w-full bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center py-[10px]">
        {/* Logo */}
        <div>
          <img src={logo} alt="logoImg" />
        </div>

        {/* Nav Items */}
        <div className="flex gap-10">
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
        <div className="flex gap-6 items-center">
        <Link to="/productdetails">
        <CardIcons />
        </Link>
        
        <div
          className="relative flex gap-6 items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <button className="flex justify-center items-center gap-[10px] text-xl bg-primaryOrange rounded-[40px] px-6 py-[10px] text-white font-medium"><span><ProfileIcon /></span> <span>Account</span> <span><DropDownIcon /></span></button>
          {isHovered && (
            <div className="absolute top-12 bg-primaryOrange rounded-[10px] mt-2 flex justify-center right-0 border-[2px] flex-col gap-2">
              <Link to="/signin"><button className="flex justify-center items-center  gap-[29px]  bg-primaryOrange text-white py-[10px] pl-6 pr-7 rounded-[10px] hover:bg-primaryOrange">
                <span><SignInIcon /></span>
                <span className="text-xl font-medium">Sign In</span>
              </button></Link>
              <div className="border-[1px]"></div>
              <Link to="/signup">
              <button className="flex justify-center items-center gap-[29px] bg-primaryOrange text-white py-[10px] px-6 rounded-lg hover:bg-primaryOrange">
                <span><SignUpIcon /></span>
                <span className="text-xl font-medium">Sign Up</span>
              </button></Link>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
