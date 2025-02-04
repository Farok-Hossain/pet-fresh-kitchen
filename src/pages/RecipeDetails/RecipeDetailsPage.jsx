import ContactUs from "@/components/home/ContactUs";
import OrderNowBanner from "@/components/RecipeDetails/OrderNowBanner";
import RecipeDetails from "@/components/RecipeDetails/ExtraRecipes";
import Recipe from "@/components/RecipeNutrition/Recipe";

const RecipeDetailsPage = () => {
  return (
    <div>
      <RecipeDetails />
      <OrderNowBanner />
      <Recipe />
      <ContactUs />
    </div>
  );
};

export default RecipeDetailsPage;
