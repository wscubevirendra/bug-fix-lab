import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It lets you create reusable UI components efficiently.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that helps you style your web apps quickly with pre-defined classes.",
    },
    {
      question: "What is useState?",
      answer:
        "`useState` is a React Hook that lets you add state to functional components for managing dynamic data.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        ❓ Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        return
        <div key={index} className="border-b border-gray-200 py-3">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="text-lg font-medium text-gray-800">
              {faq.question}
            </span>
            {openIndex === index ? (
              <FaChevronUp className="text-blue-600" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
