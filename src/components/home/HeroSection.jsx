import RightArrow from '../../assets/Icons/RightArrow';
import bgimg from '../../assets/images/herobgImg.jpg';
import heroImg from "../../assets/images/heroImg.png"
import { CommonButton } from '../common/CommonButton';

const HeroSection = () => {
    return (
        <div className="flex items-center" 
            style={{ 
                backgroundImage: `url(${bgimg})`, 
                height: "720px", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            {/* Content goes here */}
          <div className="container flex justify-between items-center">
          <div>
                <h2 className=" text-[64px] text-textGray leading-[80px] font-semibold max-w-[800px] mb-5 ">Premium Nutrition for Healthier, Happier Dogs</h2>
                <p className="text-lg font-normal leading-7 text-textGraySm max-w-[745px] mb-8">Our carefully formulated dog food is packed with essential nutrients, vitamins, and minerals to promote optimal health, support strong immune systems, and enhance your dog&apos;s energy levels, ensuring they live a happy, active, and fulfilling life. </p>
                <CommonButton className="rounded text-white" text="Get Free Sample"></CommonButton>
            </div>

            {/* image here  */}
            <div>
                <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
    );
};

export default HeroSection;
