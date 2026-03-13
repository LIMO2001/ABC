'use client'

import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import { Users, Scale, Award, Target, Eye, Heart, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const teamMembers = [
    {
      name: "ABC",
      position: "Managing Partner",
      specialties: [
        "Real Estate & Conveyancing",
        "Corporate Law",
        "Intellectual Property Law",
        "Family Law",
        "Probate & Estate Planning"
      ],
      education: "Currently pursuing Company Secretary certification",
      image: "/images/team/fiona.jpg" // Placeholder path
    },
    {
      name: "ABC",
      position: "Partner",
      specialties: [
        "Civil & Commercial Litigation",
        "Employment & Labour Law",
        "Insurance Law"
      ],
      education: "Currently pursuing MBA at Nexford University",
      image: "/images/team/maureen.jpg" // Placeholder path
    },
    {
      name: "ABC",
      position: "Senior Associate",
      specialties: [
        "Data Protection Law",
        "Conveyancing",
        "Corporate Law",
        "Commercial Contracts"
      ],
      education: "Legal Practice & Commercial Law",
      image: "/images/team/abigael.jpg" // Placeholder path
    }
  ]

  const values = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Justice",
      description: "We are committed to upholding justice and ensuring fair representation for all our clients."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "We conduct our practice with the highest ethical standards and unwavering honesty."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every case, delivering superior legal services to our clients."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              About <span className="text-fnm-gold">ABC Advocates</span>
            </h1>
            <p className="text-xl lg:text-2xl text-fnm-gray-300 max-w-4xl mx-auto leading-relaxed">
              A leading law firm in Kenya, committed to providing exceptional legal services
              with integrity, expertise, and unwavering dedication to our clients' success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-32 bg-section-primary section-divider-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-fnm-gray-600 max-w-3xl mx-auto">
              Built on strong principles and guided by our commitment to excellence,
              justice, and integrity in all we do.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-fnm-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">Our Mission</h3>
              <p className="text-fnm-gray-600 leading-relaxed">
                To provide comprehensive, innovative legal solutions that protect our clients'
                interests while maintaining the highest standards of professional excellence
                and ethical practice.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-fnm-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">Our Vision</h3>
              <p className="text-fnm-gray-600 leading-relaxed">
                To be the premier legal services provider in Kenya, recognized for our
                expertise, integrity, and commitment to advancing justice and protecting
                the rights of our clients.
              </p>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-fnm-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-fnm-black mb-4">Our Approach</h3>
              <p className="text-fnm-gray-600 leading-relaxed">
                Client-centered legal practice focused on understanding your unique needs
                and delivering tailored solutions that achieve the best possible outcomes
                for every case.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-serif font-bold text-fnm-black text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-fnm-gray-50 group-hover:bg-fnm-gold rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <div className="text-fnm-gold group-hover:text-fnm-black transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-fnm-black mb-4">{value.title}</h4>
                  <p className="text-fnm-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-section-accent bg-pattern-scales">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-white mb-6">
              Meet Our <span className="text-fnm-gold">Legal Team</span>
            </h2>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto">
              Our experienced attorneys bring diverse expertise and unwavering commitment
              to delivering exceptional legal services for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="card-premium overflow-hidden group cursor-pointer relative hover-lift"
              >
                {/* Profile Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-fnm-gold/20 to-fnm-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-fnm-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Users size={60} className="text-fnm-gold opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300" />
                </div>

                <div className="p-6 relative">
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fnm-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-serif font-bold text-fnm-black mb-2 group-hover:text-fnm-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-fnm-gold font-semibold mb-4 group-hover:text-fnm-gold/80 transition-colors duration-300">{member.position}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-fnm-black mb-2 group-hover:text-fnm-gold transition-colors duration-300">Specialties:</h4>
                      <ul className="space-y-1">
                        {member.specialties.map((specialty, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.3 }}
                            className="flex items-center gap-2 text-sm text-fnm-gray-600 group-hover:text-fnm-gray-700 transition-colors duration-300"
                          >
                            <CheckCircle size={14} className="text-fnm-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            {specialty}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-fnm-gray-200 group-hover:border-fnm-gold/30 transition-colors duration-300">
                      <p className="text-sm text-fnm-gray-600 italic group-hover:text-fnm-gray-700 transition-colors duration-300">{member.education}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-fnm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-fnm-black mb-6">
                Why Choose <span className="text-fnm-gold">ABC Advocates?</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Legal Team",
                    description: "Our attorneys bring years of specialized expertise across multiple practice areas, ensuring comprehensive legal solutions."
                  },
                  {
                    title: "Client-Centered Approach",
                    description: "We prioritize understanding your unique situation and provide personalized legal strategies tailored to your specific needs."
                  },
                  {
                    title: "Commissioners for Oath & Notaries Public",
                    description: "We offer certified commissioning and notary services, providing complete legal document authentication."
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successfully representing clients across Kenya with a commitment to achieving the best possible outcomes."
                  }
                ].map((item, index) => (
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
                Ready to Work With Us?
              </h3>
              <p className="text-fnm-gray-300 mb-6">
                Contact our experienced legal team today. We're here to provide the expert
                guidance and representation you need to achieve your legal objectives.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Transparent pricing structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fnm-gold" size={20} />
                  <span>Regular case updates</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-fnm-gold text-fnm-black px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200">
                  Schedule Consultation
                </button>
                <button className="w-full border-2 border-fnm-gold text-fnm-gold px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold hover:text-fnm-black transition-colors duration-200">
                  Contact Us Today
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}