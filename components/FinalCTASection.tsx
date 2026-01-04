'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const FinalCTASection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1.5}px`,
      opacity: Math.random() * 0.02 + 0.005,
    }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
        setEmail('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const profileImages = [
    '/profiles/profile1.jpg',
    '/profiles/profile2.jpg',
    '/profiles/profile3.jpg',
    '/profiles/profile4.jpg',
  ]

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 md:py-28 min-h-screen flex flex-col">
      {/* Subtle particles for atmosphere */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white blur-sm"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Main content container - Form width is controlled by max-w-2xl (max-width: 672px) */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 flex flex-col flex-1 justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center"
        >
          {/* Title above form */}
          <motion.h2
            variants={cardVariants}
            className="mb-8 text-center text-4xl font-semibold text-white md:text-5xl"
          >
            Join waitlist
          </motion.h2>

          {/* Form card */}
          <motion.div
            variants={cardVariants}
            className="w-full space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cta-name" className="sr-only">
                  Name
                </label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="sr-only">
                  Email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 px-6 py-3.5 font-medium text-white transition-all hover:from-blue-400 hover:via-purple-400 hover:to-violet-400 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get early access →'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-sm text-green-400">
                Successfully joined! We'll be in touch soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Profile images */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {profileImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Profile ${i + 1}`}
                    className="h-10 w-10 rounded-full border-2 border-[#0a0a0f] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://ui-avatars.com/api/?name=User+${i + 1}&background=random&color=fff&size=128`
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-white/60">
                Join 1k+ others
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Huge "Codedci" wordmark at bottom with gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div className="relative overflow-hidden">
          {/* Gradient overlay on top of text */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,15,0) 0%, rgba(10,10,15,0.3) 30%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,0.9) 100%)',
            }}
          />
          
          {/* Large text */}
          <div className="flex items-center justify-center py-8">
            <h1
              className="select-none text-[clamp(6rem,15vw,12rem)] font-bold leading-none tracking-tight text-white"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                color: 'transparent',
                textShadow: '0 0 40px rgba(255,255,255,0.05)',
              }}
            >
              Codedci
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
