import RecipeDetails from "../common/RecipeDetails";
import VeggieFeastBowlImg from "@/assets/images/productImg.png";

const VeggieFeastBowl = () => {
  const greateData = [
    {
      id: 1,
      text: "Paneer provides protein and calcium for muscle and bone health.",
    },
    {
      id: 2,
      text: "Brown rice and sweet potatoes offer digestible energy sources.",
    },
    {
      id: 3,
      text: "Pumpkin, spinach, and green peas deliver fiber and essential vitamins.",
    },
    {
      id: 4,
      text: "Coconut oil and flaxseeds add healthy fats for a shiny coat.",
    },
  ];

  const NutritionData = [
    { id: 1, text: "Calories: 340 kcal/cup" },
    { id: 2, text: "Protein: 20%" },
    { id: 3, text: "Fat: 10%" },
    { id: 4, text: "Fiber: 5%" },
    { id: 5, text: "Moisture: 12%" },
  ];
  return (
    <div className="lg:pt-[60px] pt-8 lg:pb-[88px]">
      <RecipeDetails
        title="Ingredients:  Paneer, Brown Rice, Pumpkin, Green Peas, Carrots, Sweet Potatoes, Spinach, Turmeric, Coconut Oil, Flaxseeds, Tricalcium Phosphate, Iodized Salt, Vitamin Supplements, Zinc Gluconate, Iron Supplements."
        greateData={greateData}
        NutritionData={NutritionData}
        img={VeggieFeastBowlImg}
      />
    </div>
  );
};

export default VeggieFeastBowl;
