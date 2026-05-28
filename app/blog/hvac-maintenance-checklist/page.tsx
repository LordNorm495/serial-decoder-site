import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Maintenance Checklist: What to Do Every Month, Season, and Year',
  description:
    'A complete HVAC maintenance checklist from an EPA-certified technician. Monthly, seasonal, and annual tasks to maximize system lifespan and efficiency.',
};

export default function HvacMaintenancePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC · Tips</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          HVAC Maintenance Checklist: What to Do Every Month, Season, and Year
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          In 15 years of HVAC service, the single biggest predictor of whether a system is going
          to fail on the hottest day of summer or the coldest night of winter is not brand or
          age — it&apos;s maintenance. A 15-year-old Carrier with a clean filter, annual tune-ups,
          and a clear condenser will outperform a 7-year-old Goodman that has been completely
          ignored.
        </p>
        <p>
          This checklist is organized by frequency: what you should be doing every month, every
          season, and once a year. Most of it is free or nearly free. The professional stuff —
          annual tune-ups — typically runs $80–$150 and pays for itself in efficiency gains alone.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Monthly Tasks</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Check and Change the Air Filter
        </h3>
        <p>
          This is non-negotiable. A clogged filter is the #1 preventable cause of premature HVAC
          failure. Standard 1-inch filters: replace every 30–60 days. High-efficiency pleated
          filters (4–5 inch): replace every 6–12 months or when visibly dirty.
        </p>
        <p>
          Hold the filter up to a light. If you can&apos;t see light through it, replace it.
          Don&apos;t try to vacuum or wash a disposable filter — just replace it. They cost
          $2–$20. The compressor they might save you costs $1,500.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Visually Inspect the Unit
        </h3>
        <p>
          Take 30 seconds to look at your furnace or air handler. Watch for: unusual noises when
          it runs, water on the floor (condensate leak), ice on the refrigerant lines, or any
          smell that wasn&apos;t there before. These are cheap to address now and expensive to ignore.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Spring Tasks (Before Cooling Season)
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Clear the Outdoor Condenser Unit
        </h3>
        <p>
          Remove debris that accumulated over winter. Trim vegetation within 2 feet of the unit
          on all sides. Do NOT restrict airflow with enclosures — the condenser needs to breathe
          to reject heat efficiently. Remove any winter cover before the first cooling run.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Clean the Condenser Coils
        </h3>
        <p>
          The outdoor condenser coil gets clogged with cottonwood, grass clippings, and debris.
          A dirty coil makes the compressor work harder. You can rinse it gently from the inside
          out with a garden hose (not a pressure washer), or have a technician do it during the
          spring tune-up.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Clear the Condensate Drain
        </h3>
        <p>
          Algae and mold grow in the drain line and can cause clogs that back up water into the
          air handler — damaging the unit and potentially causing water damage to your home.
          Prevention: pour about a cup of diluted bleach (1:10 bleach to water) into the drain
          pan at the start of cooling season, then monthly through summer.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Test the System Before You Need It
        </h3>
        <p>
          Turn on the AC for the first time in spring on a mild day — not during the first heat
          wave. Run it for 15 minutes and confirm cold air, the outdoor unit running, and no
          unusual sounds or smells.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Fall Tasks (Before Heating Season)
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Test the Furnace Early
        </h3>
        <p>
          Turn on the heat in October or early November — before you actually need it. Listen for
          unusual sounds. A little dust burn-off on first use is normal; a persistent burning
          smell is not.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Check the Flue and Combustion Air
        </h3>
        <p>
          Inspect the vent pipe from your furnace to where it exits the home for corrosion,
          loose sections, or disconnections. Birds sometimes build nests in exterior vent
          terminations during summer. A blocked or leaking flue is a carbon monoxide risk.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Test Carbon Monoxide and Smoke Detectors
        </h3>
        <p>
          Every fall, without exception. Replace batteries annually.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Annual Professional Tasks</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Annual Furnace Tune-Up (Fall)
        </h3>
        <p>A professional furnace tune-up should include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Heat exchanger inspection (critical safety check — a cracked exchanger leaks CO)</li>
          <li>Burner cleaning and inspection</li>
          <li>Flame sensor cleaning</li>
          <li>Inducer motor inspection and lubrication</li>
          <li>Blower motor inspection</li>
          <li>Combustion analysis (CO2, O2, CO levels)</li>
          <li>Thermostat calibration</li>
        </ul>
        <p>Cost: $80–$150. The highest-ROI maintenance expenditure you can make on a furnace.</p>

        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
          ✅ Annual AC Tune-Up (Spring)
        </h3>
        <p>A professional AC tune-up should include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Refrigerant charge check</li>
          <li>Condenser and evaporator coil cleaning</li>
          <li>Electrical connection inspection and tightening</li>
          <li>Capacitor and contactor inspection</li>
          <li>Condensate drain cleaning and float switch test</li>
          <li>Thermostat calibration</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Know Your Equipment&apos;s Age
        </h2>
        <p>
          Good maintenance extends equipment life — but knowing the current age of your system
          helps you plan. A 10-year-old furnace that you&apos;re maintaining well can go another
          10 years. A 17-year-old system that has never been serviced is a different conversation.
        </p>
        <p>
          If you don&apos;t know the age of your system,{' '}
          <a href="/" className="text-blue-600 hover:underline">
            use our serial number decoder
          </a>{' '}
          — find the data plate on the unit, enter the serial number, and you&apos;ll have the
          manufacture date in seconds.
        </p>
      </div>
    </article>
  );
}
