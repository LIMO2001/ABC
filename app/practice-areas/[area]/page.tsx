'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '../../../components/layout/Layout'
import {
  Building2,
  Scale,
  FileText,
  Handshake,
  Gavel,
  Users,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Award,
  Shield,
  Clock
} from 'lucide-react'

interface PracticeAreaData {
  [key: string]: {
    title: string
    icon: React.ReactElement
    description: string
    heroDescription: string
    services: string[]
    process: string[]
    whyChooseUs: string[]
    relatedTeamMembers: string[]
    caseStudyPreview?: string
  }
}

export default function PracticeAreaPage({ params }: { params: { area: string } }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const practiceAreas: PracticeAreaData = {
    'real-estate-conveyancing': {
      title: 'Real Estate & Conveyancing',
      icon: <Building2 className="h-16 w-16" />,
      description: 'Comprehensive property law services for all your real estate needs',
      heroDescription: 'Navigate complex property transactions with confidence. Our experienced team provides comprehensive real estate and conveyancing services, ensuring smooth property transfers, secure investments, and proper legal documentation for all your real estate needs.',
      services: [
        'Land purchases & sales transactions',
        'Joint ventures & development partnerships',
        'Mortgage & charge documentation',
        'Lease agreements & property transfers',
        'Title search & applications',
        'Property financing assistance',
        'Due diligence investigations',
        'Property dispute resolution'
      ],
      process: [
        'Initial property assessment and legal review',
        'Due diligence and title verification',
        'Contract drafting and negotiation',
        'Transaction completion and registration'
      ],
      whyChooseUs: [
        'Extensive experience in Kenyan property law',
        'Thorough due diligence processes',
        'Fast and efficient transaction completion',
        'Transparent pricing with no hidden fees'
      ],
      relatedTeamMembers: ['Fiona Kasyoka Nyamai', 'Abigael Mbesa Kimanzi'],
      caseStudyPreview: 'Successfully handled a complex commercial property acquisition worth KES 500M, completing due diligence and transfer within 45 days.'
    },
    'intellectual-property': {
      title: 'Intellectual Property Law',
      icon: <Scale className="h-16 w-16" />,
      description: 'Protect and maximize the value of your intellectual assets',
      heroDescription: 'Safeguard your innovations, brands, and creative works with our comprehensive intellectual property services. From trademark registration to patent prosecution and copyright protection, we ensure your intellectual assets are properly protected and monetized.',
      services: [
        'Trademark registration & renewals',
        'Patent applications & prosecution',
        'Copyright registration & protection',
        'IP licensing agreements',
        'Trade secret protection',
        'IP infringement proceedings',
        'Brand protection strategies',
        'IP portfolio management'
      ],
      process: [
        'IP audit and asset identification',
        'Strategy development and filing preparation',
        'Registration and prosecution management',
        'Ongoing protection and enforcement'
      ],
      whyChooseUs: [
        'Deep understanding of IP law and regulations',
        'Strategic approach to IP portfolio building',
        'Experience with international IP protection',
        'Proactive enforcement and monitoring'
      ],
      relatedTeamMembers: ['Fiona Kasyoka Nyamai'],
      caseStudyPreview: 'Secured trademark protection for a major Kenyan brand across 15 jurisdictions, preventing multiple infringement attempts.'
    },
    'corporate-commercial': {
      title: 'Corporate & Commercial Law',
      icon: <Handshake className="h-16 w-16" />,
      description: 'Complete business law solutions for companies of all sizes',
      heroDescription: 'Drive your business forward with comprehensive corporate and commercial legal services. From company formation to complex M&A transactions, we provide the legal expertise your business needs to succeed and grow in competitive markets.',
      services: [
        'Company incorporation & structuring',
        'Mergers & acquisitions',
        'Joint ventures & partnerships',
        'Corporate governance & compliance',
        'Commercial contract drafting',
        'Banking & finance law',
        'Competition law compliance',
        'Insolvency & restructuring'
      ],
      process: [
        'Business needs assessment and planning',
        'Legal structure design and implementation',
        'Documentation and compliance setup',
        'Ongoing legal support and maintenance'
      ],
      whyChooseUs: [
        'Comprehensive understanding of business law',
        'Experience with complex transactions',
        'Practical, business-focused advice',
        'Strong relationships with regulatory bodies'
      ],
      relatedTeamMembers: ['Fiona Kasyoka Nyamai', 'Abigael Mbesa Kimanzi'],
      caseStudyPreview: 'Facilitated a KES 2B merger between two leading Kenyan companies, handling all regulatory approvals and compliance requirements.'
    }
  }

  const currentArea = practiceAreas[params.area]

  if (!currentArea) {
    notFound()
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 transition-colors duration-200"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Practice Areas</span>
                </Link>
              </div>

              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                {currentArea.title}
              </h1>

              <p className="text-xl lg:text-2xl text-fnm-gray-300 leading-relaxed mb-8">
                {currentArea.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
                >
                  <Calendar size={20} />
                  Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
                >
                  <Phone size={20} />
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-fnm-gold/20 to-fnm-gold/5 rounded-full flex items-center justify-center border border-fnm-gold/20">
                <div className="text-fnm-gold">
                  {currentArea.icon}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-fnm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              Our <span className="text-fnm-gold">Services</span>
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              Comprehensive {currentArea.title.toLowerCase()} services tailored to meet your specific legal needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArea.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-fnm-gray-50 rounded-lg hover:bg-fnm-white hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle size={20} className="text-fnm-gold flex-shrink-0 mt-0.5" />
                <span className="text-fnm-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-32 bg-fnm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              Our <span className="text-fnm-gold">Process</span>
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional {currentArea.title.toLowerCase()} services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentArea.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-fnm-black">{index + 1}</span>
                  </div>
                  {index < currentArea.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-fnm-gold/30" />
                  )}
                </div>
                <p className="text-fnm-gray-700 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Contact CTA */}
      <section className="py-20 lg:py-32 bg-fnm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-8">
                Why Choose Our <span className="text-fnm-gold">{currentArea.title}</span> Services?
              </h2>

              <div className="space-y-6">
                {currentArea.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-fnm-gold flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-fnm-black"></div>
                    </div>
                    <p className="text-fnm-gray-700">{reason}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-fnm-gray-50 rounded-lg"
              >
                <h4 className="font-semibold text-fnm-black mb-2 flex items-center gap-2">
                  <Award size={20} className="text-fnm-gold" />
                  Our Team Specializes in This Area
                </h4>
                <p className="text-fnm-gray-600 text-sm">
                  Led by: {currentArea.relatedTeamMembers.join(' and ')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-fnm-black p-8 rounded-lg text-fnm-white"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-fnm-gold">
                Need {currentArea.title} Assistance?
              </h3>

              {currentArea.caseStudyPreview && (
                <div className="mb-6 p-4 bg-fnm-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield size={16} className="text-fnm-gold" />
                    Recent Success Story
                  </h4>
                  <p className="text-sm text-fnm-gray-300">{currentArea.caseStudyPreview}</p>
                </div>
              )}

              <p className="text-fnm-gray-300 mb-8">
                Get expert legal assistance for your {currentArea.title.toLowerCase()} needs.
                Our experienced team is ready to provide comprehensive solutions tailored to your situation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="text-fnm-gold" size={20} />
                  <span>Prompt response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Free initial consultation available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-fnm-gold" size={20} />
                  <span>Experienced specialist attorneys</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/booking"
                  className="block w-full text-center bg-fnm-gold text-fnm-black px-6 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center border-2 border-fnm-gold text-fnm-gold px-6 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
                >
                  Contact Our Team
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-fnm-gray-700">
                <div className="text-center">
                  <p className="text-sm text-fnm-gray-400 mb-2">Call us directly:</p>
                  <div className="space-y-1">
                    <p className="text-fnm-gold font-semibold">+254 723456789</p>
                    <p className="text-fnm-gray-300 text-sm">info@abclawadvocates.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-fnm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">
              Explore Our Other Practice Areas
            </h3>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 font-semibold transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              View All Practice Areas
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}