import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Serial Decoder — HVAC & Appliance Serial Number Experts',
  description: 'Learn about Serial Decoder, the trusted resource for decoding HVAC and appliance serial numbers.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Serial Decoder</h1>
      <section className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Serial Decoder is a free resource built by HVAC technicians and appliance repair professionals to help homeowners, landlords, contractors, and real estate agents quickly decode the manufacturing dates hidden inside appliance and HVAC serial numbers.</p>
        <p>We started this project after years of watching homeowners struggle to answer a simple question: how old is this furnace? That information is encoded in the serial number — but every manufacturer uses a different format. We built Serial Decoder to fix that.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
        <p>Our tools decode serial numbers from hundreds of brands including Carrier, Trane, Lennox, Rheem, York, Goodman, Whirlpool, GE, LG, Samsung, Maytag, and many more. Enter the serial number and get the manufacture date instantly.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who We Are</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Andrew Norman — Founder</h3>
          <p className="text-gray-600 text-sm mb-3">HVAC Technician · 15+ Years Experience · EPA 608 Certified</p>
          <p>Andrew has worked in residential and commercial HVAC installation and service for over 15 years. He founded Serial Decoder to give everyone access to the lookup tools that professionals use every day.</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Editorial Standards</h2>
        <p>Every brand decoder has been verified against manufacturer documentation and cross-referenced with HVAC industry databases. Our blog articles are written by certified HVAC technicians and appliance repair professionals.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get in Touch</h2>
        <p>Questions, corrections, or brand requests? Head to our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>. We respond within 2 business days.</p>
      </section>
    </main>
  );
}
