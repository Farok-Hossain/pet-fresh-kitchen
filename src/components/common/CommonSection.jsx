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
        className={`flex flex-col gap-[30px] md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-6 my-8`}
      >
        <div className="min-w-[768px]">
          <h3 className="text-textGray text-4xl font-semibold mb-[30px]">
            {title}
          </h3>
          <p className="text-textGray text-2xl font-normal">{description}</p>
          <li className="text-textGray text-2xl font-normal mb-7">{listItem}</li>
          <li className="text-textGray text-2xl font-normal mb-7">{listItem2}</li>
          <h3 className="text-textGray text-2xl font-normal">{description2}</h3>
          <ul className="mt-4">
            {renderListItem(boldList1)}
            {renderListItem(boldList2)}
            {renderListItem(boldList3)}
          </ul>
        </div>
        {/* image */}
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
