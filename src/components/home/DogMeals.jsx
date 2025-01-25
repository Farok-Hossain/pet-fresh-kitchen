import { Link } from "react-router-dom";
import CurveIcon from "../../assets/Icons/CurveIcon";
import dog2 from "../../assets/images/dog2.png";
import SectionTitle from "../common/SectionTitle";

const DogMeals = () => {
  return (
    <div className="relative mt-[100px] mb-[100px]">
      <div className="relative">
        <CurveIcon></CurveIcon>
        <div className="container flex flex-col xl:flex-row items-center xl:gap-[59px]">
        <div className=" relative flex items-center mt-[14px] text-center justify-center z-50">
          <img className="xl:max-w-[637px]" src={dog2} alt="" />
        </div>

        <div className="relative z-50">
          <div>
            <SectionTitle
              className="xl:w-[785px] text-white text-start mb-[38.7px]"
              title="Delicious Meals for Happy, Healthy Dogs!"
            ></SectionTitle>
            <p className="xl:max-w-[761px] mb-10 text-white text-xl font-normal leading-8">Treat your four-legged food lover to a wide selection of wholesome, flavorful, and nutritious meals designed to support their health, happiness, and boundless energy every day. Because your furry friend deserves the best in every bite</p>
            <Link to="/orders">
            <button className="bg-white text-primaryOrange rounded-md text-center text-xl py-[10px] px-6 flex items-center gap-[10px]">Shop Now</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DogMeals;
