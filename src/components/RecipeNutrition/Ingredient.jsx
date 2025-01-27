
import CommonWrapper from "@/components/common/CommonWrapper";
import IngredientCard from "../common/IngredientCard";
import SectionTitle from "../common/SectionTitle";
import ingredientImg1 from "../../assets/images/ingredient1.jpg"
import ingredientImg2 from "../../assets/images/ingredient2.png"
import ingredientImg3 from "../../assets/images/ingredient3.png"
import ingredientImg4 from "../../assets/images/ingredient4.png"
import ingredientImg5 from "../../assets/images/ingredient5.png"
import ingredientImg6 from "../../assets/images/ingredient6.png"

const Ingredient = () => {
  const ingredientItems = [
    {
      img: ingredientImg1,
      title: "Ground Whole Corn",
      description:
        "Main Purpose: Essential amino acids, carbohydrate source, Linoleic acid, Fiber",
      description2:"Nutritional Benefit: Source of energy, lean muscles",
    },
    {
        img: ingredientImg2,
      title: "Beet Pulp",
      description: "Main Purpose: Soluble fiber source, essential amino acids",
      description2: "Nutritional Benefit: Added for digestion",
    },
    {
        img: ingredientImg3,
      title: "Meat and Bone Meal",
      description:
        "Main Purpose: Concentrated essential amino acids, calcium and phosphorous",
      description2:"Nutritional Benefit: Lean muscles, strong teeth and bones",
    },
    {
        img: ingredientImg4,
      title: "Fish Meal",
      description:
        "Main Purpose: Concentrated essential amino acid, fiber source",
      description2:
        "Nutritional Benefit: Lean muscles, strong teeth and bones",
    },
    {
        img: ingredientImg5,
      title: "Vegetable Oil",
      description: "Main Purpose: Source of linoleic acid",
      description2: "Nutritional Benefit: Healthy skin and shiny coat",
    },
    {
        img: ingredientImg6,
      title: "Brewer’s Rice",
      description: "Main Purpose: Carbohydrates fiber",
      description2: "Nutritional Benefit: Healthy skin and shiny coat",
    },
  ];
  return (
    <CommonWrapper>
      <div>
        <SectionTitle className="text-center" title="Our Ingredients" />
        <p className=" xl:max-w-[960px] lg:px-24 mx-auto text-center text-textColor xl:text-xl font-normal xl:leading-[30px]">
          We encourage label readers because it’s essential to understand what
          you&apos;re feeding your dog. However, knowing the ingredients
          isn&apos;t the same as understanding their nutritional value and how
          they benefit your dog. Let’s explore some of the great ingredients we
          use in our recipes.
        </p>
      </div>

     <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[30px] xl:pt-[60px] pt-6 ">
     {ingredientItems.map((item, index) => (
        <IngredientCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          description2={item.description2}
        />
      ))}
     </div>
    </CommonWrapper>
  );
};

export default Ingredient;
