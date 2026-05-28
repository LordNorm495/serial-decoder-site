import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trane Serial Number Age: How to Find When Your Trane Was Made',
  description:
    'Decode Trane serial numbers to find the manufacture date of your furnace, AC, or heat pump. Includes the complete Trane date code chart and real examples.',
};

export default function TraneSerialPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Trane Serial Number Age: How to Find When Your Trane Was Made
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Trane is one of the most respected names in HVAC, and their equipment often outlasts
          competitor units by several years. The starting point for any repair-vs-replace evaluation
          is knowing how old the unit actually is — and that means decoding the serial number.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Skip the reading:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our free Trane serial number decoder</a>{' '}
            for an instant result — just paste the serial number.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Trane Serial Number Format: 2002–Present
        </h2>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>Current format (2002+):</strong></p>
          <p>Characters 1–2: Year (e.g., &quot;14&quot; = 2014)</p>
          <p>Characters 3–4: Week of year (01–52)</p>
          <p className="mt-2"><strong>Example:</strong> 1425XXXXXXX → Week 25 of 2014 = mid-June 2014</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Older Trane Format: 1983–2001 (Letter-Based)
        </h2>
        <p>
          Units manufactured before 2002 use a letter-based date code. The first letter encodes
          the month:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">Letter</th>
                <th className="border border-gray-300 px-3 py-2">Month</th>
                <th className="border border-gray-300 px-3 py-2">Letter</th>
                <th className="border border-gray-300 px-3 py-2">Month</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['A', 'January', 'G', 'July'],
                ['B', 'February', 'H', 'August'],
                ['C', 'March', 'I', 'September'],
                ['D', 'April', 'J', 'October'],
                ['E', 'May', 'K', 'November'],
                ['F', 'June', 'L', 'December'],
              ].map(([l1, m1, l2, m2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono font-bold">{l1}</td>
                  <td className="border border-gray-300 px-3 py-2">{m1}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono font-bold">{l2}</td>
                  <td className="border border-gray-300 px-3 py-2">{m2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Decode Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <p className="font-mono font-bold text-gray-900 mb-1">Serial: 0829XXXXXXX</p>
            <p>08 = 2008, 29 = week 29 → <strong>July 2008</strong></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <p className="font-mono font-bold text-gray-900 mb-1">Serial: 1648XXXXXXX</p>
            <p>16 = 2016, 48 = week 48 → <strong>November 2016</strong></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Trane vs. American Standard</h2>
        <p>
          Trane and American Standard are both owned by Trane Technologies and manufactured in the
          same factories. Their serial number formats are identical — if you have an American
          Standard unit, use the same decode chart above.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Using the Age to Make Decisions</h2>
        <p>
          A well-maintained Trane XL or XR series furnace can run 25 years or more. If your Trane
          is under 10 years old and breaks down, repair it. If it&apos;s 15–20 years old facing a
          major repair, get a replacement quote and weigh the total cost of ownership.
        </p>
        <p>
          <a href="/" className="text-blue-600 hover:underline">Our Trane serial number decoder</a>{' '}
          handles all formats automatically.
        </p>
      </div>
    </article>
  );
}
