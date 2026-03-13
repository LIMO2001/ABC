'use client'

import { motion } from 'framer-motion'
import { User, Calendar, FileText } from 'lucide-react'

interface Step {
  number: number
  title: string
  icon: React.ReactElement
}

interface BookingStepIndicatorProps {
  currentStep: number
}

export default function BookingStepIndicator({ currentStep }: BookingStepIndicatorProps) {
  const steps: Step[] = [
    { number: 1, title: 'Personal Information', icon: <User size={20} /> },
    { number: 2, title: 'Consultation Details', icon: <Calendar size={20} /> },
    { number: 3, title: 'Case Information', icon: <FileText size={20} /> }
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentStep >= step.number
                ? 'bg-fnm-gold text-fnm-black'
                : 'bg-fnm-gray-700 text-fnm-gray-400'
            }`}>
              {step.icon}
            </div>
            <div className="ml-3 hidden sm:block">
              <p className={`text-sm font-medium ${
                currentStep >= step.number ? 'text-fnm-gold' : 'text-fnm-gray-400'
              }`}>
                Step {step.number}
              </p>
              <p className={`text-xs ${
                currentStep >= step.number ? 'text-fnm-white' : 'text-fnm-gray-500'
              }`}>
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className={`hidden md:block w-16 h-0.5 ml-6 transition-colors duration-300 ${
                currentStep > step.number ? 'bg-fnm-gold' : 'bg-fnm-gray-700'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}