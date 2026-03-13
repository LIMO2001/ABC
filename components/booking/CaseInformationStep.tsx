'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

interface FormData {
  caseDescription: string
  urgency: string
  documentsAvailable: boolean
  previousLegalAdvice: boolean
  hearAboutUs: string
  additionalNotes: string
  [key: string]: any
}

interface CaseInformationStepProps {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

export default function CaseInformationStep({ formData, handleInputChange }: CaseInformationStepProps) {
  const hearAboutOptions = [
    'Google Search',
    'Social Media',
    'Referral from Friend/Family',
    'Referral from Another Lawyer',
    'Previous Client',
    'Advertisement',
    'Other'
  ]

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-fnm-black mb-6">Case Information</h2>

      <div className="mb-6">
        <label htmlFor="caseDescription" className="block text-sm font-semibold text-fnm-black mb-2">
          Brief Description of Your Legal Matter *
        </label>
        <textarea
          id="caseDescription"
          name="caseDescription"
          required
          rows={5}
          value={formData.caseDescription}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold resize-none"
          placeholder="Please provide details about your legal matter, including timeline, parties involved, and specific concerns..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="urgency" className="block text-sm font-semibold text-fnm-black mb-2">
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          >
            <option value="normal">Normal (2-3 days response)</option>
            <option value="urgent">Urgent (Same day response)</option>
            <option value="emergency">Emergency (Immediate attention)</option>
          </select>
        </div>
        <div>
          <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-fnm-black mb-2">
            How did you hear about us?
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold"
          >
            <option value="">Please select</option>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="documentsAvailable"
            name="documentsAvailable"
            checked={formData.documentsAvailable}
            onChange={handleInputChange}
            className="mr-3 h-4 w-4 text-fnm-gold focus:ring-fnm-gold border-fnm-gray-300 rounded"
          />
          <label htmlFor="documentsAvailable" className="text-sm text-fnm-black">
            I have relevant documents available for review
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="previousLegalAdvice"
            name="previousLegalAdvice"
            checked={formData.previousLegalAdvice}
            onChange={handleInputChange}
            className="mr-3 h-4 w-4 text-fnm-gold focus:ring-fnm-gold border-fnm-gray-300 rounded"
          />
          <label htmlFor="previousLegalAdvice" className="text-sm text-fnm-black">
            I have received previous legal advice on this matter
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="additionalNotes" className="block text-sm font-semibold text-fnm-black mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={3}
          value={formData.additionalNotes}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold resize-none"
          placeholder="Any additional information you'd like us to know..."
        />
      </div>

      <div className="bg-fnm-gray-50 p-4 rounded-lg border border-fnm-gray-200">
        <div className="flex items-start gap-3">
          <Shield className="text-fnm-gold flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-fnm-black mb-2">Confidentiality Notice</h4>
            <p className="text-sm text-fnm-gray-600">
              All information provided in this consultation booking form is confidential and
              protected by attorney-client privilege. Your privacy and the security of your
              information are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}