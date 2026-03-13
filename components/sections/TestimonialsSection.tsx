'use client'

import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  position: string
  company?: string
  location: string
  rating: number
  review: string
  practiceArea: string
  caseType: string
  avatar?: string
}

const LAW_FIRM = "ABC Advocates"

export default function TestimonialsSection() {

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'SKJL',
      position: 'Business Owner',
      company: 'DK Enterprises Ltd',
      location: 'Nairobi',
      rating: 5,
      review: `${LAW_FIRM} provided exceptional service during our property acquisition. Fiona was thorough, professional, and guided us through every step of the complex conveyancing process. I highly recommend their real estate services.`,
      practiceArea: 'Real Estate & Conveyancing',
      caseType: 'Commercial Property Purchase'
    },
    {
      id: '2',
      name: 'KLM',
      position: 'Managing Director',
      company: 'BNB Solutions',
      location: 'Nairobi',
      rating: 5,
      review: `The intellectual property team at ${LAW_FIRM} helped us secure our trademark and copyright protection efficiently. Their expertise in IP law is outstanding, and they explained complex legal concepts in terms we could understand.`,
      practiceArea: 'Intellectual Property Law',
      caseType: 'Trademark Registration'
    },
    {
      id: '3',
      name: 'JKL',
      position: 'Entrepreneur',
      location: 'KIJABE',
      rating: 5,
      review: `I needed legal representation for a commercial dispute, and Maureen at ${LAW_FIRM} exceeded my expectations. Her litigation skills and attention to detail helped us achieve a favorable settlement. Professional and reliable.`,
      practiceArea: 'Litigation',
      caseType: 'Commercial Dispute Resolution'
    },
    {
      id: '4',
      name: 'AJT',
      position: 'CFO',
      company: 'KK & Associates',
      location: 'Nakuru',
      rating: 5,
      review: `${LAW_FIRM} assisted with our company incorporation and ongoing corporate compliance. Their commercial law expertise is top-notch, and they continue to provide valuable legal counsel for our growing business.`,
      practiceArea: 'Corporate & Commercial Law',
      caseType: 'Company Incorporation'
    },
    {
      id: '5',
      name: 'ABDF',
      position: 'Property Developer',
      company: 'LLB Properties',
      location: 'Mombasa',
      rating: 5,
      review: `Working with ${LAW_FIRM} on our joint venture agreement was seamless. Abigael provided clear guidance on the contract terms and ensured our interests were protected. Their attention to detail is remarkable.`,
      practiceArea: 'Real Estate & Conveyancing',
      caseType: 'Joint Venture Agreement'
    },
    {
      id: '6',
      name: 'K K',
      position: 'Small Business Owner',
      location: 'NAIROBI',
      rating: 5,
      review: `The debt recovery services at ${LAW_FIRM} helped us recover significant outstanding amounts professionally and efficiently. They handled the matter with discretion and achieved excellent results. Highly recommended.`,
      practiceArea: 'Debt Recovery',
      caseType: 'Commercial Debt Collection'
    }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-fnm-gold fill-current' : 'text-fnm-gray-300'
        }`}
      />
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <section className="py-20 lg:py-32 bg-fnm-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
            What Our <span className="text-fnm-gold">Clients Say</span>
          </h2>

          <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say
            about their experience working with {LAW_FIRM}.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >

              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 bg-fnm-gold rounded-full flex items-center justify-center">
                  <Quote size={14} className="text-black" />
                </div>
              </div>

              <div className="flex items-center mb-4 mt-2">
                <div className="flex gap-1 mr-3">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {testimonial.rating}.0
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-fnm-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-semibold text-sm">
                    {getInitials(testimonial.name)}
                  </span>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-black">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>

                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>

                <CheckCircle className="text-fnm-gold" size={20} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}