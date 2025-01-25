
import dog from "../../assets/images/dog.jpg"
import { CommonButton } from "../common/CommonButton";
import SectionTitle from "../common/SectionTitle";

const ServeMeal = () => {
    return (
        <div className="container flex flex-col xl:flex-row items-center gap-5 xl:gap-[101px]">
            <div>
                <img className="xl:w-[563.5px] xl:h-[528px]" src={dog} alt="" />
            </div>
            <div className="">
                <SectionTitle className="xl:w-[785px] leading-6 xl:text-start text-center xl:mb-[38.7px]" title="Serve as a meal or mix for added nutrition boost."></SectionTitle>
                <p className="xl:max-w-[761px] xl:mb-10 mb-5 text-center xl:text-start text-[#212121] xl:text-xl font-normal xl:leading-8 leading-6 ">Fresh Your Way: JustFresh offers gently cooked meals that provide the same complete and balanced nutrition as our fresh frozen recipes. Whether you feed 100% fresh or use it as a delicious topper, it’s the perfect way to show your pup just how much you care.</p>
                <div className="flex justify-center xl:justify-start"><CommonButton className="rounded text-white" text="Get Free Sample"></CommonButton></div>
            </div>
            
        </div>
    );
};

export default ServeMeal;