

import CommonWrapper from "../common/CommonWrapper";
import testimonialImg1 from "../../assets/images/testImg4.png"
import testimonialImg2 from "../../assets/images/testImg5.png"
import testimonialImg3 from "../../assets/images/testImg6.png"
import clockImg from "../../assets/images/clockimg.png";
import TestimonialCard from "../common/TestimonialCard";



const Testimonial = () => {
  
      const testimonials = [
          {
            img: testimonialImg1,
            name: "Hannah Schmitt",
            reviewTitle: "Quality product",
            review: "I’ve been searching for a one-stop shop for my dog's food and health needs, and I’ve finally found it! The website is easy to navigate, and the variety of dog food options is impressive.",
          },
          {
            img: testimonialImg2,
            name: "Jane Doe",
            reviewTitle: "Amazing Service",
            review: "This is the best platform I’ve ever used for my pet’s needs. Exceptional customer support and fast delivery!",
          },
          {
            img: testimonialImg3,
            name: "John Smith",
            reviewTitle: "Reliable Store",
            review: "Highly recommend this store! Great products and excellent quality. My dog loves the new treats I got for him.",
          },
        ];
  return (
    <CommonWrapper>
      <div className="container">
        <div className="mb-[60px]">
          <h2 className="text-[34px] font-semibold leading-[48px]">
            What our customers are saying
          </h2>
         <div className="flex justify-between mt-[60px]">
         {
            testimonials.map((item, index) => (
              <TestimonialCard key={index} image={item.img} name={item.name} reviewTitle={item.reviewTitle} review={item.review} />
            ))
          }
         </div>
        </div>

    
      </div>
    </CommonWrapper>
  );
};

export default Testimonial;
