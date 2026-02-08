import { FiCode, FiSmartphone, FiLayers, FiCloud, FiCpu, FiZap } from 'react-icons/fi';

export const servicesData = [
  {
    id: 'software-development',
    icon: FiCode,
    title: 'Software Development',
    shortDescription: 'We provide custom software development services to create tailored solutions that meet unique business needs and streamline operations.',
    color: 'from-blue-500 to-cyan-500',
    detailedDescription: 'Our custom software development services are designed to transform your business ideas into powerful, scalable solutions. We specialize in creating bespoke software that perfectly aligns with your organizational goals and operational requirements.',
    features: [
      'Custom Application Development',
      'Enterprise Software Solutions',
      'Legacy System Modernization',
      'Software Integration Services',
      'Quality Assurance & Testing',
      'Maintenance & Support'
    ],
    benefits: [
      'Tailored solutions designed specifically for your business needs',
      'Scalable architecture that grows with your organization',
      'Enhanced operational efficiency and productivity',
      'Reduced operational costs through automation',
      'Competitive advantage through innovative technology',
      'Seamless integration with existing systems'
    ],
    technologies: [
      'React, Angular, Vue.js',
      'Node.js, Python, Java, .NET',
      'MySQL, PostgreSQL, MongoDB',
      'AWS, Azure, Google Cloud',
      'Docker, Kubernetes',
      'Microservices Architecture'
    ],
    process: [
      {
        step: 'Discovery & Planning',
        description: 'We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.'
      },
      {
        step: 'Design & Architecture',
        description: 'Our team designs the system architecture and creates detailed technical specifications for your solution.'
      },
      {
        step: 'Development & Testing',
        description: 'We develop your software using agile methodologies with continuous testing and quality assurance.'
      },
      {
        step: 'Deployment & Support',
        description: 'We deploy your solution and provide ongoing maintenance, updates, and technical support.'
      }
    ]
  },
  {
    id: 'app-development',
    icon: FiSmartphone,
    title: 'App Development',
    shortDescription: 'Our app development services focus on creating intuitive, responsive mobile applications designed to enhance user experience and business productivity.',
    color: 'from-purple-500 to-pink-500',
    detailedDescription: 'We create innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our apps are designed to engage users, drive business growth, and provide measurable value.',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Solutions (React Native, Flutter)',
      'Progressive Web Apps (PWA)',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Performance Monitoring & Analytics'
    ],
    benefits: [
      'Reach customers on their preferred devices',
      'Increase brand visibility and engagement',
      'Streamline business processes on-the-go',
      'Enhance customer loyalty and retention',
      'Generate new revenue streams',
      'Real-time data and insights'
    ],
    technologies: [
      'Swift, Objective-C (iOS)',
      'Kotlin, Java (Android)',
      'React Native, Flutter',
      'Firebase, AWS Amplify',
      'GraphQL, REST APIs',
      'Push Notifications, Analytics'
    ],
    process: [
      {
        step: 'Concept & Strategy',
        description: 'We work with you to define your app concept, target audience, and key features that drive user engagement.'
      },
      {
        step: 'UI/UX Design',
        description: 'Our designers create beautiful, intuitive interfaces that provide seamless user experiences.'
      },
      {
        step: 'Development & Testing',
        description: 'We build your app using best practices with rigorous testing on multiple devices and platforms.'
      },
      {
        step: 'Launch & Optimization',
        description: 'We handle app store submissions and continuously optimize based on user feedback and analytics.'
      }
    ]
  },
  {
    id: 'platform-development',
    icon: FiLayers,
    title: 'Platform Development',
    shortDescription: 'Our platform development services focus on creating scalable, secure, and user-friendly platforms to support digital learning, collaboration, and business operations.',
    color: 'from-green-500 to-emerald-500',
    detailedDescription: 'We build robust, scalable platforms that serve as the foundation for your digital operations. From learning management systems to collaborative workspaces, we create platforms that empower your organization.',
    features: [
      'Learning Management Systems (LMS)',
      'Content Management Platforms',
      'Collaboration & Communication Tools',
      'Data Analytics Platforms',
      'API Development & Integration',
      'Multi-tenant Architecture'
    ],
    benefits: [
      'Centralized management of resources and users',
      'Improved collaboration and productivity',
      'Scalable infrastructure for growth',
      'Enhanced security and data protection',
      'Customizable to your specific needs',
      'Reduced IT complexity and costs'
    ],
    technologies: [
      'React, Next.js, Vue.js',
      'Node.js, Django, Ruby on Rails',
      'PostgreSQL, MongoDB, Redis',
      'Elasticsearch, Kafka',
      'Docker, Kubernetes, Terraform',
      'AWS, Azure, GCP'
    ],
    process: [
      {
        step: 'Requirements Analysis',
        description: 'We conduct in-depth analysis of your platform requirements, user workflows, and integration needs.'
      },
      {
        step: 'Architecture Design',
        description: 'We design a scalable, secure architecture that can handle current and future demands.'
      },
      {
        step: 'Iterative Development',
        description: 'We build your platform in phases with regular demos and feedback sessions to ensure alignment.'
      },
      {
        step: 'Deployment & Scaling',
        description: 'We deploy your platform and provide tools for monitoring, scaling, and continuous improvement.'
      }
    ]
  },
  {
    id: 'saas-solutions',
    icon: FiCloud,
    title: 'SaaS Solutions',
    shortDescription: 'We offer Software-as-a-Service (SaaS) solutions that provide businesses with scalable, cloud-based software to improve efficiency and reduce operational costs.',
    color: 'from-orange-500 to-red-500',
    detailedDescription: 'Our SaaS solutions deliver powerful software capabilities without the complexity of traditional installations. We build cloud-native applications that are accessible anywhere, automatically updated, and scale with your business.',
    features: [
      'Multi-tenant SaaS Architecture',
      'Subscription Management',
      'User Authentication & Authorization',
      'API-first Development',
      'Analytics & Reporting Dashboards',
      'Automated Billing & Payments'
    ],
    benefits: [
      'No upfront infrastructure costs',
      'Automatic updates and maintenance',
      'Access from anywhere, any device',
      'Pay-as-you-grow pricing models',
      'Built-in security and compliance',
      'Faster time to market'
    ],
    technologies: [
      'React, Angular, TypeScript',
      'Node.js, Python, Go',
      'PostgreSQL, DynamoDB',
      'AWS, Azure Cloud Services',
      'Stripe, PayPal Integration',
      'Auth0, OAuth 2.0'
    ],
    process: [
      {
        step: 'Market Research & Planning',
        description: 'We research your target market, analyze competitors, and define your SaaS product strategy.'
      },
      {
        step: 'MVP Development',
        description: 'We build a Minimum Viable Product with core features to validate your concept quickly.'
      },
      {
        step: 'Scaling & Optimization',
        description: 'We optimize performance, add advanced features, and scale infrastructure based on user growth.'
      },
      {
        step: 'Continuous Evolution',
        description: 'We continuously enhance your SaaS based on user feedback, analytics, and market trends.'
      }
    ]
  },
  {
    id: 'iot-solutions',
    icon: FiCpu,
    title: 'IOT Solutions',
    shortDescription: 'We help organizations leverage the Internet of Things (IoT) to connect devices, streamline processes, and create smart environments that drive business innovation.',
    color: 'from-indigo-500 to-blue-500',
    detailedDescription: 'Transform your business with intelligent IoT solutions that connect devices, collect data, and enable automation. We build end-to-end IoT systems that drive efficiency and unlock new opportunities.',
    features: [
      'IoT Device Integration',
      'Real-time Data Processing',
      'Edge Computing Solutions',
      'Sensor Network Design',
      'IoT Security & Encryption',
      'Predictive Maintenance Systems'
    ],
    benefits: [
      'Real-time monitoring and control',
      'Reduced operational costs through automation',
      'Predictive maintenance prevents downtime',
      'Data-driven decision making',
      'Improved asset utilization',
      'Enhanced customer experiences'
    ],
    technologies: [
      'MQTT, CoAP Protocols',
      'Arduino, Raspberry Pi',
      'AWS IoT, Azure IoT Hub',
      'InfluxDB, TimescaleDB',
      'Node-RED, Apache Kafka',
      'TensorFlow Lite, Edge AI'
    ],
    process: [
      {
        step: 'Use Case Definition',
        description: 'We identify IoT opportunities in your operations and define clear business objectives and ROI.'
      },
      {
        step: 'Proof of Concept',
        description: 'We build a working prototype to validate the technical feasibility and business value.'
      },
      {
        step: 'Production Deployment',
        description: 'We deploy IoT devices and backend systems with robust security and monitoring capabilities.'
      },
      {
        step: 'Optimization & Scale',
        description: 'We continuously optimize performance and scale your IoT infrastructure as you grow.'
      }
    ]
  },
  {
    id: 'ai-ml-services',
    icon: FiZap,
    title: 'AI/ML Services',
    shortDescription: 'Our AI/ML services empower businesses to harness the power of artificial intelligence and machine learning to optimize operations, predict trends, and enhance decision-making.',
    color: 'from-yellow-500 to-orange-500',
    detailedDescription: 'Unlock the power of artificial intelligence and machine learning to transform your business. We build intelligent systems that learn from data, automate complex tasks, and provide actionable insights.',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Recommendation Systems',
      'AI-powered Automation'
    ],
    benefits: [
      'Automate repetitive tasks and workflows',
      'Gain deeper insights from your data',
      'Improve accuracy and reduce errors',
      'Personalize customer experiences',
      'Predict trends and outcomes',
      'Make faster, data-driven decisions'
    ],
    technologies: [
      'TensorFlow, PyTorch, scikit-learn',
      'Python, R, Julia',
      'OpenAI, Hugging Face',
      'AWS SageMaker, Azure ML',
      'Apache Spark, MLflow',
      'BERT, GPT, YOLO'
    ],
    process: [
      {
        step: 'Data Assessment',
        description: 'We evaluate your data quality, quantity, and readiness for AI/ML applications.'
      },
      {
        step: 'Model Development',
        description: 'We develop and train custom machine learning models tailored to your specific use cases.'
      },
      {
        step: 'Integration & Deployment',
        description: 'We integrate AI models into your existing systems and deploy them to production environments.'
      },
      {
        step: 'Monitoring & Improvement',
        description: 'We continuously monitor model performance and retrain with new data to maintain accuracy.'
      }
    ]
  }
];

export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};
