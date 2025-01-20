import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqArea = () => {
    const faqs = [
        {
          question: "Q. What type of dog food is best for my pet?",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },
        {
          question: "Q. How can I choose the right food for my dog based on their age, breed, and health needs?",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },
        {
          question: "Q. How do wet and dry dog food compare, and which one should I choose for my pet?",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },
        {
          question: "Q. Are supplements necessary for my dog, and how do I select the right ones",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },
        {
          question: "Q. What is your return policy for pet food?",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },
        {
          question: "Q. How can I track my order?",
          answer:
            "Yes, start with a free 7 day trial of advanced data rooms and explore the platform’s features and benefits. After that, you can sign up on your own.",
        },

    ]
  return (
    <div className="container">
      <div>
        <div className="text-center mb-20">
          <h3 className="text-[#212B36] text-5xl font-semibold leading-[70px] mb-[10px]">
            Frequently Asked Questions
          </h3>
          <p className="text-xl leading-[30px] max-w-[960px] mx-auto">
            Find answers to commonly asked questions about our products,
            services, and policies in our comprehensive FAQ section.
          </p>
        </div>
      </div>

      {
        faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        ))
      }
      
    </div>
  );
};

export default FaqArea;
