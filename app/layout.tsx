import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'BeyondTAxis.life - Living in the 4th Dimension',
  description: 'Explore the 4th dimension of time. Learn to perceive and live in 4D consciousness, combining mathematics, physics, neurology, spirituality, religion, technology, and history.',
  keywords: '4D perception, time dimension, consciousness, spirituality, physics, mathematics, neurology',
  authors: [{ name: 'BeyondTAxis' }],
  openGraph: {
    title: 'BeyondTAxis.life - Living in the 4th Dimension',
    description: 'Explore the 4th dimension of time and develop 4D consciousness',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white min-h-screen">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

