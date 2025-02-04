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
      <div className="flex  lg:flex-row flex-col-reverse gap-[60px]">
        <div>
          <h3 className="xl:text-[32px] xlg:text-2xl text-xl text-textGray font-semibold xl:leading-[44px] xlg:leading-9 lg:leading-7 xlg:mb-5 lg:mb-4 mb-3">
            Chicken & Rice Delight
          </h3>
          <h4 className="xl:text-xl xlg:text-[18px] lg:text-[16px] text-[14px] xlg:leading-8 xl:mb-8 xlg:mb-6lg:mb-5 mb-4">
            {title}
          </h4>
          <h3 className="xl:text-[32px] xlg:text-2xl text-xl text-textGray font-semibold xl:leading-[44px] xlg:leading-9 lg:leading-7 xlg:mb-5 lg:mb-4 mb-3">
            Why It’s Greate
          </h3>
          <div>
            {greateData.map((item) => (
              <li
                className="xl:text-xl xlg:text-[18px] lg:text-[16px] text-[14px] xlg:leading-8 xl:mb-8 xlg:mb-6 lg:mb-5 mb-4"
                key={item.id}
              >
                {item.text}
              </li>
            ))}
          </div>
          <h3 className="xl:text-[32px] xlg:text-2xl text-xl text-textGray font-semibold xl:leading-[44px] xlg:leading-9 lg:leading-7 xlg:mb-5 lg:mb-4 mb-3">
            Nutrition Information (Placeholder Values):
          </h3>
          <div>
            {NutritionData.map((item) => (
              <li
                className="xl:text-xl xlg:text-[18px] lg:text-[16px] text-[14px] xlg:leading-8 xl:mb-8 xlg:mb-6 lg:mb-5 mb-4"
                key={item.id}
              >
                {item.text}
              </li>
            ))}
          </div>
        </div>
        <div>
          <div className="xl:min-w-[460px] xlg:min-w-[300px] lg:min-w-[250px] md:max-w-[300px] max-w-[280px] flex   mx-auto  border-[1px] border-[#E5E5E5] rounded-[10px]">
            <img
              className="xl:p-[52px] xlg:p-8 lg:p-5 md:p-8 p-8"
              src={img}
              alt=""
            />
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
