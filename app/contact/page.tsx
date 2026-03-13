'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Calendar,
  Shield,
  Award
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: '',
    message: '',
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const practiceAreas = [
    'Real Estate & Conveyancing',
    'Intellectual Property Law',
    'Debt Recovery',
    'Corporate & Commercial Law',
    'Alternative Dispute Resolution',
    'Litigation',
    'General Legal Consultation'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        practiceArea: '',
        message: '',
        urgency: 'normal'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+254 7XXXXXX", "+254 7XXXXXXXX"],
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@ABClawadvocates.com"],
      description: "Send us your inquiry and we'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      details: ["CBD, 3rd Floor, Wing4", "MOI AV, HH", "Nairobi, Kenya"],
      description: "Visit our office for in-person consultations"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      description: "We're available during these hours for consultations"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Contact <span className="text-fnm-gold">ABC Advocates</span>
            </h1>
            <p className="text-xl lg:text-2xl text-fnm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to discuss your legal needs? Our experienced team is here to provide
              expert guidance and professional representation. Contact us today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+254728657560"
                className="inline-flex items-center gap-2 bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
              >
                <Phone size={20} />
                Call Now: +254 7XX XXX XXX
              </a>
              <a
                href="mailto:info@ABClawadvocates.com"
                className="inline-flex items-center gap-2 border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
              >
                <Mail size={20} />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 lg:py-32 bg-fnm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              Get In <span className="text-fnm-gold">Touch</span>
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our legal team. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-fnm-black">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-fnm-black mb-4">{method.title}</h3>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-fnm-gray-700 font-medium">
                      {method.title === "Phone Numbers" ? (
                        <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:text-fnm-gold transition-colors">
                          {detail}
                        </a>
                      ) : method.title === "Email Address" ? (
                        <a href={`mailto:${detail}`} className="hover:text-fnm-gold transition-colors">
                          {detail}
                        </a>
                      ) : method.title === "Office Location" ? (
                        <a
                          href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-fnm-gold transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-fnm-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 lg:py-32 bg-fnm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-6">
                Send Us a Message
              </h2>
              <p className="text-fnm-gray-600 mb-8">
                Fill out the form below and our legal team will get back to you within 24 hours.
                All consultations are confidential.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-green-800 font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">We'll respond within 24 hours.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-fnm-black mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-fnm-black mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-fnm-black mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-fnm-black mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="practiceArea" className="block text-sm font-semibold text-fnm-black mb-2">
                      Practice Area *
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      required
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                    >
                      <option value="">Select a practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-fnm-black mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors"
                    >
                      <option value="normal">Normal (2-3 days)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-fnm-black mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-fnm-gray-400" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold transition-colors resize-none"
                      placeholder="Please describe your legal matter in detail..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-fnm-gold text-fnm-black py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-fnm-black"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 p-6 bg-fnm-white rounded-lg border border-fnm-gray-200">
                <h4 className="font-semibold text-fnm-black mb-3 flex items-center gap-2">
                  <Shield size={18} className="text-fnm-gold" />
                  Confidentiality Guaranteed
                </h4>
                <p className="text-sm text-fnm-gray-600">
                  All communications are protected by attorney-client privilege.
                  Your information will be kept strictly confidential.
                </p>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-fnm-black mb-6">
                Visit Our Office
              </h2>
              <p className="text-fnm-gray-600 mb-8">
                Located in the heart of cbc, our office is easily accessible via Eastern Bypass.
                Schedule an in-person consultation for personalized legal advice.
              </p>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7089966541447!2d36.9813808!3d-1.259438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6bff96f3b90b%3A0xa0ab627bc0ad4bbe!2sGREYVILE%20HUB!5e0!3m2!1sen!2ske!4v1727352000000!5m2!1sen!2ske"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

              <div className="text-center">
                <a
                  href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 font-semibold transition-colors duration-200"
                >
                  <MapPin size={18} />
                  <span>View larger map & get directions</span>
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-fnm-white rounded-lg border border-fnm-gray-200">
                  <Calendar className="text-fnm-gold" size={24} />
                  <div>
                    <h4 className="font-semibold text-fnm-black">Schedule a Consultation</h4>
                    <p className="text-sm text-fnm-gray-600">Book your free initial consultation today</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-fnm-white rounded-lg border border-fnm-gray-200">
                  <Award className="text-fnm-gold" size={24} />
                  <div>
                    <h4 className="font-semibold text-fnm-black">Experienced Legal Team</h4>
                    <p className="text-sm text-fnm-gray-600">Commissioners for Oath & Notaries Public</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-fnm-black text-fnm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-fnm-gold">
              Need Immediate Legal Assistance?
            </h3>
            <p className="text-fnm-gray-300 mb-6 max-w-2xl mx-auto">
              For urgent legal matters that require immediate attention,
              contact us directly by phone during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2547234567890"
                className="inline-flex items-center gap-2 bg-fnm-gold text-fnm-black px-8 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
              >
                <Phone size={18} />
                Emergency Line: +254 123456789
              </a>
              <a
                href="mailto:info@abclawadvocates.com"
                className="inline-flex items-center gap-2 border-2 border-fnm-gold text-fnm-gold px-8 py-3 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
              >
                <Mail size={18} />
                Email for Urgent Matters
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}