"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  FiDownload, 
  FiChevronRight, 
  FiArrowDown, 
  FiCode, 
  FiDatabase, 
  FiServer,
  FiAward,
  FiCoffee,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb,
  SiTailwindcss
} from 'react-icons/si';

function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [bgParticles, setBgParticles] = useState([]);

  const words = ['MERN Stack Developer', 'Next.js Developer', 'Full Stack Engineer', 'Web Developer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  // Animated background particles
  useEffect(() => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 2 + 1,
      color: ['#10B981', '#3B82F6', '#8B5CF6'][Math.floor(Math.random() * 3)]
    }));
    setBgParticles(particles);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => setIsTyping(true), 500);
      return;
    }

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isTyping, currentWordIndex]);

  const stats = [
    { icon: <FiCode />, number: '10+', label: 'Projects', color: 'from-blue-500 to-cyan-400' },
    { icon: <FiDatabase />, number: '2+', label: 'Years Experience', color: 'from-green-500 to-emerald-400' },
    { icon: <FiServer />, number: '100%', label: 'Dedication', color: 'from-purple-500 to-pink-400' },
    { icon: <FiAward />, number: '5+', label: 'Certifications', color: 'from-orange-500 to-yellow-400' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: <FiMail />, url: 'mailto:bakhtawer878@gmail.com', color: 'hover:text-red-500' },
    { icon: <FiGlobe />, url: '#', color: 'hover:text-green-500' },
  ];

  const techStack = [
    { icon: <SiReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-white' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-300' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Particles */}
      {bgParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(particle.id) * 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.speed * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-600/10 backdrop-blur-sm rounded-full border border-green-500/20 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 font-medium">Welcome to my portfolio</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gray-300">Hi, I'm </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Bakhtawer Jamal
              </motion.span>
            </h1>

            {/* Animated Typewriter Text */}
            <div className="mb-8">
              <div className="text-2xl sm:text-3xl font-semibold text-gray-400 h-12 flex items-center">
                <span className="text-white">I'm a </span>
                <span className="text-green-400 ml-2 min-w-[280px]">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[2px] h-8 bg-green-400 ml-1"
                  />
                </span>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Passionate about building modern, responsive, and scalable web applications
              with cutting-edge technologies. I transform ideas into reality through code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="/Bakhtawer-Jamal-Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10 flex items-center space-x-3">
                  <FiDownload className="text-xl" />
                  <span>Download CV</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                  >
                    <FiChevronRight />
                  </motion.div>
                </div>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span>Get In Touch</span>
                  <FiChevronRight />
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-500">Follow me:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-800 text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden"
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              {/* Profile Content */}
              <div className="relative z-10">
                {/* Profile Image/Icon */}
                <motion.div
                  className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-400 p-1"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                      BJ
                    </span>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-center text-gray-300 mb-6">
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl"
                      >
                        <div className={`text-3xl mb-2 ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <span className="text-sm text-gray-400">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
                    >
                      <div className="text-center">
                        <div className={`text-2xl mb-2 inline-block bg-gradient-to-r ${stat.color} p-2 rounded-lg`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl"
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 hover:text-green-400 transition-colors cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Explore More</span>
            <FiArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          x: ['-100%', '100%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          x: ['100%', '-100%']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </section>
  );
}

// Load AboutSection dynamically to avoid large initial bundle
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: false });

export default function Page() {
  return (
    <>
      <Home />
      <AboutSection />
    </>
  );
}