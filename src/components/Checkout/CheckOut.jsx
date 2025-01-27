import BillingInformation from "../BillingInformation/BillingInformation";
import OrderSummary from "../OrderSummary/OrderSummary";



const CheckOut = () => {
 
  return (
    <div className="xl:mb-[200px] flex flex-col xl:flex-row gap-8 xl:mt-[70px] py-5">
      <BillingInformation />
      <OrderSummary />
    </div>
  );
};

export default CheckOut;
