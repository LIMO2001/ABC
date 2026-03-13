// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Building2, 
  Scale, 
  FileText, 
  Handshake, 
  Gavel, 
  Users,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  MapPin,
  Star,
  Shield,
  Award,
  Scale as ScaleIcon
} from 'lucide-react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'

// Dynamic import for testimonials section with loading fallback
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), {
  loading: () => (
    <div className="fnm-section bg-section-secondary flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-fnm-gold border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ScaleIcon className="h-6 w-6 text-fnm-gold animate-pulse" />
        </div>
      </div>
    </div>
  ),
  ssr: true
})

export default function HomePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const practiceAreas = [
    {
      icon: <Building2 className="h-12 w-12" strokeWidth={1.5} />,
      title: "Real Estate & Conveyancing",
      description: "Land purchases, joint ventures, mortgages, title applications and financing assistance",
      features: ["Land Transactions", "Property Development", "Title Deeds"]
    },
    {
      icon: <Scale className="h-12 w-12" strokeWidth={1.5} />,
      title: "Intellectual Property Law",
      description: "Trademarks, patents, licensing, copyrights, registration services and renewals",
      features: ["Trademark Registration", "Patent Filing", "Copyright Protection"]
    },
    {
      icon: <FileText className="h-12 w-12" strokeWidth={1.5} />,
      title: "Corporate & Commercial Law",
      description: "Company incorporation, M&A, joint ventures, banking, finance and competition law",
      features: ["Business Formation", "Mergers & Acquisitions", "Commercial Contracts"]
    },
    {
      icon: <Handshake className="h-12 w-12" strokeWidth={1.5} />,
      title: "Alternative Dispute Resolution",
      description: "Arbitration and mediation services, saving time and costs for our clients",
      features: ["Mediation", "Arbitration", "Negotiation"]
    },
    {
      icon: <Gavel className="h-12 w-12" strokeWidth={1.5} />,
      title: "Litigation",
      description: "Insurance law, tort law, contract law, family succession, and employment law",
      features: ["Civil Litigation", "Employment Law", "Family Law"]
    },
    {
      icon: <Users className="h-12 w-12" strokeWidth={1.5} />,
      title: "Debt Recovery",
      description: "Collection services and legal proceedings to recover outstanding debts",
      features: ["Corporate Debt", "Individual Claims", "Asset Tracing"]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Practice Areas Section */}
      <section className="fnm-section bg-section-primary relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-pattern-legal opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-fnm-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fnm-gold/5 rounded-full blur-3xl"></div>
        
        <div className="fnm-container relative z-10">
          <motion.div 
            {...fadeIn} 
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-fnm-gold/10 rounded-full text-fnm-gold font-semibold text-sm mb-6">
              OUR EXPERTISE
            </span>
            <h2 className="heading-primary mb-6">
              Comprehensive Legal <span className="text-fnm-gold">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-fnm-gold to-transparent mx-auto mb-6"></div>
            <p className="text-body text-xl max-w-3xl mx-auto">
              We provide comprehensive legal solutions across multiple practice areas, 
              tailored to meet your specific needs with professional excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group card-premium hover-lift hover-glow-gold cursor-pointer"
              >
                <div className="relative p-8">
                  <div className="text-fnm-gold mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="w-16 h-16 rounded-xl bg-fnm-gold/10 flex items-center justify-center">
                      {area.icon}
                    </div>
                  </div>
                  
                  <h3 className="heading-secondary text-xl mb-4 group-hover:text-fnm-gold transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-body mb-6">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-legal">
                        <CheckCircle2 className="h-4 w-4 text-fnm-gold mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/practice-areas/${area.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
                    className="inline-flex items-center text-fnm-gold font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/practice-areas"
              className="btn-primary group inline-flex items-center"
            >
              <span>View All Practice Areas</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fnm-section page-header-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-subtle-grid"></div>
        </div>
        
        <div className="fnm-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-fnm-gold/20 rounded-full text-fnm-gold font-semibold text-sm mb-6">
                WHY CHOOSE US
              </span>
              <h2 className="heading-primary text-white mb-6">
                Excellence in Every <span className="text-fnm-gold">Legal Matter</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fnm-gold to-transparent mb-8"></div>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-fnm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fnm-gold/20 transition-colors">
                    <Award className="h-6 w-6 text-fnm-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-fnm-gold transition-colors">Experienced Team</h4>
                    <p className="text-fnm-white/70 leading-relaxed">Our partners and associates bring years of specialized expertise across various practice areas.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-fnm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fnm-gold/20 transition-colors">
                    <Shield className="h-6 w-6 text-fnm-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-fnm-gold transition-colors">Client-Centered Approach</h4>
                    <p className="text-fnm-white/70 leading-relaxed">We prioritize your needs and provide personalized legal solutions tailored to your unique situation.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-fnm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fnm-gold/20 transition-colors">
                    <Scale className="h-6 w-6 text-fnm-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-fnm-gold transition-colors">Commissioners for Oath & Notaries Public</h4>
                    <p className="text-fnm-white/70 leading-relaxed">Certified commissioners and notaries providing official document authentication services.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-fnm-dark bg-fnm-black/50 backdrop-blur-lg border border-fnm-gold/20 hover:border-fnm-gold/40 transition-all p-8"
            >
              <h3 className="heading-secondary text-white mb-6 flex items-center">
                <Star className="h-6 w-6 text-fnm-gold mr-2 fill-current" />
                Ready to Get Started?
              </h3>
              <p className="text-fnm-white/70 mb-8 leading-relaxed">
                Schedule a consultation with our experienced legal team today. 
                We're here to help you navigate your legal challenges with confidence.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-fnm-white/70">
                  <Phone className="h-5 w-5 text-fnm-gold mr-3" />
                  <span>+254 728 657 560</span>
                </div>
                <div className="flex items-center text-fnm-white/70">
                  <Mail className="h-5 w-5 text-fnm-gold mr-3" />
                  <span>info@fnmlawadvocates.com</span>
                </div>
                <div className="flex items-center text-fnm-white/70">
                  <MapPin className="h-5 w-5 text-fnm-gold mr-3" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-fnm-white/70">
                  <Clock className="h-5 w-5 text-fnm-gold mr-3" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/booking"
                  className="btn-primary group block w-full text-center"
                >
                  <span className="inline-flex items-center justify-center">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact"
                  className="btn-outline group block w-full text-center"
                >
                  <span className="inline-flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="fnm-section bg-section-primary relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-pattern-scales opacity-30"></div>
        
        <div className="fnm-container relative z-10">
          <motion.div 
            {...fadeIn} 
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-fnm-gold/10 rounded-full text-fnm-gold font-semibold text-sm mb-6">
              FAQ
            </span>
            <h2 className="heading-primary mb-6">
              Frequently Asked <span className="text-fnm-gold">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-fnm-gold to-transparent mx-auto mb-6"></div>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Get quick answers to common legal questions. For more comprehensive resources, visit our full FAQ section.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                q: "What areas of law does FNM Law Advocates specialize in?",
                a: "We specialize in Real Estate & Conveyancing, Intellectual Property Law, Debt Recovery, Corporate & Commercial Law, Alternative Dispute Resolution, and Litigation."
              },
              {
                q: "How much does a consultation cost?",
                a: "We offer a free initial consultation to discuss your legal matter and understand your needs. We'll provide fee structures based on your specific case requirements."
              },
              {
                q: "Are you commissioners for oath and notaries public?",
                a: "Yes, our partners are certified commissioners for oath and notaries public. We provide document authentication, oath administration, and notarial services."
              },
              {
                q: "Can you handle cases outside Nairobi?",
                a: "Yes, we handle cases throughout Kenya. We represent clients in courts across the country and offer video consultations for convenience."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group card-elevated p-8 hover:border-fnm-gold/30 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fnm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fnm-gold/20 transition-colors">
                    <Scale className="h-5 w-5 text-fnm-gold" />
                  </div>
                  <div>
                    <h3 className="heading-secondary text-lg mb-3 group-hover:text-fnm-gold transition-colors">
                      {item.q}
                    </h3>
                    <p className="text-body">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/resources"
              className="btn-primary group inline-flex items-center"
            >
              <span>View All Resources & FAQ</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </Layout>
  )
}