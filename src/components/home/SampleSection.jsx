import { CommonButton } from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";
import bgDogImag from "@/assets/images/bgDogFrame.jpg";
import dogFood1 from "@/assets/images/dogfood1.png";
import dogFood2 from "@/assets/images/dogFood2.png";
import RightArrow from "@/assets/Icons/RightArrow";

const SampleSection = () => {
  return (
    <CommonWrapper version="lg" noContainer>
      <div
        className=" relative flex justify-center items-center xl:py-40"
        style={{
          backgroundImage: `url(${bgDogImag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* image here  */}
        <div className=" absolute hidden 2xl:block  top-0 left-0 h-full">
          
          <img
            src={dogFood1}
            alt="dogFood"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content goes here */}
        <div className=" flex justify-center items-center">
          <div className="flex flex-col place-items-center justify-center lg:pb-5">
            <h2 className=" xl:text-[64px] lg:text-2xl text-xl text-center text-white xl:leading-[80px] mt-5 xl:font-semibold font-medium xl:max-w-[800px] xl:mb-5 mb-3 ">
              Take control of your pet’s health
            </h2>
            <p className="xl:text-lg text-center font-normal xl:leading-7 text-white max-w-[745px] xl:mb-8 mb-4 px-5 leading-5 xl:px-0">
              The process of cooking at lower temperatures & at Slower rates
              leads to an increase in nutrient in nutrient retention.
            </p>

            <CommonButton
              className="rounded group mb-4 xl:mb-0 text-primaryOrange bg-white"
              rightIcon={
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]">
                  <RightArrow />
                </span>
              }
              text="Get Free Samples"
            ></CommonButton>
          </div>
        </div>

        {/* image here  */}
        <div className=" hidden 2xl:block absolute top-0 right-0 h-full">
          <img
            src={dogFood2}
            alt="dogFood"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default SampleSection;
