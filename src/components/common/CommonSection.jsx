import PropTypes from "prop-types";
import CommonWrapper from "./CommonWrapper";

const CommonSection = ({
  reverse,
  title,
  description,
  extraText,
  extraText2,
  bonousText,
  img,
}) => {
  return (
    <CommonWrapper>
      <div
        className={`flex flex-col gap-[30px] md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-6 my-8`}
      >
        <div className="min-w-[768px]">
          <h3 className="text-textGray text-4xl font-semibold mb-[30px]">
            {title}
          </h3>
          <p className="text-textGray text-2xl font-normal">{description}</p>
          <li className="text-textGray text-2xl font-normal mb-8">
            {extraText}
          </li>
          <li className="text-textGray text-2xl font-normal mb-8">
            {extraText2}
          </li>
          <p className="text-textGray text-2xl font-normal">{bonousText}</p>
        </div>
        {/* image  */}
        <div className="min-w-[642px]  min-h-[452px] rounded-[20px]">
          <img className="" src={img} alt="" />
        </div>
      </div>
    </CommonWrapper>
  );
};

CommonSection.propTypes = {
  title: PropTypes.string,
  reverse: PropTypes.any,
  description: PropTypes.string,
  extraText: PropTypes.string,
  extraText2: PropTypes.string,
  bonousText: PropTypes.string,
  img: PropTypes.any,
};

export default CommonSection;
