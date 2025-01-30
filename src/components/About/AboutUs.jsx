import CommonWrapper from "../common/CommonWrapper";
import petFreshKitchen from "../../assets/images/PetFreshKitchen.png"

const AboutUs = () => {
  return (
    <CommonWrapper>
      <div>
        <h3 className="text-center text-textGray xl:text-5xl text-xl font-semibold xl:mb-10 mb-2">
          About Us
        </h3>
        <p className="text-[#212121] xl:text-[28px] font-normal text-center">
          At <span className="font-bold">Pet Fresh Kitchen</span>, we are more
          than just a pet food company—we are a mission-driven organization
          committed to making India stray animal free. Our love for pets and our
          belief that they are family inspire everything we do. We’re here to
          ensure your furry friends receive the love, care, and nutrition they
          deserve, because pets are family and deserve the best.
        </p>
        <img className="xl:mt-10 pt-5 object-cover" src={petFreshKitchen} alt="" />
      </div>
    </CommonWrapper>
  );
};

export default AboutUs;
