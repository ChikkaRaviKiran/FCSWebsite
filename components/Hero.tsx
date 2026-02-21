'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Typewriter from './Typewriter'
import MagneticButton from './MagneticButton'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/07/138591-770051034_large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Animated Background with Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient that follows mouse */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(14, 165, 233, 0.15) 0%, 
              rgba(139, 92, 246, 0.1) 25%, 
              rgba(236, 72, 153, 0.05) 50%, 
              transparent 70%)`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-purple-900/90 z-10"></div>
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient opacity-50"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        {isLoaded && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-pink-400/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rotate-45"
              animate={{
                y: [0, -30, 0],
                rotate: [45, 90, 45],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}

        {/* Particles/Dots Animation */}
        <div className="absolute inset-0">
          {isLoaded && [...Array(30)].map((_, i) => {
            const startX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
            const startY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            const endX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
            const endY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            const startOpacity = Math.random() * 0.5 + 0.2
            const midOpacity = Math.random() * 0.5 + 0.2

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: startX,
                  y: startY,
                  opacity: startOpacity,
                }}
                animate={{
                  x: endX,
                  y: endY,
                  opacity: [startOpacity, midOpacity, startOpacity],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.span 
              className="inline-block px-6 py-2.5 bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                  '0 0 30px rgba(139, 92, 246, 0.4)',
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🚀 Welcome to FCS
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business{' '}
            <br className="hidden md:block" />
            <span className="inline-block">
              <Typewriter 
                words={['Digitally', 'Globally', 'Successfully', 'Powerfully']}
                className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Leading IT Services, Digital Marketing, and Brand Growth Solutions
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton href="/contact">
              <motion.div
                className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.div>
            </MagneticButton>
            <MagneticButton href="#services">
              <motion.div
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Stats Preview with Enhanced Animation */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: '500+', label: 'Projects', color: 'from-blue-400 to-blue-600' },
              { number: '200+', label: 'Clients', color: 'from-purple-400 to-purple-600' },
              { number: '50+', label: 'Experts', color: 'from-pink-400 to-pink-600' },
              { number: '10+', label: 'Years', color: 'from-yellow-400 to-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">{stat.number}</h3>
                <p className="text-white/90 text-base font-medium relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative animated orbs with enhanced effects */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-400 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.6, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-sm mb-2 font-medium">Scroll Down</span>
          <motion.svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
