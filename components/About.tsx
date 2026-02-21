'use client'

import { FaCheck, FaBusinessTime } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Industry Expertise',
    'Proven Results',
    'Client-Focused Approach',
    'Innovative Solutions'
  ]

  return (
    <section ref={ref} id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Driving Digital <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are FCS, a leading provider of IT services, digital marketing,
              brand growth, and media buying. Our team of experts is dedicated to helping businesses thrive
              in the digital age.
            </motion.p>

            <motion.p 
              className="text-gray-600 mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With years of experience and a track record of success, we deliver innovative solutions 
              tailored to your unique business needs.
            </motion.p>

            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full mr-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCheck className="text-primary-600" />
                  </motion.div>
                  <span className="text-lg font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full h-96 md:h-[500px]">
              {/* Animated background circles */}
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 bg-primary-300 rounded-full opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Main image container */}
              <motion.div 
                className="relative w-full h-full bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated overlay pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(45deg, #0ea5e9 25%, transparent 25%, transparent 75%, #0ea5e9 75%, #0ea5e9), linear-gradient(45deg, #0ea5e9 25%, transparent 25%, transparent 75%, #0ea5e9 75%, #0ea5e9)',
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 30px 30px'
                  }}></div>
                </div>

                {/* Actual Image */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20"></div>

                {/* Floating elements */}
                <motion.div 
                  className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-lg shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <motion.div 
                  className="absolute bottom-10 left-10 w-20 h-20 bg-pink-400 rounded-full shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
