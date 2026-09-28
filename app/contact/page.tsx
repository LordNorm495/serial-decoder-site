import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = {
  title: 'Contact Serial Decoder',
  description: 'Report a serial-number decoding error, suggest a documented format, or ask a website question.',
  alternates: { canonical: 'https://serial-decoder.com/contact/' },
};
export default function ContactPage() {
  return <main className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-4">Contact Serial Decoder</h1>
    <p className="text-gray-700 mb-6">Use this form for website questions, privacy requests, and corrections. For a decoding correction, include the manufacturer, model family, the result you received, and a link to the manufacturer document if available. Please do not include your address, payment information, or other sensitive information.</p>
    <p className="text-gray-700 mb-8">We are an independent reference site. For warranty claims, recalls, or equipment service, contact the manufacturer or a qualified service provider directly.</p>
    <ContactForm />
  </main>;
}
