import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Learning Platform',
      category: 'Education Technology',
      image: '🎓',
      description: 'Custom learning management system with interactive modules'
    },
    {
      title: 'Mobile App Development',
      category: 'Mobile Solutions',
      image: '📱',
      description: 'Cross-platform application for enhanced productivity'
    },
    {
      title: 'AI-Powered Analytics',
      category: 'Artificial Intelligence',
      image: '🤖',
      description: 'Machine learning solution for business intelligence'
    },
    {
      title: 'IoT Smart Solutions',
      category: 'Internet of Things',
      image: '🌐',
      description: 'Connected devices ecosystem for smart operations'
    },
    {
      title: 'SaaS Platform',
      category: 'Cloud Solutions',
      image: '☁️',
      description: 'Scalable cloud-based business management platform'
    },
    {
      title: 'VR Training Module',
      category: 'Virtual Reality',
      image: '🥽',
      description: 'Immersive training experience for corporate learning'
    }
  ];

  return (
    <section id="portfolio" className="section-container bg-gray-50 dark:bg-dark-100">
      <div className="text-center mb-16">
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Gallery</p>
        <h2 className="section-title">Our Project Portfolio</h2>
        <h3 className="text-2xl font-semibold mb-4">Highlighted Projects</h3>
        <p className="section-subtitle max-w-3xl mx-auto">
          Explore our comprehensive gallery of past projects to see the scope and quality of our work. Each case study is a deep dive into our creative process, the challenges we faced, and the innovative solutions we crafted.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card overflow-hidden group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
              {project.image}
            </div>

            <div className="p-6">
              <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project
                <FiExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn-primary">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
