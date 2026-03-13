'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Award, Phone, Mail } from 'lucide-react'

interface BookingSuccessScreenProps {
  onBookAnother: () => void
}

export default function BookingSuccessScreen({ onBookAnother }: BookingSuccessScreenProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-fnm-gold">
            Consultation Booked Successfully!
          </h1>

          <p className="text-xl text-fnm-gray-300 mb-8 max-w-2xl mx-auto">
            Thank you for booking a consultation with FNM Law Advocates. We will contact you within
            24 hours to confirm your appointment details.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <Clock className="text-fnm-gold mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-fnm-gray-400">We'll confirm within 24 hours</p>
            </div>
            <div className="text-center">
              <Shield className="text-fnm-gold mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Confidential</h3>
              <p className="text-sm text-fnm-gray-400">All information is protected</p>
            </div>
            <div className="text-center">
              <Award className="text-fnm-gold mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Expert Advice</h3>
              <p className="text-sm text-fnm-gray-400">Professional legal guidance</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAnother}
              className="bg-fnm-gold text-fnm-black px-8 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors"
            >
              Book Another Consultation
            </button>
            <a
              href="/"
              className="border-2 border-fnm-gold text-fnm-gold px-8 py-3 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors"
            >
              Return to Homepage
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-fnm-gray-700">
            <p className="text-sm text-fnm-gray-400 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="tel:+254728657560"
                className="flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 transition-colors"
              >
                <Phone size={16} />
                +254 728 657 560
              </a>
              <a
                href="mailto:info@fnmlawadvocates.com"
                className="flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 transition-colors"
              >
                <Mail size={16} />
                info@fnmlawadvocates.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}