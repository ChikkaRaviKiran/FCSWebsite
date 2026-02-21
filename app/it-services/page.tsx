'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaServer, FaCloud, FaShieldAlt, FaCode, FaDatabase, FaMobile, FaCheck } from 'react-icons/fa'

export default function ITServices() {
  const services = [
    {
      icon: <FaCode className="text-5xl" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: <FaCloud className="text-5xl" />,
      title: 'Cloud Solutions',
      description: 'Migration, deployment, and management of cloud infrastructure and applications.'
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats.'
    },
    {
      icon: <FaServer className="text-5xl" />,
      title: 'IT Infrastructure',
      description: 'Design, implementation, and maintenance of robust IT infrastructure.'
    },
    {
      icon: <FaDatabase className="text-5xl" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services.'
    },
    {
      icon: <FaMobile className="text-5xl" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    }
  ]

  const benefits = [
    'Experienced IT professionals',
    '24/7 technical support',
    'Scalable solutions',
    'Latest technologies',
    'Cost-effective services',
    'Security-first approach'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Technology Background"
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
              Professional <span className="text-primary-600">IT Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Comprehensive IT solutions to drive your business forward with cutting-edge technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact" className="btn btn-primary text-lg">
                Get a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-primary-400/10 rounded-full"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600">End-to-end technology solutions for your business</p>
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
                  className="text-primary-600 mb-4"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our IT Services?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We deliver reliable, scalable, and innovative IT solutions that help businesses 
                optimize operations, reduce costs, and stay competitive in the digital landscape.
              </p>
              
              {/* Feature Image */}
              <motion.div 
                className="relative h-64 rounded-xl overflow-hidden mb-6 group"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="IT Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </motion.div>
              
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
                    <FaCheck className="text-primary-600 mr-3 text-xl" />
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
              className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 shadow-xl"
            >
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Upgrade Your IT?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free consultation and discover how our IT services can 
                  transform your business.
                </p>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
