
import CommonWrapper from "../common/CommonWrapper";
import ContactForm from "../common/ContactForm";
import SectionTitle from "../common/SectionTitle";

const ContactUs = () => {
  

  return (
   <CommonWrapper version="lg">
      <div>
            <SectionTitle className="text-center font-semibold" title="Contact Us" />
            <p className="xl:max-w-[960px] lg:px-10 mx-auto text-center text-textColor xl:text-xl font-normal xl:leading-[30px]">Get in touch with us for any questions or concerns about our dog
            food products. We&apos;re here to help you provide the best for your
            pet.</p>
        </div>
      <ContactForm />
    
   </CommonWrapper>
  );
};

export default ContactUs;
