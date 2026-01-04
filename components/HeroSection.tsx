'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const headlineWords = [
  'Security Checks for',
  'Vibe Coders',
  '—',
  'Fast and Human-Verified.',
]

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

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
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
      delay: 0.4,
    },
  },
}

const HeroSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
    <section className="relative min-h-screen w-full overflow-hidden">

      <div className="relative z-10">
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <div className="text-xl font-semibold tracking-tight text-white">
            Codedci
          </div>
          <div className="hidden text-xs uppercase tracking-wider text-white/60 md:block">
            LAUNCHING SOON
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 transition-all hover:bg-black/80 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 transition-all hover:bg-black/80 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 transition-all hover:bg-black/80 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="YouTube"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12 lg:px-16 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:pt-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.div
                variants={wordVariants}
                className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 px-4 py-1.5 backdrop-blur-sm"
              >
                <span className="text-xs uppercase tracking-wider text-white/70">
                  LAUNCHING SOON
                </span>
              </motion.div>

              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                {headlineWords.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word === '—' ? (
                      <span className="mx-2 text-white/40">—</span>
                    ) : (
                      word
                    )}
                    {i < headlineWords.length - 1 && word !== '—' && ' '}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={wordVariants}
                className="mb-10 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl"
              >
                Get a free AI security score in minutes — and upgrade to
                human-led testing when you need real certainty. Because your app
                won't be hacked by AI. It'll be hacked by people.
              </motion.p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start justify-center lg:justify-end"
            >
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-2xl md:p-10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                <h2 className="mb-6 text-2xl font-semibold text-white">
                  Join waitlist
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
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
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {profileImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Profile ${i + 1}`}
                        className="h-8 w-8 rounded-full border-2 border-[#0a0a0f] object-cover"
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

