'use client'

import { useMemo } from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import DifferenceSection from '@/components/DifferenceSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function Home() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.03 + 0.01,
    }))
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Background layers - fixed positioning */}
      <div className="fixed inset-0 z-0">
        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/background/backgroundimagecodedci.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Layer 2: Dark Overlay - reduce opacity to see image better */}
        <div className="absolute inset-0 z-10 bg-[#0a0a0f]/70" />
        
        {/* Layer 3: Noise Texture */}
        <div
          className="absolute inset-0 z-20 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        {/* Layer 4: Particles */}
        <div className="absolute inset-0 z-30">
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

      {/* Content - needs higher z-index than background */}
      <div className="relative z-40">
        <HeroSection />
        <FeaturesSection />
        <DifferenceSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </div>
  )
}