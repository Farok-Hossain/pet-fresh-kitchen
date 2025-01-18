import CommonWrapper from "../common/CommonWrapper";
import BalancedIcon from "../../assets/Icons/BalancedIcon";
import IngredientsIcon from "../../assets/Icons/IngredientsIcon";
import DigestiveIcon from "../../assets/Icons/DigestiveIcon";
import AdditivesIcon from "../../assets/Icons/AdditivesIcon";

const WhyChooseUs = () => {

    const chooseItems = [
        {title: "Balanced Nutrition", description: "Provides a complete blend of essential vitamins, minerals, and nutrients that support your dog's overall health, growth, and vitality.", icon:<BalancedIcon />},
        {title: "Premium Ingredients", description: "Made using high-quality, natural ingredients that are carefully selected to deliver a safe, wholesome, and nutritious diet for your dog.", icon:<IngredientsIcon />},
        {title: "Digestive Support", description: "Formulated with fiber and probiotics that aid in digestion, promoting a healthy gut and reducing digestive discomfort in dogs.", icon:<DigestiveIcon />},
        {title: "No Additives", description: "Free from artificial preservatives, colors, and flavors, ensuring a cleaner, more natural, and healthier meal option.", icon:<AdditivesIcon />},
    ]
  return (
    <CommonWrapper version="lg">
      <div className="flex items-center gap-[57px] mb-[100px]">
        <div className="">
          <p className="w-[215px] h-[5px] bg-bgBlack rounded-md"> </p>
        </div>
        <div>
          <h2 className="text-[56px] font-semibold max-w-[456px] h-32 mb-[18px] leading-[64px]">
            Welcome To Pet{" "}
            <span className="text-primaryOrange">Fresh Kitchen</span>
          </h2>
          <div className="flex gap-8">
            <div className="w-[1px] h-[84px] bg-primaryOrange"></div>
            <p className="text-textGraySm max-w-[904px] max-h-[84px] text-[18px]">
              Welcome to Pet Fresh Kitchen, where we provide your dog with
              balanced nutrition, premium ingredients, digestive support, and no
              additives, ensuring a wholesome, natural meal that promotes
              health, vitality, and overall well-being.
            </p>
          </div>
        </div>
      </div>
      
      {/* chooseItems  */}
      <div className="grid grid-cols-2 gap-x-32 gap-y-10">
        {
            chooseItems.map((item, index) => (
                <div className="flex gap-5 mb-10 " key={index}>
                    <div>
                    <p>{item.icon}</p>
                    </div>
                    <div>
                        <h3 className="max-w-[588px] h-12 text-textGray font-semibold text-[32px] mb-[15px]">{item.title}</h3>
                        <p className="max-w-[588px] max-h-[84px] text-textGraySm font-normal leading-7 text-[22px]">{item.description}</p>
                    </div>
                </div>
            ) )
        }
      </div>
    </CommonWrapper>
  );
};

export default WhyChooseUs;
