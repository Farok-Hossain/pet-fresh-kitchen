import PropTypes from "prop-types";
import { Checkbox } from "../ui/checkbox";
import CrossIcon from "@/assets/Icons/CrossIcon";
import { useState } from "react";
import MinusIcon from "@/assets/Icons/MinusIcon";
import PlusIcon from "@/assets/Icons/PlusIcon";
import { Link } from "react-router-dom";

const CommonModal = ({
  isOpen,
  onClose,
  title,
  img,
  weightData,
  clickedButton,
  dogType,
  category,
  button,
}) => {
  const [count, setCount] = useState(1);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-[#212121CC] flex justify-center items-center z-50"
    >
      <div className="relative bg-white py-[150px] rounded-lg shadow-lg min-w-[1260px]">
        <div className="absolute right-4 top-0">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2  text-white rounded"
          >
            <CrossIcon />
          </button>
        </div>
        <div className="flex gap-[60px] px-[109px] py[150px]">
          <div className="w-[385px] min-h-[485px] border-[1px] rounded-[10px] border-[#E2E2E2]">
            <img src={img} alt="" className="px-[21px] py-[81px]" />
          </div>

          <div className="space-y-5">
            <h3 className="text-textGray text-5xl font-semibold leading-[70px]">
              {title}
            </h3>
            <h4 className="text-[#212121E6] text-4xl font-medium">$132.93</h4>
            <h5 className="text-[#212121B3] text-2xl font-medium">
              Net Weight
            </h5>
            <div className="flex font-medium text-textGraySm gap-[10px]">
              {weightData.map((item) => (
                <div
                  className="flex gap-[10px] mt-[10px] text-lg"
                  key={item.id}
                >
                  <Checkbox className="rounded-full h-7 w-7" />
                  {item.weight}
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-[#212121B3] text-2xl font-medium ">
                Dog Type
              </h4>
              <div className="flex text-[18px] font-medium text-textGraySm gap-[10px]">
                {dogType.map((item) => (
                  <div
                    className="flex py-[8px] mt-[10px] gap-[10px]"
                    key={item.id}
                  >
                    <Checkbox className="rounded-full h-7 w-7" />
                    {item.type}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-textGray text-[16px] font-medium">
                Category:{" "}
                <span className="text-[#858585] font-normal">{category}</span>
              </h3>
            </div>

            <div className="flex gap-[14px]">
              <div>
                <div className="flex">
                  {clickedButton === "cart" && (
                   <Link to="/addcart">
                    <button className="bg-primaryOrange rounded-[10px] px-20 py-5 text-2xl font-bold text-white">
                      Add to Cart
                    </button></Link>
                  )}
                </div>
                <div className="flex">
                  {clickedButton === "buy" && (
                    <Link to="/checkout">
                    <button className="bg-primaryOrange rounded-[10px] px-20 py-5 text-2xl font-bold text-white">
                      Buy Now
                    </button>
                    </Link>
                  )}
                </div>
                <div className="flex">
                  {clickedButton === "sample" && (
                    <Link to="/orders">
                    <button  className="bg-primaryOrange rounded-[10px] px-20 py-5 text-2xl font-bold text-white">
                      Get Free Sample
                    </button></Link>
                  )}
                </div>
              </div>

              {/* Count section  */}
              {clickedButton !== "sample" && (
                <div className="border-[1px] rounded-[10px] border-[#E2E2E2] flex px-3">
                  <button
                    className=""
                    onClick={() => {
                      if (count > 0) {
                        setCount((count) => count - 1);
                      }
                    }}
                  >
                    <div className="bg-primaryOrange text-white w-12 h-12 rounded-full flex justify-center items-center">
                      <MinusIcon />
                    </div>
                  </button>
                  <div className="px-[35px] flex justify-center items-center">
                    {count}
                  </div>
                  <button
                    className=""
                    onClick={() => setCount((count) => count + 1)}
                  >
                    <div className="bg-primaryOrange text-white w-12 h-12 rounded-full flex justify-center items-center">
                      <PlusIcon />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CommonModal.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
  title: PropTypes.string,
  img: PropTypes.any,
  weightData: PropTypes.array,
  clickedButton: PropTypes.any,
  dogType: PropTypes.array,
  category: PropTypes.string,
  button: PropTypes.any,
};

export default CommonModal;
