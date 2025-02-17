import RecipeDetails from "../common/RecipeDetails";
import ChickenChowImg from "@/assets/images/productImg.png";

const ChickenChow = () => {
  const greateData = [
    {
      id: 1,
      text: "High-quality protein from chicken supports muscle health.",
    },
    {
      id: 2,
      text: "Butternut squash and lentils provide fiber for healthy digestion.",
    },
    {
      id: 3,
      text: "Spinach, kale, and blueberries offer essential vitamins and antioxidants.",
    },
    {
      id: 4,
      text: "Salmon oil vitamins promote a shiny coat and robust immune system.",
    },
  ];

  const NutritionData = [
    { id: 1, text: "Calories: 350 kcal/cup" },
    { id: 2, text: "Protein: 25%" },
    { id: 3, text: "Fat: 12%" },
    { id: 4, text: "Fiber: 4%" },
    { id: 5, text: "Moisture: 10%" },
  ];
  return (
    <div className="lg:pt-[120px] pt-16">
      <RecipeDetails
        title="Chicken Chow"
        description="Ingredients: how , Tricalcium Phosphate, Salmon Oil, Salt, Taurine, Zinc Gluconate, Vitamin E Supplement, Copper Amino Acid Chelate, Manganese Amino Acid Chelate, Vitamin D3, Vitamin B2, Vitamin B1, Vitamin B6, Potassium Iodide."
        greateData={greateData}
        NutritionData={NutritionData}
        img={ChickenChowImg}
        borderClassName="border-[1px] border-[#E5E5E5] rounded-[10px] mt-7"
      />
    </div>
  );
};

export default ChickenChow;
