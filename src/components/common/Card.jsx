import PropTypes from "prop-types";
import OfferIcon from "../../assets/Icons/OfferIcon";
import { Link } from "react-router-dom";

const Card = ({ img, title, price, offer }) => {
  return (
    <div className="relative">
      <div className=" absolute xl:right-[16px] right-[36px] top-[-7px] flex justify-end">
        <div className="relative ">
          <OfferIcon className="absolute top-0 left-0 w-full h-full" />
          <p className="absolute inset-0 flex items-center text-center justify-center z-10 text-white text-[14px] font-semibold">
            {offer}
          </p>
        </div>
      </div>

      
      <div className="border border-[#E2E2E2] rounded-lg">
      <div className=" w-full ">
        <img src={img} alt="" className="w-full"/>
      </div>
      <div className="xl:mt-12 mt-6">
      <h3 className=" text-textBlack text-center">{title}</h3>
        <p className="text-[#000000B8] font-semibold text-xl text-center mt-[9px]">
          {price}
        </p>

        <div className="mt-[7px] mb-7 flex justify-center">
          <Link to="/productdetails">
          <button className="border border-[#F7830D] py-[7px] px-5 rounded-3xl text-sm font-semibold text-[#124C5F]">
            Product details
          </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  price: PropTypes.number,
  offer: PropTypes.number,
};

export default Card;
