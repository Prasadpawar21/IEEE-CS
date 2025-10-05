import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, GraduationCap, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    department: '',
    interests: [] as string[],
    experience: '',
    motivation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interests = [
    'Machine Learning',
    'Neural Networks',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'Data Science',
    'Deep Learning',
    'Fuzzy Logic',
    'Evolutionary Computing'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    }
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-10 w-10 text-green-600" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-ieee-gray-900 mb-4">
                Welcome to IEEE CIS!
              </h3>
              <p className="text-ieee-gray-600 mb-6">
                Thank you for joining our community. We'll contact you soon with more details about upcoming events and opportunities.
              </p>
              
              <button
                onClick={onClose}
                className="bg-ieee-blue-600 text-white px-8 py-3 rounded-xl hover:bg-ieee-blue-700 transition-colors font-medium"
              >
                Continue Exploring
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-ieee-gray-100 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-ieee-gray-900">Join IEEE CS PCCOE</h2>
                  <p className="text-ieee-gray-600">Become part of our innovative community</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-ieee-gray-100 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6 text-ieee-gray-600" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-ieee-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-ieee-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@student.pccoe.edu.in"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                      Year of Study *
                    </label>
                    <select
                      required
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Final Year">Final Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                    className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics Engineering">Electronics Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-ieee-gray-900 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-ieee-blue-600" />
                  Areas of Interest
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <motion.button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? 'border-ieee-blue-500 bg-ieee-blue-50 text-ieee-blue-700'
                          : 'border-ieee-gray-200 hover:border-ieee-blue-300 text-ieee-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {interest}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Experience & Motivation */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                    Previous Experience (Optional)
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about any relevant projects, courses, or experience in AI/ML..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ieee-gray-700 mb-2">
                    Why do you want to join IEEE CS? *
                  </label>
                  <textarea
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 border border-ieee-gray-200 rounded-xl focus:ring-2 focus:ring-ieee-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Share your motivation and what you hope to achieve..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-ieee-gray-100">
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-ieee-blue-500 to-ieee-blue-400 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Application
                </motion.button>
                
                <p className="text-xs text-ieee-gray-500 text-center mt-3">
                  By submitting this form, you agree to receive communications from IEEE CS PCCOE.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinUsModal;