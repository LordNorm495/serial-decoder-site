import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Serial Decoder',
  description: 'Contact the Serial Decoder team for help decoding HVAC or appliance serial numbers, to report an error, or to request a new brand.',
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-10">Have a question? Found an error? Need a brand we do not support? We would love to hear from you.</p>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Email Us Directly</h2>
          <p className="text-gray-600 mb-2">The fastest way to reach us. We typically respond within 1-2 business days.</p>
          <a href="mailto:hello@serial-decoder.com" className="text-blue-600 font-medium hover:underline text-lg">hello@serial-decoder.com</a>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Common Requests</h2>
          <ul className="text-gray-600 space-y-2 list-disc pl-5">
            <li>Help decoding a specific serial number</li>
            <li>Reporting an incorrect decode result</li>
            <li>Requesting a brand we do not support yet</li>
            <li>Press or partnership inquiries</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h2>
        <form name="contact" method="POST" data-netlify="true" className="space-y-5">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Smith" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Include the brand name and serial number if you need decode help." />
          </div>
          <button type="submit" className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </div>
    </main>
  );
}
