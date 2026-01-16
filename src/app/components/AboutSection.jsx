"use client";

import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayers, 
  FiCpu,
  FiGitBranch,
  FiCheckCircle,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

export default function AboutSection() {
  const skills = [
    { name: 'React.js', icon: <SiReact />, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'from-gray-800 to-gray-500' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: 'from-yellow-500 to-yellow-300' },
    { name: 'Node.js', icon: <SiNodedotjs />, level: 80, color: 'from-green-600 to-green-400' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: 'from-green-500 to-emerald-400' },
    { name: 'MySQL', icon: <SiMysql />, level: 75, color: 'from-blue-700 to-blue-500' },
    { name: 'Express.js', icon: <SiExpress />, level: 82, color: 'from-gray-700 to-gray-400' },
    { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: 'from-orange-500 to-orange-300' },
    { name: 'CSS3', icon: <SiCss3 />, level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: 'from-teal-500 to-cyan-400' },
    { name: 'Git & GitHub', icon: <SiGit />, level: 85, color: 'from-orange-600 to-red-500' },
  ];

  const certifications = [
    { name: 'HTML 5 Certification', issuer: 'CISCO', year: '2024' },
    { name: 'CSS3 Certification', issuer: 'CISCO', year: '2024' },
    { name: 'JavaScript Essentials 1', issuer: 'CISCO', year: '2024' },
    { name: 'JavaScript Essentials 2', issuer: 'CISCO', year: '2024' },
  ];

  const education = [
    { degree: 'ADP (IT)', institution: 'University of Central Punjab', period: '2019 - 2021' }
  ];

  const personalInfo = [
    { icon: <FiMail />, label: 'Email', value: 'bakhtawer878@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+92 326 0745271' },
    { icon: <FiMapPin />, label: 'Location', value: 'Gujrat, Pakistan' },
    { icon: <FiGlobe />, label: 'Languages', value: 'English, Urdu, Arabic' },
  ];

  const hobbies = ['Gym', 'Table Tennis', 'Video Games', 'Cricket', 'Snooker', 'Music'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about-section" className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <FiCode className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MERN Stack Developer passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Introduction & Skills */}
          <div>
            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-10 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl mr-4">
                  <FiCpu className="text-green-500 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Introduction</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I am an ambitious <span className="font-semibold text-green-500">MERN Stack Developer</span> with hands-on 
                experience in the complete website development lifecycle from design to deployment. 
                I've applied modern development practices during my recent internship and academic journey.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold"
              >
                <FiCheckCircle className="mr-2" />
                Available for Opportunities
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl mr-4">
                  <FiLayers className="text-blue-500 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="text-2xl text-gray-600 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg"
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Education, Certifications & Info */}
          <div>
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-10 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl mr-4">
                  <FiCalendar className="text-purple-500 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-8 border-l-2 border-green-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-10 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl mr-4">
                  <FiAward className="text-yellow-500 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h2>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg mr-4">
                      <FiCheckCircle className="text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                        <span className="text-sm text-green-500 font-medium">{cert.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/20"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Personal Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl"
                  >
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mr-3">
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{info.label}</p>
                      <p className={info.label === 'Email' ? 'font-medium text-gray-800 dark:text-white text-sm break-all' : 'font-medium text-gray-800 dark:text-white'}>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Hobbies & Interests
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  rotate: [0, 5, -5, 5, 0]
                }}
                className="relative group"
              >
                <div className="px-6 py-3 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors">
                    {hobby}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
}
