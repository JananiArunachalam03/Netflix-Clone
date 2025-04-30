import React from "react";
import { Plus, X } from "lucide-react";
import faqData from "./FAQItem";
import useFAQAccordion from "./useFAQAccordian"; 
import "../FAQAccordian/styleFAQAccordian.css";
const FAQAccordion: React.FC = () => {
  const { activeIndex, handleButtonClick } = useFAQAccordion(); 
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((item: FAQdata, index: number) => (
        <div key={index} className="faq-key">
          <button
            onClick={() => handleButtonClick(index)} 
            className="faq-button"
          >
            {item.question}
            {activeIndex === index ? <X size={28} /> : <Plus size={28} />}
          </button>

          {activeIndex === index && (
            <div className="faq-active-index">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
