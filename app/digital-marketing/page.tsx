'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaSearch, FaShareAlt, FaEnvelope, FaPenFancy, FaChartBar, FaAd, FaCheck } from 'react-icons/fa'

export default function DigitalMarketing() {
  const services = [
    {
      icon: <FaSearch className="text-5xl" />,
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.'
    },
    {
      icon: <FaShareAlt className="text-5xl" />,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand presence across social platforms.'
    },
    {
      icon: <FaPenFancy className="text-5xl" />,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your target audience.'
    },
    {
      icon: <FaEnvelope className="text-5xl" />,
      title: 'Email Marketing',
      description: 'Nurture leads and maintain customer relationships through targeted campaigns.'
    },
    {
      icon: <FaAd className="text-5xl" />,
      title: 'PPC Advertising',
      description: 'Drive immediate results with strategic pay-per-click campaigns.'
    },
    {
      icon: <FaChartBar className="text-5xl" />,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics.'
    }
  ]

  const benefits = [
    'Data-driven strategies',
    'Experienced marketing team',
    'Customized campaigns',
    'Transparent reporting',
    'ROI-focused approach',
    'Multi-channel expertise'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" 
            alt="Digital Marketing Background"
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
              Strategic <span className="text-green-600">Digital Marketing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Drive growth and engagement with data-driven digital marketing strategies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact" className="btn bg-green-600 text-white hover:bg-green-700 shadow-lg text-lg">
                Start Your Campaign
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-green-400/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-green-500/10 rounded-full"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to boost your online presence</p>
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
                  className="text-green-600 mb-4"
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
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-12 shadow-xl"
            >
              <div className="bg-white rounded-xl p-8">
                {/* Feature Image */}
                <motion.div 
                  className="relative h-48 rounded-lg overflow-hidden mb-6 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80"
                    alt="Digital Marketing Strategy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Grow Your Business Online</h3>
                <p className="text-gray-600 mb-6">
                  Our digital marketing experts will help you reach your target audience, 
                  increase conversions, and maximize your ROI.
                </p>
                <Link href="/contact" className="btn bg-green-600 text-white hover:bg-green-700 w-full text-center">
                  Get Free Strategy Session
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Digital Marketing?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We combine creativity with analytics to deliver marketing campaigns that generate 
                real results for your business.
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
                    <FaCheck className="text-green-600 mr-3 text-xl" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
            <p className="text-xl mb-8">
              Let's create a winning digital marketing strategy for your business
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Our Marketing Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
