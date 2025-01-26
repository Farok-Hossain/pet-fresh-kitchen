import PropTypes from "prop-types";
const IngredientCard = ({ img, title, description }) => {
  return (
    <div>
      {/* card items  */}
      <div>
        <div className=" rounded-[20px] border-[1px] xl:h-[439px]">
          <div className="xl:w-[100px] xl:h-[100px] xl:mt-[60px] xl:ml-[30px] xl:mb-12 flex justify-center xl:block py-6">
          <img src={img} alt="" />
          </div>
          <h3 className="text-textGray xl:font-bold font-medium flex justify-center xl:block xl:text-3xl text-xl xl:leading-[44px] xl:pt-4 xl:ml-[30px] xl:mb-5 mb-2">{title}</h3>
          <h3 className="xl:text-xl text-textColor xl:leading-[30px] xl:ml-[30px] text-center xl:text-start mb-3">{description}</h3>
        </div>
      </div>
    </div>
  );
};

IngredientCard.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default IngredientCard;
