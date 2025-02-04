import WhiteRightIcon from "@/assets/Icons/WhiteRightIcon";
import { CommonButton } from "./CommonButton";
import PropTypes from "prop-types";

const RecipeDetails = ({
  title,
  greateData,
  NutritionData,
  img,
  borderClassName,
}) => {
  return (
    <div className="container">
      {/* chicken chow  */}
      <div className="flex gap-[60px]">
        <div>
          <h3 className="text-[32px] text-textGray font-semibold leading-[44px] mb-5">
            Chicken & Rice Delight
          </h3>
          <h4 className="text-xl leading-8 mb-8">{title}</h4>
          <h3 className="text-[32px] text-textGray font-semibold leading-[44px] mb-5">
            Why It’s Greate
          </h3>
          <div>
            {greateData.map((item) => (
              <li className="text-xl leading-8 mb-8" key={item.id}>
                {item.text}
              </li>
            ))}
          </div>
          <h3 className="text-[32px] text-textGray font-semibold leading-[44px] mb-5">
            Nutrition Information (Placeholder Values):
          </h3>
          <div>
            {NutritionData.map((item) => (
              <li className="text-xl leading-8 mb-8" key={item.id}>
                {item.text}
              </li>
            ))}
          </div>
        </div>
        <div>
          <div className="xl:min-w-[460px] min-w-[300px] border-[1px] border-[#E5E5E5] rounded-[10px]">
            <img className="xl:p-[52px] p-8" src={img} alt="" />
          </div>
          <div className="flex justify-center xl:block pt-8">
            <CommonButton
              className="rounded text-white flex justify-center group w-full"
              text="Order Now"
              linkUrl="/orders"
              rightIcon={
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]">
                  <WhiteRightIcon />
                </span>
              }
            ></CommonButton>
          </div>
        </div>
      </div>
      <div className={`mb-7 ${borderClassName}`}></div>
    </div>
  );
};

RecipeDetails.propTypes = {
  title: PropTypes.string,
  greateData: PropTypes.array,
  NutritionData: PropTypes.array,
  img: PropTypes.any,
  borderClassName: PropTypes.string,
};

export default RecipeDetails;
