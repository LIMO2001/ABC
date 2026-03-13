'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import {
  Building2,
  Scale,
  FileText,
  Handshake,
  Gavel,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Award
} from 'lucide-react'

export default function PracticeAreasPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const practiceAreas = [
    {
      id: 'real-estate-conveyancing',
      icon: <Building2 className="h-12 w-12" />,
      title: "Real Estate & Conveyancing",
      description: "Comprehensive property law services including land purchases, joint ventures, mortgages, charges, leases, and transfers. We also provide title applications and financing assistance.",
      services: [
        "Land purchases & sales",
        "Joint ventures & partnerships",
        "Mortgage & charge documentation",
        "Lease agreements & transfers",
        "Title applications",
        "Financing assistance"
      ],
      slug: "real-estate-conveyancing"
    },
    {
      id: 'intellectual-property',
      icon: <Scale className="h-12 w-12" />,
      title: "Intellectual Property Law",
      description: "Protecting your intellectual assets through comprehensive IP services including trademarks, patents, licensing, and copyrights with full registration and renewal support.",
      services: [
        "Trademark registration & renewals",
        "Patent applications & prosecution",
        "Copyright protection",
        "Licensing agreements",
        "IP infringement proceedings",
        "Brand protection strategies"
      ],
      slug: "intellectual-property"
    },
    {
      id: 'debt-recovery',
      icon: <FileText className="h-12 w-12" />,
      title: "Debt Recovery",
      description: "Professional debt collection services and legal proceedings to recover outstanding debts efficiently while maintaining business relationships.",
      services: [
        "Debt collection services",
        "Legal proceedings",
        "Settlement negotiations",
        "Recovery strategies",
        "Credit management advice",
        "Enforcement procedures"
      ],
      slug: "debt-recovery"
    },
    {
      id: 'corporate-commercial',
      icon: <Handshake className="h-12 w-12" />,
      title: "Corporate & Commercial Law",
      description: "Complete business law solutions including company incorporation, mergers & acquisitions, joint ventures, banking, finance, competition law, and insolvency matters.",
      services: [
        "Company incorporation",
        "Mergers & acquisitions",
        "Joint ventures",
        "Banking & finance law",
        "Competition law compliance",
        "Insolvency proceedings"
      ],
      slug: "corporate-commercial"
    },
    {
      id: 'alternative-dispute-resolution',
      icon: <Users className="h-12 w-12" />,
      title: "Alternative Dispute Resolution",
      description: "Cost-effective and time-saving dispute resolution through professional arbitration and mediation services, helping clients avoid lengthy court proceedings.",
      services: [
        "Arbitration proceedings",
        "Mediation services",
        "Dispute prevention strategies",
        "Settlement negotiations",
        "ADR clause drafting",
        "Conflict resolution training"
      ],
      slug: "alternative-dispute-resolution"
    },
    {
      id: 'litigation',
      icon: <Gavel className="h-12 w-12" />,
      title: "Litigation",
      description: "Comprehensive litigation services covering insurance law, tort law, contract law, land law, family & succession, employment & labour, constitutional petitions, and judicial review.",
      services: [
        "Civil & commercial litigation",
        "Employment & labour disputes",
        "Insurance law cases",
        "Family & succession matters",
        "Constitutional petitions",
        "Judicial review proceedings"
      ],
      slug: "litigation"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your specific legal needs and objectives.",
      icon: <Users className="h-8 w-8" />
    },
    {
      step: "02",
      title: "Case Assessment",
      description: "Our legal team conducts a thorough assessment of your case, analyzing all relevant factors and potential strategies.",
      icon: <Scale className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We develop a tailored legal strategy designed to achieve the best possible outcome for your specific situation.",
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Implementation & Representation",
      description: "Our experienced attorneys execute the strategy with professional excellence, keeping you informed throughout the process.",
      icon: <Award className="h-8 w-8" />
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Our <span className="text-fnm-gold">Practice Areas</span>
            </h1>
            <p className="text-xl lg:text-2xl text-fnm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive legal services across multiple practice areas, delivered with
              expertise, integrity, and unwavering commitment to your success.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
              >
                Learn About Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 lg:py-32 bg-section-primary bg-pattern-legal section-divider-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              Legal Services We Provide
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              Our experienced legal team offers specialized services across six key practice areas,
              ensuring comprehensive legal solutions for all your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-fnm-gray-50 p-8 rounded-lg hover:bg-fnm-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-fnm-gold/30 cursor-pointer overflow-hidden relative"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-fnm-gold/5 to-fnm-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-fnm-gold mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {area.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-fnm-black mb-4 text-center group-hover:text-fnm-gold transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-fnm-gray-600 text-center leading-relaxed mb-6 group-hover:text-fnm-gray-700 transition-colors duration-300">
                    {area.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-fnm-black mb-3 text-center group-hover:text-fnm-gold transition-colors duration-300">Key Services:</h4>
                    <ul className="space-y-2">
                      {area.services.slice(0, 4).map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-fnm-gray-600 group-hover:text-fnm-gray-700 transition-colors duration-300">
                          <CheckCircle size={14} className="text-fnm-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 font-semibold transition-all duration-200 group-hover:bg-fnm-gold/10 px-4 py-2 rounded-lg"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Your Case */}
      <section className="py-20 lg:py-32 bg-section-secondary bg-pattern-subtle-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              How We Handle <span className="text-fnm-gold">Your Case</span>
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              Our proven four-step process ensures that every client receives exceptional legal
              representation tailored to their specific needs and objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-fnm-black">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-fnm-black text-fnm-gold rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-fnm-gold/30 transform -translate-y-1/2" />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-fnm-black mb-4">
                  {step.title}
                </h3>
                <p className="text-fnm-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
      <section className="py-20 lg:py-32 bg-section-gold texture-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
                Why Choose Our <span className="text-fnm-gold">Legal Services?</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="h-6 w-6 text-fnm-gold" />,
                    title: "Comprehensive Legal Expertise",
                    description: "Our team covers all major practice areas with specialized knowledge and years of experience."
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-fnm-gold" />,
                    title: "Efficient & Timely Service",
                    description: "We understand that legal matters are time-sensitive and work diligently to meet deadlines."
                  },
                  {
                    icon: <Users className="h-6 w-6 text-fnm-gold" />,
                    title: "Client-Centered Approach",
                    description: "Every case receives personalized attention with regular updates and transparent communication."
                  },
                  {
                    icon: <Award className="h-6 w-6 text-fnm-gold" />,
                    title: "Proven Track Record",
                    description: "Successfully representing clients across Kenya with a commitment to achieving optimal outcomes."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-fnm-gold/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-fnm-black mb-2">{item.title}</h4>
                      <p className="text-fnm-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-fnm-black p-8 rounded-lg text-fnm-white"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-fnm-gold">
                Ready for Professional Legal Assistance?
              </h3>
              <p className="text-fnm-gray-300 mb-8">
                Don't let legal challenges overwhelm you. Our experienced team is ready to
                provide the expert guidance and representation you need.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Free initial consultation available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Transparent fee structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Regular case progress updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Experienced across all practice areas</span>
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
                  Contact Us Today
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-fnm-gray-700 text-center">
                <p className="text-sm text-fnm-gray-400 mb-2">Call us directly:</p>
                <p className="text-fnm-gold font-semibold">+254 728 657 560</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}