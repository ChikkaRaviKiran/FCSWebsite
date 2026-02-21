'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBullhorn, FaTv, FaMobileAlt, FaNewspaper, FaChartLine, FaLayerGroup, FaCheck } from 'react-icons/fa'

export default function MediaBuying() {
  const services = [
    {
      icon: <FaBullhorn className="text-5xl" />,
      title: 'Digital Media Buying',
      description: 'Strategic ad placements across Google, Facebook, Instagram, and more.'
    },
    {
      icon: <FaTv className="text-5xl" />,
      title: 'Programmatic Advertising',
      description: 'Automated, data-driven ad buying for maximum efficiency and reach.'
    },
    {
      icon: <FaMobileAlt className="text-5xl" />,
      title: 'Mobile Advertising',
      description: 'Targeted mobile campaigns to reach users on their devices.'
    },
    {
      icon: <FaNewspaper className="text-5xl" />,
      title: 'Display Advertising',
      description: 'Eye-catching banner ads placed on high-traffic websites.'
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Performance Marketing',
      description: 'ROI-focused campaigns with measurable results and optimization.'
    },
    {
      icon: <FaLayerGroup className="text-5xl" />,
      title: 'Multi-Channel Campaigns',
      description: 'Integrated advertising strategies across multiple platforms.'
    }
  ]

  const benefits = [
    'Expert media negotiation',
    'Data-driven targeting',
    'Real-time optimization',
    'Transparent reporting',
    'Maximum ROI focus',
    'Industry partnerships'
  ]

  const platforms = [
    'Google Ads',
    'Facebook & Instagram',
    'LinkedIn Ads',
    'YouTube',
    'TikTok',
    'Twitter/X',
    'Display Networks',
    'Native Advertising'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80" 
            alt="Media Buying Background"
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
              Strategic <span className="text-orange-600">Media Buying</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Maximize your advertising ROI with expert media buying and campaign management
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact" className="btn bg-orange-600 text-white hover:bg-orange-700 shadow-lg text-lg">
                Launch Your Campaign
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-orange-400/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Media Buying Services</h2>
            <p className="text-xl text-gray-600">Comprehensive advertising solutions across all channels</p>
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
                  className="text-orange-600 mb-4"
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

      {/* Platforms Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advertising Platforms We Master</h2>
            <p className="text-xl text-gray-600">Expert media buying across all major platforms</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-all"
              >
                <p className="font-semibold text-gray-900">{platform}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-12 shadow-xl"
            >
              <div className="bg-white rounded-xl p-8">
                {/* Feature Image */}
                <motion.div 
                  className="relative h-48 rounded-lg overflow-hidden mb-6 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
                    alt="Media Buying Campaigns"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize Your Ad Spend</h3>
                <p className="text-gray-600 mb-6">
                  Our media buying experts leverage data and industry relationships to get you 
                  the best ad placements at the most competitive rates.
                </p>
                <Link href="/contact" className="btn bg-orange-600 text-white hover:bg-orange-700 w-full text-center">
                  Get Media Buying Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Media Buying?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We combine strategic planning, data analytics, and industry expertise to deliver 
                advertising campaigns that generate results and maximize your return on investment.
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
                    <FaCheck className="text-orange-600 mr-3 text-xl" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-orange-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ value: '$10M+', label: 'Ad Spend Managed' }, { value: '3.5x', label: 'Average ROI' }, { value: '100+', label: 'Active Campaigns' }, { value: '15+', label: 'Ad Platforms' }].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-orange-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Ad Spend?</h2>
            <p className="text-xl mb-8">
              Let our media buying experts create high-performing campaigns for your business
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Media Campaign
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
