import productImg from "../../assets/images/productImg.png";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const OrderSummary = () => {
  return (
    <div className="border-[1px] border-[#E6E6E6] rounded-lg w-[424px] h-auto max-h-[535px] px-6 py-6">
      <h3 className="text-xl font-medium leading-[30px] text-textGray">
        Order Summary
      </h3>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-[6px] justify-center items-center">
          <div className="w-[60px]">
            <img src={productImg} alt="" />
          </div>
          <h5 className="text-[14px] text-[#1A1A1A]">Raw Meals</h5>
          <h5 className="text-[14px] text-[#1A1A1A]">x1</h5>
        </div>
        <div>
          <h5 className="text-[14px] text-[#1A1A1A] font-medium">$70.00</h5>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <h5 className="text-[#4D4D4D] text-[14px]">Subtotal:</h5>
        <h5 className="text-[14px] text-[#1A1A1A] font-medium">$70.00</h5>
      </div>
      <div className="border-[1px] text-[#E5E5E5] my-3"></div>
      <div className="flex justify-between">
        <h5 className="text-[#4D4D4D] text-[14px]">Shipping:</h5>
        <h5 className="text-[14px] text-[#1A1A1A] font-medium">$10</h5>
      </div>
      <div className="flex justify-between mt-6">
        <h5 className="text-[#4D4D4D] text-[14px]">Discount</h5>
        <h5 className="text-[14px] text-[#1A1A1A] font-medium">$5</h5>
      </div>
      <div className="border-[1px] text-[#E5E5E5] my-3"></div>
      <div className="flex justify-between">
        <h5 className="text-[#4D4D4D] text-[16px]">Total:</h5>
        <h5 className="text-[14px] text-[#1A1A1A] font-medium">$75</h5>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-4">Payment Method</h3>
      <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one" className="text-[14px] text-[#4D4D4D]">Cash on Delivery</Label>
  </div>
  <div className="flex items-center space-x-2 mb-6">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two" className="text-[14px] text-[#4D4D4D]">Stripe</Label>
  </div>
</RadioGroup>

      <button className="bg-primaryOrange text-white py-4 w-full  font-bold rounded-[43px]">Place Order</button>
    </div>
  );
};

export default OrderSummary;
