import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'HR Professional',
      role: 'HR',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Working with VIS was a pleasure. They were not only responsive and attentive but also proactive in suggesting enhancements that made a real difference. The end product was fantastic, and the process was seamless.'
    },
    {
      name: 'Marketing Executive',
      role: 'CMO',
      avatar: '👨‍💼',
      rating: 5,
      text: 'When we approached Virtual Interactive Solutionz, our expectations were high, and VIS was actually able to stand up to our expectations, the speed and quality of their work simply blew us away. The project was not just completed ahead of schedule, it was also far superior to anything we\'ve seen in terms of creativity and precision. A genuine game-changer.'
    },
    {
      name: 'Admin Professional',
      role: 'Administrative Assistant',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I\'m in awe of the efficiency and expertise Virtual Interactive Solutionz brought to our project. They turned our ideas into a polished final product in no time, and the quality? Absolutely impeccable. They\'ve earned a permanent spot on our speed dial for future projects!'
    },
    {
      name: 'Business Analyst',
      role: 'Business Analyst',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Virtual Interactive Solutionz was a breath of fresh air. They expedited our project timeline without sacrificing a shred of quality. The team\'s attention to detail and commitment to excellence were evident in every pixel of the content delivered.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Client Feedback</p>
        <h2 className="section-title">Happy Words From Happy Customers</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card p-8 md:p-12 relative animate-fade-in">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-dark-200 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-dark-200 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="text-6xl mb-6">{testimonials[currentIndex].avatar}</div>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            <h4 className="text-xl font-bold mb-1">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-primary-600 dark:text-primary-400 font-semibold">
              {testimonials[currentIndex].role}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 dark:bg-dark-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
