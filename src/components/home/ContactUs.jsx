
import CommonWrapper from "../common/CommonWrapper";
import ContactForm from "../common/ContactForm";
import SectionTitle from "../common/SectionTitle";

const ContactUs = () => {
  

  return (
   <CommonWrapper version="lg">
      <div>
            <SectionTitle className="text-center" title="Contact Us" />
            <p className="max-w-[960px] mx-auto text-center text-textColor text-xl font-normal leading-[30px]">Get in touch with us for any questions or concerns about our dog
            food products. We&apos;re here to help you provide the best for your
            pet.</p>
        </div>
      <ContactForm />
    
   </CommonWrapper>
  );
};

export default ContactUs;
