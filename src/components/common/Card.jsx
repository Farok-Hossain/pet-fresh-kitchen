import OfferIcon from "../../assets/Icons/OfferIcon";

const Card = ({ img, title, price, offer }) => {
  return (
    <div className="relative">
      <div className=" absolute right-[16px] top-[-7px] flex justify-end">
        <div className="relative ">
          <OfferIcon className="absolute top-0 left-0 w-full h-full" />
          <p className="absolute inset-0 flex items-center text-center justify-center z-10 text-white text-[14px] font-semibold">
            {offer}
          </p>
        </div>
      </div>

      <div className=" h-[300px] w-[276px]">
        <img src={img} alt="" />
      </div>
      <div className="border border-[#E2E2E2] rounded-b-md ">
        <h3 className="mt-12 text-textBlack text-center">{title}</h3>
        <p className="text-[#000000B8] font-semibold text-xl text-center mt-[9px]">
          {price}
        </p>

        <div className="mt-[7px] mb-7 flex justify-center">
          <button className="border border-[#F7830D] py-[7px] px-5 rounded-3xl text-sm font-semibold text-[#124C5F]">
            Product details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
