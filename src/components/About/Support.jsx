import CommonWrapper from "../common/CommonWrapper";
import ContactForm from "../common/ContactForm";
import SectionTitle from "../common/SectionTitle";


const Support = () => {
    return (
        <CommonWrapper>
            <div>
            <SectionTitle className="text-center" title="Unmatched Customer Support" />
            <p className="xl:max-w-[960px] mx-auto text-center text-textColor xl:text-xl font-normal xl:leading-[30px]">We’re here for you and your pets every step of the way. Our dedicated customer support team is always ready to answer your questions, assist with meal plans, and ensure you and your pet have the best experience possible.
            </p>
        </div>
        <ContactForm />
        </CommonWrapper>
    );
};

export default Support;