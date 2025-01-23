import { useState } from "react";
import productImg from "../../assets/images/productImg.png";
import CommonModal from "@/components/common/CommonModal";

const ProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const weightData = [
    { id: 1, weight: "50 gm" },
    { id: 2, weight: "100 gm" },
    { id: 3, weight: "150 gm" },
    { id: 4, weight: "250 gm" },
    { id: 5, weight: "500 gm" },
  ];

  const dogType = [
    {
      id: 1,
      type: "Puppy",
    },
    {
      id: 2,
      type: "Adult",
    },
    {
      id: 3,
      type: "Senior",
    },
  ];

  return (
    <div className="container gap-[50px] flex py-[200px]">
      <div className="min-w-[518px] min-h-[653px] border-[1px] rounded-[10px] border-[#E2E2E2]">
        <img src={productImg} alt="" className="px-[41px] py-[122px]" />
      </div>
      <div className="pt-[10px] pl-[10px]">
        <div className="space-y-5">
          <div>
            <h3 className="text-textGray text-5xl font-semibold leading-[70px]">
              Instinct Raw Meals
            </h3>
          </div>

          <div>
            <h4 className="text-[#212121E6] text-4xl font-medium">$132.93</h4>
          </div>

          <div>
            <h5 className="text-[#212121B3] text-2xl font-medium">
              Net Weight
            </h5>
            <div className="flex text-[18px] font-medium text-textGraySm gap-[10px]">
              {weightData.map((item) => (
                <div
                  className="border-[1px] rounded-[10px] px-[18px] py-[8px] border-[#124C5F] mt-[10px]"
                  key={item.id}
                >
                  {item.weight}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#212121B3] text-2xl font-medium ">Dog Type</h4>
            <div className="flex text-[18px] font-medium text-textGraySm gap-[10px]">
              {dogType.map((item) => (
                <div
                  className="border-[1px] rounded-[10px] px-[18px] py-[8px] border-[#124C5F] mt-[10px]"
                  key={item.id}
                >
                  {item.type}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-textGray text-2xl font-medium">
              Product details
            </h4>
          </div>
          <div>
            <p className="text-xl font-normal text-[#212121CC]">
              Provide your dog with the healthiest, most nutritious meals
              through our premium Instinct Raw Meals. Tailored to enhance their
              overall well-being, these meals are made from responsibly sourced,
              raw ingredients and packed with essential nutrients for optimal
              health.
            </p>
          </div>
        </div>

        <div className="flex mt-[51px] gap-[30px]">
          <button
            onClick={() => {
              setClickedButton("cart");
              setIsModalOpen(true);
            }}
            className="border-[1px] border-[#124C5F] rounded-[10px] px-20 py-5 text-2xl font-bold text-textGray"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              setClickedButton("buy");
              setIsModalOpen(true);
            }}
            className="bg-primaryOrange rounded-[10px] px-20 py-5 text-2xl font-bold text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Instinct Raw Meals"
        img={productImg}
        weightData={weightData}
        dogType={dogType}
        clickedButton={clickedButton}
        category="Vegetarian"
      />
    </div>
  );
};

export default ProductDetails;
