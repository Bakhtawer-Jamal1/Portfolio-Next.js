"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle About click with smooth scroll
  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    if (pathname === '/' || pathname === '') {
      const el = document.getElementById('about-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    router.push('/#about-section');
  };

  // Centralized nav click handler for links without special behavior
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    if (path === '/') {
      router.push('/');
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
      return;
    }
    if (path === '#about-section') {
      handleAboutClick(e);
      return;
    }
    router.push(path);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome />, onClick: null },
    { name: 'About', path: '#about-section', icon: <FiUser />, onClick: handleAboutClick },
    { name: 'Projects', path: '/projects', icon: <FiBriefcase />, onClick: null },
    { name: 'Contact', path: '/contact', icon: <FiMail />, onClick: null },
  ];

  // Check if current path matches nav item
  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    if (path === '#about-section') {
      if (typeof window !== 'undefined') {
        return window.location.hash === '#about-section';
      }
      return false;
    }
    return pathname === path;
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-green-500">Bakhtawer</span>
                <span className="text-white">.</span>
              </h1>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-1 bg-green-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.onClick ? (
                  <a
                    href={item.path}
                    onClick={item.onClick}
                    className={`flex items-center space-x-2 transition-colors ${
                      isActive(item.path)
                        ? 'text-green-500'
                        : 'text-gray-300 hover:text-green-500'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    )}
                  </a>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`flex items-center space-x-2 transition-colors ${
                      isActive(item.path)
                        ? 'text-green-500'
                        : 'text-gray-300 hover:text-green-500'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    )}
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* Download CV removed */}
          </div>

          {/* Mobile Menu Button - 3 Lines Icon */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {/* Top Line */}
            <motion.span
              className="w-6 h-0.5 bg-gray-300 rounded-full mb-1.5"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
                opacity: isOpen ? 0.8 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Middle Line */}
            <motion.span
              className="w-6 h-0.5 bg-gray-300 rounded-full mb-1.5"
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom Line */}
            <motion.span
              className="w-6 h-0.5 bg-gray-300 rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
                opacity: isOpen ? 0.8 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Pulsing Border Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-green-500/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
              />
              
              {/* Menu Panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl md:hidden z-50 overflow-hidden mx-4 sm:mx-6"
              >
                <div className="p-4 sm:p-6">
                  <motion.div 
                    className="text-center mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-green-400 text-sm font-medium">Navigation Menu</p>
                  </motion.div>

                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={mobileItemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.onClick ? (
                          <a
                            href={item.path}
                            onClick={(e) => {
                              item.onClick(e);
                              setIsOpen(false);
                            }}
                            className={`flex items-center justify-between p-3 sm:p-4 rounded-lg transition-all ${
                              isActive(item.path)
                                ? 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-500 border border-green-500/30'
                                : 'bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-green-500'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-base sm:text-lg">{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            {isActive(item.path) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                              />
                            )}
                          </a>
                        ) : (
                          <a
                            href={item.path}
                            onClick={(e) => handleNavClick(e, item.path)}
                            className={`flex items-center justify-between p-3 sm:p-4 rounded-lg transition-all ${
                              isActive(item.path)
                                ? 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-500 border border-green-500/30'
                                : 'bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-green-500'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-base sm:text-lg">{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            {isActive(item.path) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                              />
                            )}
                          </a>
                        )}
                      </motion.div>
                    ))}
                    
                    {/* Mobile Download CV removed */}
                  </div>

                  {/* Decorative Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm"
                  >
                    <p>Bakhtawer Jamal • MERN Stack Developer</p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Border Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          x: ['-100%', '100%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </nav>
  );
}