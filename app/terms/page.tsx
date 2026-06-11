import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use — Serial-Decoder.com',
  description: 'Terms of use for Serial-Decoder.com, the free HVAC and appliance serial number decoder.',
}

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Effective date: June 11, 2026</p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        By accessing or using Serial-Decoder.com (&quot;the Site&quot;), you agree to these Terms of Use.
        If you do not agree, please do not use the Site.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Nature of the Service</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Site provides a free, informational tool that estimates the manufacture date and age of
        HVAC equipment and home appliances based on publicly documented manufacturer serial number
        formats. Results are <strong>estimates only</strong>. Manufacturers change formats without
        notice, and some serial numbers are ambiguous across date cycles. Always verify critical
        information (such as warranty eligibility) directly with the manufacturer.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. No Professional Advice</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Content on the Site, including blog articles, is provided for general information and does
        not constitute professional HVAC, appliance-repair, real estate, or financial advice. Repair,
        replacement, and purchase decisions should be made in consultation with qualified professionals.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Intellectual Property</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Site&apos;s content, design, and decoding tools are the property of Serial-Decoder.com.
        Brand names mentioned on the Site (Carrier, Trane, Lennox, Whirlpool, GE, and others) are
        trademarks of their respective owners. Serial-Decoder.com is not affiliated with, endorsed
        by, or sponsored by any equipment manufacturer.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Affiliate &amp; Advertising Disclosure</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Site may display advertising and may include links to third-party retailers or service
        providers for which we may earn a commission. These relationships do not affect decode results.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Site is provided &quot;as is&quot; without warranties of any kind. To the maximum extent
        permitted by law, Serial-Decoder.com shall not be liable for any damages arising from use of
        the Site or reliance on its estimates.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Changes</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We may update these terms at any time. Continued use of the Site after changes constitutes
        acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Questions about these terms? Reach out via our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.
      </p>
    </article>
  )
}
