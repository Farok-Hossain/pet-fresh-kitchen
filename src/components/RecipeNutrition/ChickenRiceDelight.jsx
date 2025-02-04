import RecipeDetails from "../common/RecipeDetails";
import ChickenChowImg from "@/assets/images/productImg.png";


const ChickenRiceDelight = () => {
    const greateData = [
        {
          id: 1,
          text: "Chicken and chicken livers provide essential proteins and nutrients for muscle and organ health.",
        },
        {
          id: 2,
          text: "Rice and potatoes are gentle on digestion and offer sustained energy.",
        },
        {
          id: 3,
          text: "Carrots, peas, spinach, and cranberries deliver a powerful blend of vitamins and antioxidants.",
        },
        {
          id: 4,
          text: "Salmon oil and added nutrients ensure a healthy coat and immune system.",
        },
      ];
    
      const NutritionData = [
        { id: 1, text: "Calories: 360 kcal/cup" },
        { id: 2, text: "Protein: 24%" },
        { id: 3, text: "Fat: 13%" },
        { id: 4, text: "Fiber: 3.5%" },
        { id: 5, text: "Moisture: 10%" },
      ];
    return (
        <div className="pt-[60px]">
            <RecipeDetails
                    title="Ingredients: how , Tricalcium Phosphate, Salmon Oil, Salt, Taurine, Zinc Gluconate, Vitamin E Supplement, Ferrous Sulfate, Copper Amino Acid Chelate, Manganese Amino Acid Chelate, Vitamin D3, Vitamin B2, Vitamin B1, Vitamin B6, Potassium Iodide."
                    greateData={greateData}
                    NutritionData={NutritionData}
                    img={ChickenChowImg}
                    borderClassName="border-[1px] border-[#E5E5E5] rounded-[10px] mt-7"
                />
        </div>
    );
};

export default ChickenRiceDelight;