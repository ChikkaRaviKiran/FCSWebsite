'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPalette, FaLightbulb, FaBullseye, FaStar, FaTrophy, FaUsers, FaCheck } from 'react-icons/fa'

export default function BrandGrowth() {
  const services = [
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Brand Strategy',
      description: 'Develop comprehensive brand strategies aligned with your business goals.'
    },
    {
      icon: <FaPalette className="text-5xl" />,
      title: 'Brand Identity Design',
      description: 'Create memorable visual identities that resonate with your audience.'
    },
    {
      icon: <FaBullseye className="text-5xl" />,
      title: 'Market Positioning',
      description: 'Establish a unique position in your market and stand out from competitors.'
    },
    {
      icon: <FaStar className="text-5xl" />,
      title: 'Reputation Management',
      description: 'Build and maintain a positive brand reputation across all channels.'
    },
    {
      icon: <FaTrophy className="text-5xl" />,
      title: 'Brand Development',
      description: 'Grow and evolve your brand to meet changing market demands.'
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Customer Experience',
      description: 'Design exceptional customer experiences that drive loyalty and growth.'
    }
  ]

  const benefits = [
    'Strategic brand planning',
    'Creative excellence',
    'Market research insights',
    'Consistent brand messaging',
    'Measurable growth outcomes',
    'Long-term partnership'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" 
            alt="Brand Growth Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 mb-6"
            >
              Accelerate Your <span className="text-purple-600">Brand Growth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Build a powerful brand that connects with customers and drives business success
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact" className="btn bg-purple-600 text-white hover:bg-purple-700 shadow-lg text-lg">
                Grow Your Brand
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-purple-400/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brand Growth Services</h2>
            <p className="text-xl text-gray-600">Strategic solutions to build and scale your brand</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="text-purple-600 mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Invest in Brand Growth?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                A strong brand creates lasting value, attracts loyal customers, and differentiates 
                you from the competition. We help you build a brand that drives sustainable growth.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <FaCheck className="text-purple-600 mr-3 text-xl" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-12 shadow-xl"
            >
              <div className="bg-white rounded-xl p-8">
                {/* Feature Image */}
                <motion.div 
                  className="relative h-48 rounded-lg overflow-hidden mb-6 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Brand Strategy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build a Powerful Brand</h3>
                <p className="text-gray-600 mb-6">
                  Let's create a brand strategy that resonates with your audience and drives 
                  measurable business results.
                </p>
                <Link href="/contact" className="btn bg-purple-600 text-white hover:bg-purple-700 w-full text-center">
                  Start Your Brand Journey
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brand Growth Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for building successful brands</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Research & Analysis', 'Strategy Development', 'Implementation', 'Growth & Optimization'].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Brand?</h2>
            <p className="text-xl mb-8">
              Partner with us to build a brand that stands out and drives business success
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
