import CommonWrapper from "@/components/common/CommonWrapper";
import recipeCardImg from "../../assets/images/recipeCardImage.png";
import { CommonButton } from "@/components/common/CommonButton";

const RecipeDetails = () => {
  return (
    <CommonWrapper>
      <div className="flex gap-[60px] mt-[70px]">
        <div className="min-w-[554px] h-[570px] border-[1px] flex justify-center py-[78px] px-[57px] rounded-[10px]">
          <img src={recipeCardImg} alt="" className="min-w-[441px]" />
        </div>
        <div>
          <h3 className="text-textGray text-5xl font-bold leading-[70px] uppercase">
            Beef Mash
          </h3>
          <p className="text-textGraySm text-xl font-normal leading-8">
            Why Nutrition Matters?: Numerous studies have shown that proper
            nutrition is the foundation of a healthy, happy, and long life for
            your dog. A balanced diet supports their overall well-being, from
            maintaining energy levels and promoting a shiny coat to
            strengthening their immune system and improving digestion. That’s
            why every meal we create is designed to deliver complete and
            balanced nutrition. Essential Additions for Balanced Nutrition Each
            of our recipes includes carefully selected multivitamins and
            supplements to ensure your dog gets all the nutrients they need,
            including:
          </p>
          <li className="text-textGraySm text-xl font-normal">
            {" "}
            Taurine: Supports heart and eye health.
          </li>
          <li className="text-textGraySm text-xl font-normal">
            {" "}
            Salmon Oil: Provides omega-3 fatty acids for a healthy coat and
            skin.
          </li>
          <li className="text-textGraySm text-xl font-normal">
            {" "}
            Tricalcium Phosphate: Strengthens bones and teeth.
          </li>
          <li className="text-textGraySm text-xl font-normal">
            {" "}
            Zinc, Iron, Copper, and Manganese: Vital minerals for overall
            well-being.
          </li>
          <li className="text-textGraySm text-xl font-normal mb-8">
            {" "}
            Vitamin B, D, and E Complexes: Boost immunity, energy, and
            metabolism.
          </li>
          <CommonButton
            className="rounded text-white"
            text="Explore our Products"
          ></CommonButton>
        </div>
      </div>

      <div className="mt-[210px]">
        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5 ">
          Chicken Chow
        </h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <p className="text-textGraySm font-normal text-xl leading-8 mb-8">
          Ingredients: Chicken, Butternut Squash, Oats, Lentils, Spinach,
          Blueberries, Kale, Tricalcium Phosphate, Salt, Salmon Oil, Taurine,
          Zinc Gluconate, Vitamin E Supplement, Ferrous Sulfate, Copper Amino
          Acid Chelate, Manganese Amino Acid Chelate, Vitamin D3, Vitamin B2,
          Vitamin B1, Vitamin B6, Potassium Iodide.
        </p>
        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">
          Why It’s Greate
        </h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          High-quality protein from chicken supports muscle health.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
           Butternut squash and lentils provide fiber for healthy digestion
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Spinach, kale, and blueberries offer essential vitamins and antioxidants.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Salmon oil and added vitamins promote a shiny coat and robust immune system
        </li>
        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">Nutrition Information (Placeholder Values):</h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Calories: 350 kcal/cup
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Protein: 25%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fat: 12%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fiber: 4%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Moisture: 10%
        </li>
        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">Chicken & Rice Delight:</h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>
        <p className="text-textGraySm text-xl font-normal mb-8">Ingredients: how , Tricalcium Phosphate, Salmon Oil, Salt, Taurine, Zinc Gluconate, Vitamin E Supplement, Ferrous Sulfate, Copper Amino Acid Chelate, Manganese Amino Acid Chelate, Vitamin D3, Vitamin B2, Vitamin B1, Vitamin B6, Potassium Iodide.</p>

        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">
          Why It’s Greate
        </h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Chicken and chicken livers provide essential proteins and nutrients for muscle and organ health.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Rice and potatoes are gentle on digestion and offer sustained energy.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Carrots, peas, spinach, and cranberries deliver a powerful blend of vitamins and antioxidants.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Salmon oil and added nutrients ensure a healthy coat and immune system.

        </li>

        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">Nutrition Information (Placeholder Values):</h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Calories: 350 kcal/cup
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Protein: 24%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fat: 13%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fiber: 3.5%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Moisture: 10%
        </li>

        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">Veggie Feast Bowl</h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <p className="text-textGraySm text-xl font-normal mb-5">Ingredients: Paneer, Brown Rice, Pumpkin, Green Peas, Carrots, Sweet Potatoes, Spinach, Turmeric, Coconut Oil, Flaxseeds, Tricalcium Phosphate, Iodized Salt, Vitamin Supplements, Zinc Gluconate, Iron Supplements.</p>

        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">
          Why It’s Greate
        </h3>
<div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Chicken and chicken livers provide essential proteins and nutrients for muscle and organ health.
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Brown rice and sweet potatoes offer digestible energy sources
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Pumpkin, spinach, and green peas deliver fiber and essential vitamins
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Coconut oil and flaxseeds add healthy fats for a shiny coat
        </li>

        <h3 className="text-textGray text-[32px] font-semibold leading-[44px] mb-5">Nutrition Information (Placeholder Values):</h3>
        <div className="border-b-[2px] border-[#383838] leading-8 mb-5"></div>

        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Calories: 340 kcal/cup
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Protein: 20%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fat: 10%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Fiber: 5%
        </li>
        <li className="text-textGraySm text-xl font-normal mb-8">
          {" "}
          Moisture: 12%
        </li>
      </div>
    </CommonWrapper>
  );
};

export default RecipeDetails;
