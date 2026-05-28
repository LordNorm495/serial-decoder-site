import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goodman Serial Number Age: How to Tell How Old Your Goodman Is',
  description:
    'Decode your Goodman HVAC serial number to find the manufacture date. Includes the complete Goodman date code format for all units made since 1992.',
};

export default function GoodmanSerialPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Goodman Serial Number Age: How to Tell How Old Your Goodman Is
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Goodman Manufacturing is one of the most common HVAC brands in the United States, largely
          because of its lower price point and wide distribution through wholesale HVAC distributors.
          Goodman units are everywhere — in starter homes, rental properties, and budget
          replacements — which means a lot of homeowners and contractors need to decode their
          serial numbers. The good news is that Goodman uses one of the most consistent and
          easiest-to-decode formats in the industry.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant result:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our Goodman serial number decoder</a>{' '}
            to get the manufacture date in seconds.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Goodman Serial Number Format
        </h2>
        <p>
          Goodman has used a consistent serial number format since the early 1990s. The format
          encodes the year and week of manufacture in the first four digits:
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-4 font-mono text-sm space-y-1">
          <p><strong>Format:</strong> YYWWXXXXXXX</p>
          <p>YY = Last two digits of the year</p>
          <p>WW = Week of the year (01–52)</p>
          <p>XXXXXXX = Sequential production number</p>
          <p className="mt-2 text-gray-600"><strong>Example:</strong> 1834A123456</p>
          <p className="text-gray-600">18 = 2018, 34 = week 34 (mid-August) → <strong>Manufactured: August 2018</strong></p>
        </div>

        <p>
          This format has remained consistent across Goodman&apos;s current production run. If
          your unit is relatively modern (installed in the last 20 years), the first two digits
          give you the year directly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Week Number to Month Reference
        </h2>
        <p>
          Once you have the week number, use this quick reference to convert it to an approximate
          month. These are approximate — the exact dates vary slightly each year:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Weeks</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Month</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Weeks</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Month</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['01–04', 'January', '27–30', 'July'],
                ['05–08', 'February', '31–35', 'August'],
                ['09–13', 'March', '36–39', 'September'],
                ['14–17', 'April', '40–43', 'October'],
                ['18–22', 'May', '44–47', 'November'],
                ['23–26', 'June', '48–52', 'December'],
              ].map(([weeks, month, weeks2, month2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono">{weeks}</td>
                  <td className="border border-gray-300 px-3 py-2">{month}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">{weeks2}</td>
                  <td className="border border-gray-300 px-3 py-2">{month2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Goodman Brands: Amana and Daikin
        </h2>
        <p>
          Goodman Manufacturing was acquired by Daikin Industries in 2012. Under the Goodman
          corporate umbrella, three brands are commonly sold:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Goodman</strong> — Value tier, most common in rentals and budget
            replacements
          </li>
          <li>
            <strong>Amana</strong> — Mid-tier brand under Goodman ownership; also uses the same
            YYWW serial number format
          </li>
          <li>
            <strong>Daikin</strong> (US residential) — Higher-end product; may use slightly
            different serial formats on newer units
          </li>
        </ul>
        <p>
          For Goodman and Amana units, the decode method above works reliably across all product
          lines.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How Long Do Goodman Units Typically Last?
        </h2>
        <p>
          Goodman equipment gets a mixed reputation in the HVAC industry. My honest take after
          15 years in the field: Goodman builds adequate equipment for the price, but the average
          lifespan is shorter than premium brands.
        </p>
        <p>
          Realistic expectations for Goodman:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gas furnace: 15–18 years with maintenance (vs. 20–25 for Trane or Carrier)</li>
          <li>Central AC or heat pump: 12–15 years (vs. 15–20 for premium brands)</li>
          <li>Control boards and secondary components tend to fail earlier than on premium equipment</li>
        </ul>
        <p>
          None of this makes Goodman a bad choice — for a rental property or a budget replacement,
          the lower upfront cost and widely available parts make it entirely reasonable. But if
          your Goodman is over 12 years old and facing a significant repair, the math on
          replacement often works in favor of a new unit.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Common Goodman Serial Number Questions
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          My serial number doesn&apos;t start with a year I recognize — what&apos;s wrong?
        </h3>
        <p>
          Occasionally a serial number that starts with digits like &quot;99&quot; or &quot;00&quot;
          causes confusion — is it 1999 or 2099? For Goodman units, &quot;99&quot; = 1999 and
          &quot;00&quot; = 2000. Context usually resolves any ambiguity (a unit claiming to be from
          2099 is obviously from 1999).
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          The sticker on my unit is damaged or unreadable. Can I still find the age?
        </h3>
        <p>
          Try the following in order: (1) Check the inside of the access panel door — there is
          often a duplicate label there. (2) Look for a secondary sticker near the refrigerant
          ports on the outdoor unit. (3) Contact Goodman&apos;s technical support with the model
          number; they can sometimes look up production records.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          My Goodman was installed in a new home — is the manufacture date the same as the
          installation date?
        </h3>
        <p>
          Usually close, but not always. Builders buy equipment in bulk, and units can sit in a
          warehouse for 3–6 months before installation. For warranty purposes, Goodman&apos;s
          warranty clock starts at installation, so register the product with Goodman using the
          installation date, not the manufacture date.
        </p>

        <p className="mt-6">
          <a href="/" className="text-blue-600 hover:underline">
            Decode your Goodman serial number instantly with our free tool.
          </a>
        </p>
      </div>
    </article>
  );
}
