import { useState } from "react";
import img1 from "@/assets/images/cardImg1.png";
import img2 from "@/assets/images/cardImg2.png";
import img3 from "@/assets/images/cardImg3.png";
import Card from "../common/Card";
import LeftArro from "@/assets/Icons/LeftArro";
import RightIcon from "@/assets/Icons/RightIcon";

const OrderCard = () => {
  const vegetarianFoodItems = [
    {
      id: 1,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 2,
      image: img2,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 3,
      image: img3,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 4,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 5,
      image: img2,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 6,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 7,
      image: img2,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 8,
      image: img3,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 9,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(vegetarianFoodItems.length / itemsPerPage);

  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegetarianFoodItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nonVegetarianFoodItems = [
    {
      id: 1,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 2,
      image: img2,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 3,
      image: img3,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 4,
      image: img1,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
    {
      id: 5,
      image: img2,
      title: "Intelligent Marble Knife",
      start: "Starting From  50$",
      price: "$132.93",
      offer: "35% OFF",
    },
  ];
  return (
    <div>
      {/* Vegetarian food items  */}
      <p className="text-textGray text-[34px] font-semibold leading-[48px]">
        Vegetarian
      </p>
      <div className="grid xl:grid-cols-5 xlg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[15px] mt-5">
        {currentItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            start={item.start}
            img={item.image}
            price={item.price}
            offer={item.offer}
          />
        ))}
      </div>

      <div className="hidden xl:block">
        {/* Pagination Controlss */}
        <div className="flex justify-end mt-5">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-2 border-[1px] border-primaryOrange rounded-full mx-2 disabled:opacity-50"
          >
            <LeftArro />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border-[1px] border-primaryOrange rounded-full mx-2 disabled:opacity-50 "
          >
            <RightIcon />
          </button>
        </div>
      </div>

      {/* Non Vegetarian food items  */}
      <p className="text-textGray text-[34px] font-semibold leading-[48px]  pt-8 xl:pt-0">
        Non Vegetarian{" "}
      </p>
      <div className="grid xl:grid-cols-5 xlg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[15px] mt-5">
        {nonVegetarianFoodItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            start={item.start}
            img={item.image}
            price={item.price}
            offer={item.offer}
          />
        ))}
      </div>
      <div className="hidden xl:block">
        {/* Pagination Controls */}
        <div className=" flex justify-end mt-5">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-2 border-[1px] border-primaryOrange rounded-full mx-2 disabled:opacity-50"
          >
            <LeftArro />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border-[1px] border-primaryOrange rounded-full mx-2 disabled:opacity-50 "
          >
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
