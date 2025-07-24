import React, { useState } from 'react';
import { Calendar, MapPin, Users, Filter, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'AI Workshop Series: Neural Networks',
      date: '2025-03-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Seminar Hall, PCCOE',
      type: 'workshop',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive hands-on workshop covering fundamentals of neural networks and deep learning.',
      attendees: 45,
    },
    {
      id: 2,
      title: 'Tech Talk: Future of Artificial Intelligence',
      date: '2025-03-22',
      time: '2:00 PM - 4:00 PM',
      location: 'Auditorium, PCCOE',
      type: 'seminar',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Industry experts discussing latest trends and future prospects in artificial intelligence.',
      attendees: 120,
    },
    {
      id: 3,
      title: 'IEEE CIS Annual Competition 2025',
      date: '2025-04-05',
      time: '9:00 AM - 6:00 PM',
      location: 'Campus Grounds, PCCOE',
      type: 'competition',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Annual competition showcasing innovative computational intelligence projects.',
      attendees: 80,
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals Workshop',
      date: '2025-02-28',
      time: '10:00 AM - 5:00 PM',
      location: 'Computer Lab, PCCOE',
      type: 'workshop',
      status: 'past',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Introductory workshop on machine learning algorithms and practical implementations.',
      attendees: 60,
    },
    {
      id: 5,
      title: 'Guest Lecture: Ethics in AI',
      date: '2025-02-15',
      time: '3:00 PM - 5:00 PM',
      location: 'Conference Room, PCCOE',
      type: 'seminar',
      status: 'past',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discussion on ethical considerations and responsible AI development practices.',
      attendees: 75,
    },
    {
      id: 6,
      title: 'Fuzzy Logic Systems Workshop',
      date: '2025-01-20',
      time: '11:00 AM - 4:00 PM',
      location: 'Seminar Hall, PCCOE',
      type: 'workshop',
      status: 'past',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive workshop on fuzzy logic systems and their applications.',
      attendees: 35,
    },
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.status === 'upcoming';
    if (filter === 'past') return event.status === 'past';
    return event.type === filter;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'seminar': return 'bg-blue-100 text-blue-800';
      case 'competition': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-ieee-blue-100 text-ieee-blue-800';
      case 'past': return 'bg-gray-100 text-gray-600';
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
              Events & <span className="text-ieee-blue-600">Activities</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Discover our upcoming workshops, seminars, and competitions designed to enhance your 
              knowledge in computational intelligence and connect with fellow enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-ieee-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-ieee-gray-600" />
              <span className="text-ieee-gray-700 font-medium">Filter Events:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Events' },
                { key: 'upcoming', label: 'Upcoming' },
                { key: 'past', label: 'Past Events' },
                { key: 'workshop', label: 'Workshops' },
                { key: 'seminar', label: 'Seminars' },
                { key: 'competition', label: 'Competitions' },
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

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ieee-gray-900 mb-3 group-hover:text-ieee-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-ieee-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-ieee-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-ieee-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-ieee-gray-600">
                      <Users className="h-4 w-4 mr-2 text-ieee-blue-500" />
                      {event.attendees} {event.status === 'upcoming' ? 'registered' : 'attended'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ieee-blue-600">
                      {event.time}
                    </span>
                    <button className="text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors flex items-center text-sm font-medium">
                      {event.status === 'upcoming' ? 'Register' : 'View Details'}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ieee-gray-500 text-lg">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ieee-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't Miss Our Next Event!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Stay updated with our latest events and workshops. Join our community to receive notifications.
          </p>
          <button className="bg-white text-ieee-blue-600 px-8 py-4 rounded-xl hover:bg-ieee-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Subscribe to Updates
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;