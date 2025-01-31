import PropTypes from "prop-types";
import OfferIcon from "@/assets/Icons/OfferIcon";
import { Link } from "react-router-dom";

const Card = ({ img, title, start, price, offer }) => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute sm:right-[16px] xs:right-24 right-[36px] top-[-7px] flex justify-end">
        <div className="relative">
          <OfferIcon className="absolute top-0 left-0 w-full h-full" />
          <p className="absolute inset-0 flex items-center text-center justify-center z-10 text-white text-[14px] font-semibold">
            {offer}
          </p>
        </div>
      </div>

      <div className="border border-[#E2E2E2] rounded-lg">
        <div className="w-full">
          <img src={img} alt="" className="w-full object-cover" />
        </div>
        <div className="xl:mt-12 mt-5">
          <div className="flex justify-center items-center gap-5 pb-3">
            <p className="text-textGray">{start}</p>
            <h3 className="text-primaryOrange text-xl font-medium">{price}</h3>
          </div>
          <h3 className="text-textGray text-center pb-3 text-xl font-medium">{title}</h3>
          <p className="text-[#000000B8] font-semibold text-xl text-center mt-[9px]"></p>

          <div className="mt-[7px] mb-7 flex justify-center gap-2">
            <Link to="/productdetails">
              <button className="bg-primaryOrange py-[7px] px-5 rounded-3xl text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105">
                Add to Cart
              </button>
            </Link>

            <Link to="/productdetails">
              <button className="border border-[#F7830D] py-[7px] px-5 rounded-3xl text-sm font-medium text-primaryOrange transition duration-300 ease-in-out transform hover:scale-105">
                View details
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
  start: PropTypes.string,
  price: PropTypes.number,
  offer: PropTypes.number,
};

export default Card;
