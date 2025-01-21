import PropTypes from "prop-types";

const PetFreshKitchen = ({ icon, title, description }) => {
  return (
    <div className="flex gap-5 mb-10 ">
      <div>
        <p>{icon}</p>
      </div>
      <div>
        <h3 className="max-w-[588px] h-12 text-textGray font-semibold text-[32px] mb-[15px]">
          {title}
        </h3>
        <p className="max-w-[588px] max-h-[84px] text-textGraySm font-normal leading-7 text-[22px]">
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
