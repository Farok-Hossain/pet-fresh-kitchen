import CommonWrapper from "../common/CommonWrapper";
import dog from "../../assets/images/dog.jpg";
import { CommonButton } from "../common/CommonButton";
import TrickIcon from "@/assets/Icons/TrickIcon";

const Approach = () => {
  return (
    <CommonWrapper>
      <div>
        <div className="flex  gap-[100px]">
          <div className="max-w-[587px]">
            <img src={dog} alt="dog" />
          </div>
          <div>
            <h3 className="text-[#212B36] text-5xl font-semibold mb-5">
              Why We Started
            </h3>
            <p className="text-textColor text-xl font-normal leading-8 mb-5">
              We believe that pets deserve the same high-quality nutrition as
              humans. Unfortunately, many pets are underserved when it comes to
              fresh and nutritious food. That’s why we started Pet Fresh
              Kitchen—to bring premium, vet-recommended nutrition to pet owners
              in a way that’s both convenient and affordable.
            </p>
            <h4 className="text-[#212B36] text-4xl font-semibold mb-5">
              Our Approach
            </h4>
            <div className="flex gap-5">
              <div className="bg-primaryOrange w-12 h-5 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
                <p className="text-textColor text-xl mb-5">
                  <span className="font-semibold">
                    Collaborations with Experts:
                  </span>{" "}
                  We work hand-in-hand with local veterinarians and pet
                  associations to ensure every recipe is perfectly balanced and
                  meets all nutritional standards.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-primaryOrange w-12 h-5 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor text-xl mb-5">
                <span className="font-semibold">Licensed and Recommended:</span>{" "}
                Pet Fresh Kitchen is proud to be fully licensed, with
                recommendations from leading pet care professionals and
                organizations
              </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-primaryOrange w-12 h-5 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor text-xl mb-5">
                <span className="font-semibold">
                  Convenience and Affordability:
                </span>{" "}
                We make pet nutrition accessible to all through easy
                subscription options, customizable meal plans, and eco-friendly
                delivery services.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <CommonButton
            className="rounded text-white"
            text="Get Free Sample"
          ></CommonButton>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Approach;
