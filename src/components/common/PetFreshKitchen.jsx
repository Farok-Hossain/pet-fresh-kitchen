import PropTypes from "prop-types";

const PetFreshKitchen = ({ icon, title, description }) => {
  return (
    <div className="flex xl:flex-row flex-col justify-center items-center xl:items-start gap-2  xl:gap-5 xl:mb-10 ">
      <div>
        <p>{icon}</p>
      </div>
      <div>
        <h3 className="xl:max-w-[588px] text-center xl:text-start xl:h-12 text-textGray xl:font-semibold font-medium text-xl xl:text-[32px] mb-[15px]">
          {title}
        </h3>
        <p className="xl:max-w-[588px] text-center xl:text-start  xl:max-h-[84px] text-textGraySm font-normal leading-7 xl:text-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
};

PetFreshKitchen.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  description: PropTypes.string,
};
export default PetFreshKitchen;
