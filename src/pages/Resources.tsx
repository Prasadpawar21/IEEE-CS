import React from 'react';
import { BookOpen, Download, ExternalLink, Database, Code, Video, FileText, Users } from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Academic Resources',
      icon: BookOpen,
      color: 'bg-blue-500',
      resources: [
        {
          name: 'IEEE Xplore Digital Library',
          description: 'Access to millions of technical documents and research papers',
          type: 'external',
          url: 'https://ieeexplore.ieee.org/',
          icon: ExternalLink,
        },
        {
          name: 'CIS Digital Library',
          description: 'Specialized collection of computational intelligence research',
          type: 'external',
          url: 'https://cis.ieee.org/publications',
          icon: Database,
        },
        {
          name: 'Research Paper Templates',
          description: 'IEEE standard templates for conference and journal papers',
          type: 'download',
          url: '#',
          icon: Download,
        },
        {
          name: 'Citation Guidelines',
          description: 'IEEE reference format and citation standards',
          type: 'download',
          url: '#',
          icon: FileText,
        },
      ],
    },
    {
      title: 'Learning Materials',
      icon: Video,
      color: 'bg-green-500',
      resources: [
        {
          name: 'Neural Networks Fundamentals',
          description: 'Comprehensive video series on neural network basics',
          type: 'download',
          url: '#',
          icon: Video,
        },
        {
          name: 'Machine Learning Algorithms',
          description: 'Implementation guides for popular ML algorithms',
          type: 'download',
          url: '#',
          icon: Code,
        },
        {
          name: 'Fuzzy Logic Systems Tutorial',
          description: 'Step-by-step guide to fuzzy logic system design',
          type: 'download',
          url: '#',
          icon: FileText,
        },
        {
          name: 'Evolutionary Computing Workshop',
          description: 'Recorded workshop on genetic algorithms and evolution strategies',
          type: 'download',
          url: '#',
          icon: Video,
        },
      ],
    },
    {
      title: 'Development Tools',
      icon: Code,
      color: 'bg-purple-500',
      resources: [
        {
          name: 'Python for AI Development',
          description: 'Essential Python libraries and frameworks for AI',
          type: 'external',
          url: 'https://python.org/',
          icon: ExternalLink,
        },
        {
          name: 'TensorFlow Tutorials',
          description: 'Official TensorFlow learning resources',
          type: 'external',
          url: 'https://tensorflow.org/tutorials',
          icon: ExternalLink,
        },
        {
          name: 'PyTorch Documentation',
          description: 'Complete PyTorch documentation and examples',
          type: 'external',
          url: 'https://pytorch.org/docs/',
          icon: ExternalLink,
        },
        {
          name: 'Jupyter Notebook Templates',
          description: 'Pre-configured notebooks for common AI tasks',
          type: 'download',
          url: '#',
          icon: Download,
        },
      ],
    },
    {
      title: 'Chapter Resources',
      icon: Users,
      color: 'bg-orange-500',
      resources: [
        {
          name: 'Membership Application Form',
          description: 'Join the IEEE CIS Student Chapter',
          type: 'download',
          url: '#',
          icon: Download,
        },
        {
          name: 'Event Organization Guidelines',
          description: 'Best practices for organizing chapter events',
          type: 'download',
          url: '#',
          icon: FileText,
        },
        {
          name: 'Funding Request Form',
          description: 'Apply for chapter funding for your projects',
          type: 'download',
          url: '#',
          icon: Download,
        },
        {
          name: 'Volunteer Opportunities',
          description: 'Ways to get involved and contribute to the chapter',
          type: 'download',
          url: '#',
          icon: FileText,
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: 'IEEE CIS Official Website',
      description: 'Visit the global IEEE Computational Intelligence Society',
      url: 'https://cis.ieee.org/',
      icon: ExternalLink,
    },
    {
      title: 'PCCOE Official Website',
      description: 'Pimpri Chinchwad College of Engineering homepage',
      url: 'https://www.pccoepune.com/',
      icon: ExternalLink,
    },
    {
      title: 'IEEE Student Activities',
      description: 'Global IEEE student programs and opportunities',
      url: 'https://www.ieee.org/membership/students/',
      icon: ExternalLink,
    },
    {
      title: 'Chapter GitHub Repository',
      description: 'Access our code repositories and project files',
      url: '#',
      icon: Code,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-ieee-gray-900 mb-6">
              Learning <span className="text-ieee-blue-600">Resources</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Access comprehensive learning materials, research papers, development tools, and documentation 
              to advance your knowledge in computational intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ieee-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white border border-ieee-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-ieee-blue-300 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-ieee-blue-50 rounded-lg group-hover:bg-ieee-blue-100 transition-colors">
                    <link.icon className="h-5 w-5 text-ieee-blue-600" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-ieee-gray-400 group-hover:text-ieee-blue-600 transition-colors" />
                </div>
                <h3 className="font-semibold text-ieee-gray-900 mb-2 group-hover:text-ieee-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-ieee-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-ieee-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className={`p-3 ${category.color} rounded-lg mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-ieee-gray-900">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-ieee-blue-50 rounded-lg group-hover:bg-ieee-blue-100 transition-colors">
                          <resource.icon className="h-6 w-6 text-ieee-blue-600" />
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          resource.type === 'external' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {resource.type === 'external' ? 'External Link' : 'Download'}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-ieee-gray-900 mb-3 group-hover:text-ieee-blue-600 transition-colors">
                        {resource.name}
                      </h3>
                      <p className="text-ieee-gray-600 mb-4 text-sm">
                        {resource.description}
                      </p>

                      <a
                        href={resource.url}
                        className="inline-flex items-center text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors font-medium text-sm"
                        target={resource.type === 'external' ? '_blank' : '_self'}
                        rel={resource.type === 'external' ? 'noopener noreferrer' : ''}
                      >
                        {resource.type === 'external' ? 'Visit Link' : 'Download'}
                        {resource.type === 'external' ? (
                          <ExternalLink className="ml-1 h-4 w-4" />
                        ) : (
                          <Download className="ml-1 h-4 w-4" />
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ieee-gray-900 mb-4">
              Featured Research Papers
            </h2>
            <p className="text-lg text-ieee-gray-600 max-w-2xl mx-auto">
              Recent publications by our faculty advisors and student members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Learning Approaches for Traffic Pattern Recognition',
                authors: 'Dr. Rajesh Mehta, Arjun Sharma',
                journal: 'IEEE Transactions on Intelligent Transportation Systems',
                year: '2024',
                type: 'Journal Paper',
              },
              {
                title: 'Fuzzy Logic Control Systems in Smart Agriculture',
                authors: 'Prof. Sunita Agarwal, Priya Patel, Anisha Gupta',
                journal: 'IEEE Conference on Computational Intelligence',
                year: '2024',
                type: 'Conference Paper',
              },
              {
                title: 'Neural Network Optimization using Evolutionary Algorithms',
                authors: 'Vikram Singh, Sneha Reddy',
                journal: 'IEEE Student Paper Competition',
                year: '2023',
                type: 'Student Paper',
              },
            ].map((paper, index) => (
              <div key={index} className="bg-ieee-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-ieee-blue-100 text-ieee-blue-800 rounded-full text-xs font-medium">
                    {paper.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ieee-gray-900 mb-3">{paper.title}</h3>
                <p className="text-ieee-gray-600 text-sm mb-2">Authors: {paper.authors}</p>
                <p className="text-ieee-gray-600 text-sm mb-4">{paper.journal} • {paper.year}</p>
                <a
                  href="#"
                  className="text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors font-medium text-sm flex items-center"
                >
                  Read Paper
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ieee-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Additional Resources?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Can't find what you're looking for? Contact us and we'll help you find the resources you need.
          </p>
          <button className="bg-white text-ieee-blue-600 px-8 py-4 rounded-xl hover:bg-ieee-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Request Resources
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;