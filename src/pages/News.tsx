import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Award, Users, Newspaper } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'IEEE CIS PCCOE Wins Outstanding Student Chapter Award 2024',
      excerpt: 'Our chapter has been recognized with the Outstanding Student Chapter Award at the IEEE Region 10 Student Activities Conference.',
      content: 'The IEEE CIS Student Chapter at PCCOE has been honored with the prestigious Outstanding Student Chapter Award 2024 at the IEEE Region 10 Student Activities Conference held in Singapore. This recognition acknowledges our chapter\'s exceptional contributions to computational intelligence research, community engagement, and student development programs.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'achievement',
      author: 'Dr. Rajesh Mehta',
      date: '2024-12-15',
      tags: ['Award', 'Recognition', 'IEEE'],
      featured: true,
    },
    {
      id: 2,
      title: 'Successful AI Workshop Series Concludes with 200+ Participants',
      excerpt: 'Our comprehensive AI workshop series spanning three months has successfully concluded with overwhelming participation from students across various engineering disciplines.',
      content: 'The three-month AI Workshop Series organized by IEEE CIS PCCOE concluded with remarkable success, attracting over 200 participants from various engineering disciplines. The series covered neural networks, machine learning, deep learning, and practical AI applications, featuring hands-on sessions and industry expert talks.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'event',
      author: 'Arjun Sharma',
      date: '2024-11-28',
      tags: ['Workshop', 'AI', 'Education'],
      featured: false,
    },
    {
      id: 3,
      title: 'Student Research Paper Published in IEEE Transactions',
      excerpt: 'Final year students Vikram Singh and Sneha Reddy have successfully published their research on neural network optimization in a prestigious IEEE journal.',
      content: 'We are proud to announce that our students Vikram Singh and Sneha Reddy have published their research paper titled "Enhanced Neural Network Optimization using Hybrid Evolutionary Algorithms" in IEEE Transactions on Neural Networks and Learning Systems. This achievement highlights the quality of research being conducted by our student members.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'research',
      author: 'Prof. Sunita Agarwal',
      date: '2024-11-10',
      tags: ['Research', 'Publication', 'Students'],
      featured: true,
    },
    {
      id: 4,
      title: 'Industry Collaboration with TechMahindra for AI Projects',
      excerpt: 'IEEE CIS PCCOE announces strategic partnership with TechMahindra for collaborative AI research projects and internship opportunities.',
      content: 'We are excited to announce our strategic partnership with TechMahindra for collaborative artificial intelligence research projects. This partnership will provide our students with industry exposure, internship opportunities, and access to real-world AI challenges. The collaboration will focus on developing AI solutions for various industry applications.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'partnership',
      author: 'Dr. Rajesh Mehta',
      date: '2024-10-25',
      tags: ['Industry', 'Partnership', 'Opportunities'],
      featured: false,
    },
    {
      id: 5,
      title: 'New Executive Committee Elected for 2025',
      excerpt: 'The IEEE CIS PCCOE chapter has elected its new executive committee for the year 2025, bringing fresh leadership and innovative ideas.',
      content: 'Following a competitive election process, we are pleased to announce the new executive committee for IEEE CIS PCCOE Student Chapter for the year 2025. The new team, led by Chairperson Arjun Sharma, brings diverse expertise and innovative ideas to drive the chapter forward. We congratulate all elected members and look forward to another successful year.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'announcement',
      author: 'IEEE CIS PCCOE',
      date: '2024-12-01',
      tags: ['Elections', 'Leadership', 'Committee'],
      featured: false,
    },
    {
      id: 6,
      title: 'International Conference Participation and Paper Presentations',
      excerpt: 'Our chapter members presented research papers at the International Conference on Computational Intelligence and Machine Learning in Tokyo.',
      content: 'Three of our chapter members - Priya Patel, Rahul Kumar, and Anisha Gupta - successfully presented their research papers at the International Conference on Computational Intelligence and Machine Learning held in Tokyo, Japan. Their presentations on fuzzy logic systems, neural networks, and evolutionary computing received positive feedback from the international research community.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'research',
      author: 'Priya Patel',
      date: '2024-09-15',
      tags: ['Conference', 'International', 'Presentation'],
      featured: false,
    },
  ];

  const categories = [
    { key: 'all', label: 'All News', count: newsItems.length },
    { key: 'achievement', label: 'Achievements', count: newsItems.filter(item => item.category === 'achievement').length },
    { key: 'event', label: 'Events', count: newsItems.filter(item => item.category === 'event').length },
    { key: 'research', label: 'Research', count: newsItems.filter(item => item.category === 'research').length },
    { key: 'partnership', label: 'Partnerships', count: newsItems.filter(item => item.category === 'partnership').length },
    { key: 'announcement', label: 'Announcements', count: newsItems.filter(item => item.category === 'announcement').length },
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'achievement': return 'bg-yellow-100 text-yellow-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'partnership': return 'bg-green-100 text-green-800';
      case 'announcement': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'achievement': return Award;
      case 'event': return Users;
      case 'research': return Newspaper;
      case 'partnership': return Users;
      case 'announcement': return Newspaper;
      default: return Newspaper;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-ieee-gray-900 mb-6">
              News & <span className="text-ieee-blue-600">Achievements</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, achievements, and milestones of the 
              IEEE CIS Student Chapter at PCCOE.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ieee-gray-900 mb-8">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => {
              const CategoryIcon = getCategoryIcon(news.category);
              return (
                <div key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)} flex items-center`}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-ieee-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ieee-gray-900 mb-3 group-hover:text-ieee-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-ieee-gray-600 mb-4">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-ieee-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(news.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {news.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-ieee-gray-100 text-ieee-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors flex items-center font-medium">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-ieee-gray-50 border-b border-ieee-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  selectedCategory === category.key
                    ? 'bg-ieee-blue-600 text-white'
                    : 'bg-white text-ieee-gray-700 hover:bg-ieee-gray-100'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-ieee-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-ieee-gray-900">
              {selectedCategory === 'all' ? 'All News' : `${categories.find(cat => cat.key === selectedCategory)?.label}`}
            </h2>
            <span className="text-ieee-gray-600">
              {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => {
              const CategoryIcon = getCategoryIcon(news.category);
              return (
                <article key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)} flex items-center`}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-ieee-gray-900 mb-3 group-hover:text-ieee-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-ieee-gray-600 mb-4 text-sm line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-ieee-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {news.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {news.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-ieee-gray-100 text-ieee-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors flex items-center text-sm font-medium">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ieee-gray-500 text-lg">No news articles found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-ieee-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter to receive the latest news, event updates, and achievements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-ieee-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full sm:w-auto bg-white text-ieee-blue-600 px-6 py-3 rounded-lg hover:bg-ieee-gray-100 transition-all duration-300 font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;