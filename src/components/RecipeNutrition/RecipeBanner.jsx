import CommonBanner from "../common/CommonBanner";
import perfectMeal from "../../assets/images/perfectMeal.png";
import girlWithDog from "../../assets/images/girlWithDog.png";

const RecipeBanner = () => {
  return (
    <div >
      <div>
        <CommonBanner title="Healthy Recipes and Nutrition for Dogs" perfectMeal={perfectMeal} girlWithDog={girlWithDog} />
      </div>
    </div>
  );
};

export default RecipeBanner;
