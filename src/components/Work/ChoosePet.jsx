import CommonWrapper from "../common/CommonWrapper";
import dog from "../../assets/images/dog.jpg";
import TrickIcon from "@/assets/Icons/TrickIcon";

const ChoosePet = () => {
  return (
    <CommonWrapper>
      <div>
        <div className="flex xl:flex-row flex-col-reverse xl:gap-[100px] gap-[30px] items-center">
          {/* Image Section */}
          <div className="max-w-[587px]">
            <img src={dog} alt="dog" />
          </div>

          {/* All Items Section */}
          <div className="flex flex-col justify-center">
            <h4 className="text-[#212B36] xl:text-5xl text-xl xl:font-semibold font-medium text-center xl:text-start mb-5">
              Why Choose Pet Fresh Kitchen?
            </h4>
            <h5 className="text-[#212B36] xl:text-xl text-[18px] font-normal xl:leading-8 text-center xl:text-start mb-5">
              <span className="xl:font-bold">
                Pet Nutrition, Convenience, and Affordability
              </span>
              —all wrapped into one.
            </h5>

            {/* Feature List */}
            <div className="xl:space-y-5 space-y-2">
              <div className="flex items-center xl:justify-start justify-center gap-5">
                <div className="bg-primaryOrange xl:w-5 xl:h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor xl:text-xl">
                  Expertly crafted, nutritious meals tailored to your dog.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange xl:w-5 xl:h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor xl:text-xl">
                  Flexible plans and delivery options designed for your
                  lifestyle.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange xl:w-5 xl:h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor xl:text-xl">
                  Affordable pricing without compromising on quality.
                </p>
              </div>

              <div className="flex items-center xl:gap-5 gap-3">
                <div className="bg-primaryOrange xl:w-5 xl:h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor xl:text-xl">
                  Environmentally friendly packaging that’s easy to store, use,
                  and recycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ChoosePet;
