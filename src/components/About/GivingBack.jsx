import TrickIcon from "@/assets/Icons/TrickIcon";
import CommonWrapper from "../common/CommonWrapper";


const GivingBack = () => {
    return (
        <CommonWrapper>
            <div>
            <h3 className="text-textGray text-5xl font-semibold mb-5">Giving Back</h3>
            <h5 className="text-textColor text-[28px] mb-5"> We believe in giving back to the community. With every purchase, you help:
            </h5>
            <div className="flex gap-5 mb-5">
              <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor text-xl">Feed stray animals across India.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-primaryOrange w-5 h-5 rounded-full flex justify-center items-center">
                <TrickIcon />
              </div>
              <div>
              <p className="text-textColor text-xl">Support animal shelters and rescue initiatives.</p>
              </div>
            </div>
            </div>
        </CommonWrapper>
    );
};

export default GivingBack;