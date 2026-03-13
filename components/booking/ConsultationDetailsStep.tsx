'use client'

import { motion } from 'framer-motion'
import { MapPin, Video, Phone } from 'lucide-react'

interface FormData {
  practiceArea: string
  consultationType: string
  preferredDate: string
  preferredTime: string
  alternativeDate: string
  alternativeTime: string
  [key: string]: any
}

interface ConsultationDetailsStepProps {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

export default function ConsultationDetailsStep({ formData, handleInputChange }: ConsultationDetailsStepProps) {
  const practiceAreas = [
    'Real Estate & Conveyancing',
    'Intellectual Property Law',
    'Debt Recovery',
    'Corporate & Commercial Law',
    'Alternative Dispute Resolution',
    'Litigation',
    'General Legal Consultation'
  ]

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ]

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-fnm-black mb-6">Consultation Details</h2>

      <div className="mb-6">
        <label htmlFor="practiceArea" className="block text-sm font-semibold text-fnm-black mb-2">
          Practice Area *
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          required
          value={formData.practiceArea}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
        >
          <option value="">Select a practice area</option>
          {practiceAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-fnm-black mb-2">
          Consultation Type *
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'in-person', label: 'In-Person', icon: <MapPin size={20} />, desc: 'Visit our office' },
            { value: 'video', label: 'Video Call', icon: <Video size={20} />, desc: 'Online meeting' },
            { value: 'phone', label: 'Phone Call', icon: <Phone size={20} />, desc: 'Voice consultation' }
          ].map((type) => (
            <label
              key={type.value}
              className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-200 ${
                formData.consultationType === type.value
                  ? 'border-fnm-gold bg-fnm-gold/5'
                  : 'border-fnm-gray-300 hover:border-fnm-gold/50'
              }`}
            >
              <input
                type="radio"
                name="consultationType"
                value={type.value}
                checked={formData.consultationType === type.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="text-center">
                <div className={`mb-2 flex justify-center ${
                  formData.consultationType === type.value ? 'text-fnm-gold' : 'text-fnm-gray-600'
                }`}>
                  {type.icon}
                </div>
                <div className="font-semibold text-sm">{type.label}</div>
                <div className="text-xs text-fnm-gray-600">{type.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-fnm-black mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-fnm-black mb-2">
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          >
            <option value="">Select time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="alternativeDate" className="block text-sm font-semibold text-fnm-black mb-2">
            Alternative Date (Optional)
          </label>
          <input
            type="date"
            id="alternativeDate"
            name="alternativeDate"
            value={formData.alternativeDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          />
        </div>
        <div>
          <label htmlFor="alternativeTime" className="block text-sm font-semibold text-fnm-black mb-2">
            Alternative Time (Optional)
          </label>
          <select
            id="alternativeTime"
            name="alternativeTime"
            value={formData.alternativeTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          >
            <option value="">Select time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  )
}