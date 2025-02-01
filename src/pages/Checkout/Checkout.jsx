import BillingInformation from "@/components/BillingInformation/BillingInformation";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

const Checkout = () => {
  return (
    <div className="container xl:mb-[200px] flex flex-col xl:flex-row gap-8 xl:mt-[70px] py-5">
      <BillingInformation />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
