import React, { useState } from "react";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <div className="faq-question-number">{number}</div>
        {question}
        <button>{isOpen ? "x" : "+"}</button>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
