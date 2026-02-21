'use client'

import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      content: "Outstanding service! They transformed our online presence and significantly increased our ROI. The team's dedication and expertise are unmatched.",
      author: "John Smith",
      position: "CEO, Tech Corp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      content: "Professional, reliable, and results-driven. Highly recommend their digital marketing services. Our brand visibility has grown exponentially.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      content: "Their IT solutions streamlined our operations and improved our overall efficiency. Best decision we made for our business growth.",
      author: "Michael Brown",
      position: "CTO, Innovation Inc",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-white/80">What our clients say about us</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-colors relative overflow-hidden group">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Quote icon */}
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft className="text-4xl text-yellow-400" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/90 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
                    <p className="text-white/70">{testimonial.position}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional stats or badges */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-white/70 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">200+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-white/70 text-sm">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
