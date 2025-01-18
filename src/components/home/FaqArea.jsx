import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqArea = () => {
    const faqs = [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy. Items must be in their original condition with all tags attached. Please visit our returns page for more details.",
        },
        {
          question: "How can I track my order?",
          answer:
            "You can track your order using the tracking link provided in your confirmation email or by visiting our 'Track My Order' page and entering your order ID.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship internationally to select countries. Shipping fees and delivery times vary based on your location. Please check our shipping policy for details.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and other secure payment options.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can contact our customer support team via email at support@example.com or call us at +123-456-7890 during business hours.",
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer:
            "Orders can be modified or canceled within 1 hour of placing them. Please contact our support team immediately for assistance.",
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
