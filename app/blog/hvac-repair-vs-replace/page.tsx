import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Repair vs. Replace: How to Make the Right Call Every Time',
  description:
    'Should you repair or replace your HVAC system? An HVAC technician explains the exact decision framework, cost benchmarks, and age thresholds to guide your choice.',
};

export default function RepairVsReplacePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC · Tips</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          HVAC Repair vs. Replace: How to Make the Right Call Every Time
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          The HVAC technician has just given you the diagnosis and the quote. The blower motor is
          dead. The heat exchanger is cracked. The compressor has failed. And now comes the
          question every homeowner dreads: do you pay to fix it, or do you replace the whole system?
        </p>
        <p>
          This is one of the most financially significant decisions most homeowners make, and it
          is almost always made under pressure — in the middle of July, or January, or at the
          end of a service call when the technician is standing there waiting for an answer. Here
          is a clear framework for making the right call.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Step 1: Know How Old Your System Is</h2>
        <p>
          Every calculation in this guide depends on equipment age. If you don&apos;t know the
          exact age, find out before you decide anything. Check the serial number on the data
          plate and{' '}
          <a href="/" className="text-blue-600 hover:underline">
            decode it with our free tool
          </a>{' '}
          — it takes less than a minute.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Rule of 5,000 (And Its Limits)
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-4">
          <p className="font-semibold text-blue-900 text-lg text-center">
            Equipment Age × Repair Cost &gt; $5,000 → Consider Replacing
          </p>
        </div>
        <p>For example:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>8-year-old furnace + $600 repair = 8 × 600 = $4,800 → <strong>Repair</strong></li>
          <li>12-year-old AC + $700 repair = 12 × 700 = $8,400 → <strong>Replace</strong></li>
          <li>5-year-old heat pump + $900 repair = 5 × 900 = $4,500 → <strong>Repair</strong></li>
        </ul>
        <p>What the rule misses:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Energy efficiency gains.</strong> A 15-year-old 10-SEER AC replaced with a modern 18-SEER unit can reduce cooling costs by 40–45%.</li>
          <li><strong>R-22 refrigerant.</strong> Pre-2010 AC systems using R-22 have dramatically different repair economics. Even a small recharge could cost $800–$1,500.</li>
          <li><strong>Available rebates.</strong> The Inflation Reduction Act and utility programs offer $1,500–$3,000 credits on heat pump installations.</li>
          <li><strong>New warranty.</strong> A new system comes with a 5–10 year parts warranty.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Decision by Component: Not All Repairs Are Equal
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Compressor Failure</h3>
        <p>
          A compressor replacement runs $1,200–$2,500. For a system over 10 years old, this is
          almost always a clear case for replacement.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Heat Exchanger Crack</h3>
        <p>
          A cracked heat exchanger is a potential carbon monoxide risk. Heat exchanger replacement
          costs $1,500–$3,500 and is often unavailable for older units. For most furnaces over
          10 years old, replace the furnace.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Blower Motor</h3>
        <p>
          A blower motor failure runs $400–$1,000. On a furnace under 12 years old, repair. On
          a system over 15 years old, get a replacement quote and compare.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Control Board</h3>
        <p>
          Control board replacements run $300–$800. On a system under 10 years old, clearly
          worth fixing. On a 15+ year old system, worth getting a replacement quote.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Capacitors and Contactors</h3>
        <p>
          These are wear items that cost $100–$300 to replace. Repair at any age — they are the
          equivalent of brake pads.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">Refrigerant Leak</h3>
        <p>
          A leak in a service valve is a simple repair. A leak in the evaporator coil ($800–$1,800)
          on a system over 12 years old swings strongly toward replacement.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Information You Need Before Any Decision
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Manufacture date (from serial number decode)</li>
          <li>Specific component that failed</li>
          <li>Repair cost in writing</li>
          <li>Replacement cost quote for a comparable new system</li>
          <li>Refrigerant type (R-22 vs. R-410A vs. R-454B)</li>
          <li>Current SEER rating vs. what a new system would be</li>
          <li>Available utility rebates in your area</li>
        </ul>
        <p>
          Start with the serial number.{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Our decoder
          </a>{' '}
          gives you the manufacture date for hundreds of HVAC brands in seconds.
        </p>
      </div>
    </article>
  );
}
