'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

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

const FeaturesSection = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.02 + 0.01,
    }))
  }, [])

  const features = [
    {
      title: 'AI Security Score',
      description:
        'Get an instant 0–100 security score for your app or website, highlighting likely vulnerabilities and risk areas.',
      icon: (
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 flex-shrink-0">
          <svg
            className="h-6 w-6 text-white"
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
      title: 'Human-Verified Testing',
      description:
        'Go beyond automated scans. Authorize real security engineers to test your app the way real attackers would.',
      icon: (
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center border border-white/10 flex-shrink-0">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Fix-Ready Reports',
      description:
        "Understand what's vulnerable, why it matters, and how to fix it — without security jargon or noise.",
      icon: (
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 flex-shrink-0">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Built for Vibe Coders',
      description:
        'Designed for fast-moving teams using AI to ship quickly, without dedicated security engineers slowing them down.',
      icon: (
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center border border-white/10 flex-shrink-0">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 md:py-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
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
      </div>

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
              FEATURES
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span>What you get </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              early access to
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mb-16 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Codedci gives you fast, AI-powered security insights — backed by
            real human testing — so you can ship confidently without slowing
            down.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          >
            {features.map((feature, i) => (
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
                <div className="flex items-start gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white pt-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-left">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection

