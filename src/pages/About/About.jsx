import AboutBanner from "@/components/About/AboutBanner";
import AboutUs from "@/components/About/AboutUs";
import Approach from "@/components/About/Approach";
import GivingBack from "@/components/About/GivingBack";
import Join from "@/components/About/Join";
import Mission from "@/components/About/Mission";
import Support from "@/components/About/Support";
import Testimonial from "@/components/home/Testimonial";


const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutUs />
            <Mission />
            <Approach />
            <GivingBack />
            <Testimonial />
            <Support />
            <Join />
        </div>
    );
};

export default About;