import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RippleEffect from '@/components/RippleEffect'
import InteractiveBackground from '@/components/InteractiveBackground'
import ScrollProgress from '@/components/ScrollProgress'
import PageLoader from '@/components/PageLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FCS - IT Services, Digital Marketing & Brand Growth',
  description: 'FCS — provider of IT services, digital marketing, brand growth, and media buying solutions.',
  keywords: 'IT services, digital marketing, brand growth, media buying, web development, SEO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <ScrollProgress />
        <RippleEffect />
        <InteractiveBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
