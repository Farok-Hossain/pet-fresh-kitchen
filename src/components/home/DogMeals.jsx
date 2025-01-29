import { Link } from "react-router-dom";
import CurveIcon from "../../assets/Icons/CurveIcon";
import dog2 from "../../assets/images/dog2.png";
import SectionTitle from "../common/SectionTitle";

const DogMeals = () => {
  return (
    <div className="relative mt-[100px] mb-[100px]">
      <div className="relative">
        <CurveIcon></CurveIcon>
        <div className=" xl:px-[150px] px-10 flex  items-center xl:gap-[100px]">
        <div className=" relative flex items-center mt-[14px] text-center justify-center z-40">
          <img className="xl:max-w-[635px] lg:max-w-[248px] max-w-[50px] " src={dog2} alt="" />
        </div>

        <div className="relative z-40">
          <div>
            <SectionTitle
              className=" text-white text-start xl:mb-[38.7px] leading-1 text-xs"
              title="Delicious Meals for Happy, Healthy Dogs!"
            ></SectionTitle>
            <p className=" mb-10 text-white xl:text-xl  font-normal xl:leading-8">Treat your four-legged food lover to a wide selection of wholesome, flavorful, and nutritious meals designed to support their health, happiness, and boundless energy every day. Because your furry friend deserves the best in every bite</p>
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