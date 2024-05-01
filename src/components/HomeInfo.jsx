import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import arrow from "../assets/icons/arrow.svg";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const HomeInfo = ({ currentStage }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="absolute inset-0 flex items-center justify-center px-4 py-12"
      style={{ background: "rgba(245, 245, 245, 0.9)" }}  // Soft light background for contrast
    >
      {currentStage === 1 && (
        <motion.h1
          className='text-3xl md:text-5xl font-semibold text-center py-4 px-8 text-white'
          layoutId="infoText"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}  // Subtle shadow for classy emphasis
        >
          Welcome to <span style={{ color: '#006262' }}>CodekarmaTech</span>,
          Innovating your digital world.
        </motion.h1>
      )}

      {currentStage === 2 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(0, 123, 255, 0.8)", borderRadius: '10px' }}>
          <p className='text-xl md:text-2xl font-medium text-white'>
            Explore our comprehensive services that push the boundaries of technology.
          </p>
          <Link to='/services' className='mt-4 bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6 text-white inline-flex items-center font-semibold'>
            Discover our services
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}

      {currentStage === 3 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(39, 174, 96, 0.8)", borderRadius: '10px' }}>
          <p className='text-xl md:text-2xl font-medium text-white'>
            Leading industry innovation with projects that speak volumes. Explore our portfolio.
          </p>
          <Link to='/projects' className='mt-4 bg-green-500 hover:bg-green-600 rounded-full py-2 px-6 text-white inline-flex items-center font-semibold'>
            View projects
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}

      {currentStage === 4 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(233, 30, 99, 0.8)", borderRadius: '10px' }}>
          <p className='text-xl md:text-2xl font-medium text-white'>
            Ready to transform your business? Connect with us and let’s create something incredible together.
          </p>
          <Link to='/contact' className='mt-4 bg-pink-500 hover:bg-pink-600 rounded-full py-2 px-6 text-white inline-flex items-center font-semibold'>
            Get in touch
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomeInfo;
