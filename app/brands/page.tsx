import type { Metadata } from 'next'
import Link from 'next/link'
import { brands, getBrandsByCategory } from '@/lib/brands'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'All Supported Brands — HVAC & Appliance Serial Number Decoders',
  description: 'Browse our complete list of supported brands for serial number decoding. Find manufacture dates for Carrier, Trane, Lennox, Rheem, Goodman, Whirlpool, GE, Samsung, LG, and more.',
}

const hvacBrands = getBrandsByCategory('hvac')
const applianceBrands = getBrandsByCategory('appliance')

export default function BrandsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          All Supported Brands
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Select your brand below to use our dedicated decoder and read a full guide on finding and interpreting serial numbers.
        </p>
      </div>

      {/* In-Content Ad */}
      <div className="flex justify-center mb-10">
        <AdSlot slot="in-content" />
      </div>

      {/* HVAC Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🌡️ HVAC Systems <span className="text-sm font-normal text-gray-400">({hvacBrands.length} brands)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hvacBrands.map(brand => (
            <Link
              key={brand.key}
              href={`/${brand.slug}-serial-number-decoder`}
              className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {brand.name}
                </h3>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">HVAC</span>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{brand.description}</p>
              {brand.parent && (
                <p className="text-xs text-gray-400">Part of {brand.parent} family</p>
              )}
              <div className="mt-2 text-blue-600 text-xs font-medium group-hover:text-blue-800">
                Decode {brand.name} serial →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Appliances Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🏠 Appliances <span className="text-sm font-normal text-gray-400">({applianceBrands.length} brands)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {applianceBrands.map(brand => (
            <Link
              key={brand.key}
              href={`/${brand.slug}-serial-number-decoder`}
              className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {brand.name}
                </h3>
                <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">Appliance</span>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{brand.description}</p>
              {brand.parent && (
                <p className="text-xs text-gray-400">Part of {brand.parent} family</p>
              )}
              <div className="mt-2 text-blue-600 text-xs font-medium group-hover:text-blue-800">
                Decode {brand.name} serial →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Second Ad */}
      <div className="flex justify-center mb-10">
        <AdSlot slot="in-content-2" />
      </div>

      {/* Quick Decoder CTA */}
      <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Don&apos;t see your brand?</h2>
        <p className="text-blue-200 mb-4">
          Use our universal decoder — it supports auto-detection and we add new brands regularly.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Try the Universal Decoder
        </Link>
      </div>
    </div>
  )
}
