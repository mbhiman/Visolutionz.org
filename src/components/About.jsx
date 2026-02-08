import React from 'react';
import { FiHeart, FiCheckCircle, FiUsers, FiTrendingUp, FiGlobe, FiZap } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Passion',
      description: 'When you are passionate you are persuasive not just to finish a task but to outperform every time you deliver a task.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Commitment',
      description: 'Your work is our commitment. We succeed when our clients succeed. Success for us is the biggest commitment.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Integrity',
      description: 'An uncompromising commitment to the core values makes us accountable and reliable. We treat co-workers, customers with respect.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Progress',
      description: 'We believe in reinventing ourselves. Our passion and commitment drive us to continuously keep redefining the levels we can achieve for our clients.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Boundaryless',
      description: 'Creativity has no limits and comes with infinite possibilities of creating solutionz for the varied requirements that come from a multiverse.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Agility',
      description: 'The ability to adapt quickly and revitalize ourself empowers us and our patrons to balance flexibility allowing the team to focus on specific client goals.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="about" className="section-container">
      {/* Who We Are */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">About Us</p>
          <h2 className="section-title">Who Are We?</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            In this era of technological advancement and global connectivity, Virtual Interactive Solutionz excels in providing both custom and readymade e-learning solutions. Our personalized learning and bespoke educational content, including animations, is designed to empower and ensure your success.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <div className="text-center mb-16">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Core Values</p>
          <h2 className="section-title">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="card p-8 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {value.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
