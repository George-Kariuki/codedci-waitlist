import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codedci - Security Checks for Vibe Coders',
  description: 'AI-powered security checks combined with human-led testing for fast-moving teams',
  icons: {
    icon: '/logo/codedcilogo.png',
    shortcut: '/logo/codedcilogo.png',
    apple: '/logo/codedcilogo.png',
  },
  openGraph: {
    title: 'Codedci - Security Checks for Vibe Coders',
    description: 'AI-powered security checks combined with human-led testing for fast-moving teams',
    images: [
      {
        url: '/logo/codedcilogo.png',
        width: 1200,
        height: 630,
        alt: 'Codedci Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codedci - Security Checks for Vibe Coders',
    description: 'AI-powered security checks combined with human-led testing for fast-moving teams',
    images: ['/logo/codedcilogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/codedcilogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/codedcilogo.png" />
      </head>
      <body className="bg-[#0a0a0f]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

