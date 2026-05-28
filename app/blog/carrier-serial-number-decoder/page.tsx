import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrier Serial Number Decoder: How to Read Any Carrier Unit\'s Age',
  description:
    'Learn how to decode Carrier HVAC serial numbers to find the manufacture date of any furnace, air conditioner, or heat pump. Includes format guide for all Carrier serial number styles.',
};

export default function CarrierDecoderPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Carrier Serial Number Decoder: How to Read Any Carrier Unit&apos;s Age
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Carrier is one of the most widely installed HVAC brands in North America. Carrier&apos;s
          serial number format has changed several times over the decades, and knowing which format
          your unit uses is essential for decoding the manufacture date.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Quick decode:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our Carrier serial number decoder tool</a>{' '}
            — paste the serial number and get the manufacture date immediately.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Carrier Serial Number Formats by Era
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">
          Current Format (2004–Present) — Week + Year
        </h3>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>Format:</strong> WWYYXXXXXXX</p>
          <p className="mt-1"><strong>Example:</strong> 2506A12345 = Week 25, Year 2006 = June 2006</p>
          <p className="mt-1 text-gray-600">First 2 digits = week (01–52), next 2 = last 2 digits of year</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">
          1980s–2003 Format — Letter Year Code
        </h3>
        <p>The year is encoded in a letter prefix. Letters repeat on a 26-year cycle:</p>
        <div className="overflow-x-auto my-4">
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
                ['A', '1973 / 1999', 'N', '1986 / 2012'],
                ['B', '1974 / 2000', 'P', '1987 / 2013'],
                ['C', '1975 / 2001', 'R', '1988 / 2014'],
                ['D', '1976 / 2002', 'S', '1989 / 2015'],
                ['E', '1977 / 2003', 'T', '1990 / 2016'],
                ['F', '1978 / 2004', 'U', '1991 / 2017'],
                ['G', '1979 / 2005', 'V', '1992 / 2018'],
                ['H', '1980 / 2006', 'W', '1993 / 2019'],
                ['J', '1981 / 2007', 'X', '1994 / 2020'],
                ['K', '1982 / 2008', 'Y', '1995 / 2021'],
                ['L', '1983 / 2009', 'Z', '1996 / 2022'],
                ['M', '1984 / 2010', '', ''],
              ].map(([l1, y1, l2, y2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono font-bold">{l1}</td>
                  <td className="border border-gray-300 px-3 py-2">{y1}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono font-bold">{l2}</td>
                  <td className="border border-gray-300 px-3 py-2">{y2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Carrier Brands: Bryant, Payne
        </h2>
        <p>
          Bryant and Payne are Carrier sister brands and use the same week-year serial number format
          in virtually all cases. Our decoder handles all three brands automatically.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Decoding Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <p className="font-mono font-bold text-gray-900 mb-1">Serial: 3710E56789</p>
            <p>Week 37, year 2010 → <strong>September 2010</strong></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <p className="font-mono font-bold text-gray-900 mb-1">Serial: 0123G98765</p>
            <p>Week 01, year 2023 → <strong>January 2023</strong></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What to Do With the Date</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Repair vs. replace:</strong> Carrier AC over 15 years or furnace over 20 years is approaching end of life.</li>
          <li><strong>Refrigerant type:</strong> Units before 2010 almost certainly use R-22, which is very expensive to recharge.</li>
          <li><strong>Real estate disclosure:</strong> Documents the manufacture date for seller disclosures.</li>
        </ul>
        <p>
          For the fastest answer,{' '}
          <a href="/" className="text-blue-600 hover:underline">use our Carrier decoder</a>{' '}
          — it handles all format variations automatically.
        </p>
      </div>
    </article>
  );
}
