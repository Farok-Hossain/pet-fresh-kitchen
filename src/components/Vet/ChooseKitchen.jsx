import CommonWrapper from "../common/CommonWrapper";
import IngredientsIcon from "@/assets/Icons/IngredientsIcon";
import BalancedIcon from "@/assets/Icons/BalancedIcon";
import Essential from "@/assets/Icons/Essential";
import { CommonButton } from "../common/CommonButton";

const ChooseKitchen = () => {
  const chooseItems = [
    {
      title: "Fresh, Human-Grade Ingredients",
      description:
        "Fresh, Human-Grade Ingredients: Every meal is made with high-quality proteins, vegetables, and grains that are safe and beneficial for pets.",
      icon: <IngredientsIcon />,
    },
    {
      title: "Vet-Approved Formulations",
      description:
        "Our recipes are designed in collaboration with veterinarians to meet all of your pet’s dietary needs.",
      icon: <BalancedIcon />,
    },
    {
      title: "Essential Nutrients",
      description:
        "From taurine for heart health to omega-3s for a shiny coat, every ingredient serves a purpose in promoting your pet's health.",
      icon: <Essential />,
    },
  ];
  return (
    <CommonWrapper>
      <div>
        <h3 className="text-textGray text-5xl font-semibold text-center mb-[60px]">
          Why Choose Pet Fresh Kitchen
        </h3>
        <p className="text-textGraySm text-[28px] font-normal text-center mb-[60px] ">
          Pet Fresh Kitchen is dedicated to providing your pets with meals that
          deliver complete and balanced nutrition. Each recipe is carefully
          crafted to include
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[15px] ">
        {chooseItems.map((item, index) => (
          <div
            className=" flex flex-col justify-center items-center border-[1px] rounded-[20px] border-[#F7830D] text-center h-auto min-h-[600px] w-[470px] px-10"
            key={index}
          >
            <div className="mt-[100px] mb-[34px]">{item.icon}</div>
            <h3 className="text-textGray text-[32px] font-medium mb-[30px]">
              {item.title}
            </h3>
            <p className="text-2xl font-normal leading-7 mb-[30px]">
              {item.description}
            </p>
            <CommonButton
              className="rounded text-white mb-[52px]"
              text="Order Now"
              linkUrl="/orders"
            ></CommonButton>
            
          </div>
        ))}
      </div>

      <div className="mt-[60px]">
      <p className="text-textGraySm text-[28px] font-normal text-center mb-[60px] ">
      Switching to fresh food isn’t just a trend—it’s a science-backed way to ensure your pet receives the nutrition they need to thrive. By choosing Pet Fresh Kitchen, you’re giving your pet the gift of better health, one meal at a time.</p>
      </div>
    </CommonWrapper>
  );
};

export default ChooseKitchen;
