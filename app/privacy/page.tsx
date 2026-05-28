import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Serial Decoder',
  description:
    'Serial Decoder privacy policy. Learn how we collect, use, and protect your information when you use our HVAC and appliance serial number decoding tools.',
};

export default function PrivacyPage() {
  const lastUpdated = 'May 27, 2026';

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          Serial Decoder (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
          serial-decoder.com (the &quot;Site&quot;). This Privacy Policy describes how we collect,
          use, and share information about you when you visit or use our Site. Please read this
          policy carefully. By using the Site, you agree to the practices described here.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Information You Provide</h3>
        <p>
          When you use our contact form, we collect the name, email address, and message content
          you submit. We use this information solely to respond to your inquiry.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">
          Information Collected Automatically
        </h3>
        <p>
          Like most websites, our Site automatically collects certain technical information when
          you visit, including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring URLs</li>
          <li>Date and time of visits</li>
        </ul>
        <p>
          This information is collected through standard server logs and analytics tools (including
          Google Analytics) and is used in aggregate to understand how visitors use the Site and to
          improve our services.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Cookies</h3>
        <p>
          We use cookies — small text files stored in your browser — to operate the Site and
          support analytics. Third-party advertising partners (including Google) may also place
          cookies on your device when you visit the Site. You can control cookies through your
          browser settings; however, disabling cookies may affect Site functionality.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide and improve the serial number decoding tools and blog content</li>
          <li>Respond to inquiries submitted through the contact form</li>
          <li>Analyze usage patterns to understand how visitors interact with the Site</li>
          <li>Detect and prevent fraudulent or abusive activity</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Advertising</h2>
        <p>
          We participate in the Google AdSense advertising program. Google and its partners may
          display ads on the Site based on your prior visits to this and other websites. Google&apos;s
          use of advertising cookies enables it and its partners to serve ads based on your visit
          to the Site and/or other sites on the internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Ad Settings
          </a>
          . You can also opt out through the{' '}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
        <p>
          The Site uses the following third-party services, each of which has its own privacy
          policy:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Google Analytics</strong> — website usage analytics (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Google AdSense</strong> — advertising (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Netlify</strong> — web hosting and form handling (
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            )
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
        <p>
          Contact form submissions are retained for up to 12 months, after which they are deleted.
          Analytics data is retained in accordance with Google Analytics default retention
          settings (up to 26 months).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Your Rights (California and EEA Residents)
        </h2>
        <p>
          If you are a California resident (under the CCPA) or a resident of the European Economic
          Area (under the GDPR), you may have certain rights regarding your personal data,
          including the right to access, correct, or delete data we hold about you. To exercise
          these rights, please contact us at{' '}
          <a href="mailto:hello@serial-decoder.com" className="text-blue-600 hover:underline">
            hello@serial-decoder.com
          </a>
          .
        </p>
        <p>
          California residents: We do not sell personal information as defined by the CCPA. We do
          not have actual knowledge of selling personal information of consumers under 16 years
          of age.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Children&apos;s Privacy</h2>
        <p>
          The Site is not directed at children under 13 years of age. We do not knowingly collect
          personal information from children under 13. If you believe we have inadvertently
          collected such information, please contact us and we will promptly delete it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect the information
          we collect. However, no method of transmission over the internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post any changes on this
          page with an updated &quot;Last updated&quot; date. Your continued use of the Site
          after changes are posted constitutes your acceptance of the revised policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address className="not-italic bg-gray-50 border border-gray-200 rounded-md p-4 text-gray-700">
          Serial Decoder<br />
          Email:{' '}
          <a href="mailto:hello@serial-decoder.com" className="text-blue-600 hover:underline">
            hello@serial-decoder.com
          </a>
          <br />
          Website: serial-decoder.com
        </address>
      </div>
    </main>
  );
}
