import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codedci - Security Checks for Vibe Coders',
  description: 'AI-powered security checks combined with human-led testing for fast-moving teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f]">{children}</body>
    </html>
  )
}

