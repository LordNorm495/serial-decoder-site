import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://serial-decoder.com'),
  title: {
    default: 'Serial Number Decoder — HVAC & Appliance Age Lookup | Serial-Decoder.com',
    template: '%s | Serial-Decoder.com',
  },
  description: 'Free serial number decoder for HVAC systems and appliances. Find the manufacture date and age of Carrier, Trane, Lennox, Rheem, Whirlpool, GE, Samsung, LG, and more.',
  keywords: ['serial number decoder', 'HVAC age', 'appliance manufacture date', 'Carrier serial number', 'Trane serial decoder', 'Lennox age'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://serial-decoder.com',
    siteName: 'Serial-Decoder.com',
    title: 'Serial Number Decoder — HVAC & Appliances',
    description: 'Decode any HVAC or appliance serial number to find the manufacture date and age. Free, instant results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serial Number Decoder',
    description: 'Find out how old your HVAC or appliance is in seconds.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const navLinks = [
  { href: '/', label: 'Decoder' },
  { href: '/brands', label: 'All Brands' },
  { href: '/blog', label: 'Blog' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6054162439232478" crossOrigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Serial-Decoder.com',
              url: 'https://serial-decoder.com',
              description: 'Free serial number decoder for HVAC and appliances',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://serial-decoder.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Header Ad */}
        <div className="w-full bg-gray-50 border-b border-gray-200 flex justify-center py-2 px-4">
          <AdSlot slot="header" />
        </div>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700 hover:text-blue-800">
                <span className="text-2xl">🔍</span>
                <span>Serial<span className="text-gray-800">Decoder</span><span className="text-blue-300">.com</span></span>
              </Link>
              <div className="flex items-center gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-16">
          {/* Footer Ad */}
          <div className="w-full bg-gray-800 flex justify-center py-3 px-4">
            <AdSlot slot="footer" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="text-white font-bold text-xl mb-3">🔍 SerialDecoder.com</div>
                <p className="text-sm leading-relaxed">
                  Free serial number decoder for HVAC systems and home appliances.
                  Instantly find your unit&apos;s manufacture date and age to make better repair, replace, or warranty decisions.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Top HVAC Brands</h4>
                <ul className="space-y-1 text-sm">
                  {['carrier','trane','lennox','york','goodman','rheem'].map(slug => (
                    <li key={slug}>
                      <Link href={`/${slug}-serial-number-decoder`} className="hover:text-white transition-colors capitalize">
                        {slug.charAt(0).toUpperCase() + slug.slice(1)} Decoder
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Top Appliance Brands</h4>
                <ul className="space-y-1 text-sm">
                  {['whirlpool','ge','samsung','lg','maytag','kitchenaid'].map(slug => (
                    <li key={slug}>
                      <Link href={`/${slug}-serial-number-decoder`} className="hover:text-white transition-colors">
                        {slug.charAt(0).toUpperCase() + slug.slice(1)} Decoder
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© {new Date().getFullYear()} SerialDecoder.com — All rights reserved.</p>
              <p className="text-xs">
                Decode results are estimates based on known manufacturer serial number formats. Always verify with the manufacturer for critical decisions.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
