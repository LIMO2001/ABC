'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import {
  Search,
  FileText,
  Download,
  Calendar,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Scale,
  Building2,
  Users,
  Gavel,
  Handshake,
  AlertCircle,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  keywords: string[]
}

interface Resource {
  id: string
  title: string
  description: string
  type: 'guide' | 'checklist' | 'template' | 'article'
  category: string
  downloadUrl?: string
  readingTime: string
  lastUpdated: string
  isExternal?: boolean
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'faq' | 'resources'>('faq')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'What areas of law does ABC Advocates specialize in?',
      answer: 'We specialize in six main practice areas: Real Estate & Conveyancing, Intellectual Property Law, Debt Recovery, Corporate & Commercial Law, Alternative Dispute Resolution, and Litigation. Our experienced team provides comprehensive legal solutions across all these areas.',
      category: 'general',
      keywords: ['practice areas', 'specialization', 'services']
    },
    {
      id: '2',
      question: 'How much does a consultation cost?',
      answer: 'We offer a free initial consultation to discuss your legal matter and understand your needs. During this consultation, we will provide an overview of our services and discuss potential fee structures based on your specific case requirements.',
      category: 'billing',
      keywords: ['consultation', 'cost', 'fees', 'pricing']
    },
    {
      id: '3',
      question: 'How long does property conveyancing typically take?',
      answer: 'Property conveyancing timelines vary depending on the complexity of the transaction. Simple residential transfers typically take 4-6 weeks, while commercial properties or complex transactions may take 8-12 weeks. We work diligently to expedite the process while ensuring all legal requirements are met.',
      category: 'real-estate',
      keywords: ['conveyancing', 'property', 'timeline', 'transfer']
    },
    {
      id: '4',
      question: 'What documents do I need for company incorporation?',
      answer: 'For company incorporation, you will need: proposed company name (with alternatives), details of directors and shareholders, registered office address, business activities description, and initial share capital information. We guide you through the entire process and help prepare all necessary documentation.',
      category: 'corporate',
      keywords: ['incorporation', 'company', 'documents', 'business']
    },
    {
      id: '5',
      question: 'How do I protect my intellectual property in Kenya?',
      answer: 'Intellectual property protection in Kenya involves registering your trademarks, copyrights, patents, or industrial designs with the Kenya Industrial Property Institute (KIPI). We handle the entire registration process, conduct searches, prepare applications, and provide ongoing IP management services.',
      category: 'intellectual-property',
      keywords: ['intellectual property', 'trademark', 'copyright', 'patent']
    },
    {
      id: '6',
      question: 'What is the difference between mediation and arbitration?',
      answer: 'Mediation is a collaborative process where a neutral mediator helps parties reach a mutually acceptable agreement. Arbitration is more formal, where an arbitrator makes a binding decision after hearing both sides. Both are cost-effective alternatives to court litigation, and we provide both services.',
      category: 'dispute-resolution',
      keywords: ['mediation', 'arbitration', 'ADR', 'dispute resolution']
    },
    {
      id: '7',
      question: 'How long do I have to file a claim for debt recovery?',
      answer: 'In Kenya, the limitation period for debt recovery is generally 6 years from the date the debt became due. However, this can vary depending on the type of debt and specific circumstances. It\'s important to act promptly to preserve your rights and maximize recovery chances.',
      category: 'debt-recovery',
      keywords: ['debt recovery', 'limitation period', 'claims', 'timeline']
    },
    {
      id: '8',
      question: 'Can you handle cases outside Nairobi?',
      answer: 'Yes, we handle cases throughout Kenya. While our main office is in Nairobi, we represent clients in courts and tribunals across the country. We also offer video consultations and can arrange meetings in various locations to serve our clients conveniently.',
      category: 'general',
      keywords: ['location', 'outside Nairobi', 'Kenya', 'representation']
    },
    {
      id: '9',
      question: 'What should I do if I receive a legal notice?',
      answer: 'If you receive a legal notice, contact us immediately. Time limits for responding to legal notices are strictly enforced, and failing to respond can result in default judgment. We will review the notice, advise you on your options, and prepare an appropriate response if needed.',
      category: 'litigation',
      keywords: ['legal notice', 'response', 'urgent', 'litigation']
    },
    {
      id: '10',
      question: 'Are you commissioners for oath and notaries public?',
      answer: 'Yes, our partners are certified commissioners for oath and notaries public. We provide document authentication, oath administration, affidavit commissioning, and other notarial services. These services are available to both our legal clients and the general public.',
      category: 'general',
      keywords: ['commissioner for oath', 'notary public', 'authentication', 'affidavit']
    }
  ]

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Property Purchase Guide for First-Time Buyers',
      description: 'A comprehensive guide covering the entire property purchase process in Kenya, including due diligence, financing options, and legal requirements.',
      type: 'guide',
      category: 'real-estate',
      readingTime: '15 min read',
      lastUpdated: '2024-09-20'
    },
    {
      id: '2',
      title: 'Company Incorporation Checklist',
      description: 'Step-by-step checklist for incorporating a company in Kenya, including required documents, regulatory requirements, and timeline.',
      type: 'checklist',
      category: 'corporate',
      readingTime: '8 min read',
      lastUpdated: '2024-09-15'
    },
    {
      id: '3',
      title: 'Trademark Registration Application Template',
      description: 'Template and guidance for preparing trademark registration applications with the Kenya Industrial Property Institute.',
      type: 'template',
      category: 'intellectual-property',
      readingTime: '12 min read',
      lastUpdated: '2024-09-10'
    },
    {
      id: '4',
      title: 'Understanding Employment Law in Kenya',
      description: 'Overview of key employment law provisions, including contracts, termination procedures, and employee rights under Kenyan law.',
      type: 'article',
      category: 'litigation',
      readingTime: '20 min read',
      lastUpdated: '2024-09-05'
    },
    {
      id: '5',
      title: 'Debt Collection Best Practices',
      description: 'Guidelines for effective debt collection while maintaining business relationships and complying with legal requirements.',
      type: 'guide',
      category: 'debt-recovery',
      readingTime: '10 min read',
      lastUpdated: '2024-08-30'
    },
    {
      id: '6',
      title: 'Alternative Dispute Resolution Options',
      description: 'Comprehensive overview of mediation, arbitration, and other ADR methods available in Kenya, including when to use each approach.',
      type: 'article',
      category: 'dispute-resolution',
      readingTime: '18 min read',
      lastUpdated: '2024-08-25'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', icon: <BookOpen size={16} /> },
    { id: 'general', name: 'General', icon: <Scale size={16} /> },
    { id: 'real-estate', name: 'Real Estate', icon: <Building2 size={16} /> },
    { id: 'corporate', name: 'Corporate Law', icon: <Handshake size={16} /> },
    { id: 'intellectual-property', name: 'Intellectual Property', icon: <FileText size={16} /> },
    { id: 'litigation', name: 'Litigation', icon: <Gavel size={16} /> },
    { id: 'debt-recovery', name: 'Debt Recovery', icon: <Users size={16} /> },
    { id: 'dispute-resolution', name: 'Dispute Resolution', icon: <Users size={16} /> },
    { id: 'billing', name: 'Billing & Fees', icon: <FileText size={16} /> }
  ]

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
      const matchesSearch = searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="text-blue-500" size={20} />
      case 'checklist':
        return <CheckCircle className="text-green-500" size={20} />
      case 'template':
        return <FileText className="text-purple-500" size={20} />
      case 'article':
        return <Scale className="text-fnm-gold" size={20} />
      default:
        return <FileText className="text-gray-500" size={20} />
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Legal <span className="text-fnm-gold">Resources & FAQ</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-4xl mx-auto leading-relaxed">
              Access helpful legal resources, guides, and answers to frequently asked questions.
              Empower yourself with knowledge about Kenyan law and legal procedures.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources and FAQs..."
                className="w-full pl-12 pr-6 py-4 bg-fnm-white text-fnm-black rounded-lg border-2 border-transparent focus:border-fnm-gold focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-fnm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-fnm-white rounded-lg shadow-lg p-6 sticky top-8"
              >
                <h2 className="text-xl font-serif font-bold text-fnm-black mb-6">Categories</h2>

                <div className="space-y-2 mb-8">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        selectedCategory === category.id
                          ? 'bg-fnm-gold text-fnm-black'
                          : 'text-fnm-gray-700 hover:bg-fnm-gray-50'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="pt-6 border-t border-fnm-gray-200">
                  <h3 className="font-semibold text-fnm-black mb-4">Quick Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-fnm-gray-600">Total FAQs</span>
                      <span className="font-semibold text-fnm-black">{faqs.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-fnm-gray-600">Resources</span>
                      <span className="font-semibold text-fnm-black">{resources.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-fnm-gray-600">Categories</span>
                      <span className="font-semibold text-fnm-black">{categories.length - 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex space-x-1 bg-fnm-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('faq')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      activeTab === 'faq'
                        ? 'bg-fnm-white text-fnm-black shadow-sm'
                        : 'text-fnm-gray-600 hover:text-fnm-black'
                    }`}
                  >
                    Frequently Asked Questions ({filteredFAQs.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      activeTab === 'resources'
                        ? 'bg-fnm-white text-fnm-black shadow-sm'
                        : 'text-fnm-gray-600 hover:text-fnm-black'
                    }`}
                  >
                    Legal Resources ({filteredResources.length})
                  </button>
                </div>
              </motion.div>

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <motion.div
                  key="faq-tab"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-fnm-white rounded-lg shadow-sm border border-fnm-gray-200"
                      >
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                          className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-fnm-gray-50 transition-colors duration-200"
                        >
                          <span className="font-semibold text-fnm-black pr-4">
                            {faq.question}
                          </span>
                          {expandedFAQ === faq.id ? (
                            <ChevronUp className="text-fnm-gold flex-shrink-0" size={20} />
                          ) : (
                            <ChevronDown className="text-fnm-gray-400 flex-shrink-0" size={20} />
                          )}
                        </button>

                        {expandedFAQ === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-6 pb-4 border-t border-fnm-gray-100"
                          >
                            <p className="text-fnm-gray-700 leading-relaxed mt-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="mx-auto mb-4 text-fnm-gray-300" size={48} />
                      <h3 className="text-lg font-medium text-fnm-gray-600 mb-2">No FAQs Found</h3>
                      <p className="text-fnm-gray-500">Try adjusting your search or category filter</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <motion.div
                  key="resources-tab"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <motion.div
                        key={resource.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-fnm-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            {getResourceIcon(resource.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-fnm-black mb-2">
                              {resource.title}
                            </h3>
                            <p className="text-fnm-gray-600 text-sm leading-relaxed mb-4">
                              {resource.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-fnm-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {resource.readingTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {new Date(resource.lastUpdated).toLocaleDateString()}
                            </span>
                          </div>
                          <Tag className="text-fnm-gold" size={14} />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${{
                            'guide': 'bg-blue-100 text-blue-800',
                            'checklist': 'bg-green-100 text-green-800',
                            'template': 'bg-purple-100 text-purple-800',
                            'article': 'bg-yellow-100 text-yellow-800'
                          }[resource.type] || 'bg-gray-100 text-gray-800'}`}>
                            {resource.type.toUpperCase()}
                          </span>

                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-fnm-gold text-fnm-black rounded-lg text-sm font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 flex items-center gap-2"
                            >
                              {resource.isExternal ? <ExternalLink size={14} /> : <Download size={14} />}
                              {resource.isExternal ? 'View' : 'Download'}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12">
                      <AlertCircle className="mx-auto mb-4 text-fnm-gray-300" size={48} />
                      <h3 className="text-lg font-medium text-fnm-gray-600 mb-2">No Resources Found</h3>
                      <p className="text-fnm-gray-500">Try adjusting your search or category filter</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-fnm-white rounded-lg p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-fnm-gray-600 mb-6 max-w-2xl mx-auto">
                  Our experienced legal team is here to help. Schedule a free consultation
                  to discuss your specific legal needs and get personalized advice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-fnm-gold text-fnm-black px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
                  >
                    Schedule Free Consultation
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center border-2 border-fnm-gold text-fnm-gold px-8 py-4 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}