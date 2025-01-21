
import ContactUs from "@/components/home/ContactUs";
import FaqArea from "@/components/home/FaqArea";
import Ingredient from "@/components/RecipeNutrition/Ingredient";
import PerfectMeal from "@/components/RecipeNutrition/PerfectMeal";
import RecipeVariant from "@/components/RecipeNutrition/Recipe";
import RecipeBanner from "@/components/RecipeNutrition/RecipeBanner";


const Recipes = () => {
    return (
        <div>
            <RecipeBanner />
            <Ingredient />
            <PerfectMeal />
            <RecipeVariant />
            <FaqArea />
            <ContactUs />
        </div>
    );
};

export default Recipes;