import CommonWrapper from "../common/CommonWrapper";
import dog from "../../assets/images/dog.jpg";
import TrickIcon from "@/assets/Icons/TrickIcon";

const ChoosePet = () => {
  return (
    <CommonWrapper>
      <div>
        <div className="flex gap-[100px] items-center">
          {/* Image Section */}
          <div className="max-w-[587px]">
            <img src={dog} alt="dog" />
          </div>

          {/* All Items Section */}
          <div className="flex flex-col justify-center">
            <h4 className="text-[#212B36] text-5xl font-semibold mb-5">
              Why Choose Pet Fresh Kitchen?
            </h4>
            <h5 className="text-[#212B36] text-xl font-normal leading-8 mb-5">
              <span className="font-bold">
                Pet Nutrition, Convenience, and Affordability
              </span>
              —all wrapped into one.
            </h5>

            {/* Feature List */}
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor text-xl">
                  Expertly crafted, nutritious meals tailored to your dog.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor text-xl">
                  Flexible plans and delivery options designed for your
                  lifestyle.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor text-xl">
                  Affordable pricing without compromising on quality.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                  <TrickIcon />
                </div>
                <p className="text-textColor text-xl">
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
