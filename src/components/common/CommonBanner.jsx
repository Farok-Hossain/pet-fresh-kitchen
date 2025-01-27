import PropTypes from "prop-types";

const CommonBanner = ({
  title,
  description,
  perfectMeal,
  girlWithDog,
  buttonText,
}) => {
  return (
    <div
      className="relative bg-[#F7830D] text-white flex items-center justify-center xl:py-[200px] py-[30px] overflow-hidden w-full"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Image */}
      {perfectMeal && (
        <div className="absolute top-0 hidden xl:block lg:block left-0 h-full">
          <img
            src={perfectMeal}
            alt="Perfect Meal"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title and Description */}
      <div className="relative z-10 text-center px-4">
        <h2 className="xl:max-w-[924px]  mx-auto xl:text-[64px] lg:text-3xl lg:px-20 text-2xl xl:leading-[80px] leading-8 font-semibold xl:mb-4 mb-2">
          {title}
        </h2>
        <p className=" xl:leading-[30px] xl:max-w-[798px] mx-auto text-center xl:mt-4">
          {description}
        </p>
        {buttonText && (
          <button className="bg-white text-primaryOrange px-8 py-[14px] rounded mt-8 ">
            {buttonText}
          </button>
        )}
      </div>

      {/* Right Image */}
      {girlWithDog && (
        <div className="absolute hidden xl:block lg:block  top-0 right-0 h-full">
          <img
            src={girlWithDog}
            alt="Girl with Dog"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

CommonBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  perfectMeal: PropTypes.any,
  girlWithDog: PropTypes.any,
  buttonText: PropTypes.string,
};

export default CommonBanner;
