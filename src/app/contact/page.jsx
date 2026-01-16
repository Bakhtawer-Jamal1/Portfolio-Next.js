"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSend, 
  FiUser, 
  FiMail, 
  FiMessageSquare, 
  FiCheckCircle, 
  FiAlertCircle,
  FiLoader,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiExternalLink
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "bakhtawer878@gmail.com", link: "mailto:bakhtawer878@gmail.com" },
    { icon: <FiPhone />, label: "Phone", value: "+92 326 0745271", link: "tel:+923260745271" },
    { icon: <FiMapPin />, label: "Location", value: "Gujrat, Pakistan" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", url: "https://github.com" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: <FiMail />, label: "Email", url: "mailto:bakhtawer878@gmail.com" },
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setIsSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <FiSend className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'm always open to new challenges and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 ${info.link ? 'cursor-pointer' : ''}`}
                onClick={() => info.link && window.open(info.link, '_blank')}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl group-hover:scale-110 transition-transform">
                    <div className="text-green-400 text-xl">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                  {info.link && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="ml-auto text-gray-400"
                    >
                      <FiExternalLink />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-600/20 transition-all duration-300 border border-gray-700"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-green-500/5 to-emerald-600/5 backdrop-blur-sm rounded-2xl border border-green-500/20"
            >
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">Available for Opportunities</p>
                  <p className="text-sm text-gray-400">Typically respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center p-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-green-500/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6"
                  >
                    <FiCheckCircle className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
                  <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you soon.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.submit && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                      >
                        <div className="flex items-center text-red-400">
                          <FiAlertCircle className="mr-2" />
                          {errors.submit}
                        </div>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <div className="flex items-center">
                            <FiUser className="mr-2" />
                            Your Name
                          </div>
                        </label>
                        <div className="relative">
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 pl-12 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors`}
                          />
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FiUser />
                          </div>
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-sm mt-2 flex items-center"
                          >
                            <FiAlertCircle className="mr-1" /> {errors.name}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <div className="flex items-center">
                            <FiMail className="mr-2" />
                            Email Address
                          </div>
                        </label>
                        <div className="relative">
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-3 pl-12 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors`}
                          />
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FiMail />
                          </div>
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-sm mt-2 flex items-center"
                          >
                            <FiAlertCircle className="mr-1" /> {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Subject Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <div className="flex items-center">
                          <FiMessageSquare className="mr-2" />
                          Your Message
                        </div>
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows="6"
                          placeholder="Tell me about your project, timeline, and budget..."
                          className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none`}
                        />
                      </div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm mt-2 flex items-center"
                        >
                          <FiAlertCircle className="mr-1" /> {errors.message}
                        </motion.p>
                      )}
                      <div className="text-right mt-2">
                        <span className={`text-sm ${form.message.length > 500 ? 'text-red-400' : 'text-gray-400'}`}>
                          {form.message.length}/500
                        </span>
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {/* Shimmer Effect */}
                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          />
                        )}

                        <div className="relative z-10 flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <FiLoader />
                              </motion.div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <FiSend />
                              <span>Send Message</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                              >
                                <FiExternalLink />
                              </motion.div>
                            </>
                          )}
                        </div>
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}