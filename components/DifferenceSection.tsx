'use client'

import { motion } from 'framer-motion'

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

const DifferenceSection = () => {
  const benefits = [
    {
      title: 'Not AI-only scanning',
      description:
        "Most tools stop at automated scans. We use AI for speed — but don't pretend it replaces real attackers.",
      icon: (
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Human-verified proof',
      description:
        'When you need certainty, real security engineers validate vulnerabilities the way humans actually exploit them.',
      icon: (
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center border border-white/10">
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Fix-ready, developer-friendly',
      description:
        'Clear reports, prioritized risks, and plain-English fixes — so vibe coders can act fast without security jargon.',
      icon: (
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={cardVariants}
            className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="text-xs uppercase tracking-wider text-white/70">
              WHY CODEDCI
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span>AI won't hack your app — </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              humans
            </span>
            <span> will.</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mb-16 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            That's why Codedci combines AI speed with human judgment — so you
            catch what scanners miss.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10 md:p-8"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="mb-3 text-left text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-left text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DifferenceSection

