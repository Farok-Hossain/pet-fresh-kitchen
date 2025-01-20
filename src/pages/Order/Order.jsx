import Card from "@/components/common/Card";
import img1 from "../../assets/images/cardImg1.png";
import img2 from "../../assets/images/cardImg2.png";
import img3 from "../../assets/images/cardImg3.png";
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
