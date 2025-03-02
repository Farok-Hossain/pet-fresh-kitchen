import PropTypes from "prop-types";
import { Checkbox } from "../ui/checkbox";
import CrossIcon from "@/assets/Icons/CrossIcon";
import { useState } from "react";
import MinusIcon from "@/assets/Icons/MinusIcon";
import PlusIcon from "@/assets/Icons/PlusIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const CommonModal = ({
  isOpen,
  onClose,
  title,
  img,
  weightData,
  clickedButton,
  dogType,
  category,
}) => {
  const [count, setCount] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <div className="relative bg-white py-12 xl:py-[150px] rounded-lg shadow-lg xl:min-w-[1260px]">
        <div className="absolute xl:right-4 right-0 top-0">
          <button
            onClick={onClose}
            className="xl:mt-4 xl:px-4 px-3 py-2 text-white rounded"
          >
            <CrossIcon />
          </button>
        </div>
        <div className="flex xl:flex-row flex-col xl:gap-[60px] xl:px-[109px] xl:py[150px]">
          <div className="flex justify-center items-center mx-auto w-[150px] xl:w-[385px] xl:min-h-[485px] border-[1px] rounded-[10px] border-[#E2E2E2]">
            <img
              src={img}
              alt=""
              className="xl:px-[21px] px-[10px] py-[10px] xl:py-[81px]"
            />
          </div>

          <div className="xl:space-y-4 space-y-2">
            <h3 className="text-textGray xl:text-5xl text-xl xl:text-start text-center xl:font-semibold font-medium xl:leading-[70px] pt-2">
              {title}
            </h3>
            <h4 className="text-[#212121E6] xl:text-4xl text-xl text-center xl:text-start xl:font-medium">
              $132.92
            </h4>
            <h5 className="text-[#212121B3] xl:text-2xl text-center xl:text-start font-medium">
              Net Weight
            </h5>
            <div className="flex flex-wrap xl:px-0 px-5 xl:font-medium text-textGraySm xl:gap-[10px]">
              {weightData.map((item) => (
                <div
                  className="flex gap-[10px] mt-[7px] text-sm xl:text-lg"
                  key={item.id}
                >
                  <Checkbox className="rounded-full xl:h-7 h-5 w-5 xl:w-7" />
                  {item.weight}
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-[#212121B3] xl:text-2xl text-center xl:text-start font-medium pt-2 ">
                Pet Gender
              </h4>
              <div className="flex flex-wrap xl:px-0 px-5 xl:font-medium text-textGraySm xl:gap-[10px]">
                {dogType.map((item) => (
                  <div
                    className="flex gap-[10px] mt-[7px] text-sm xl:text-lg"
                    key={item.id}
                  >
                    <Checkbox className="rounded-full xl:h-7 h-5 w-5 xl:w-7" />
                    {item.type}
                  </div>
                ))}
              </div>
            </div>

            {/* pet age weight field  */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full gap-5 flex xl:px-2 flex-col xl:flex-row px-5"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className=" text-[#212121B3] text-[14px] xl:text-2xl font-medium  xl:leading-[21px]  mt-2 xl:mb-3 mb-[6px]"
                >
                  Pet Age
                </label>
                <input
                  id="name"
                  placeholder="Pet age..."
                  className="  w-full h-12 border-[1px] text-[#666666] outline-none rounded-xl xl:text-[16px] text-[14px] px-[16px] py-[14px]"
                  {...register("name")}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className=" text-[#212121B3] font-medium xl:text-2xl text-[14px]  xl:leading-[21px]  mt-2 xl:mb-3 mb-[6px]"
                >
                  Pet Weight
                </label>
                <input
                  id="name"
                  placeholder="Pet weight..."
                  className="  w-full h-12 border-[1px] text-[#666666] outline-none rounded-xl xl:text-[16px] text-[14px] px-[16px] py-[14px]"
                  {...register("name")}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>
            </form>

            <div>
              <h3 className="text-textGray text-center xl:text-start pt-2 xl:pt-0 xl:text-[16px] font-medium mb-3 xl:mb-0">
                Category:{" "}
                <span className="text-[#858585] font-normal">{category}</span>
              </h3>
            </div>

            <div className="flex justify-center xl:justify-start xl:flex-row xl:px-0 px-8 xl:gap-[14px] gap-[26px]">
              <div>
                <div className="flex justify-center">
                  {clickedButton === "cart" && (
                    <Link to="/addcart">
                      <button className="bg-primaryOrange  rounded-[10px] xl:px-20 px-6 xl:py-5 py-2 xl:text-2xl xl:font-bold text-white transition duration-300 ease-in-out transform hover:scale-105">
                        Add to Cart
                      </button>
                    </Link>
                  )}
                </div>
                <div className="flex justify-center">
                  {clickedButton === "buy" && (
                    <Link to="/checkout">
                      <button className="bg-primaryOrange  rounded-[10px] xl:px-20 px-6 xl:py-5 py-2 xl:text-2xl xl:font-bold text-white transition duration-300 ease-in-out transform hover:scale-105">
                        Buy Now
                      </button>
                    </Link>
                  )}
                </div>
                <div className=" flex justify-center items-center xl:px-0 px-16">
                  {clickedButton === "sample" && (
                    <Link to="/orders">
                      <button className="bg-primaryOrange flex  rounded-[10px] xl:px-20 px-6 xl:py-5 py-2 xl:text-2xl xl:font-bold text-white transition duration-300 ease-in-out transform hover:scale-105">
                        Get Free Sample
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Count section  */}
              {clickedButton !== "sample" && (
                <div className="border-[1px]  rounded-[10px]  border-[#E2E2E2] flex  px-3">
                  <button
                    className=""
                    onClick={() => {
                      if (count > 0) {
                        setCount((count) => count - 1);
                      }
                    }}
                  >
                    <div className="bg-primaryOrange text-white xl:w-12 w-7 h-7 xl:h-12 rounded-full flex justify-center items-center">
                      <MinusIcon />
                    </div>
                  </button>
                  <div className="xl:px-[35px] px-7 flex justify-center items-center">
                    {count}
                  </div>
                  <button
                    className=""
                    onClick={() => setCount((count) => count + 1)}
                  >
                    <div className="bg-primaryOrange text-white xl:w-12 w-7 h-7 xl:h-12 rounded-full flex justify-center items-center">
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
