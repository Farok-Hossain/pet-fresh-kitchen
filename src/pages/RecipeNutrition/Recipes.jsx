import ChickenChow from "@/components/RecipeNutrition/ChickenChow";
import ChickenRiceDelight from "@/components/RecipeNutrition/ChickenRiceDelight";
import Ingredient from "@/components/RecipeNutrition/Ingredient";
import PerfectMeal from "@/components/RecipeNutrition/PerfectMeal";
import RecipeBanner from "@/components/RecipeNutrition/RecipeBanner";
import VeggieFeastBowl from "@/components/RecipeNutrition/VeggieFeastBowl";

const Recipes = () => {
  return (
    <div>
      <RecipeBanner />
      <Ingredient />
      <PerfectMeal />
      <ChickenChow />
      <ChickenRiceDelight />
      <VeggieFeastBowl />
    </div>
  );
};

export default Recipes;
