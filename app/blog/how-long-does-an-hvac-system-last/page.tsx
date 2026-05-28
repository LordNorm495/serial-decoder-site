import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Long Does an HVAC System Last? A Technician\'s Honest Guide',
  description:
    'Wondering how long your furnace, AC, or heat pump will last? An HVAC technician breaks down real-world lifespans, warning signs, and when to repair vs. replace.',
};

export default function HvacLifespanPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How Long Does an HVAC System Last? A Technician&apos;s Honest Guide
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          After 15 years on service calls, I&apos;ve been asked this question more times than I can
          count: &quot;How much life does my HVAC system have left?&quot; It&apos;s a completely
          reasonable thing to want to know — a new system is a $5,000–$15,000 decision, and nobody
          wants to spend that money a year before they had to or, worse, the year after they
          should have.
        </p>
        <p>
          The honest answer is that lifespan depends on equipment type, installation quality,
          maintenance history, and climate. But there are solid benchmarks that apply across
          most homes. Here is everything you need to know to make a well-informed decision.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          HVAC System Lifespans by Equipment Type
        </h2>
        <p>
          Industry data and my own field experience both converge on the following typical
          lifespans. These assume a correctly sized unit, professional installation, and at minimum
          annual filter changes with periodic tune-ups.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Equipment Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Average Lifespan</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">With Great Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Gas Furnace</td>
                <td className="border border-gray-300 px-4 py-2">15–20 years</td>
                <td className="border border-gray-300 px-4 py-2">Up to 25 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Central Air Conditioner</td>
                <td className="border border-gray-300 px-4 py-2">12–17 years</td>
                <td className="border border-gray-300 px-4 py-2">Up to 20 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Heat Pump</td>
                <td className="border border-gray-300 px-4 py-2">12–15 years</td>
                <td className="border border-gray-300 px-4 py-2">Up to 20 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Boiler (Gas)</td>
                <td className="border border-gray-300 px-4 py-2">20–30 years</td>
                <td className="border border-gray-300 px-4 py-2">35+ years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Window AC Unit</td>
                <td className="border border-gray-300 px-4 py-2">8–10 years</td>
                <td className="border border-gray-300 px-4 py-2">12–15 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Ductless Mini-Split</td>
                <td className="border border-gray-300 px-4 py-2">15–20 years</td>
                <td className="border border-gray-300 px-4 py-2">25 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Some Systems Die Early
        </h2>
        <p>
          In my experience, the leading killers of HVAC equipment aren&apos;t age — they&apos;re
          preventable failures that accumulate over time.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Dirty Filters Left Too Long</h3>
        <p>
          A clogged air filter forces the blower motor to work harder, overheats the heat exchanger
          in furnaces, and starves the evaporator coil in AC systems of airflow. Change your
          1-inch filters monthly or every other month. Thicker media filters (4–5 inch) can go 6–12
          months, but check them.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Improper Sizing</h3>
        <p>
          An oversized AC unit short-cycles — it cools the air quickly but shuts off before
          removing enough humidity, and the constant on/off cycling hammers the compressor. An
          undersized unit runs constantly, wearing components down much faster.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Skipped Annual Tune-Ups</h3>
        <p>
          An annual tune-up on a furnace includes inspecting the heat exchanger for cracks, cleaning
          the flame sensor, checking the inducer motor, and verifying combustion air. Skip these for
          enough years and small problems become expensive ones.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Warning Signs Your System Is Near End of Life
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Frequent breakdowns.</strong> One repair per year is normal. Two or three repairs in a season is a system telling you something.</li>
          <li><strong>Uneven temperatures throughout the house.</strong> Often a sign of a failing blower or equipment that can no longer keep up with load.</li>
          <li><strong>Dramatically higher utility bills.</strong> Efficiency degrades with age. A 20–30% increase without usage changes points to the equipment.</li>
          <li><strong>Unusual noises.</strong> Banging, rattling, screeching, or grinding sounds mean something is mechanically wrong.</li>
          <li><strong>Short cycling.</strong> A furnace or AC that turns on and off rapidly has a problem.</li>
          <li><strong>Yellow or orange furnace flame.</strong> A healthy gas burner burns blue. Yellow or orange can signal a cracked heat exchanger — a CO risk.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How to Find Out How Old Your System Is
        </h2>
        <p>
          The most reliable way to determine equipment age is by decoding the serial number,
          which encodes the manufacture date in a format specific to each brand.{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Use our free serial number decoder
          </a>{' '}
          to find your unit&apos;s manufacture date instantly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">The Bottom Line</h2>
        <p>
          Age is an input — not the whole answer. Start by knowing what you have. Check the serial
          number, find the manufacture date, and build your decision from there.{' '}
          <a href="/" className="text-blue-600 hover:underline">Our decoder tool</a>{' '}
          covers hundreds of brands and takes about 30 seconds.
        </p>
      </div>
    </article>
  );
}
