import ContactUs from "@/components/home/ContactUs";
import OrderNowBanner from "@/components/RecipeDetails/OrderNowBanner";
import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";
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