import type { Metadata } from 'next'
import SerialDecoder from '@/components/SerialDecoder'
import AdSlot from '@/components/AdSlot'
import Link from 'next/link'
import { brands } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Serial Number Decoder — Find HVAC & Appliance Manufacture Date',
  description: 'Instantly decode any HVAC or appliance serial number to find manufacture date and age. Supports Carrier, Trane, Lennox, Rheem, Whirlpool, GE, Samsung, LG, and 20+ more brands.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Serial Number Decoder',
  url: 'https://serial-decoder.com',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  description: 'Free tool to decode HVAC and appliance serial numbers to find manufacture date and age.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const topHvac = brands.filter(b => b.category === 'hvac').slice(0, 6)
const topAppliance = brands.filter(b => b.category === 'appliance').slice(0, 6)

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Serial Number Decoder
          </h1>
          <p className="text-blue-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Instantly find the <strong className="text-white">manufacture date and age</strong> of any HVAC system or appliance.
            Supports 20+ top brands — free, no sign-up required.
          </p>
        </div>
      </section>

      {/* Decoder Tool */}
      <section className="max-w-3xl mx-auto px-4 -mt-8 pb-8">
        <SerialDecoder showAutoDetect />
      </section>

      {/* In-Content Ad */}
      <div className="flex justify-center px-4 pb-8">
        <AdSlot slot="in-content" />
      </div>

      {/* How It Works */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">How to Decode a Serial Number</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', icon: '📋', title: 'Find the Serial Number', desc: 'Locate the data plate on your unit — usually on the side, back, or inside the access panel. Look for "Serial No." or "S/N".' },
              { step: '2', icon: '✏️', title: 'Enter & Select Brand', desc: 'Type the full serial number exactly as shown. Select your brand from the dropdown, or leave it blank for auto-detection.' },
              { step: '3', icon: '📅', title: 'Get Your Results', desc: 'Instantly see the manufacture year, month, week, and approximate age of your unit.' },
            ].map(item => (
              <div key={item.step} className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">Step {item.step}: {item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">Supported Brands</h2>
          <p className="text-gray-500 text-center mb-8">Click any brand for a dedicated decoder and detailed guide.</p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">🌡️ HVAC Systems</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {topHvac.map(b => (
                <Link
                  key={b.key}
                  href={`/${b.slug}-serial-number-decoder`}
                  className="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-700 hover:shadow-sm transition-all"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">🏠 Appliances</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {topAppliance.map(b => (
                <Link
                  key={b.key}
                  href={`/${b.slug}-serial-number-decoder`}
                  className="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-700 hover:shadow-sm transition-all"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/brands" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              View all supported brands →
            </Link>
          </div>
        </div>
      </section>

      {/* Second Ad */}
      <div className="flex justify-center px-4 py-8">
        <AdSlot slot="in-content-2" />
      </div>

      {/* FAQ / Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Does Your Unit&apos;s Age Matter?
          </h2>
          <div className="prose prose-gray max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '🔧 Warranty Claims', desc: 'Many manufacturer warranties are 5–10 years. Knowing the manufacture date confirms if you\'re still covered before paying for repairs.' },
                { title: '💰 Repair vs. Replace', desc: 'The general rule: if repair costs exceed 50% of replacement cost on a unit over 10 years old, replacing is smarter.' },
                { title: '⚡ Energy Efficiency', desc: 'Older HVAC units can use 50% more energy than modern units. Knowing your unit\'s age helps calculate potential savings from upgrading.' },
                { title: '🏠 Home Buying/Selling', desc: 'Real estate agents and home inspectors use equipment age to assess home value. Buyers should decode serials during inspections.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I find the serial number on my HVAC unit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The serial number is typically on a metal data plate attached to the unit. On air conditioners, check the side panel of the outdoor unit. On furnaces, look inside the cabinet door. The label usually says "Serial No." or "S/N".',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between a model number and serial number?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The model number identifies the type and specifications of the unit (same for all units of that model). The serial number is unique to each individual unit and encodes the manufacture date.',
                },
              },
              {
                '@type': 'Question',
                name: 'How accurate is the serial number decoder?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For supported brands, accuracy is very high (within the correct year). Manufacturer serial number formats are well-documented. However, formats occasionally change, so we recommend verifying with your manufacturer for critical decisions.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
