import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rheem & Ruud Serial Number Decoder: How to Find the Age of Your Unit',
  description:
    'Decode any Rheem or Ruud serial number to find the manufacture date of your AC, furnace, heat pump, or water heater. Includes the week-and-year date code format with real examples.',
};

export default function RheemRuudSerialPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Rheem &amp; Ruud Serial Number Decoder: How to Find the Age of Your Unit
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated June 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Rheem and its sister brand Ruud build some of the most common air conditioners, furnaces, heat
          pumps, and water heaters in North America. The good news for anyone trying to date one of these
          units is that Rheem and Ruud share the same parent company and use the same serial number system
          &mdash; so one method works for both brands and for almost every product category they make.
        </p>
        <p>
          This guide shows you exactly where to find the serial number, how to read the date code, and how
          to confirm the age in seconds.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant result:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our Rheem &amp; Ruud serial number decoder</a>{' '}
            to get the manufacture date in seconds.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Where to Find the Serial Number
        </h2>
        <p>
          The serial number is printed on the manufacturer&apos;s data plate or rating label. Where that
          label sits depends on the product:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Air conditioners and heat pumps:</strong> on the side of the outdoor condenser cabinet,
            usually near the refrigerant line connections.
          </li>
          <li>
            <strong>Gas and electric furnaces:</strong> inside the unit on the burner compartment wall, or
            on the outer cabinet near the model number.
          </li>
          <li>
            <strong>Water heaters:</strong> on the upper portion of the tank wrap, on the same label as the
            model number and capacity.
          </li>
        </ul>
        <p>
          Write down the full serial number exactly as printed, including any letters. You only need the
          serial number &mdash; not the model number &mdash; to find the date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How the Rheem and Ruud Date Code Works
        </h2>
        <p>
          Modern Rheem and Ruud serial numbers encode the manufacture date in the{' '}
          <strong>first four digits</strong>, in a <strong>week-week-year-year</strong> format. The first
          two digits are the week of the year (01&ndash;52), and the next two digits are the year.
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-4 font-mono text-sm space-y-1">
          <p><strong>Format:</strong> WWYYXXXXXXX</p>
          <p>WW = Week of the year (01&ndash;52)</p>
          <p>YY = Last two digits of the year</p>
          <p>XXXXXXX = Sequential production number</p>
        </div>
        <p>
          That is the most important thing to remember:{' '}
          <strong>the date is the first four digits, read as WWYY.</strong>
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Worked examples</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Serial number <strong>0717</strong>XXXXXXX &rarr; week <strong>07</strong> of{' '}
            <strong>2017</strong> &rarr; manufactured mid-February 2017.
          </li>
          <li>
            Serial number <strong>4509</strong>XXXXXXX &rarr; week <strong>45</strong> of{' '}
            <strong>2009</strong> &rarr; manufactured early November 2009.
          </li>
          <li>
            Serial number <strong>2521</strong>XXXXXXX &rarr; week <strong>25</strong> of{' '}
            <strong>2021</strong> &rarr; manufactured mid-June 2021.
          </li>
        </ul>
        <p>
          Because the year is only two digits, use common sense to place it in the right decade. A unit
          that looks modern with &quot;21&quot; is 2021, not 1921 or 2031. If the surrounding equipment,
          refrigerant type, or efficiency rating suggests a different era, weigh that in &mdash; but for any
          Rheem or Ruud unit installed in the last 30 years, WWYY will be correct.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Older units</h3>
        <p>
          Some pre-2000 Rheem and Ruud equipment used a slightly different layout, occasionally leading
          with a letter or placing the date later in the string. If the first four digits don&apos;t
          produce a sensible week-and-year (for example, the first two digits are greater than 52), the
          unit is likely old enough that replacement &mdash; not dating precision &mdash; is the real
          question.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Why the Age Matters</h2>
        <p>Knowing the manufacture date tells you three things that affect real money:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Remaining lifespan.</strong> Rheem and Ruud air conditioners and heat pumps typically
            last 12&ndash;17 years; furnaces 15&ndash;20; water heaters 8&ndash;12. Compare your unit&apos;s
            age to those ranges to gauge how much life is left.
          </li>
          <li>
            <strong>Warranty status.</strong> Most parts warranties run from the installation or
            manufacture date. The serial number date is what a dealer or Rheem itself uses to confirm
            whether a claim is still covered.
          </li>
          <li>
            <strong>Repair vs. replace.</strong> A $1,200 repair on a 16-year-old condenser is rarely worth
            it; the same repair on a 6-year-old unit usually is. The date code turns a guess into a
            decision.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Decode It Instantly</h2>
        <p>
          You don&apos;t have to do the math by hand. Paste your Rheem or Ruud serial number into the{' '}
          <a href="/" className="text-blue-600 hover:underline">Serial-Decoder.com decoder</a> and it
          returns the manufacture date and the unit&apos;s age automatically &mdash; the same method
          described above, with no risk of misreading the digits.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          Do Rheem and Ruud use the same serial number format?
        </h3>
        <p>
          Yes. They are the same company, and the WWYY date code in the first four digits applies to both
          brands across AC, heat pump, furnace, and water heater lines.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          Can I find the age from the model number instead?
        </h3>
        <p>
          No. The model number describes the unit&apos;s size and features, not when it was built. Always
          use the serial number for the date.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          My serial number starts with a letter &mdash; what now?
        </h3>
        <p>
          A few older or specialty units lead with a letter. Drop the letter and read the next digits as
          WWYY, or run the full serial through the decoder, which handles the common variants
          automatically.
        </p>

        <p className="mt-6">
          Related:{' '}
          <a href="/blog/water-heater-age-serial-number/" className="text-blue-600 hover:underline">
            How to Find Your Water Heater&apos;s Age From the Serial Number
          </a>{' '}
          and{' '}
          <a href="/blog/how-long-does-an-hvac-system-last/" className="text-blue-600 hover:underline">
            How Long Does an HVAC System Last?
          </a>
        </p>
      </div>
    </article>
  );
}
