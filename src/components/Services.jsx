import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="section-container bg-gray-50 dark:bg-dark-100">
      <div className="text-center mb-16">
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">We Provide</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Comprehensive solutions designed to transform your business and drive innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="card p-8 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-12 h-12" />
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {service.shortDescription}
              </p>

              <div className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <span>→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
