import { Link } from "react-router-dom";

const RecipeCard = ({ img, title, description }) => {
  return (
    <div>
      <div className=" rounded-[20px] border-[1px] h-[439px]">
        <div className="w-[204px] h-[204px] mt-3 flex mx-auto mb-5">
          <img src={img} alt="" />
        </div>
        <h3 className="text-textGray font-semibold text-[18px]  leading-[36px] ml-[30px] mb-">
          {title}
        </h3>
        <h3 className="text-xl text-textColor leading-[30px] ml-[30px] mb-3">
          {description}
        </h3>
        <Link to="/details">
          <div className="border border-primaryOrange rounded-[6px] text-center mx-5">
            <button className="py-3 text-center text-[16px text-primaryOrange ">
              View details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
