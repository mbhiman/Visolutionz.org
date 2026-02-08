import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Address',
      details: '2nd Floor, Pratidin Store, Patharghata Road, Motajote, Behind Lexicon Auto, Matigara, West Bengal - 734010'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 6296 349 395'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@visolutionz.com'
    }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Ready to transform your business? Let's start a conversation about your project
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card p-6 flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{info.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
              </div>
            </div>
          ))}

          <div className="card p-6">
            <h4 className="font-semibold mb-2">Working Hours</h4>
            <p className="text-gray-600 dark:text-gray-400">
              10:00 AM - 7:00 PM (IST)<br />
              Monday - Friday
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <FiSend className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
