'use client'

import { motion } from 'framer-motion'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  [key: string]: any
}

interface PersonalInformationStepProps {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

export default function PersonalInformationStep({ formData, handleInputChange }: PersonalInformationStepProps) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-fnm-black mb-6">Personal Information</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-fnm-black mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-fnm-black mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-fnm-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-fnm-black mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
            placeholder="+254 XXX XXX XXX"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="company" className="block text-sm font-semibold text-fnm-black mb-2">
          Company/Organization (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          placeholder="Your company name"
        />
      </div>
    </motion.div>
  )
}