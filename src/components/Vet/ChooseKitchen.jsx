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
        <h3 className="text-textGray xl:text-5xl text-xl font-semibold text-center xl:mb-[60px] mb-5">
          Why Choose Pet Fresh Kitchen
        </h3>
        <p className="text-textGraySm xl:text-[28px] font-normal text-center xl:mb-[60px] mb-5 ">
          Pet Fresh Kitchen is dedicated to providing your pets with meals that
          deliver complete and balanced nutrition. Each recipe is carefully
          crafted to include
        </p>
      </div>

      <div className="grid xl:grid-cols-3 gap-[15px] ">
        {chooseItems.map((item, index) => (
          <div
            className=" flex flex-col justify-center items-center border-[1px] rounded-[20px] border-[#F7830D] text-center h-auto xl:min-h-[600px] xl:w-[470px] xl:px-10 px-3"
            key={index}
          >
            <div className="xl:mt-[100px] xl:mb-[34px] py-5">{item.icon}</div>
            <h3 className="text-textGray xl:text-[32px] text-[18px] xl:font-medium xl:mb-[30px] mb-3">
              {item.title}
            </h3>
            <p className="xl:text-2xl font-normal xl:leading-7 xl:mb-[30px] mb-4">
              {item.description}
            </p>
            <CommonButton
              className="rounded text-white xl:mb-[52px] mb-5"
              text="Order Now"
              linkUrl="/orders"
            ></CommonButton>
            
          </div>
        ))}
      </div>

      <div className="xl:mt-[60px]">
      <p className="text-textGraySm xl:text-[28px] font-normal text-center xl:mb-[60px] py-5">
      Switching to fresh food isn’t just a trend—it’s a science-backed way to ensure your pet receives the nutrition they need to thrive. By choosing Pet Fresh Kitchen, you’re giving your pet the gift of better health, one meal at a time.</p>
      </div>
    </CommonWrapper>
  );
};

export default ChooseKitchen;
