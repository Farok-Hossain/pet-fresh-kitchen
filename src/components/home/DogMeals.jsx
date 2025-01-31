import { Link } from "react-router-dom";
import CurveIcon from "@/assets/Icons/CurveIcon";
import dog2 from "@/assets/images/dog2.png";
import SectionTitle from "../common/SectionTitle";

const DogMeals = () => {
  return (
    <div className="relative mt-[100px] mb-[100px]">
      <div className="relative">
        {/* Hide CurveIcon under 2xl devices */}
        <div className="hidden 2xl:block">
          <CurveIcon />
        </div>

        <div className="bg-primaryOrange 2xl:bg-transparent ">
          <div className=" xl:px-[150px] px-10 flex  items-center xl:gap-[100px]">
            <div className=" relative hidden 2xl:block items-center mt-[14px] text-center justify-center z-40">
              <img
                className="xl:max-w-[635px] lg:max-w-[248px] max-w-[50px] "
                src={dog2}
                alt=""
              />
            </div>

            <div className="relative z-40">
              <div className="flex flex-col justify-center items-center py-5 2xl:justify-start 2xl:items-start ">
                <SectionTitle
                  className=" text-white 2xl:text-start xlg:text-4xl lg:text-3xl md:text-2xl text-center 2xl:mb-[38.7px] leading-1 m "
                  title="Delicious Meals for Happy, Healthy Dogs!"
                ></SectionTitle>
                <p className=" 2xl:mb-10 mb-5 text-white 2xl:text-start text-center xl:text-xl xlg:text-[18px] lg:text-[18px] md:text-[16px]  font-normal 2xl:leading-8">
                  Treat your four-legged food lover to a wide selection of
                  wholesome, flavorful, and nutritious meals designed to support
                  their health, happiness, and boundless energy every day.
                  Because your furry friend deserves the best in every bite
                </p>
                <Link to="/orders">
                  <button className="bg-white text-primaryOrange rounded-md text-center py-[10px]  xl:text-xl text-[16px] sm:px-4 sm:py-[6px]  px-6 flex items-center gap-[10px]">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogMeals;
