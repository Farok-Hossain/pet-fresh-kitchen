import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CommonButton } from "../../components/common/CommonButton";
import CardIcons from "../../assets/Icons/CardIcons";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Recipes & Nutrition", path: "/nutrition" },
    { title: "How it work", path: "/work" },
    { title: "From the Vet", path: "/vet" },
    { title: "About Us", path: "/about" },
    { title: "Order Now", path: "/order" },
  ];
  return (
    <div className="container flex justify-between items-center py-[10px]">
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
        {/* <CardIcons/> */}
        <CommonButton className="rounded-[40px]" text="Account" />
      </div>
    </div>
  );
};

export default Navbar;
