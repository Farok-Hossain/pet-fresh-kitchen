import CommonWrapper from "../common/CommonWrapper";
import testimonialImg1 from "../../assets/images/testImg4.png";
import testimonialImg2 from "../../assets/images/testImg5.png";
import testimonialImg3 from "../../assets/images/testImg6.png";
import TestimonialCard from "../common/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      img: testimonialImg1,
      name: "Hannah Schmitt",
      reviewTitle: "Quality product",
      review:
        "I’ve been searching for a one-stop shop for my dog's food and health needs, and I’ve finally found it! The website is easy to navigate, and the variety of dog food options is impressive.",
    },
    {
      img: testimonialImg2,
      name: "Jane Doe",
      reviewTitle: "Amazing Service",
      review:
        "This is the best platform I’ve ever used for my pet’s needs. Exceptional customer support and fast delivery!",
    },
    {
      img: testimonialImg3,
      name: "John Smith",
      reviewTitle: "Reliable Store",
      review:
        "Highly recommend this store! Great products and excellent quality. My dog loves the new treats I got for him.",
    },
    {
      img: testimonialImg1,
      name: "Hannah Schmitt",
      reviewTitle: "Quality product",
      review:
        "I’ve been searching for a one-stop shop for my dog's food and health needs, and I’ve finally found it! The website is easy to navigate, and the variety of dog food options is impressive.",
    },
    {
      img: testimonialImg2,
      name: "Jane Doe",
      reviewTitle: "Amazing Service",
      review:
        "This is the best platform I’ve ever used for my pet’s needs. Exceptional customer support and fast delivery!",
    },
    {
      img: testimonialImg3,
      name: "John Smith",
      reviewTitle: "Reliable Store",
      review:
        "Highly recommend this store! Great products and excellent quality. My dog loves the new treats I got for him.",
    },
  ];

  return (
    <CommonWrapper>
      <div>
        <h2 className="xl:text-[34px] text-lg xl:font-semibold font-medium xl:leading-[48px] text-center xl:text-start mb-4 xl:mb-[60px]">
          What our customers are saying
        </h2>
        <div className="hidden xl:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                image={item.img}
                name={item.name}
                reviewTitle={item.reviewTitle}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        <div className="xl:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                image={item.img}
                name={item.name}
                reviewTitle={item.reviewTitle}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Testimonial;
