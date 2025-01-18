
import dog from "../../assets/images/dog.jpg"
import { CommonButton } from "../common/CommonButton";
import SectionTitle from "../common/SectionTitle";

const ServeMeal = () => {
    return (
        <div className="container flex items-center gap-[101px]">
            <div>
                <img className="w-[563.5px] h-[528px]" src={dog} alt="" />
            </div>
            <div className="">
                <SectionTitle className="w-[785px] text-start mb-[38.7px]" title="Serve as a meal or mix for added nutrition boost."></SectionTitle>
                <p className="max-w-[761px] mb-10 text-[#212121] text-xl font-normal leading-8">Fresh Your Way: JustFresh offers gently cooked meals that provide the same complete and balanced nutrition as our fresh frozen recipes. Whether you feed 100% fresh or use it as a delicious topper, it’s the perfect way to show your pup just how much you care.</p>
                <CommonButton className="rounded text-white" text="Get Free Sample"></CommonButton>
            </div>
            
        </div>
    );
};

export default ServeMeal;