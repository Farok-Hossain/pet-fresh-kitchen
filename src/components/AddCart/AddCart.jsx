import { Checkbox } from "@/components/ui/checkbox";
import rawMeals from "../../assets/images/rawMeals.png";
import PlusIcon from "@/assets/Icons/PlusIcon";
import { MinusIcon } from "lucide-react";
import { useState } from "react";
import CrossIcon from "@/assets/Icons/CrossIcon";

const AddCart = () => {
  const [count, setCount] = useState(1);

  const products = [
    {
      img: rawMeals,
      title: "Instinct Raw Meals",
      netWeight: "250 gm",
      dogType: "Puppy",
      price: 132.93,
    },
    {
      img: rawMeals,
      title: "Healthy Dog Biscuits",
      netWeight: "250 gm",
      dogType: "Adult",
      price: 132.93,
    },
    {
      img: rawMeals,
      title: "Grain-Free Dog Food",
      netWeight: "250 gm",
      dogType: "Adult",
      price: 132.93,
    },
    {
      img: rawMeals,
      title: "Organic Dog Treats",
      netWeight: "250 gm",
      dogType: "Adult",
      price: 132.93,
    },
  ];
  return (
    <div className="container xl:py-[200px] py-10">
      <div className="">
        <h3 className="text-textGray xl:text-[40px] text-xl font-semibold">
          Add to Cart
        </h3>
      </div>

      <div className="flex xl:flex-row flex-col gap-[60px] mt-[30px] ">
        <div>
          {products.map((item, index) => (
            <div
              key={index}
              className={`flex items-center xl:gap-[38px] gap-3 ${
                index > 0 ? "mt-5" : ""
              }`}
            >
              <div>
                <Checkbox className="rounded-full xl:h-[54px] h-6 w-6 xl:w-[54px]" />
              </div>

              <div className="flex items-center xl:gap-10 border-[1px] xl:w-[782px] border-[#E2E2E2] rounded-[10px]">
                <div className="xl:py-[10px] px-1 xl:pl-10 py-1">
                  <img src={rawMeals} alt="" />
                </div>
                <div className="pt-[15px] pr-2 pl-1">
                  <h3 className="text-textGray xl:text-[32px] xl:font-medium">
                    {item.title}
                  </h3>
                  <h5 className="xl:text-xl font-medium text-[#212121B2]">
                    Net Weight: {item.netWeight}
                  </h5>
                  <h5 className="xl:text-xl xl:mb-5 font-medium text-[#212121B2]">
                    Dog Type: {item.dogType}
                  </h5>
                </div>

                <div className="flex xl:flex-row flex-col gap-5 items-center pr-7">
                  <div className="border-[1px] rounded-[10px] border-[#E2E2E2] flex px-3 py-[6.5px]">
                    <button
                      className=""
                      onClick={() => {
                        if (count > 0) {
                          setCount((count) => count - 1);
                        }
                      }}
                    >
                      <div className="bg-primaryOrange text-white w-5 h-5 rounded-full flex justify-center items-center">
                        <MinusIcon className="px-1 py-1" />
                      </div>
                    </button>
                    <div className="xl:px-[35px] px-5 flex justify-center items-center">
                      {count}
                    </div>
                    <button
                      className=""
                      onClick={() => setCount((count) => count + 1)}
                    >
                      <div className="bg-primaryOrange text-white w-5 h-5 rounded-full flex justify-center items-center">
                        <PlusIcon className="w-2" />
                      </div>
                    </button>
                  </div>
                  <div>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="h-6 w-6">
                    <CrossIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="xl:w-[505px] border-[1px] rounded-[10px] border-[#E2E2E2] px-5">
          <h3 className="text-textGray xl:text-[30px] text-xl font-semibold xl:mt-10 mt-4">
            Shopping Cart
          </h3>
          <h5 className="text-[#545454] xl:text-[18px] font-normal leading-4 xl:mt-10 mt-4 mb-2">
            Discount code
          </h5>
          <div className="border-[0.5px] mt-[5px] text-[#9F9F9F] rounded-[7px]">
            <h5 className="text-[14px] leading-6 text-[#979797] xl:p-4 p-2">code</h5>
          </div>

          <div className="flex justify-between xl:mt-10 mt-4 xl:mb-10 mb-2">
            <h4 className="text-textGray xl:text-xl font-medium">Subtotal</h4>
            <h4 className="text-textGray xl:text-xl font-normal">$455</h4>
          </div>
          <div className="flex justify-between xl:mb-5 mb-2">
            <h4 className="text-textGray xl:text-xl">Estimated shipping</h4>
            <h4 className="text-textGray xl:text-xl font-normal">$25</h4>
          </div>
          <div className="flex justify-between mb-2">
            <h4 className="text-textGray xl:text-xl">Discount code</h4>
            <h4 className="text-textGray xl:text-xl font-normal">$00</h4>
          </div>
          <div className="flex justify-between xl:mt-10 xl:mb-[25px] mb-4">
            <h4 className="text-textGray xl:text-xl font-medium">Total</h4>
            <h4 className="text-textGray xl:text-xl font-normal">$480</h4>
          </div>
          <div className="pb-5">
            <button className="bg-primaryOrange text-white xl:py-5 py-2 w-full xl:text-2xl xl:font-bold rounded-[10px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
