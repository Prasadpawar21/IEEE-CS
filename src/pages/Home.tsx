import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Users, Calendar, Award, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';
import MagneticButton from '../components/MagneticButton';
import FloatingCard from '../components/FloatingCard';
import JoinUsModal from '../components/JoinUsModal';
import Induction from '../Images/Induction-1.jpg';
import FOC from '../Images/FOP-3.jpg';
import Workshop from '../Images/Robotics-workshop-3.jpg'
import logo from '../Images/IEEE-CS-circle.png'



const Home: React.FC = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // GSAP animations for hero section
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Floating animation for hero elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

  }, []);

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    })
  };

  return (
    <div className="overflow-hidden relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={titleRef}>
            {/* Animated Logo */}
            <motion.div 
              className="flex justify-center mb-8 floating-element"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div 
                className="relative p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-ieee-blue-400/20 to-blue-500/20 rounded-3xl"
                />
                <img src={logo} className="h-20 w-20 text-ieee-blue-600 relative z-10" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 floating-element"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-ieee-blue-300 via-ieee-blue-400 to-ieee-blue-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                IEEE CS
              </motion.span>
              <br />
              <motion.span 
                className="text-2xl sm:text-3xl lg:text-4xl text-ieee-gray-700 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                PCCOE Student Chapter
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="floating-element"
            >
              <p className="text-xl sm:text-3xl text-ieee-gray-600 mb-4 max-w-4xl mx-auto font-light">
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Empowering Intelligence.
                </motion.span>{' '}
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Enabling Innovation.
                </motion.span>
              </p>
              
              <p className="text-lg text-ieee-gray-500 mb-12 max-w-2xl mx-auto">
                Join the leading student chapter in computational intelligence at Pimpri Chinchwad College of Engineering, Pune.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center floating-element"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <MagneticButton
                className="group bg-gradient-to-r from-ieee-blue-400 to-ieee-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500"
                onClick={() => setShowJoinModal(true)}
              >
                <div className="flex items-center">
                  Join Our Community
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </MagneticButton>
              
              <MagneticButton
                className="group border-2 border-ieee-blue-600 text-ieee-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm bg-white/10 hover:bg-ieee-blue-600 hover:text-white transition-all duration-500"
              >
                <Link to="/events">
                  Explore Events
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <ChevronDown className="h-6 w-6 text-ieee-gray-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-20 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: '150+', label: 'Active Members' },
                { icon: Calendar, number: '25+', label: 'Events Conducted' },
                { icon: Award, number: '10+', label: 'Awards Won' },
                { icon: Brain, number: '5+', label: 'Research Projects' },
              ].map(({ icon: Icon, number, label }, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <FloatingCard delay={index * 0.1}>
                    <div className="p-8">
                      <motion.div 
                        className="bg-gradient-to-br from-ieee-blue-50 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-ieee-blue-100 group-hover:to-blue-200 transition-all duration-500"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-10 w-10 text-ieee-blue-600" />
                      </motion.div>
                      <motion.div 
                        className="text-4xl font-bold text-ieee-gray-900 mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {number}
                      </motion.div>
                      <div className="text-ieee-gray-600 font-medium">{label}</div>
                    </div>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Events */}
      <ParallaxSection offset={30}>
        <section className="py-20 bg-gradient-to-br from-ieee-gray-50/80 to-white/80 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl sm:text-5xl font-bold text-ieee-gray-900 mb-6"
                  whileInView={{ scale: [0.9, 1.02, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Past <span className="text-ieee-blue-600">Events</span>
                </motion.h2>
                <p className="text-lg text-ieee-gray-600 max-w-2xl mx-auto">
                  Join our exciting events and workshops to enhance your knowledge in computational intelligence
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'IEEE CS Induction',
                  date: 'July 15, 2025',
                  image: Induction,
                  description: 'An engaging induction program to welcome new members and introduce them to the world of IEEE CS.',
                },
                {
                  title: 'Find One Piece',
                  date: 'Sept 24, 2025',
                  image: FOC ,
                  description: 'We’re celebrating Engineer’s Day with the most thrilling adventure on campus – FIND ONE PIECE!',
                },
                {
                  title: 'Robotics Workshop & Handson',
                  date: 'April 5, 2025',
                  image: Workshop,
                  description: 'One week industry training program on Robotics in assocaition with Dolphine labs Pvt. Ltd. ,Pune',
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <FloatingCard delay={index * 0.2}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20">
                      <div className="relative overflow-hidden">
                        <motion.img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <motion.div 
                          className="text-sm text-ieee-blue-600 font-medium mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.date}
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-bold text-ieee-gray-900 mb-3"
                          whileHover={{ color: "#047857" }}
                        >
                          {event.title}
                        </motion.h3>
                        <p className="text-ieee-gray-600 mb-4">{event.description}</p>
                        {/* <MagneticButton
                          className="text-ieee-blue-600 font-medium hover:text-ieee-blue-700 transition-colors flex items-center group"
                        >
                          <Link to="/events" className="flex items-center">
                            Learn More
                            <motion.div
                              className="ml-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.div>
                          </Link>
                        </MagneticButton> */}
                      </div>
                    </div>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-ieee-blue-500 to-ieee-blue-300 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              className="text-3xl sm:text-5xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.8 }}
            >
              Ready to Join the Future?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Become part of a vibrant community of students passionate about computational intelligence and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MagneticButton
                className="bg-white text-ieee-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500"
                strength={0.5}
                onClick={() => setShowJoinModal(true)}
              >
                <div className="flex items-center">
                  Get Started Today
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Join Us Modal */}
      <JoinUsModal 
        isOpen={showJoinModal} 
        onClose={() => setShowJoinModal(false)} 
      />
    </div>
  );
};

export default Home;