import SerialDecoder from '@/components/SerialDecoder'
import AdSlot from '@/components/AdSlot'
import Link from 'next/link'
import { BrandInfo } from '@/lib/brands'
import { BrandKey } from '@/lib/decoders'

interface FormatExample {
  serial: string
  explanation: string
}

interface BrandPageProps {
  brand: BrandInfo
  formatDescription: string
  formatExamples: FormatExample[]
  whereToFind: string[]
  content: {
    intro: string
    howItWorks: string
    useCases: string
    tipsParagraph: string
  }
  relatedBrands?: { name: string; slug: string }[]
  faq?: { question: string; answer: string }[]
}

export default function BrandPage({
  brand,
  formatDescription,
  formatExamples,
  whereToFind,
  content,
  relatedBrands = [],
  faq = [],
}: BrandPageProps) {
  const schemaFaq = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serial-decoder.com' },
      { '@type': 'ListItem', position: 2, name: 'Brands', item: 'https://serial-decoder.com/brands' },
      { '@type': 'ListItem', position: 3, name: `${brand.name} Decoder` },
    ],
  }

  return (
    <>
      {schemaFaq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-blue-300 text-sm mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
            <span>/</span>
            <span className="text-white">{brand.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {brand.name} Serial Number Decoder
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            {content.intro}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Column */}
          <div className="flex-1 min-w-0">
            {/* Decoder */}
            <div className="mb-8">
              <SerialDecoder defaultBrand={brand.key as BrandKey} />
            </div>

            {/* In-content Ad */}
            <div className="flex justify-center mb-8">
              <AdSlot slot="in-content" />
            </div>

            {/* Where to Find Serial */}
            <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                📍 Where to Find Your {brand.name} Serial Number
              </h2>
              <ul className="space-y-2">
                {whereToFind.map((loc, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-blue-500 mt-0.5 font-bold">✓</span>
                    {loc}
                  </li>
                ))}
              </ul>
            </section>

            {/* Format Guide */}
            <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                🔤 {brand.name} Serial Number Format
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{formatDescription}</p>

              <div className="space-y-3">
                {formatExamples.map((ex, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="font-mono text-blue-800 font-bold text-lg mb-1">{ex.serial}</div>
                    <div className="text-sm text-gray-600">{ex.explanation}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works Article */}
            <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm prose prose-gray max-w-none">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                How {brand.name} Serial Numbers Work
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {content.howItWorks}
              </div>
            </section>

            {/* Second In-content Ad */}
            <div className="flex justify-center mb-8">
              <AdSlot slot="in-content-2" />
            </div>

            {/* Use Cases */}
            <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Why Decode Your {brand.name} Serial Number?
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {content.useCases}
              </div>
            </section>

            {/* Tips */}
            <section className="mb-8 bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Pro Tips</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{content.tipsParagraph}</p>
            </section>

            {/* FAQ */}
            {faq.length > 0 && (
              <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faq.map((f, i) => (
                    <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm">{f.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <AdSlot slot="sidebar" />

              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Quick Facts</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Category</dt>
                    <dd className="font-medium text-gray-700 capitalize">{brand.category === 'hvac' ? 'HVAC System' : 'Appliance'}</dd>
                  </div>
                  {brand.parent && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Parent Brand</dt>
                      <dd className="font-medium text-gray-700">{brand.parent}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-500 mb-1">Example Serial</dt>
                    <dd className="font-mono text-blue-700 bg-blue-50 px-2 py-1 rounded text-xs">{brand.exampleSerial}</dd>
                  </div>
                </dl>
              </div>

              {/* Related Brands */}
              {relatedBrands.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Related Brands</h3>
                  <ul className="space-y-1">
                    {relatedBrands.map(rb => (
                      <li key={rb.slug}>
                        <Link
                          href={`/${rb.slug}-serial-number-decoder`}
                          className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                        >
                          {rb.name} Serial Decoder →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Universal Decoder CTA */}
              <div className="bg-blue-900 text-white rounded-2xl p-5">
                <p className="font-bold mb-2 text-sm">Not sure about your brand?</p>
                <p className="text-blue-200 text-xs mb-3">Try the universal decoder with auto-detection.</p>
                <Link
                  href="/"
                  className="block w-full bg-white text-blue-900 font-bold text-sm py-2 px-4 rounded-xl text-center hover:bg-blue-50 transition-colors"
                >
                  Universal Decoder
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
