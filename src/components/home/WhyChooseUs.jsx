import CommonWrapper from "../common/CommonWrapper";
import BalancedIcon from "../../assets/Icons/BalancedIcon";
import IngredientsIcon from "../../assets/Icons/IngredientsIcon";
import DigestiveIcon from "../../assets/Icons/DigestiveIcon";
import AdditivesIcon from "../../assets/Icons/AdditivesIcon";
import PetFreshKitchen from "../common/PetFreshKitchen";

const WhyChooseUs = () => {

    const chooseItems = [
        {title: "Balanced Nutrition", description: "Provides a complete blend of essential vitamins, minerals, and nutrients that support your dog's overall health, growth, and vitality.", icon:<BalancedIcon />},
        {title: "Premium Ingredients", description: "Made using high-quality, natural ingredients that are carefully selected to deliver a safe, wholesome, and nutritious diet for your dog.", icon:<IngredientsIcon />},
        {title: "Digestive Support", description: "Formulated with fiber and probiotics that aid in digestion, promoting a healthy gut and reducing digestive discomfort in dogs.", icon:<DigestiveIcon />},
        {title: "No Additives", description: "Free from artificial preservatives, colors, and flavors, ensuring a cleaner, more natural, and healthier meal option.", icon:<AdditivesIcon />},
    ]
  return (
    <CommonWrapper version="lg">
      <div className="xl:flex items-center xl:gap-[57px] mb-10 xl:mb-[100px]">
        <div className="">
          <p className="xl:w-[215px] h-[5px] hidden xl:block bg-bgBlack rounded-md"> </p>
        </div>
        <div>
          <h2 className="text-center xl:text-left text-2xl xl:text-[56px] font-semibold xl:max-w-[456px] mt-2 mb-4  xl:mb-[18px] xl:leading-[64px]">
            Welcome To Pet{" "}
            <span className="text-primaryOrange">Fresh Kitchen</span>
          </h2>
          <div className="flex xl:gap-8">
            <div className="w-[1px] xl:h-[84px] hidden xl:block bg-primaryOrange"></div>
            <p className="text-textGraySm xl:max-w-[904px]  xl:text-[18px] text-center xl:text-left">
              Welcome to Pet Fresh Kitchen, where we provide your dog with
              balanced nutrition, premium ingredients, digestive support, and no
              additives, ensuring a wholesome, natural meal that promotes
              health, vitality, and overall well-being.
            </p>
          </div>
        </div>
      </div>
      
      {/* chooseItems  */}
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-32 gap-y-10">
        {
            chooseItems.map((item, index) => (
              <PetFreshKitchen key={index} icon={item.icon} title={item.title} description={item.description}>
              </PetFreshKitchen>
            ) )
        }
      </div>
    </CommonWrapper>
  );
};

export default WhyChooseUs;
