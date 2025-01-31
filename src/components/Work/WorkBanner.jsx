import CommonBanner from "../common/CommonBanner";
import perfectMeal from "@/assets/images/perfectMeal.png";
import girlWithDog from "@/assets/images/girlWithDog.png";


const WorkBanner = () => {
    return (
        <div>
              <div>
                <CommonBanner
                  title="How It Works"
                  description="Making pet nutrition simple, convenient, and affordable."
                  perfectMeal={perfectMeal}
                  girlWithDog={girlWithDog}
                />
              </div>
            </div>
    );
};

export default WorkBanner;