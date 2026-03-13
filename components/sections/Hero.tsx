'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Shield, Users, CheckCircle, Gavel, BookOpen, MapPin } from 'lucide-react'

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const features = [
    { icon: <Scale size={20} />, text: 'Commissioners for Oath' },
    { icon: <Shield size={20} />, text: 'Notaries Public' },
    { icon: <Users size={20} />, text: 'Experienced Team' },
    { icon: <CheckCircle size={20} />, text: 'Trusted Legal Advisors' }
  ]

  return (
    <section
      className="relative bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white overflow-hidden"
      aria-label="Hero section with main company information"
      role="banner"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-fnm-gold/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fnm-gold/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-fnm-gold/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div {...fadeIn}>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                Professional <span className="text-fnm-gold">Legal Services</span> in Nairobi
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl lg:text-2xl text-fnm-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABC Advocates LLP provides comprehensive legal solutions with integrity and excellence. 
              We are your trusted partners in navigating complex legal matters.
            </motion.p>

            {/* Key features */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-fnm-gold flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-fnm-gray-200">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-fnm-gold focus:ring-offset-2 focus:ring-offset-fnm-black"
                aria-label="Book a free legal consultation with ABC Advocates"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fnm-gold focus:ring-offset-2 focus:ring-offset-fnm-black"
                aria-label="Learn more about ABC Advocates and our team"
              >
                Learn About Us
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-12 pt-8 border-t border-fnm-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-fnm-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-fnm-gold" />
                  <span className="text-fnm-gold font-semibold">Located in:</span>
                  <a
                    href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fnm-gray-300 hover:text-fnm-gold transition-colors duration-200 underline decoration-fnm-gold/50 hover:decoration-fnm-gold"
                  >
                    HH, ABCB, Nairobi
                  </a>
                </div>
                <div>
                  <span className="text-fnm-gold font-semibold">Call:</span> +254 728 657 560
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated legal documents background */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-fnm-gold/5 to-transparent"
                  initial={{ y: 100 }}
                  animate={{ y: -100 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-fnm-gold/30 text-xs leading-relaxed p-4">
                    LEGAL DOCUMENT • CONTRACT • AGREEMENT • WHEREAS • THEREFORE • HEREBY • WITNESSETH • LEGAL DOCUMENT • CONTRACT • AGREEMENT • WHEREAS • THEREFORE • HEREBY • WITNESSETH • LEGAL DOCUMENT • CONTRACT • AGREEMENT • WHEREAS • THEREFORE • HEREBY • WITNESSETH
                  </div>
                </motion.div>
              </div>

              {/* Main content container */}
              <div className="w-full h-96 bg-gradient-to-br from-fnm-gold/20 to-fnm-gold/5 rounded-3xl flex items-center justify-center border border-fnm-gold/20 relative overflow-hidden">
                {/* Floating legal elements */}
                <motion.div
                  className="absolute top-16 left-12"
                  animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Gavel size={40} className="text-fnm-gold opacity-60" />
                </motion.div>

                <motion.div
                  className="absolute top-20 right-16"
                  animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <BookOpen size={35} className="text-fnm-gold opacity-60" />
                </motion.div>

                <motion.div
                  className="absolute bottom-16 left-16"
                  animate={{ y: [5, -15, 5], rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <BookOpen size={30} className="text-fnm-gold opacity-50" />
                </motion.div>

                <motion.div
                  className="absolute bottom-20 right-12"
                  animate={{ y: [-15, 15, -15], rotate: [3, -3, 3] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Gavel size={32} className="text-fnm-gold opacity-50" />
                </motion.div>

                {/* Central content */}
                <div className="text-center z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Scale size={120} className="text-fnm-gold mx-auto mb-6 opacity-80" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-serif font-bold text-fnm-gold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      Justice
                    </motion.span>
                    <span className="mx-2">•</span>
                    <motion.span
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      Integrity
                    </motion.span>
                    <span className="mx-2">•</span>
                    <motion.span
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    >
                      Excellence
                    </motion.span>
                  </motion.h3>

                  <p className="text-fnm-gray-300 max-w-sm mx-auto">
                    Serving clients across Kenya with professional legal expertise and unwavering commitment to justice.
                  </p>
                </div>

                {/* Stamp animation */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 0.3 }}
                  transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatDelay: 10 }}
                >
                  <div className="w-16 h-16 rounded-full border-4 border-fnm-gold/50 flex items-center justify-center text-fnm-gold/50 text-xs font-bold transform -rotate-12">
                    LEGAL
                  </div>
                </motion.div>
              </div>

              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-fnm-gold/20 rounded-full blur-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-fnm-gold/10 rounded-full blur-lg"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}