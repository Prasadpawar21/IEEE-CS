import React from 'react';
import { Target, Eye, Award, Users, Globe, BookOpen } from 'lucide-react';
import team from '../Images/Induction-2.jpg'

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ieee-gray-900 mb-6">
              About <span className="text-ieee-blue-600">IEEE CS PCCOE</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Pioneering computational intelligence research and fostering innovation in artificial intelligence, 
              machine learning, and intelligent systems at PCCOE.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ieee-gray-900 mb-6">
                What is IEEE CS?
              </h2>
              <p className="text-lg text-ieee-gray-600 mb-6">
                IEEE CS is the IEEE Computer Society, the world's leading membership organization for professionals in computer science and technology, dedicated to advancing the field through information sharing, networking, and career development resources.
              </p>
              <p className="text-lg text-ieee-gray-600 mb-8">
                Our PCCOE Student Chapter serves as a bridge between academic learning and industry applications, 
                providing students with opportunities to explore cutting-edge technologies and research in 
                computational intelligence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ieee-blue-600">2019</div>
                  <div className="text-sm text-ieee-gray-600">Chapter Established</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ieee-blue-600">150+</div>
                  <div className="text-sm text-ieee-gray-600">Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for team photo */}
              <div className="bg-gradient-to-br from-ieee-blue-100 to-ieee-blue-200 rounded-2xl p-8 text-center">
                <img src={team} alt="IEEE CIS Team" className="rounded-2xl shadow-lg mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-ieee-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-ieee-blue-100 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-ieee-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-ieee-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-ieee-gray-600">
                To be the leading provider of technical information, community services, and personalized services for the world's computing professionals, recognized for their contributions to improving global conditions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-ieee-blue-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-ieee-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-ieee-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-ieee-gray-600">
                To empower professionals, fuel global technological advancement, develop leaders, drive rapid tech evolution, and foster community-based initiatives through conferences, publications, and programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ieee-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-ieee-gray-600 max-w-2xl mx-auto">
              Exploring diverse domains of computational intelligence and their applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Neural Networks',
                description: 'Deep learning, artificial neural networks, and their applications in various domains.',
              },
              {
                icon: Award,
                title: 'Evolutionary Computing',
                description: 'Genetic algorithms, evolutionary strategies, and bio-inspired optimization techniques.',
              },
              {
                icon: BookOpen,
                title: 'Fuzzy Systems',
                description: 'Fuzzy logic, approximate reasoning, and intelligent control systems.',
              },
            ].map((area, index) => (
              <div key={index} className="text-center group">
                <div className="bg-ieee-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ieee-blue-100 transition-colors">
                  <area.icon className="h-8 w-8 text-ieee-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-ieee-gray-900 mb-4">{area.title}</h3>
                <p className="text-ieee-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Information */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-500 to-ieee-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pimpri Chinchwad College of Engineering
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              PCCOE is one of the premier engineering institutions in Pune, known for its excellence 
              in technical education, research, and industry collaboration. Our IEEE CIS chapter 
              leverages this strong foundation to advance computational intelligence research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">1999</div>
                <div className="opacity-90">College Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5000+</div>
                <div className="opacity-90">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">NAAC A+</div>
                <div className="opacity-90">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;