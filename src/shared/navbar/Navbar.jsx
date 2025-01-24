import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CommonButton } from "../../components/common/CommonButton";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import DropDownIcon from "@/assets/Icons/DropDownIcon";
import CardIcons from "@/assets/Icons/CardIcons";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Recipes & Nutrition", path: "/recipe" },
    { title: "How it work", path: "/work" },
    { title: "From the Vet", path: "/vet" },
    { title: "About Us", path: "/about" },
    { title: "Order Now", path: "/orders" },
  ];
  return (
    <div className="w-full bg-white sticky top-0 z-50 ">
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
                isActive ? "font-semibold text-primaryOrange text-xl" : "text-textBlack text-xl"
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>

       <div className="flex gap-6 items-center">
       <CardIcons />
       {/* button  */}
      <div>
        <CommonButton linkUrl="/sidebar" icon={<ProfileIcon />} className="rounded-[40px] text-white" text="Account" icon2={<DropDownIcon />}>
        </CommonButton>
      </div>
       </div>
      
    </div>
    </div>
  );
};

export default Navbar;
