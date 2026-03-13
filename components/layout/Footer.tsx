import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import NewsletterSignup from '../ui/NewsletterSignup'

export default function Footer() {
  const practiceAreas = [
    'Real Estate & Conveyancing',
    'Intellectual Property Law',
    'Debt Recovery',
    'Corporate & Commercial Law',
    'Alternative Dispute Resolution',
    'Litigation Services'
  ]

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/resources', label: 'Resources & FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Consultation' }
  ]

  return (
    <footer className="bg-fnm-black text-fnm-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1: Company Info & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold mb-2">
                <span className="text-fnm-white">ABC</span>
                <span className="text-fnm-gold"> Law Advocates</span>
              </h3>
              <p className="text-fnm-gold text-sm">
                Commissioners for Oath & Notaries Public
              </p>
            </div>
            <p className="text-fnm-gray-300 mb-6 leading-relaxed">
              Professional legal services with integrity and excellence.
              We are committed to providing comprehensive legal solutions
              tailored to your specific needs.
            </p>
            <div className="mt-8">
              <Link
                href="/booking"
                className="inline-block bg-fnm-gold text-fnm-black px-6 py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Column 2: Practice Areas & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-fnm-gold">Our Services</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <Link
                    href="/practice-areas"
                    className="text-fnm-gray-300 hover:text-fnm-gold transition-colors duration-200 text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-fnm-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fnm-gray-300 hover:text-fnm-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-fnm-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-fnm-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <a
                    href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fnm-gray-300 hover:text-fnm-gold transition-colors duration-200 leading-relaxed block"
                  >
                    CBG, 3rd Floor, Wing 4<br />
                    Off Eastern Bypass, HH<br />
                    Nairobi, Kenya
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-fnm-gold flex-shrink-0" size={18} />
                <div className="text-fnm-gray-300">
                  <div>+254 723456789</div>
                  <div>+254 723456789</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-fnm-gold flex-shrink-0" size={18} />
                <p className="text-fnm-gray-300">info@ABClawadvocates.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-fnm-gold mt-1 flex-shrink-0" size={18} />
                <div className="text-fnm-gray-300">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 pt-8 border-t border-fnm-gray-800">
          <NewsletterSignup />
        </div>
      </div>

      {/* Map section */}
      <div className="border-t border-fnm-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif font-bold text-fnm-gold mb-2">Visit Our Office</h4>
            <p className="text-fnm-gray-300">
              Located at JJ Hub, HH - Easily accessible via  Bypass
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7089966541447!2d36.9813808!3d-1.259438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6bff96f3b90b%3A0xa0ab627bc0ad4bbe!2sGREYVILLE%20HUB!5e0!3m2!1sen!2ske!4v1727352000000!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fnm-gold hover:text-fnm-gold/80 transition-colors duration-200"
            >
              <MapPin size={18} />
              <span className="underline">View larger map & directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-fnm-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-fnm-gray-400">
            <div>
              © 2024 ABC Advocates LLP. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 items-center">
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-fnm-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-fnm-gold transition-colors">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="hover:text-fnm-gold transition-colors">
                  Legal Disclaimer
                </Link>
              </div>
              <div className="text-fnm-gray-500 text-xs mt-2 md:mt-0">
                Designed by{' '}
                <a
                  href="https://DKLEMPIRE TECH.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fnm-gold hover:text-fnm-gold/80 transition-colors"
                >
                  DKL EMPIRE TECH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}