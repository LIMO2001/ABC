'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline'
  showTitle?: boolean
  className?: string
}

export default function NewsletterSignup({
  variant = 'default',
  showTitle = true,
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setErrorMessage('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Simple email validation
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubscribing(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-fnm-white rounded-lg p-6 shadow-lg ${className}`}>
        {showTitle && (
          <h3 className="text-lg font-serif font-bold text-fnm-black mb-4">Legal Updates</h3>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-3 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold text-sm"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubscribing}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-fnm-gold text-fnm-black py-3 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubscribing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-fnm-black"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Send size={16} />
                Subscribe
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-sm flex items-center gap-2"
            >
              <CheckCircle size={16} />
              Successfully subscribed!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm flex items-center gap-2"
            >
              <AlertCircle size={16} />
              {errorMessage}
            </motion.div>
          )}
        </form>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold text-sm"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubscribing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-fnm-gold text-fnm-black rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubscribing ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-fnm-black"></div>
            ) : (
              <Send size={16} />
            )}
          </motion.button>
        </form>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-xs mt-2 flex items-center gap-1"
          >
            <CheckCircle size={12} />
            Subscribed successfully!
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-xs mt-2 flex items-center gap-1"
          >
            <AlertCircle size={12} />
            {errorMessage}
          </motion.p>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`${className}`}>
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-bold text-fnm-gold mb-2">
            Stay Informed
          </h3>
          <p className="text-fnm-gray-300">
            Get the latest legal insights, updates, and news delivered to your inbox.
            No spam, unsubscribe anytime.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fnm-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 bg-fnm-white border border-fnm-gray-300 rounded-lg focus:ring-2 focus:ring-fnm-gold focus:border-fnm-gold text-fnm-black"
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubscribing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-fnm-gold text-fnm-black py-4 rounded-lg font-semibold hover:bg-fnm-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubscribing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-fnm-black"></div>
              Subscribing...
            </>
          ) : (
            <>
              <Send size={20} />
              Subscribe to Newsletter
            </>
          )}
        </motion.button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-3"
          >
            <div className="flex items-center gap-3 text-green-700">
              <CheckCircle size={18} />
              <span className="font-medium">Welcome to our newsletter!</span>
            </div>
            <p className="text-green-600 text-sm mt-1 ml-6">
              Check your email for a confirmation message.
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-3"
          >
            <div className="flex items-center gap-3 text-red-700">
              <AlertCircle size={18} />
              <span className="font-medium">Subscription failed</span>
            </div>
            <p className="text-red-600 text-sm mt-1 ml-6">{errorMessage}</p>
          </motion.div>
        )}
      </form>

      <p className="text-xs text-fnm-gray-400 mt-4">
        By subscribing, you agree to receive legal updates and marketing communications.
        You can unsubscribe at any time.
      </p>
    </div>
  )
}