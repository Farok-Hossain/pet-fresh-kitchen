
import CommonWrapper from "@/components/common/CommonWrapper";
import OrderCard from "@/components/Orders/OrderCard";

const Order = () => {
  const headings = [
    {
      heading1: "Starting From 50$ - 100$",
    },
    {
      heading2: "Starting From 50$ - 100$",
    },
    {
      heading3: "Starting From 50$ - 100$",
    },
  ];
  return <CommonWrapper>
    {
        headings.map((heading, index) => (
            <OrderCard key={index} heading={heading}></OrderCard>
        ))
    }
  </CommonWrapper>;
};

export default Order;
