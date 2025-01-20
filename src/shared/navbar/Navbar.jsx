import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CommonButton } from "../../components/common/CommonButton";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import DropDownIcon from "@/assets/Icons/DropDownIcon";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Recipes & Nutrition", path: "/nutrition" },
    { title: "How it work", path: "/work" },
    { title: "From the Vet", path: "/vet" },
    { title: "About Us", path: "/about" },
    { title: "Order Now", path: "/orders" },
  ];
  return (
    <div className="w-full bg-white sticky top-0 ">
      <div className="container flex justify-between items-center py-[10px] ">
      {/* image  */}
      <div>
        <img src={logo} alt="logoImg" />
      </div>

      {/* navitems  */}
      <div className="flex gap-10 ">
        {navItems.map((item, index) => (
          <div key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primaryOrange text-xl" : "text-textBlack text-xl"
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>

      {/* button  */}
      <div>
        <CommonButton icon={<ProfileIcon />} className="rounded-[40px]" text="Account" icon2={<DropDownIcon />}>
        </CommonButton>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
