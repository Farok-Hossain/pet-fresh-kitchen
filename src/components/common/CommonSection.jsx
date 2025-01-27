import PropTypes from "prop-types";
import CommonWrapper from "./CommonWrapper";

const CommonSection = ({
  reverse,
  title,
  description,
  description2,
  listItem,
  listItem2,
  boldList1,
  boldList2,
  boldList3,
  img,
}) => {
  const renderListItem = (item) => {
    if (!item) return null;
    return (
      <li className="text-textGray text-2xl font-normal mb-2">
        {item.normal && <span>{item.normal} </span>}
        {item.bold && <span className="font-bold">{item.bold}</span>}
      </li>
    );
  };

  return (
    <CommonWrapper>
      <div
        className={`flex flex-col xl:gap-[30px] xl:flex-row lg:flex-row ${
          reverse ? "xl:flex-row-reverse lg:flex-row-reverse " : ""
        } items-center gap-6 xl:my-8`}
      >
        <div className="xl:min-w-[768px]">
          <h3 className="text-textGray xl:text-4xl text-xl text-center xl:text-start font-semibold xl:mb-[30px] mb-3">
            {title}
          </h3>
          <p className="text-textGray xl:text-2xl text-center xl:text-start font-normal mb-2">{description}</p>
          <li className="text-textGray xl:text-2xl font-normal xl:mb-7 mb-3 text-center xl:text-start">{listItem}</li>
          <li className="text-textGray xl:text-2xl font-normal xl:mb-7 mb-3 text-center xl:text-start">{listItem2}</li>
          <h3 className="text-textGray xl:text-2xl font-normal xl:mb-7 text-center xl:text-start">{description2}</h3>
          <ul className="mt-4">
            {renderListItem(boldList1)}
            {renderListItem(boldList2)}
            {renderListItem(boldList3)}
          </ul>
        </div>
        {/* image */}
        <div className="xl:min-w-[642px]  xl:min-h-[452px] rounded-[20px] mt-[-16px] xl:mt-0">
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
  boldList1: PropTypes.shape({
    normal: PropTypes.string,
    bold: PropTypes.string,
  }),
  boldList2: PropTypes.shape({
    normal: PropTypes.string,
    bold: PropTypes.string,
  }),
  boldList3: PropTypes.shape({
    normal: PropTypes.string,
    bold: PropTypes.string,
  }),
  img: PropTypes.any,
};

export default CommonSection;
