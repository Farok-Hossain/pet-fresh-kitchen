
import WhiteRightIcon from "@/assets/Icons/WhiteRightIcon";
import dog from "@/assets/images/dog.jpg"
import { CommonButton } from "../common/CommonButton";
import SectionTitle from "../common/SectionTitle";

const ServeMeal = () => {
    return (
        <div className="container flex flex-col xl:flex-row lg:flex-row items-center gap-5 xl:gap-[101px]">
            <div>
                <img className="xl:w-[563.5px] lg:min-w-[280px] lg:min-h-[300px] xl:h-[528px]" src={dog} alt="" />
            </div>
            <div className=" lg:min-w-[450px]">
                <SectionTitle className="xl:w-[785px]  leading-6 text-textGray xl:text-start lg:text-start text-center xl:mb-[38.7px]" title="Serve as a meal or mix for added nutrition boost."></SectionTitle>
                <p className="xl:max-w-[761px] xl:mb-10 mb-5 lg:pr-5 text-center xl:text-start lg:text-start text-[#212121] xl:text-xl text-[16px] font-normal xl:leading-8 leading-6 ">Fresh Your Way: JustFresh offers gently cooked meals that provide the same complete and balanced nutrition as our fresh frozen recipes. Whether you feed 100% fresh or use it as a delicious topper, it’s the perfect way to show your pup just how much you care.</p>
                <div className="flex justify-center lg:justify-start xl:justify-start"><CommonButton
              className="rounded text-white group"
              text="Get Free Samples"
              rightIcon={
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]">
                  <WhiteRightIcon />
                </span>
              }
            ></CommonButton></div>
            </div>
            
        </div>
    );
};

export default ServeMeal;