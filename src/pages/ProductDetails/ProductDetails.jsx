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

  const petType = [
    {
      id: 1,
      type: "Male",
    },
    {
      id: 2,
      type: "Female",
    },
  ];

  return (
    <div className="container xl:gap-[50px] flex xl:flex-row flex-col xl:py-[200px] py-10">
      <div className="xl:min-w-[518px] xl:min-h-[653px] flex justify-center border-[1px] rounded-[10px] border-[#E2E2E2]">
        <img src={productImg} alt="" className="px-[41px]  xl:py-[122px] py-10" />
      </div>
      <div className="pt-[10px] xl:pl-[10px]">
        <div className="space-y-5">
          <div>
            <h3 className="text-textGray xl:text-5xl text-2xl font-semibold xl:leading-[70px] text-center xl:text-start pt-5">
              Instinct Raw Meals
            </h3>
          </div>

          <div>
            <h4 className="text-[#212121E6] xl:text-4xl text-xl text-center xl:text-start font-medium">$132.93</h4>
          </div>

          <div>
            <h5 className="text-[#212121B3] xl:text-2xl text-center xl:text-start font-medium">
              Net Weight
            </h5>
            <div className="flex flex-wrap justify-center xl:justify-start xl:text-[18px] text-[14px] font-medium text-textGraySm gap-[10px]">
              {weightData.map((item) => (
                <div
                  className="border-[1px] rounded-[10px] xl:px-[18px] px-2 py-1 xl:py-[8px] border-[#124C5F] mt-[10px]"
                  key={item.id}
                >
                  {item.weight}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#212121B3] xl:text-2xl text-center xl:text-start font-medium ">Dog Type</h4>
            <div className="flex xl:text-[18px] justify-center xl:justify-start text-[14px] font-medium text-textGraySm gap-[10px]">
              {petType.map((item) => (
                <div
                  className="border-[1px] rounded-[10px] xl:px-[18px] px-2 py-1 xl:py-[8px] border-[#124C5F] mt-[10px]"
                  key={item.id}
                >
                  {item.type}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-textGray xl:text-2xl text-xl text-center xl:text-start pt-3 font-medium">
              Product details
            </h4>
          </div>
          <div>
            <p className="xl:text-xl text-center xl:text-start font-normal text-[#212121CC]">
              Provide your dog with the healthiest, most nutritious meals
              through our premium Instinct Raw Meals. Tailored to enhance their
              overall well-being, these meals are made from responsibly sourced,
              raw ingredients and packed with essential nutrients for optimal
              health.
            </p>
          </div>
        </div>

        <div className="flex justify-center xl:justify-start  xl:mt-[51px] mt-5 xl:gap-[30px] gap-5">
          <button
            onClick={() => {
              setClickedButton("cart");
              setIsModalOpen(true);
            }}
            className="border-[1px] border-[#124C5F] rounded-[10px] xl:px-20 px-6 xl:py-5 py-3 xl:text-2xl font-bold text-textGray"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              setClickedButton("buy");
              setIsModalOpen(true);
            }}
            className="bg-primaryOrange rounded-[10px] xl:px-20 px-10 xl:py-5 py-3 xl:text-2xl font-bold text-white"
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
        dogType={petType}
        clickedButton={clickedButton}
        category="Vegetarian"
      />
    </div>
  );
};

export default ProductDetails;
