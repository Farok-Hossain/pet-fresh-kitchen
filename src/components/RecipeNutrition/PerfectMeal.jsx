import CommonWrapper from "../common/CommonWrapper";
import perfectDogMeal from "../../assets/images/perfectDogMeal.png";
import { CommonButton } from "../common/CommonButton";

const PerfectMeal = () => {
  return (
    <div className="bg-primaryOrange">
      <CommonWrapper>
        <div className="flex gap-[27px] items-center">
          <div className="min-w-[592px] h-full">
            <img src={perfectDogMeal} alt="" className="h-full w-full" />
          </div>
          <div>
            <h3 className="text-white font-bold text-5xl leading-[70px] mb-8">Find the perfect, nutritious meal for your dog.</h3>
            <p className="text-white font-normal leading-8 text-[22px] mb-8">Every PEDIGREE recipe is crafted with high-quality ingredients and expertly designed to deliver professional nutrition, supporting your dog&apos;s health, vitality, and helping them thrive to reach their full potential.</p>
            <CommonButton className="bg-white text-primaryOrange rounded-md text-center" text="Explore our Products" />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default PerfectMeal;
