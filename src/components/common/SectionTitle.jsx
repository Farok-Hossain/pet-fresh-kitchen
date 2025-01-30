import PropTypes from "prop-types";

const SectionTitle = ({ title, className }) => {
  return (
    <div className="xl:mb-6 mb-3">
      <h3 className={`${className} text-xl text-textGray xl:text-5xl lg:text-2xl md:text-xl lg:pt-7 font-medium mb-2`}>
        {title}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.any
};

export default SectionTitle;
