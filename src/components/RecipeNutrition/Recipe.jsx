import recipeCardImg from "../../assets/images/recipeCardImage.png"
import CommonWrapper from "../common/CommonWrapper";
import RecipeCard from "../common/RecipeCard";
import SectionTitle from "../common/SectionTitle";

const Recipe = () => {
    const ingredientItems = [
        {
          img: recipeCardImg,
          title: "BEEF MASH",
          description:
            "Beef, potatoes, eggs, carrots, peas sweet potatoes",
        },
        {
          img: recipeCardImg,
          title: "BEEF MASH",
          description:
            "Beef, potatoes, eggs, carrots, peas sweet potatoes",
        },
        {
          img: recipeCardImg,
          title: "BEEF MASH",
          description:
            "Beef, potatoes, eggs, carrots, peas sweet potatoes",
        },
        {
          img: recipeCardImg,
          title: "BEEF MASH",
          description:
            "Beef, potatoes, eggs, carrots, peas sweet potatoes",
        },
        
      ];
    return (
        <CommonWrapper>
              <div>
                <SectionTitle className="text-center" title="Our Exciting Variety of Recipes" />
                <p className="max-w-[960px] mx-auto text-center text-textColor text-xl font-normal leading-[30px]">
                Explore a wide range of delicious and nutritious dog food recipes, each designed to meet your pet&apos;s unique needs and preferences for a happy, healthy life.
                </p>
              </div>
        
             <div className="grid grid-cols-4 gap-[30px] mt-[60px]">
             {ingredientItems.map((item, index) => (
                <RecipeCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              ))}
             </div>
            </CommonWrapper>
    );
};

export default Recipe;