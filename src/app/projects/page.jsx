"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiLock, FiStar, FiEye } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

const ProjectCard = ({ title, desc, link, index, isClickable }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation for the card entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const getTechIcons = () => {
    if (title.includes("Restaurant")) {
      return (
        <div className="flex gap-2">
          <SiReact className="text-cyan-400" />
          <SiJavascript className="text-yellow-400" />
          <span className="text-xs text-gray-400">HTML/CSS</span>
        </div>
      );
    } else {
      return (
        <div className="flex gap-2">
          <SiNextdotjs className="text-white" />
          <SiTailwindcss className="text-cyan-300" />
          <SiNodedotjs className="text-green-500" />
          <SiMongodb className="text-green-400" />
        </div>
      );
    }
  };

  const cardContent = (
    <div className="relative">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
          isClickable 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500 cursor-pointer' 
            : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 cursor-default'
        } ${isHovered && isClickable ? 'shadow-lg shadow-green-500/10' : 'shadow'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <motion.h3 
              className={`text-lg sm:text-xl font-bold ${isClickable ? 'text-green-400' : 'text-gray-400'}`}
              animate={{ 
                color: isHovered && isClickable ? '#10B981' : isClickable ? '#34D399' : '#9CA3AF'
              }}
            >
              {title}
            </motion.h3>
            <div className="flex items-center gap-2 mt-1">
              {getTechIcons()}
            </div>
          </div>
          
          {/* Status Indicator */}
          <motion.div
            animate={{ 
              rotate: isHovered && isClickable ? 90 : 0,
              scale: isHovered && isClickable ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {isClickable ? (
              <FiExternalLink className={`${isClickable ? 'text-green-400' : 'text-gray-500'}`} />
            ) : (
              <FiLock className="text-gray-500" />
            )}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p 
          className="text-gray-300 mb-6"
          animate={{
            opacity: isHovered ? 0.9 : 0.7
          }}
        >
          {desc}
        </motion.p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 360 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <FiStar className="text-yellow-400" />
              </motion.div>
              <span className="text-sm text-gray-400">
                {title.includes("Restaurant") ? "24" : "15"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FiEye className="text-blue-400" />
              <span className="text-sm text-gray-400">
                {title.includes("Restaurant") ? "128" : "89"}
              </span>
            </div>
          </div>
          <span className="text-xs text-gray-500">
            {title.includes("Restaurant") ? "Live" : "Coming Soon"}
          </span>
        </div>

        {/* Hover Effect Line */}
        {isClickable && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-b-xl"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Floating dots animation for clickable card */}
      {isClickable && isHovered && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              times: [0, 0.2, 0.8, 1]
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5,
              times: [0, 0.2, 0.8, 1]
            }}
          />
        </>
      )}
    </div>
  );

  return isClickable ? (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      {cardContent}
    </a>
  ) : (
    <div className="block">
      {cardContent}
    </div>
  );
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-green-500/5 to-emerald-600/5 rounded-full blur-2xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="max-w-5xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-white font-bold">P</span>
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: isVisible ? 120 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Showcasing my recent work and experiments
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Clickable Admin Panel Project */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectCard
              title="Restaurant Admin Panel"
              desc="React-based admin panel for restaurant management. Fully responsive."
              link="https://restaurant-admin-panel-react.vercel.app/"
              index={0}
              isClickable={true}
            />
          </motion.div>

          {/* Non-clickable Portfolio Project */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProjectCard
              title="Portfolio Website"
              desc="Personal portfolio built with Next.js, Tailwind, Node.js & MongoDB."
              link="#"
              index={1}
              isClickable={false}
            />
          </motion.div>
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Clickable Project</span>
            </div>
            <div className="flex items-center gap-2">
              <FiLock className="text-gray-500" />
              <span>Coming Soon</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          x: ['-100%', '100%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}