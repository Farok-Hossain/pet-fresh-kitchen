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
        <div className="container py-[200px]">
      <div className="">
        <h3 className="text-textGray text-[40px] font-semibold">Add to Cart</h3>
      </div>

      <div className="flex gap-[60px] mt-[30px] ">
        <div>
          {products.map((item, index) => (
            <div key={index} className={`flex items-center gap-[38px] ${
                index > 0 ? "mt-5" : ""
              }`}>
              <div>
                <Checkbox className="rounded-full h-[54px] w-[54px]" />
              </div>

              <div className="flex items-center gap-10 border-[1px] w-[782px] border-[#E2E2E2] rounded-[10px]">
                <div className="py-[10px] pl-10">
                  <img src={rawMeals} alt="" />
                </div>
                <div className="pt-[15px]">
                  <h3 className="text-textGray text-[32px] font-medium">
                    {item.title}
                  </h3>
                  <h5 className="text-xl font-medium text-[#212121B2]">
                    Net Weight: {item.netWeight}
                  </h5>
                  <h5 className="text-xl font-medium text-[#212121B2]">
                    Dog Type: {item.dogType}
                  </h5>
                </div>

                <div className="flex gap-5 items-center pr-7">
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
                    <div className="px-[35px] flex justify-center items-center">
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

        <div className="w-[505px] border-[1px] rounded-[10px] border-[#E2E2E2] px-5">
          <h3 className="text-textGray text-[30px] font-semibold mt-10">
            Shopping Cart
          </h3>
          <h5 className="text-[#545454] text-[18px] font-normal leading-4 mt-10 mb-2">
            Discount code
          </h5>
          <div className="border-[0.5px] mt-[5px] text-[#9F9F9F] rounded-[7px]">
            <h5 className="text-[14px] leading-6 text-[#979797] p-4">code</h5>
          </div>

          <div className="flex justify-between mt-10 mb-10">
            <h4 className="text-textGray text-xl font-medium">Subtotal</h4>
            <h4 className="text-textGray text-xl font-normal">$455</h4>
          </div>
          <div className="flex justify-between mb-5">
            <h4 className="text-textGray text-[18px]">Estimated shipping</h4>
            <h4 className="text-textGray text-xl font-normal">$25</h4>
          </div>
          <div className="flex justify-between">
            <h4 className="text-textGray text-[18px]">Discount code</h4>
            <h4 className="text-textGray text-xl font-normal">$00</h4>
          </div>
          <div className="flex justify-between mt-10 mb-[25px]">
            <h4 className="text-textGray text-xl font-medium">Total</h4>
            <h4 className="text-textGray text-xl font-normal">$480</h4>
          </div>
          <div>
            <button className="bg-primaryOrange text-white py-5 w-full text-2xl font-bold rounded-[10px]">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddCart;