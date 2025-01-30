import { Link } from "react-router-dom";

const RecipeCard = ({ img, title, description }) => {
  return (
    <div>
      <div className=" rounded-[20px] border-[1px] xl:h-[439px]">
        <div className="w-[204px] h-[204px] mt-3 flex mx-auto xl:mb-5 mb-3">
          <img src={img} alt="" />
        </div>
        <h3 className="text-textGray xl:font-semibold font-medium text-[18px] xl:leading-[36px] xl:ml-[30px] text-center xl:text-start">
          {title}
        </h3>
        <h3 className="xl:text-xl text-textColor text-center xl:text-start px-5 xl:px-0 xl:leading-[30px] xl:ml-[30px] mb-3">
          {description}
        </h3>
        <Link to="/productdetails">
          <div className="border bg-primaryOrange rounded-[6px] text-center mx-5 mb-5">
            <button className="py-3 text-center text-[16px text-white transition duration-300 ease-in-out transform hover:scale-105 ">
              Order Now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
