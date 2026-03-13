'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import BookingStepIndicator from '../../components/booking/BookingStepIndicator'
import PersonalInformationStep from '../../components/booking/PersonalInformationStep'
import ConsultationDetailsStep from '../../components/booking/ConsultationDetailsStep'
import CaseInformationStep from '../../components/booking/CaseInformationStep'
import BookingSuccessScreen from '../../components/booking/BookingSuccessScreen'
import { Calendar } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',

    // Consultation Details
    practiceArea: '',
    consultationType: 'in-person', // in-person, video, phone
    preferredDate: '',
    preferredTime: '',
    alternativeDate: '',
    alternativeTime: '',

    // Case Information
    caseDescription: '',
    urgency: 'normal',
    documentsAvailable: false,
    previousLegalAdvice: false,

    // Additional Information
    hearAboutUs: '',
    additionalNotes: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', company: '',
        practiceArea: '', consultationType: 'in-person', preferredDate: '',
        preferredTime: '', alternativeDate: '', alternativeTime: '',
        caseDescription: '', urgency: 'normal', documentsAvailable: false,
        previousLegalAdvice: false, hearAboutUs: '', additionalNotes: ''
      })
      setCurrentStep(1)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }


  if (submitStatus === 'success') {
    return (
      <Layout>
        <BookingSuccessScreen onBookAnother={() => setSubmitStatus('idle')} />
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Book Your <span className="text-fnm-gold">Legal Consultation</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a free initial consultation with our experienced legal team.
              We're here to understand your needs and provide expert guidance.
            </p>
          </motion.div>

          <BookingStepIndicator currentStep={currentStep} />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24 bg-fnm-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-fnm-white rounded-lg shadow-xl p-8">

            {currentStep === 1 && (
              <PersonalInformationStep
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            {currentStep === 2 && (
              <ConsultationDetailsStep
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            {currentStep === 3 && (
              <CaseInformationStep
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-fnm-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1
                    ? 'bg-fnm-gray-200 text-fnm-gray-400 cursor-not-allowed'
                    : 'bg-fnm-gray-100 text-fnm-black hover:bg-fnm-gray-200'
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-fnm-gray-600">
                Step {currentStep} of 3
              </div>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-fnm-gold text-fnm-black px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors"
                >
                  Next
                </button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-fnm-gold text-fnm-black px-8 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-fnm-black"></div>
                      Booking Consultation...
                    </>
                  ) : (
                    <>
                      <Calendar size={20} />
                      Book Consultation
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}