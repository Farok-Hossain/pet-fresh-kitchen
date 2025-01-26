import TrickIcon from "@/assets/Icons/TrickIcon";
import CommonWrapper from "../common/CommonWrapper";

const GivingBack = () => {
  return (
    <CommonWrapper>
      <div>
        <h3 className="text-textGray xl:text-5xl text-xl text-center xl:text-start font-semibold xl:mb-5 mb-3">
          Giving Back
        </h3>
        <h5 className="text-textColor xl:text-[28px] xl:mb-5 mb-3 text-center xl:text-start">
          {" "}
          We believe in giving back to the community. With every purchase, you help:
        </h5>
        <div className="flex gap-5 mb-5">
          <div className="bg-primaryOrange xl:w-5 w-3 xl:h-5 h-3 mt-2 rounded-full flex justify-center items-center">
            <TrickIcon />
          </div>
          <div>
            <p className="text-textColor xl:text-xl">
              Feed stray animals across India.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-primaryOrange xl:w-5 w-3 xl:h-5 h-3 mt-2 rounded-full flex justify-center items-center">
            <TrickIcon />
          </div>
          <div>
            <p className="text-textColor xl:text-xl">
              Support animal shelters and rescue initiatives.
            </p>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default GivingBack;
