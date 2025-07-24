import React, { useState } from 'react';
import { Github, ExternalLink, Users, Calendar, Tag, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Traffic Management System',
      description: 'AI-powered traffic optimization using computer vision and machine learning algorithms to reduce congestion and improve traffic flow.',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'computer-vision',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
      status: 'completed',
      team: ['Arjun Sharma', 'Priya Patel', 'Vikram Singh'],
      duration: '6 months',
      githubUrl: '#',
      demoUrl: '#',
      year: '2024',
    },
    {
      id: 2,
      title: 'Medical Diagnosis Assistant',
      description: 'Deep learning model for medical image analysis to assist doctors in early diagnosis of diseases from X-rays and CT scans.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'deep-learning',
      technologies: ['Python', 'PyTorch', 'CNN', 'Medical Imaging'],
      status: 'ongoing',
      team: ['Sneha Reddy', 'Rahul Kumar'],
      duration: '8 months',
      githubUrl: '#',
      demoUrl: null,
      year: '2024',
    },
    {
      id: 3,
      title: 'Crop Yield Prediction System',
      description: 'Machine learning model using weather data, soil conditions, and historical patterns to predict crop yields for farmers.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'machine-learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'IoT Sensors'],
      status: 'completed',
      team: ['Anisha Gupta', 'Vikram Singh', 'Priya Patel'],
      duration: '4 months',
      githubUrl: '#',
      demoUrl: '#',
      year: '2023',
    },
    {
      id: 4,
      title: 'Intelligent Chatbot for Student Support',
      description: 'NLP-based chatbot to answer student queries about courses, admissions, and campus facilities using natural language processing.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'nlp',
      technologies: ['Python', 'NLTK', 'Transformers', 'Flask'],
      status: 'ongoing',
      team: ['Rahul Kumar', 'Anisha Gupta'],
      duration: '5 months',
      githubUrl: '#',
      demoUrl: '#',
      year: '2024',
    },
    {
      id: 5,
      title: 'Facial Expression Recognition',
      description: 'Real-time emotion detection system using convolutional neural networks for applications in human-computer interaction.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'computer-vision',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
      status: 'completed',
      team: ['Arjun Sharma', 'Sneha Reddy'],
      duration: '3 months',
      githubUrl: '#',
      demoUrl: '#',
      year: '2023',
    },
    {
      id: 6,
      title: 'Automated Essay Scoring System',
      description: 'NLP-powered system for automated grading of essays with detailed feedback on grammar, coherence, and content quality.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'nlp',
      technologies: ['Python', 'SpaCy', 'BERT', 'Machine Learning'],
      status: 'planning',
      team: ['Priya Patel', 'Vikram Singh'],
      duration: '6 months',
      githubUrl: null,
      demoUrl: null,
      year: '2025',
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ongoing') return project.status === 'ongoing';
    if (filter === 'completed') return project.status === 'completed';
    if (filter === 'planning') return project.status === 'planning';
    return project.category === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-ieee-blue-100 text-ieee-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'computer-vision': return 'bg-purple-100 text-purple-800';
      case 'machine-learning': return 'bg-blue-100 text-blue-800';
      case 'deep-learning': return 'bg-indigo-100 text-indigo-800';
      case 'nlp': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-ieee-gray-900 mb-6">
              Student <span className="text-ieee-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Explore innovative computational intelligence projects developed by our talented students, 
              showcasing real-world applications of AI, machine learning, and intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Active Projects' },
              { number: '8', label: 'Completed Projects' },
              { number: '25+', label: 'Students Involved' },
              { number: '4', label: 'Research Areas' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-ieee-blue-600 mb-2">{stat.number}</div>
                <div className="text-ieee-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-ieee-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-ieee-gray-600" />
              <span className="text-ieee-gray-700 font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'ongoing', label: 'Ongoing' },
                { key: 'completed', label: 'Completed' },
                { key: 'computer-vision', label: 'Computer Vision' },
                { key: 'machine-learning', label: 'Machine Learning' },
                { key: 'deep-learning', label: 'Deep Learning' },
                { key: 'nlp', label: 'NLP' },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === filterOption.key
                      ? 'bg-ieee-blue-600 text-white'
                      : 'bg-ieee-gray-100 text-ieee-gray-700 hover:bg-ieee-gray-200'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-ieee-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ieee-gray-900 mb-3 group-hover:text-ieee-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ieee-gray-600 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-ieee-gray-600">
                      <Users className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      {project.team.join(', ')}
                    </div>
                    <div className="flex items-center text-sm text-ieee-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      {project.duration} • {project.year}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      <span className="text-sm font-medium text-ieee-gray-700">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-ieee-gray-100 text-ieee-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-ieee-gray-100">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="p-2 bg-ieee-blue-50 rounded-lg hover:bg-ieee-blue-100 transition-colors"
                          title="View Code"
                        >
                          <Github className="h-4 w-4 text-ieee-blue-600" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="p-2 bg-ieee-blue-50 rounded-lg hover:bg-ieee-blue-100 transition-colors"
                          title="View Demo"
                        >
                          <ExternalLink className="h-4 w-4 text-ieee-blue-600" />
                        </a>
                      )}
                    </div>
                    <button className="text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ieee-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ieee-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have a Project Idea?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for innovative project ideas from our members. Join us and turn your ideas into reality!
          </p>
          <button className="bg-white text-ieee-blue-600 px-8 py-4 rounded-xl hover:bg-ieee-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Propose a Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;