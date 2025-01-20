import PropTypes from "prop-types";
const IngredientCard = ({ img, title, description }) => {
  return (
    <div>
      {/* card items  */}
      <div>
        <div className=" rounded-[20px] border-[1px] h-[439px]">
          <div className="w-[100px] h-[100px] mt-[60px] ml-[30px] mb-9">
          <img src={img} alt="" />
          </div>
          <h3 className="text-textGray font-bold text-3xl leading-[44px] ml-[30px] mb-5">{title}</h3>
          <h3 className="text-xl text-textColor leading-[30px] ml-[30px] mb-3">{description}</h3>
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
