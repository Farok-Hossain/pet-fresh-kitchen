import CommonBanner from "../common/CommonBanner";
import perfectMeal from "@/assets/images/perfectMeal.png";
import girlWithDog from "@/assets/images/girlWithDog.png";

const VetBanner = () => {
  return (
    <div>
      <div>
        <CommonBanner
          title="Veterinary Advice for Your Dog's Health"
          perfectMeal={perfectMeal}
          girlWithDog={girlWithDog}
        />
      </div>
    </div>
  );
};

export default VetBanner;
