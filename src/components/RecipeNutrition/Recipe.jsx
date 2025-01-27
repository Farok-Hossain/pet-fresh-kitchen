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
                <p className="xl:max-w-[960px] mx-auto text-center text-textColor xl:text-xl font-normal xl:leading-[30px] lg:px-10">
                Explore a wide range of delicious and nutritious dog food recipes, each designed to meet your pet&apos;s unique needs and preferences for a happy, healthy life.
                </p>
              </div>
        
             <div className="grid xl:grid-cols-4 lg:grid-cols-2 xl:gap-[30px] gap-6 xl:mt-[60px] lg:pt-10 mt-6">
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