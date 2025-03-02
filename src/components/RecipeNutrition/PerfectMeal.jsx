import CommonWrapper from "../common/CommonWrapper";
import perfectDogMeal from "@/assets/images/perfectDogMeal.png";
import { CommonButton } from "../common/CommonButton";
import RightArrow from "@/assets/Icons/RightArrow";

const PerfectMeal = () => {
  return (
    <div className="bg-primaryOrange">
      <CommonWrapper>
        <div className="flex xl:flex-row flex-col xl:gap-[27px] items-center">
          <div className="xl:min-w-[592px] lg:max-w-[300px] xl:h-full">
            <img src={perfectDogMeal} alt="" className="h-full w-full" />
          </div>
          <div>
            <h3 className="text-white xl:font-bold font-medium xl:text-5xl text-2xl text-center xl:text-start xl:leading-[70px] xl:mb-8 mb-3">Find the perfect, nutritious meal for your dog.</h3>
            <p className="text-white font-normal xl:leading-8 xl:text-[22px] lg:px-10 xl:px-0 xl:text-start text-center mb-8">Every PEDIGREE recipe is crafted with high-quality ingredients and expertly designed to deliver professional nutrition, supporting your dog&apos;s health, vitality, and helping them thrive to reach their full potential.</p>
           <div className="xl:block flex justify-center">
           <CommonButton
              className="rounded group mb-4 xl:mb-0 text-primaryOrange bg-white"
              linkUrl="/orders"
              rightIcon={<span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]"><RightArrow /></span>}
              text="Explore our Products"
            ></CommonButton>
           </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default PerfectMeal;
