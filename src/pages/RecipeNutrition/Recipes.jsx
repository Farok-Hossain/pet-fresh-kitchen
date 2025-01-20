import AboutBanner from "@/components/About/AboutBanner";
import ContactUs from "@/components/home/ContactUs";
import FaqArea from "@/components/home/FaqArea";
import Ingredient from "@/components/RecipeNutrition/Ingredient";
import PerfectMeal from "@/components/RecipeNutrition/PerfectMeal";
import RecipeVariant from "@/components/RecipeNutrition/Recipe";


const Recipes = () => {
    return (
        <div>
            <AboutBanner />
            <Ingredient />
            <PerfectMeal />
            <RecipeVariant />
            <FaqArea />
            <ContactUs />
        </div>
    );
};

export default Recipes;