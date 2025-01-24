import productImg from "../../assets/images/productImg.png";

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
      <div>
        <h3 className="text-[14px] text-[#4D4D4D]">Cash on Delivery</h3>
      </div>
      <div className="mt-[10px] mb-6">
        <h3 className="text-[14px] text-[#4D4D4D]">Stripe</h3>
      </div>
      <button className="bg-primaryOrange text-white py-4 w-full  font-bold rounded-[43px]">Place Order</button>
    </div>
  );
};

export default OrderSummary;
