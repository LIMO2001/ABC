'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Consultation' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-fnm-gray-900/95 backdrop-blur-lg shadow-2xl'
          : 'bg-gradient-to-b from-fnm-gray-900 via-fnm-gray-800 to-fnm-gray-700 shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top contact bar */}
      <div className="bg-fnm-black text-fnm-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254 7xx xxx xxx | +254 7xx xxx xxx</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@abclawadvocates.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <MapPin size={16} />
            <a
              href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fnm-gold transition-colors duration-200"
            >
              HH, Nairobi
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-serif font-bold">
              <span className="text-fnm-white">ABC</span>
              <span className="text-fnm-gold"> Law Advocates</span>
              <div className="text-sm font-sans font-normal text-fnm-gray-300 mt-1">
                Commissioners for Oath & Notaries Public
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-fnm-gold focus:ring-offset-2 focus:ring-offset-fnm-gray-900 rounded ${
                  item.label === 'Book Consultation'
                    ? 'bg-fnm-gold text-fnm-black px-4 py-2 rounded-lg hover:bg-fnm-gold/90 hover:scale-105'
                    : pathname === item.href
                    ? 'text-fnm-gold'
                    : 'text-fnm-gray-200 hover:text-fnm-gold'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
                {pathname === item.href && item.label !== 'Book Consultation' && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fnm-gold"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-fnm-gray-200 hover:text-fnm-gold transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-fnm-gold focus:ring-offset-2 focus:ring-offset-fnm-gray-900 rounded"
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-fnm-gray-900 lg:hidden z-50 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xl font-serif font-bold">
                    <span className="text-fnm-white">ABC</span>
                    <span className="text-fnm-gold"> Law</span>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-fnm-gray-200 hover:text-fnm-gold transition-colors p-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          item.label === 'Book Consultation'
                            ? 'bg-fnm-gold text-fnm-black hover:bg-fnm-gold/90'
                            : pathname === item.href
                            ? 'bg-fnm-gold/10 text-fnm-gold border-l-4 border-fnm-gold'
                            : 'text-fnm-gray-200 hover:text-fnm-gold hover:bg-fnm-gray-800'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-200 ${
                            item.label === 'Book Consultation' || pathname === item.href
                              ? 'opacity-100 group-hover:translate-x-1'
                              : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-fnm-gray-700">
                  <h4 className="text-fnm-gold font-semibold mb-4">Contact Us</h4>
                  <div className="space-y-3 text-sm">
                    <a
                      href="tel:+254728657560"
                      className="flex items-center gap-3 text-fnm-gray-300 hover:text-fnm-gold transition-colors"
                    >
                      <Phone size={16} />
                      <span>+254 7XX XXX XXX</span>
                    </a>
                    <a
                      href="mailto:info@fnmlawadvocates.com"
                      className="flex items-center gap-3 text-fnm-gray-300 hover:text-fnm-gold transition-colors"
                    >
                      <Mail size={16} />
                      <span>info@abclawadvocates.com</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-fnm-gray-300 hover:text-fnm-gold transition-colors"
                    >
                      <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                      <span>JJ Hub, HH</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}