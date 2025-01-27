
import CommonWrapper from "@/components/common/CommonWrapper";
import error from "../../assets/images/error.svg"
import { CommonButton } from "@/components/common/CommonButton";
import Navbar from "@/shared/navbar/Navbar";
import Footer from "@/shared/footer/Footer";


const Error = () => {
    return (
     <div>
        <Navbar />
           <CommonWrapper>
            <div className="flex justify-center mb-8">
                <img src={error} alt="" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-textGray xl:text-[40px] lg:text-3xl text-2xl font-semibold leading-[48px] mb-5">Oops! page not found</h3>
                <p className="xl:w-[612px] text-center text-textGraySm text-[16px] font-normal leading-6 mb-6">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                <CommonButton className="rounded-full mb-12 text-white" text="Back to Home"></CommonButton>
            </div>
        </CommonWrapper>
        <Footer />
     </div>
    );
};

export default Error;