'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What does the free AI security scan include?',
      answer:
        'The free scan gives you a 0–100 security score, highlights likely vulnerabilities, and explains potential risks in plain language — no jargon or scanner noise.',
    },
    {
      question: 'How is this different from automated security tools?',
      answer:
        "Most tools stop at automated scans. Codedci combines AI speed with real human testing, because real attackers don't follow scripts — they think.",
    },
    {
      question: 'Is human-led testing safe for my app?',
      answer:
        'Yes. Human testing is always explicitly authorized, scoped, and conducted ethically. We simulate real attack behavior without putting your users or data at risk.',
    },
    {
      question: 'Do I need security expertise to use Codedci?',
      answer:
        "No. Codedci is built for vibe coders and fast-moving teams. Reports are clear, prioritized, and actionable — even if security isn't your background.",
    },
    {
      question: 'When will early access be available?',
      answer:
        "We're onboarding early users in phases. Joining the waitlist ensures you're among the first to get access as soon as new spots open.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 md:py-28">
      {/* Main container with flex column layout */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 min-h-[800px] flex flex-col">
        {/* Decorative background image - positioned at top with margin */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03]"
          style={{
            backgroundImage: 'url("/faq/faqimage.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            maxWidth: '800px',
            height: '600px',
            marginTop: '2rem',
          }}
        />

        {/* Content wrapper - positioned relative to bottom using mt-auto */}
        <div className="relative z-10 mt-auto flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center text-center"
          >
          {/* Pill label */}
          <motion.div
            variants={cardVariants}
            className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="text-xs uppercase tracking-wider text-white/70">
              FAQs
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            variants={cardVariants}
            className="mb-16 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span>Questions.</span>
          </motion.h2>

          {/* FAQ accordion items */}
          <motion.div
            variants={containerVariants}
            className="w-full max-w-3xl space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition-all hover:border-white/20 hover:bg-white/[0.08]"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderColor: isOpen ? 'rgba(255,255,255,0.2)' : undefined,
                  }}
                  layout
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors md:p-8"
                    type="button"
                  >
                    <h3 className="flex-1 pr-8 text-lg font-semibold text-white md:text-xl">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5"
                      >
                        {isOpen ? (
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            ease: 'easeOut',
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8">
                          <p className="text-left text-white/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

