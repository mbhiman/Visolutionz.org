import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const stats = [
    { label: 'Total Project Time', value: '72000+', unit: 'Minutes' },
    { label: 'Number of Learners', value: '114000+', unit: '' },
    { label: 'Client Testimonials', value: '4', unit: '+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-50 dark:to-dark-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoMnYySDE4di0yaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyek0zNiAzNHYyaC0ydi0yaDJ6bS00IDB2MmgtMnYtMmgyem0tNCAwdjJoLTJ2LTJoMnptLTQgMHYyaC0ydi0yaDJ6bS00IDB2MmgtMnYtMmgyem0tNCAwdjJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                Innovative Ideas
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Virtual Interactive{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Solutionz
              </span>{' '}
              Pvt. Ltd.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              In this era of technological advancement and global connectivity, we excel in providing both custom and readymade e-learning solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/#contact" className="btn-primary flex items-center gap-2">
                Get Started
              </Link>
              <button className="btn-secondary flex items-center gap-2">
                <FiPlay className="w-5 h-5" />
                View Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-56 h-56 md:w-72 md:h-72 bg-white dark:bg-dark-100 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
