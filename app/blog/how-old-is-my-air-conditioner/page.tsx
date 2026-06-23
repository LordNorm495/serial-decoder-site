import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Old Is My Air Conditioner? 4 Reliable Ways to Find Out',
  description:
    'Four proven ways to find the exact age of your air conditioner — from the serial number to the model number, the inspection record, and the manufacturer. Plus what the age means for your wallet.',
};

export default function HowOldIsMyACPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How Old Is My Air Conditioner? 4 Reliable Ways to Find Out
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated June 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          It&apos;s one of the most common questions homeowners ask before they call for service, list a
          house, or decide whether to repair or replace: how old is this air conditioner? The age of your
          AC drives almost every important decision about it &mdash; warranty coverage, refrigerant type,
          efficiency, and whether your next repair is money well spent or money thrown at a dying system.
        </p>
        <p>
          The good news is that you almost never have to guess. Here are four reliable ways to find the age
          of an air conditioner, starting with the fastest and most accurate.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant result:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our free serial number decoder</a>{' '}
            to get the manufacture date in seconds.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          1. Decode the Serial Number (Fastest and Most Exact)
        </h2>
        <p>
          Every air conditioner has a data plate &mdash; a metal or sticker label on the outdoor condenser
          cabinet, usually on the back or side near the refrigerant line connections. On that plate
          you&apos;ll find the model number and the serial number. For dating the unit, the serial number
          is what matters.
        </p>
        <p>
          Almost every manufacturer encodes the manufacture date directly into the first several characters
          of the serial number. The catch is that every brand uses a slightly different format. Some use a
          four-digit year-and-week code (Goodman, Rheem, Trane in certain years), some hide the year in a
          single letter (Carrier, Bryant, Payne), and some use a month-letter system (older Trane and
          American Standard units).
        </p>
        <p>
          Rather than memorize all of them, enter your serial number into our{' '}
          <a href="/" className="text-blue-600 hover:underline">free serial number decoder</a> and select
          your brand, or leave it on auto-detect. You&apos;ll get the manufacture year, week, and
          approximate age in a couple of seconds. This is the only method that gives you the{' '}
          <em>exact</em> manufacture date rather than an estimate.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          2. Read the Model Number for Clues
        </h2>
        <p>
          If the serial label is damaged or unreadable, the model number can still narrow things down.
          Manufacturers periodically retire model lines and introduce new ones, and the SEER rating
          embedded in many model numbers tells you roughly which efficiency era the unit belongs to.
        </p>
        <p>
          For example, a 10-SEER unit was almost certainly built before 2006, when the federal minimum
          jumped to 13 SEER. A 13- or 14-SEER unit generally dates to the 2006&ndash;2022 window, and a
          15-SEER-or-higher unit reflects the 2023 minimum-efficiency standards. The model number
          won&apos;t give you a precise date, but it can confirm whether you&apos;re looking at a unit
          that&apos;s roughly a decade old versus one that&apos;s brand new.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          3. Check the Inspection or Installation Records
        </h2>
        <p>
          If you bought your home in the last several years, your home inspection report almost certainly
          lists the HVAC equipment&apos;s age &mdash; inspectors decode the serial number as a standard
          part of the job. Pull up that report.
        </p>
        <p>
          Other paper trails that reveal install date: the permit history with your local building
          department (HVAC replacements usually require a permit), a sticker from the installing contractor
          often slapped on the side of the air handler or furnace, and any warranty registration paperwork
          in your home file. A contractor&apos;s service tag with a handwritten install date is one of the
          most reliable real-world sources there is.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">4. Ask the Manufacturer</h2>
        <p>
          If all else fails, the manufacturer can look up the build date from the serial number directly.
          Most major brands have a consumer support line or a warranty-lookup form on their website where
          you enter the serial number and model number. This is slower than decoding it yourself, but
          it&apos;s a useful backstop when a serial number is partially worn off and you can only make out
          some of the characters.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          What the Age Actually Tells You
        </h2>
        <p>Once you know the number, here&apos;s how to read it:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Under 10 years old:</strong> Likely still in its prime. Most repairs are worth making,
            and the unit may still be under a parts warranty (many are 10 years on registered units).
          </li>
          <li>
            <strong>10&ndash;15 years old:</strong> The decision zone. This is where the{' '}
            <a href="/blog/hvac-repair-vs-replace/" className="text-blue-600 hover:underline">
              repair-vs-replace math
            </a>{' '}
            starts to matter. Factor in refrigerant type and efficiency, not just the repair quote.
          </li>
          <li>
            <strong>Over 15 years old:</strong> Past the typical service life for many systems. A major
            repair &mdash; compressor, coil, heat exchanger &mdash; usually points toward replacement. See{' '}
            <a href="/blog/how-long-does-an-hvac-system-last/" className="text-blue-600 hover:underline">
              how long an HVAC system really lasts
            </a>{' '}
            for the brand-by-brand breakdown.
          </li>
        </ul>
        <p>
          Age also tells you which refrigerant you&apos;re dealing with. Units built before 2010 generally
          use R-22, which is expensive and being phased out &mdash; and that alone can swing a repair
          decision. If your unit dates to that era, it&apos;s worth understanding what that means before
          you pay for a recharge.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Start With the Serial Number</h2>
        <p>
          Of the four methods, decoding the serial number is the only one that gives you the exact
          manufacture date in seconds. Find the data plate on your outdoor unit, copy the serial number
          exactly as printed, and run it through our{' '}
          <a href="/" className="text-blue-600 hover:underline">free decoder</a>. From there, every other
          decision about your system gets easier.
        </p>
      </div>
    </article>
  );
}
