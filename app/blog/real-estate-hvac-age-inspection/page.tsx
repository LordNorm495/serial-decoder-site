import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check HVAC Age When Buying a Home (Before You Close)',
  description:
    'A real estate buyer\'s guide to checking HVAC and appliance age during a home purchase. How to read serial numbers, what ages to watch for, and how to negotiate.',
};

export default function RealEstateHvacPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">Real Estate · Tips</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How to Check HVAC Age When Buying a Home (Before You Close)
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          A home inspector will note the approximate age of the HVAC system in their report.
          But &quot;approximately 10–15 years old&quot; is often as specific as they get. For
          a smart buyer, that&apos;s not enough — you want the actual year, because the difference
          between a 10-year-old heat pump and a 15-year-old one is potentially a $10,000–$15,000
          capital expenditure in your near future.
        </p>
        <p>
          Here is how to check HVAC and major appliance ages yourself, what numbers to watch for,
          and how to use that information in a purchase negotiation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Equipment Age Matters More Than Inspectors Let On
        </h2>
        <p>
          Home inspectors are generalists. A good inspector will operate the HVAC system and note
          obvious defects, but they won&apos;t run a refrigerant charge test or calculate remaining
          heat exchanger life. They flag what&apos;s visibly wrong — they don&apos;t predict
          near-term failures.
        </p>
        <p>
          As a buyer, the information you actually need is:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>How old is the furnace / AC / heat pump?</li>
          <li>Is it within the expected lifespan for that equipment type?</li>
          <li>Does its age affect my maintenance and capital planning for the next 5 years?</li>
          <li>Do I need to negotiate a price reduction or seller credit to account for near-end-of-life equipment?</li>
        </ul>
        <p>
          None of these questions get answered well by a home inspection report. You need to do
          this research yourself.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How to Check Equipment Age During a Showing or Inspection
        </h2>
        <p>
          You can do this during the showing, the home inspection, or the final walkthrough.
          The process takes about 10 minutes per unit.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Locate the data plate.</strong> On furnaces, open the front access panel —
            the label is on the inside door or the interior wall near the burner. On outdoor
            AC/heat pump condensers, look on the side panels (usually the one facing the house).
            On water heaters, check the side of the tank.
          </li>
          <li>
            <strong>Photograph the full label.</strong> Capture the brand name, model number,
            and serial number. The serial number is the one that varies from unit to unit — the
            model number is the same for all units of that type.
          </li>
          <li>
            <strong>Decode the serial number.</strong> Use{' '}
            <a href="/" className="text-blue-600 hover:underline">
              our serial number decoder
            </a>{' '}
            on your phone during the inspection. It works for Carrier, Trane, Goodman, Rheem,
            York, Lennox, Whirlpool, GE, and hundreds more brands.
          </li>
          <li>
            <strong>Note the manufacture date</strong> and compare it to the expected lifespan
            for that equipment type (see the table below).
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Equipment Age Reference: When to Start Worrying
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Equipment</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Average Life</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Negotiate if Older Than</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gas Furnace', '15–20 years', '12 years'],
                ['Central AC (split system)', '12–17 years', '10 years'],
                ['Heat Pump', '12–15 years', '10 years'],
                ['Gas Water Heater', '8–12 years', '8 years'],
                ['Electric Water Heater', '10–15 years', '10 years'],
                ['Refrigerator', '10–15 years', '10 years'],
                ['Washer/Dryer', '10–13 years', '8 years'],
                ['Dishwasher', '9–12 years', '8 years'],
              ].map(([equip, life, threshold], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-medium">{equip}</td>
                  <td className="border border-gray-300 px-3 py-2">{life}</td>
                  <td className="border border-gray-300 px-3 py-2 text-amber-700 font-medium">{threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Red Flags That Make Age Even More Important
        </h2>
        <p>
          Age alone is one data point. Certain other factors make an older system significantly
          more concerning:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>R-22 refrigerant in the AC or heat pump.</strong> Units manufactured before
            2010 almost certainly use R-22, which is no longer manufactured in the US. Recharging
            an R-22 system after a leak is expensive ($800–$2,000+) and is effectively a
            temporary fix. Budget for replacement.
          </li>
          <li>
            <strong>No maintenance records.</strong> Ask the seller when the furnace was last
            serviced and the AC last had a refrigerant check. No records often means no
            maintenance, which dramatically shortens equipment life.
          </li>
          <li>
            <strong>Visible rust or corrosion on the heat exchanger or furnace cabinet.</strong>{' '}
            This is a potential CO risk and a sign the unit is beyond useful life.
          </li>
          <li>
            <strong>An outdoor condenser with physical damage or overgrown vegetation.</strong>{' '}
            Signs of deferred maintenance and potential refrigerant coil damage.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How to Use Equipment Age in Negotiations
        </h2>
        <p>
          If you discover that a furnace is 18 years old and the AC is 14 years old, that is real
          money — get replacement quotes before you close. A standard furnace + AC replacement
          in most markets runs $8,000–$15,000. A heat pump system goes higher.
        </p>
        <p>
          Your options for using this information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Request a seller credit.</strong> Rather than asking for the seller to replace
            the equipment (which they&apos;ll do cheaply), negotiate a credit at closing that
            you can apply toward a replacement on your own timeline with your own contractor.
          </li>
          <li>
            <strong>Request a home warranty.</strong> Not a substitute for a credit on old
            equipment, but can cover you on appliances and mechanical systems during the first year.
          </li>
          <li>
            <strong>Adjust your offer price.</strong> If the seller won&apos;t negotiate,
            factor near-term replacement costs into your maximum price.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Bottom Line for Buyers
        </h2>
        <p>
          Ten minutes with a phone and a serial number decoder can surface information that
          meaningfully changes the financial picture of a home purchase. Don&apos;t leave it
          entirely to the inspector.
        </p>
        <p>
          <a href="/" className="text-blue-600 hover:underline">
            Our free decoder
          </a>{' '}
          works on your phone during a walkthrough and covers all major HVAC and appliance brands.
          Bookmark it before your next showing.
        </p>
      </div>
    </article>
  );
}
