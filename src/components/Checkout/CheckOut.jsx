import BillingInformation from "../BillingInformation/BillingInformation";
import OrderSummary from "../OrderSummary/OrderSummary";



const CheckOut = () => {
 
  return (
    <div className="mb-[200px] flex gap-8 mt-[70px]">
      <BillingInformation />
      <OrderSummary />
    </div>
  );
};

export default CheckOut;
