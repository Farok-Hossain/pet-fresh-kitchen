import CommonWrapper from "../common/CommonWrapper";
import petFreshKitchen from "../../assets/images/PetFreshKitchen.png"

const AboutUs = () => {
  return (
    <CommonWrapper>
      <div>
        <h3 className="text-center text-textGray text-5xl font-semibold mb-10">
          About Us
        </h3>
        <p className="text-[#212121] text-[28px] font-normal text-center">
          At <span className="font-bold">Pet Fresh Kitchen</span>, we are more
          than just a pet food company—we are a mission-driven organization
          committed to making India stray animal free. Our love for pets and our
          belief that they are family inspire everything we do. We’re here to
          ensure your furry friends receive the love, care, and nutrition they
          deserve, because pets are family and deserve the best.
        </p>
        <img className="mt-10" src={petFreshKitchen} alt="" />
      </div>
    </CommonWrapper>
  );
};

export default AboutUs;
