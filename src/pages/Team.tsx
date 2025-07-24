import React from 'react';
import { Linkedin, Mail, Award, Users } from 'lucide-react';

const Team: React.FC = () => {
  const executiveTeam = [
    {
      name: 'Arjun Sharma',
      position: 'Chairperson',
      year: 'Final Year, Computer Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'arjun.sharma@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['Best Student Leader 2024', 'IEEE Region 10 Recognition'],
    },
    {
      name: 'Priya Patel',
      position: 'Vice Chairperson',
      year: 'Third Year, Electronics Engineering',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'priya.patel@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['Outstanding Volunteer Award', 'Research Paper Published'],
    },
    {
      name: 'Rahul Kumar',
      position: 'Secretary',
      year: 'Third Year, Computer Engineering',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'rahul.kumar@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['Event Management Excellence', 'IEEE Membership Drive Leader'],
    },
    {
      name: 'Sneha Reddy',
      position: 'Treasurer',
      year: 'Third Year, Information Technology',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'sneha.reddy@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['Financial Management Award', 'Budget Planning Excellence'],
    },
    {
      name: 'Vikram Singh',
      position: 'Technical Head',
      year: 'Final Year, Computer Engineering',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'vikram.singh@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['AI Project Excellence', 'Hackathon Winner 2024'],
    },
    {
      name: 'Anisha Gupta',
      position: 'Events Coordinator',
      year: 'Second Year, Electronics Engineering',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'anisha.gupta@student.pccoe.edu.in',
      linkedin: '#',
      achievements: ['Event Coordination Excellence', 'Workshop Series Leader'],
    },
  ];

  const advisors = [
    {
      name: 'Dr. Rajesh Mehta',
      position: 'Faculty Advisor',
      department: 'Computer Engineering Department',
      image: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'rajesh.mehta@pccoepune.org',
      specialization: 'Machine Learning & AI',
    },
    {
      name: 'Prof. Sunita Agarwal',
      position: 'Co-Advisor',
      department: 'Electronics Engineering Department',
      image: 'https://images.pexels.com/photos/1181693/pexels-photo-1181693.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'sunita.agarwal@pccoepune.org',
      specialization: 'Neural Networks & Fuzzy Systems',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-ieee-gray-900 mb-6">
              Our <span className="text-ieee-blue-600">Team</span>
            </h1>
            <p className="text-xl text-ieee-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders and advisors who drive our chapter's mission to advance 
              computational intelligence and foster innovation among students.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Committee Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '6', label: 'Executive Members' },
              { icon: Award, number: '2', label: 'Faculty Advisors' },
              { icon: Users, number: '150+', label: 'Active Members' },
              { icon: Award, number: '25+', label: 'Events Organized' },
            ].map(({ icon: Icon, number, label }, index) => (
              <div key={index} className="text-center">
                <div className="bg-ieee-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-ieee-blue-600" />
                </div>
                <div className="text-3xl font-bold text-ieee-gray-900 mb-2">{number}</div>
                <div className="text-ieee-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 bg-ieee-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ieee-gray-900 mb-4">
              Faculty Advisors
            </h2>
            <p className="text-lg text-ieee-gray-600 max-w-2xl mx-auto">
              Our experienced faculty advisors provide guidance and mentorship to help us achieve our goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="relative inline-block mb-6">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 bg-ieee-blue-600 rounded-full opacity-0 hover:opacity-10 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-ieee-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-ieee-blue-600 font-medium mb-2">{advisor.position}</p>
                <p className="text-ieee-gray-600 text-sm mb-3">{advisor.department}</p>
                <p className="text-ieee-gray-500 text-sm mb-6">Specialization: {advisor.specialization}</p>
                <a
                  href={`mailto:${advisor.email}`}
                  className="inline-flex items-center text-ieee-blue-600 hover:text-ieee-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ieee-gray-900 mb-4">
              Executive Committee 2025
            </h2>
            <p className="text-lg text-ieee-gray-600 max-w-2xl mx-auto">
              Our passionate student leaders who organize events, manage operations, and drive the chapter forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ieee-gray-900 mb-2">{member.name}</h3>
                  <p className="text-ieee-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-ieee-gray-600 text-sm mb-4">{member.year}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-ieee-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-ieee-gray-600 flex items-center">
                          <Award className="h-3 w-3 text-ieee-blue-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-ieee-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-ieee-blue-50 rounded-lg hover:bg-ieee-blue-100 transition-colors group"
                    >
                      <Mail className="h-4 w-4 text-ieee-blue-600" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="p-2 bg-ieee-blue-50 rounded-lg hover:bg-ieee-blue-100 transition-colors group"
                    >
                      <Linkedin className="h-4 w-4 text-ieee-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-ieee-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for passionate students to join our executive team and contribute 
            to the advancement of computational intelligence at PCCOE.
          </p>
          <button className="bg-white text-ieee-blue-600 px-8 py-4 rounded-xl hover:bg-ieee-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Apply for Leadership Roles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;