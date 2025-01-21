import CommonWrapper from "../common/CommonWrapper";
import petNutritionImg from "../../assets/images/petNutritionImg.png"

const PetNutrition = () => {
    return (
       <CommonWrapper>
             <div>
               <h3 className="text-center text-textGray text-5xl font-semibold mb-[60px] mt-[140px]">
               A Note on Pet Nutrition
               </h3>
               <p className="text-[#212121] text-[28px] font-normal text-center mb-[60px]">
               As a veterinarian, I cannot emphasize enough the importance of proper nutrition for your pet&apos;s overall health and happiness. Numerous studies have shown that fresh, human-grade food offers significant advantages over processed kibble. Just as fresh, wholesome food benefits humans, it plays a vital role in enhancing the well-being of your furry companions.
               </p>
               <img className="mt-10" src={petNutritionImg} alt="" />
             </div>
           </CommonWrapper>
    );
};

export default PetNutrition;