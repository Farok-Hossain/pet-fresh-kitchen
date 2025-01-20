
import PropTypes from "prop-types";

const CommonWrapper = ({ children, version = "", noContainer }) => {
    return (
      <div className={`${noContainer ? `` : `container`}`}>
        <div
          className={`${version === "lg" ? `py-[30px] xl:py-[200px]` : `py-[30px] xlg:py-[60px]`}`}
        >
          {children}
        </div>
      </div>
    );
  };

  CommonWrapper.propTypes = {
    children: PropTypes.any,
    version: PropTypes.any,
    noContainer: PropTypes.any
  };
  export default CommonWrapper;