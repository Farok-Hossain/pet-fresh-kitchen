import FaqArea from "@/components/home/FaqArea";
import ContactUs from "../../components/home/ContactUs";
import DogMeals from "../../components/home/DogMeals";
import HeroSection from "../../components/home/HeroSection";
import NutritiousSection from "../../components/home/NutritiousSection";
import SampleSection from "../../components/home/SampleSection";
import ServeMeal from "../../components/home/ServeMeal";
import Testimonial from "../../components/home/Testimonial";
import WhyChooseUs from "../../components/home/WhyChooseUs";


const Home = () => {
    return (
        <div className="lg:overflow-hidden">
            <HeroSection />
            <WhyChooseUs />
            <NutritiousSection />
            <SampleSection />
            <ServeMeal />
            <DogMeals />
            <Testimonial />
            <FaqArea />
            <ContactUs />
        </div>
    );
};

export default Home;