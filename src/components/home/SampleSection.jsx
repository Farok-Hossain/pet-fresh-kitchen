import { CommonButton } from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";
import bgDogImag from "../../assets/images/bgDogFrame.jpg"
import dogFood1 from "../../assets/images/dogfood1.png"
import dogFood2 from "../../assets/images/dogFood2.png"


const SampleSection = () => {
    return (
        <CommonWrapper version="lg" noContainer>
            <div className=" relative flex justify-center items-center py-40" 
                        style={{ 
                            backgroundImage: `url(${bgDogImag})`, 
                            
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            backgroundRepeat: 'no-repeat' 
                        }}
                    >
                        {/* image here  */}
                        <div className=" absolute top-0 left-0 h-full">
                            <img src={dogFood1} alt="dogFood"
                            className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content goes here */}
                      <div className=" flex justify-between items-center">
                      <div className="flex flex-col place-items-center justify-center">
                            <h2 className=" text-[64px] text-center text-white leading-[80px] font-semibold max-w-[800px] mb-5 ">Take control of your
                            pet’s health</h2>
                            <p className="text-lg text-center font-normal leading-7 text-white max-w-[745px] mb-8">The process of cooking at lower temperatures & at Slower rates leads to an
                            increase in nutrient in nutrient retention.</p>
                            <CommonButton className="rounded text-primaryOrange bg-white" text="Get Free Sample"></CommonButton>
                        </div>
            
                        {/* image here  */}
                        <div className=" absolute top-0 right-0 h-full">
                            <img src={dogFood2} alt="dogFood"
                            className="w-full h-full object-cover"
                            />
                        </div>
                      </div>
                    </div>
        </CommonWrapper>
    );
};

export default SampleSection;