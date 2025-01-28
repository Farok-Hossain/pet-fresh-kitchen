import img1 from "../../assets/images/cardImg1.png";
import img2 from "../../assets/images/cardImg2.png";
import img3 from "../../assets/images/cardImg3.png";
import Card from "../common/Card";

const OrderCard = () => {
  const foodItems = [
    {
      id: 1,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 2,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 3,
      image: img3,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 4,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 5,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 6,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 7,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 8,
      image: img3,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 9,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 10,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 11,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 12,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 13,
      image: img3,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 14,
      image: img1,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 15,
      image: img2,
      title: "Intelligent Marble Knife",
      price: "$132.93",
      offer: "35% OFF",
    },
  ];
  return (
    <div>
        {/* {heading && <h3>{hea}</h3>} */}
      <div className="grid xl:grid-cols-5 xlg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[15px] xl:mt-12 mt-5">
        {foodItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.image}
            price={item.price}
            offer={item.offer}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
