;
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonModal from "./CommonModal";
import productImg from "@/assets/images/productImg.png";

export const CommonButton = ({ className, text, type, linkUrl, icon, rightIcon, icon2 }) => {

  // sample modal data 
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);

  const weightData = [
    { id: 1, weight: "50 gm" },
    { id: 2, weight: "100 gm" },
    { id: 3, weight: "150 gm" },
    { id: 4, weight: "250 gm" },
    { id: 5, weight: "500 gm" },
  ];

  const dogType = [
    {
      id: 1,
      type: "Puppy",
    },
    {
      id: 2,
      type: "Adult",
    },
    {
      id: 3,
      type: "Senior",
    },
  ];

  

  return (
    <Link to={linkUrl}>
      <button
      onClick={() => {
        setClickedButton("sample");
        setIsModalOpen(true);
      }}
        type={type}
        className={`bg-primaryOrange ${className} xl:text-xl py-[10px] px-4 xl:px-6 flex items-center gap-[10px]`}
      >
        {icon && <span>{icon}</span>}
        <span className="">{text}</span>   {icon2 && <span>{icon2}</span>}
        {rightIcon}
      </button>
      <CommonModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Put Fresh kitchen FreeSample"
              img={productImg}
              weightData={weightData}
              dogType={dogType}
              clickedButton={clickedButton}
              category="Vegetarian"
              button="Get Free Sample"
            />
    </Link>
  );
};

CommonButton.propTypes = {
  className: PropTypes.any,
  text: PropTypes.string,
  type: PropTypes.string,
  linkUrl: PropTypes.any,
  icon: PropTypes.any,
  icon2: PropTypes.any
};