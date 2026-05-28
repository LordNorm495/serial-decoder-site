import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lennox Serial Number Decoder: How to Find Your Lennox\'s Age',
  description:
    'Decode Lennox HVAC serial numbers to find the manufacture date of your furnace, air conditioner, or heat pump. Includes format guide for all Lennox serial number styles.',
};

export default function LennoxSerialPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lennox Serial Number Decoder: How to Find Your Lennox&apos;s Manufacture Date
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Lennox Industries is one of the premium tiers of the US HVAC market — their equipment
          is generally more expensive than Goodman or Carrier but is known for high efficiency
          ratings and solid build quality. Lennox serial numbers follow a logical pattern once you
          understand the key.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Fast decode:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our Lennox serial number decoder</a>{' '}
            for an instant result.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Lennox Serial Number Format: Current (Post-2000)
        </h2>
        <p>
          Modern Lennox serial numbers follow this format:
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>Format:</strong> XXXX YYMM XXXXXXX</p>
          <p className="mt-1">Characters 5–6: Year (last 2 digits)</p>
          <p className="mt-1">Characters 7–8: Month (01–12)</p>
          <p className="mt-1"><strong>Example:</strong> 5511 1206 XXXXXX = December 2012</p>
        </div>
        <p>
          The fifth and sixth characters give you the year and the seventh and eighth give you
          the month in numeric form. This is one of the cleaner formats to read once you know
          where to look.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Lennox Pre-2000 Format
        </h2>
        <p>
          Older Lennox units use an alpha code in the first character:
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">First Letter</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
                <th className="border border-gray-300 px-3 py-2">First Letter</th>
                <th className="border border-gray-300 px-3 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['D', '1974', 'R', '1988'],
                ['E', '1975', 'S', '1989'],
                ['F', '1976', 'T', '1990'],
                ['G', '1977', 'U', '1991'],
                ['H', '1978', 'V', '1992'],
                ['J', '1979', 'W', '1993'],
                ['K', '1980', 'X', '1994'],
                ['L', '1981', 'Y', '1995'],
                ['M', '1982', 'Z', '1996'],
                ['N', '1983', 'A', '1997'],
                ['P', '1984', 'B', '1998'],
                ['Q', '1985', 'C', '1999'],
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

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Lennox Brands: Armstrong Air, Allied Air
        </h2>
        <p>
          Lennox International manufactures equipment under several brand names. Armstrong Air
          and Allied Air are both Lennox subsidiaries and may use the same or similar serial
          number formats depending on the production year.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How Long Does Lennox Equipment Last?
        </h2>
        <p>
          Lennox equipment tends to last toward the higher end of the industry average:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gas furnaces: 18–25 years with regular maintenance</li>
          <li>Central AC: 15–20 years</li>
          <li>Heat pumps: 15–18 years</li>
        </ul>
        <p>
          The trade-off with Lennox is that parts can be more expensive and harder to source
          than Carrier or Goodman components. If you have a 20-year-old Lennox that needs a
          proprietary control board, replacement cost can approach or exceed the value of the
          system on a repair basis.
        </p>
        <p>
          Start with the age: use{' '}
          <a href="/" className="text-blue-600 hover:underline">
            our decoder
          </a>{' '}
          to confirm exactly when your Lennox was built.
        </p>
      </div>
    </article>
  );
}
