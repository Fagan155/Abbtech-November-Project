import React from "react";
import FAQItem from "./Questions";
import Header from "./header";
import Footer from "./footer";
import FAQbg from "../../src/img/FAQbg.png";
const FAQ = () => {
  const faqData = [
    {
      number: "01",
      question: "How can I find authentic local experiences when traveling?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
    {
      number: "02",
      question: "How can I find authentic local experiences when traveling?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
    {
      number: "03",
      question: "How can I find authentic local experiences when traveling?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
    {
      number: "04",
      question: "How can I find authentic local experiences when traveling?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
    {
      number: "05",
      question: "How can I find authentic local experiences when traveling?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
  ];

  return (
    <body>
      <Header />
      <div class="Italy-container">
        <img className="pic-italy" src={FAQbg} alt="Your GIF" />
        <div class="input-container">
          <div class="input-box-Italy">
            <h1>FAQ</h1>
            <h5>
              Unlocking the Mysteries of Travel: Your Questions, Our Journey.
            </h5>
          </div>
        </div>
      </div>
      <div className="app">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <Footer />
    </body>
  );
};

export default FAQ;
