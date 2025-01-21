import CommonWrapper from "../common/CommonWrapper";
import PetFreshKitchen from "../common/PetFreshKitchen";
import IngredientsIcon from "@/assets/Icons/IngredientsIcon";
import Digestibility from "@/assets/Icons/Digestibility";
import Enhanched from "@/assets/Icons/Enhanched";
import Support from "@/assets/Icons/Support";

const FreshFood = () => {
  const chooseItems = [
    {
      title: "Better Digestibility",
      description:
        "Fresh food is easier for your pet to digest, leading to better nutrient absorption and overall health.",
      icon: <Digestibility />,
    },
    {
      title: "Improved Energy and Vitality",
      description:
        "High-quality, fresh ingredients provide sustained energy, helping pets stay active and playful.",
      icon: <IngredientsIcon />,
    },
    {
      title: "Enhanced Skin and Coat Health",
      description:
        "Omega-3 fatty acids and essential vitamins found in fresh food contribute to a shiny coat and healthy skin.",
      icon: <Enhanched />,
    },
    {
      title: "Supports Longevity",
      description:
        "A balanced diet made from fresh ingredients can help pets live longer, healthier lives by reducing the risk of chronic diseases.",
      icon: <Support />,
    },
  ];
  return (
    <CommonWrapper>
      <div>
        <h3 className="text-5xl text-center font-semibold leading-[64px] text-textGray mb-[60px]">
          Why Fresh Food Metters
        </h3>
      </div>
      {/* chooseItems  */}
      <div className="grid grid-cols-2 gap-x-32 gap-y-10">
        {chooseItems.map((item, index) => (
          <PetFreshKitchen
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          ></PetFreshKitchen>
        ))}
      </div>
    </CommonWrapper>
  );
};

export default FreshFood;
