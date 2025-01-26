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
      <div className="xl:mt-[200px] mt-6">
        <h3 className="text-textGray xl:text-5xl text-xl  xl:font-bold font-medium xl:leading-[70px] text-center xl:mb-5 mb-3">
          How It Works
        </h3>
        <p className="xl:text-[18px] flex mx-auto text-center xl:w-[913px] font-normal px-4 xl:leading-7 text-textGray">
          At Pet Fresh Kitchen, we make pet nutrition super easy, convenient,
          and affordable. Feeding your furry friend fresh, healthy meals has
          never been simpler. Here’s how it works
        </p>
      </div>
      <div>
        <CommonSection
          title="1. Share Your Pet’s Details"
          listItem="Breed, age, weight, and activity level"
          listItem2="Any specific dietary preferences or health conditions"
          description="Every pet deserves meal tailored to their unique needs. Tell us about your dog:"
          description2="We use this information to recommend the best plan for your pup’s health and happiness."
          img={dogImg1}
        />
      </div>
      <div>
        <CommonSection
          title="2. Choose Your Plan"
          listItem="Breed, age, weight, and activity level"
          listItem2="Any specific dietary preferences or health conditions"
          description="Every pet deserves meal tailored to their unique needs. Tell us about your dog:"
          description2="We use this information to recommend the best plan for your pup’s health and happiness."
          img={dogImg2}
          reverse
        />
      </div>
      <div>
        <CommonSection
          title="3. Freshly Cooked, Delivered to Your Door"
          listItem="Breed, age, weight, and activity level"
          listItem2="Any specific dietary preferences or health conditions"
          description="Every pet deserves meal tailored to their unique needs. Tell us about your dog:"
          description2="We use this information to recommend the best plan for your pup’s health and happiness."
          img={dogImg3}
        />
      </div>
      <div>
        <CommonSection
          title="4. Serve with Ease & Watch Them Thrive"
          listItem="Breed, age, weight, and activity level"
          listItem2="Any specific dietary preferences or health conditions"
          description="Every pet deserves meal tailored to their unique needs. Tell us about your dog:"
          description2="We use this information to recommend the best plan for your pup’s health and happiness."
          img={dogImg4}
          reverse
        />
      </div>
      <div>
        <CommonSection
          title="5. Stress-Free Subscriptions"
          listItem="Breed, age, weight, and activity level"
          listItem2="Any specific dietary preferences or health conditions"
          description="Every pet deserves meal tailored to their unique needs. Tell us about your dog:"
          description2="We use this information to recommend the best plan for your pup’s health and happiness."
          img={dogImg5}
        />
      </div>
      <ChoosePet />
      <GetStarted />
    </div>
  );
};

export default Work;
