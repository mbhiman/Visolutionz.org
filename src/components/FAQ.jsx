import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What Kind of Services Do You Offer?',
      answer: 'We offer services such as software development, IT Solutions, customized e-learning solutions, animated educational content, video editing, experiential learning, assessment software for education, and self-directed online courses. All our services are designed to enhance the learning experience and meet diverse educational needs.'
    },
    {
      question: 'What gains can I anticipate?',
      answer: 'When partnering with Virtual Interactive Solutionz, anticipate a suite of enhancements to your digital strategy that are both measurable and impactful. Our team\'s expertise in creating cutting-edge digital content ensures your projects are not only managed with the utmost professionalism but are also infused with creativity and innovation.'
    },
    {
      question: 'What\'s the procedure to get started?',
      answer: 'Reach out to us to explore your requirements and receive customized solutions designed to fit within your budgetary constraints. Let\'s start a conversation to tailor our services precisely to your needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A simple e-learning module might take 2-4 weeks, while comprehensive platforms can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container bg-gray-50 dark:bg-dark-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">FAQ's</p>
          <h2 className="section-title">Our Expert Answers</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-8">
                  {faq.question}
                </h3>
                <FiChevronDown
                  className={`w-6 h-6 flex-shrink-0 text-primary-600 dark:text-primary-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
