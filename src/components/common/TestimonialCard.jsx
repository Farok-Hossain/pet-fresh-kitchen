import BlueCard from "../../assets/Icons/BlueCard";
import YellowCard from "../../assets/Icons/YellowCard";
import testimonialImg1 from "../../assets/images/testImg4.png";
import testimonialImg2 from "../../assets/images/testImg5.png";
import testimonialImg3 from "../../assets/images/testImg6.png";

const TestimonialCard = ({ name, image, review, reviewTitle }) => {
  return (
    <div className="flex justify-center items-center w-full h-[400px] relative">
      {/* Yellow Card (Background Layer) */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <YellowCard />
      </div>

      <div className="absolute top-[-20px] left-[10px] w-full z-[2]">
        <BlueCard />
      </div>

      {/* Content (Top Layer) */}
      <div className="relative z-[3] flex flex-col items-center text-center">
        <div>
          <img
            src={image}
            alt="Testimonial"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h3 className="text-[#CFCFCF] text-[18px] font-semibold mt-4">
          {name}
        </h3>
        <h5 className="text-[#CFCFCF] text-xs font-normal leading-4">
          {reviewTitle}
        </h5>
        <p className="text-[#CFCFCF] font-normal text-xs max-w-[286px] mt-2">
          {review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
