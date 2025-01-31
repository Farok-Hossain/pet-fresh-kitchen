import WhiteRightIcon from "@/assets/Icons/WhiteRightIcon";
import bgimg from "@/assets/images/herobgImg.jpg";
import heroImg from "@/assets/images/heroImg.png";
import { CommonButton } from "../common/CommonButton";

const HeroSection = () => {
  return (
    <div
      className="flex items-center"
      style={{
        backgroundImage: `url(${bgimg})`,
        height: "720px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content goes here */}
      <div className="container  flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-[130px]">
        <div className="xl:max-w-[800px]">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[64px] text-textGray xl:leading-[80px] text-center xl:text-start font-semibold  mb-5">
            Premium Nutrition for Healthier, Happier Dogs
          </h2>
          <p className="xl:text-lg font-normal xl:leading-7 text-textGraySm xl:max-w-[745px] text-center xl:text-left mb-3 xl:mb-8">
            Our carefully formulated dog food is packed with essential
            nutrients, vitamins, and minerals to promote optimal health, support
            strong immune systems, and enhance your dog&apos;s energy levels,
            ensuring they live a happy, active, and fulfilling life.{" "}
          </p>
          <div className="flex justify-center xl:block lg:pt-6">
            <CommonButton
              className="rounded text-white group"
              text="Get Free Samples"
              rightIcon={
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]">
                  <WhiteRightIcon />
                </span>
              }
            ></CommonButton>
          </div>
        </div>

        {/* image here  */}
        <div className="xl:max-w-[670px] xl:max-h-[525px] lg:w-[400px]">
          <img src={heroImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
