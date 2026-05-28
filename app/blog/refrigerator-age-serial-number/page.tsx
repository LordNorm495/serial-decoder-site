import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Find the Age of Your Refrigerator From the Serial Number',
  description:
    'Learn how to decode your refrigerator\'s serial number to find its manufacture date. Covers Whirlpool, GE, LG, Samsung, Maytag, Frigidaire, and more.',
};

export default function RefrigeratorAgePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">Appliances</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How to Find the Age of Your Refrigerator From the Serial Number
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Whether you&apos;re trying to decide if a repair is worth it, filling out a home
          insurance claim, or evaluating an appliance as a home buyer, knowing the exact age
          of a refrigerator is surprisingly useful. The serial number is your fastest path to
          that answer — and most brands encode the manufacture date in a consistent way once you
          know the pattern.
        </p>
        <p>
          This guide covers the most common refrigerator brands sold in North America.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant decode:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our free appliance serial number decoder</a>{' '}
            — paste the serial number and select your brand for an immediate result.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Where to Find the Serial Number on a Refrigerator
        </h2>
        <p>
          Refrigerator serial numbers are almost always inside the unit, not on the exterior.
          Check these locations:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Most common:</strong> Inside the fresh food compartment, on the wall near
            the top or side, or on the ceiling of the fridge interior
          </li>
          <li>
            <strong>French door and bottom-freezer models:</strong> Sometimes inside the freezer
            drawer on the bottom rail or side wall
          </li>
          <li>
            <strong>Older models:</strong> Behind the kick plate at the bottom front of the unit
          </li>
          <li>
            <strong>Built-in models:</strong> Behind a removable grille panel on the front
          </li>
        </ul>
        <p>
          The label will list both model number and serial number. Serial numbers on refrigerators
          are typically 8–12 characters long. Take a photo of the full label to avoid
          transcription errors.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Whirlpool / Maytag / KitchenAid</h2>
        <p>
          Whirlpool Corporation manufactures refrigerators under the Whirlpool, Maytag,
          KitchenAid, Jenn-Air, and Amana brands. They share a common serial number format.
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>Format:</strong> Two-letter prefix + 7 digits</p>
          <p className="mt-1">First letter = Decade code. Second letter = Year within decade.</p>
          <p className="mt-1">Third and fourth characters = production week.</p>
        </div>

        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Second Letter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Year (2000s)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Year (2010s)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Year (2020s)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['R', '2000', '2010', '2020'],
                ['S', '2001', '2011', '2021'],
                ['T', '2002', '2012', '2022'],
                ['U', '2003', '2013', '2023'],
                ['V', '2004', '2014', '2024'],
                ['W', '2005', '2015', '2025'],
                ['X', '2006', '2016', '2026'],
                ['Y', '2007', '2017', '—'],
                ['Z', '2008', '2018', '—'],
                ['A', '2009', '2019', '—'],
              ].map(([letter, y1, y2, y3], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono font-bold">{letter}</td>
                  <td className="border border-gray-300 px-3 py-2">{y1}</td>
                  <td className="border border-gray-300 px-3 py-2">{y2}</td>
                  <td className="border border-gray-300 px-3 py-2">{y3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          The decade is determined by the first letter (C = 2000s, D = 2010s, E = 2020s for
          many Whirlpool models — use our decoder for exact results as this varies by product
          line).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">GE / GE Profile / Café</h2>
        <p>
          General Electric appliances (now owned by Haier) use a letter-based date code in the
          second character of the serial number.
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>GE Format:</strong> Two letters + 6 digits</p>
          <p className="mt-1">First letter = Month (A=Jan, B=Feb... M=Dec, skipping I)</p>
          <p className="mt-1">Second letter or number = Year code</p>
        </div>
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">Letter</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
                <th className="border border-gray-300 px-3 py-2">Letter</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Z', '2001', 'F', '2011'],
                ['L', '2002', 'G', '2012'],
                ['M', '2003', 'H', '2013'],
                ['N', '2004', 'J', '2014'],
                ['P', '2005', 'K', '2015'],
                ['R', '2006', 'L', '2016'],
                ['S', '2007', 'M', '2017'],
                ['T', '2008', 'N', '2018'],
                ['V', '2009', 'P', '2019'],
                ['Z', '2010', 'R', '2020'],
              ].map(([l1, y1, l2, y2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{l1}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">{y1}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{l2}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">{y2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">LG Refrigerators</h2>
        <p>
          LG uses a straightforward date code. The manufacture date is encoded in the first 3–4
          characters of the serial number:
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>LG Format:</strong> YYMXXXXXXX</p>
          <p className="mt-1">YY = Year (last 2 digits), M = Month (1–9 for Jan–Sep, A for Oct, B for Nov, C for Dec)</p>
          <p className="mt-1"><strong>Example:</strong> 207XXXXXXXX = February 2020 (or 2007 — use context to determine decade)</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Samsung Refrigerators</h2>
        <p>
          Samsung encodes the manufacture year in the 5th character of the serial number using
          a letter code:
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">5th Character</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
                <th className="border border-gray-300 px-3 py-2">5th Character</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['V', '2009', 'R', '2015'],
                ['W', '2010', 'S', '2016'],
                ['X', '2011', 'T', '2017'],
                ['Y', '2012', 'U', '2018'],
                ['Z', '2013', 'V', '2019'],
                ['A', '2014', 'W', '2020'],
              ].map(([c1, y1, c2, y2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{c1}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">{y1}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{c2}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">{y2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How Long Should a Refrigerator Last?
        </h2>
        <p>
          The average lifespan of a modern refrigerator is 10–15 years. Premium brands (Sub-Zero,
          Miele) can run 20+ years with maintenance. Budget models may struggle past 8–10 years.
        </p>
        <p>
          A refrigerator that is 10 years old and needs a compressor repair ($300–$600) is a
          close call. A fridge that is 7 years old and needs the same repair should almost
          certainly be fixed — it still has many years of useful life ahead. Under 3 years, even
          major repairs are almost always worth doing under warranty.
        </p>
        <p>
          The decode process above works for all major brands, but{' '}
          <a href="/" className="text-blue-600 hover:underline">
            our automated decoder
          </a>{' '}
          will identify the exact format and return the date directly — no chart-reading required.
        </p>
      </div>
    </article>
  );
}
