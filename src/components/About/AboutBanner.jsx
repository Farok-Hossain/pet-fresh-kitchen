import CommonBanner from "../common/CommonBanner";
import perfectMeal from "../../assets/images/perfectMeal.png";
import girlWithDog from "../../assets/images/girlWithDog.png";

const AboutBanner = () => {
    return (
        <div>
           <CommonBanner title="About Us" description="If animals could talk, they’d talk about us!" perfectMeal={perfectMeal} girlWithDog={girlWithDog} />
        </div>
    );
};

export default AboutBanner;