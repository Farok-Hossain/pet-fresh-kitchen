import CommonSection from "@/components/common/CommonSection";
import WorkBanner from "@/components/Work/WorkBanner";
import dogImg1 from "../../assets/images/dogImg1.png";
import dogImg2 from "../../assets/images/dogImg2.png";
import dogImg3 from "../../assets/images/dogImg3.png";
import dogImg4 from "../../assets/images/dogImg4.png";
import dogImg5 from "../../assets/images/dogImg5.png";
import CommonWrapper from "@/components/common/CommonWrapper";
import GetStarted from "@/components/Work/GetStarted";
import ChoosePet from "@/components/Work/ChoosePet";

const Work = () => {
  return (
    <div>
      <WorkBanner />
      {/* Pet details area */}
      <div className="mt-[200px]">
        <h3 className="text-textGray text-5xl font-bold leading-[70px] text-center mb-5">
          How It Works
        </h3>
        <p className="text-[18px] flex mx-auto text-center w-[913px] font-normal leading-7 text-textGray">
          At Pet Fresh Kitchen, we make pet nutrition super easy, convenient,
          and affordable. Feeding your furry friend fresh, healthy meals has
          never been simpler. Here’s how it works
        </p>
      </div>
      <div>
        <CommonSection
          title="1. Share Your Pet’s Details"
          description="Every pet deserves a meal plan tailored to their unique needs. Tell us about your dog:"
          img={dogImg1}
        />
      </div>
      <div>
        <CommonSection
          title="2. Choose Your Plan"
          description="Every pet deserves a meal plan tailored to their unique needs. Tell us about your dog:"
          img={dogImg2}
          boldList1={{ normal: "Real meats,", bold: "fresh vegetables, and wholesome grains" }}
          boldList2={{
            normal: "Small-Batch Cooking:",
            bold: "Every meal is freshly prepared to ensure optimal taste and nutrition.",
          }}
          boldList3={{
            normal: "Eco-Friendly Packaging:",
            bold: "Meals are packed in recyclable containers to keep food fresh while protecting the environment.",
          }}
          reverse
        />
      </div>
      <div>
        <CommonSection
          title="3. Freshly Cooked, Delivered to Your Door"
          description="Your pet's meals arrive fresh and ready to serve."
          img={dogImg3}
          boldList1={{
            normal: "Convenience:",
            bold: "Meals are portioned and delivered straight to your door.",
          }}
        />
      </div>
      <div>
        <CommonSection
          title="4. Serve with Ease & Watch Them Thrive"
          description="Your furry friend will love the taste, and you’ll love the peace of mind."
          img={dogImg4}
          reverse
        />
      </div>
      <div>
        <CommonSection
          title="5. Stress-Free Subscriptions"
          description="Stay on schedule with flexible subscription options."
          img={dogImg5}
        />
      </div>
      <ChoosePet />
      <GetStarted />
    </div>
  );
};

export default Work;

