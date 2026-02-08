import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiCode, FiMessageCircle } from 'react-icons/fi';
import { getServiceById } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                <IconComponent className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {service.detailedDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact" className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <FiMessageCircle className="inline w-5 h-5 mr-2" />
                  Get a Quote
                </Link>
                <Link to="/#services" className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square max-w-lg mx-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-3xl opacity-20 animate-pulse`}></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    <IconComponent className="w-64 h-64 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-white dark:bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Benefits for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-dark-100 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex-shrink-0">
                  <FiCheck className="w-5 h-5" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-dark-100 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <FiCode className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-white dark:bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} text-white flex items-center justify-center text-2xl font-bold`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {step.step}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`bg-gradient-to-br ${service.color} text-white py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how {service.title.toLowerCase()} can transform your business
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/#services"
              className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
