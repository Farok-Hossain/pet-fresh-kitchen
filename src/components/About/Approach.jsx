import CommonWrapper from "../common/CommonWrapper";
import dog from "@/assets/images/dog.jpg";
import { CommonButton } from "../common/CommonButton";
import TrickIcon from "@/assets/Icons/TrickIcon";
import WhiteRightIcon from "@/assets/Icons/WhiteRightIcon";

const Approach = () => {
  return (
    <CommonWrapper>
      <div>
        <div className="flex lg:flex-row justify-center items-center flex-col  xl:gap-[100px]">
          <div className="xl:max-w-[587px]">
            <img src={dog} alt="dog" />
          </div>
          <div>
            <h3 className="text-[#212B36] xl:text-5xl text-center xl:text-start text-xl font-semibold mb-5">
              Why We Started
            </h3>
            <p className="text-textColor xl:text-xl font-normal xl:leading-8 text-center xl:text-start mb-5">
              We believe that pets deserve the same high-quality nutrition as
              humans. Unfortunately, many pets are underserved when it comes to
              fresh and nutritious food. That’s why we started Pet Fresh
              Kitchen—to bring premium, vet-recommended nutrition to pet owners
              in a way that’s both convenient and affordable.
            </p>
            <h4 className="text-[#212B36] xl:text-4xl text-xl text-center xl:text-start font-semibold xl:mb-5 mb-3">
              Our Approach
            </h4>
            <div className="flex gap-5">
              <div className="bg-primaryOrange xl:w-12 w-3 h-3 xl:h-5 mt-2 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
                <p className="text-textColor xl:text-xl mb-5">
                  <span className="font-medium">
                    Collaborations with Experts:
                  </span>{" "}
                  We work hand-in-hand with local veterinarians and pet
                  associations to ensure every recipe is perfectly balanced and
                  meets all nutritional standards.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-primaryOrange xl:w-10 w-3 h-3 xl:h-5 mt-2 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor xl:text-xl mb-5">
                <span className="font-medium">Licensed and Recommended:</span>{" "}
                Pet Fresh Kitchen is proud to be fully licensed, with
                recommendations from leading pet care professionals and
                organizations
              </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-primaryOrange xl:w-[42px] w-3 h-3 xl:h-5 mt-2 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor xl:text-xl xl:mb-5">
                <span className="font-medium">
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
        <div className="flex justify-center items-center mt-5">
          <CommonButton
            className="rounded text-white group"
            text="Follow us on Social"
            linkUrl="https://www.instagram.com/accounts/login/?hl=en"
            rightIcon={<span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-[-30deg]"><WhiteRightIcon /></span>}
          ></CommonButton>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Approach;
