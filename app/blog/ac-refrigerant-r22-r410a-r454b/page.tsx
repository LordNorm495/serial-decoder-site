import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R-22, R-410A, and R-454B: What Your AC Refrigerant Means for Repair Costs',
  description:
    'How to tell which refrigerant your air conditioner uses, why it matters for repair and replacement decisions, and how the unit age gives you the answer in seconds.',
};

export default function ACRefrigerantPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">HVAC</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          R-22, R-410A, and R-454B: What Your AC&apos;s Refrigerant Means for Repair Costs
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman, EPA 608 Certified HVAC Technician · Updated June 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          When an air conditioner stops cooling, the refrigerant inside it suddenly becomes one of the most
          important &mdash; and most expensive &mdash; variables in the repair decision. The type of
          refrigerant your system uses can be the difference between a $200 fix and a conversation about
          replacing the whole unit. Here&apos;s how to tell what you have, and what it means for your
          wallet.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant result:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Decode your AC serial number</a> to find its age
            &mdash; the fastest way to narrow down which refrigerant it uses.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Three Refrigerants You&apos;ll Encounter
        </h2>
        <p>
          Residential air conditioning has gone through three refrigerant eras, and the one your system
          belongs to is determined almost entirely by when it was built.
        </p>
        <p>
          <strong>R-22 (Freon) &mdash; systems built before ~2010.</strong> For decades, R-22 was the
          standard residential refrigerant. It&apos;s an HCFC that damages the ozone layer, so under the
          Montreal Protocol its production and import were phased out, ending entirely in the United States
          on January 1, 2020. R-22 still exists only as reclaimed or stockpiled supply, which is why its
          price has climbed dramatically. A recharge on an R-22 system can run several hundred to well over
          a thousand dollars depending on how much is needed.
        </p>
        <p>
          <strong>R-410A (Puron) &mdash; systems built ~2010 to 2024.</strong> As R-22 was phased down,
          R-410A became the residential standard. It&apos;s an HFC with no ozone-depletion potential, and
          for years it was the refrigerant in virtually every new system. It&apos;s still widely available
          and affordable, though it too is now being phased down under newer climate rules because of its
          high global-warming potential.
        </p>
        <p>
          <strong>R-454B and R-32 &mdash; systems built 2025 and later.</strong> Beginning with the 2025
          model year, manufacturers transitioned new residential equipment to low-GWP refrigerants,
          primarily R-454B (and R-32 for some brands). If your system is brand new, this is almost
          certainly what it uses. These refrigerants are mildly flammable (A2L class), which changes some
          service procedures but doesn&apos;t affect everyday operation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How to Tell Which One You Have
        </h2>
        <p>You have three ways to find out, from fastest to most definitive:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Decode the serial number.</strong> Because refrigerant type tracks so closely with
            manufacture date, the single fastest way to narrow it down is to find out how old the unit is.
            Run your serial number through our{' '}
            <a href="/" className="text-blue-600 hover:underline">free decoder</a> &mdash; if it was built
            before 2010, assume R-22; 2010&ndash;2024, assume R-410A; 2025 or later, assume R-454B or R-32.
          </li>
          <li>
            <strong>Read the data plate.</strong> The label on the outdoor condenser cabinet explicitly
            lists the refrigerant &mdash; look for a line that says &quot;REFRIGERANT&quot; followed by
            R-22, R-410A, R-454B, or R-32, along with the factory charge in ounces or pounds.
          </li>
          <li>
            <strong>Ask your technician.</strong> Any HVAC tech can confirm the refrigerant in seconds by
            reading the plate or checking the service fittings, which differ between R-22 and R-410A
            systems.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Why It Changes the Repair Math</h2>
        <p>
          Refrigerant type doesn&apos;t just affect the cost of a recharge &mdash; it reshapes the entire
          repair-or-replace decision.
        </p>
        <p>
          If you have an <strong>R-22 system with a refrigerant leak</strong>, you&apos;re facing two
          problems at once: the leak itself, and the steep cost of replacing lost R-22. On a unit
          that&apos;s already 12 or 15 years old, paying $1,000+ to recharge a leaking system that&apos;s
          near the end of its life rarely makes sense. This is one of the clearest cases where age plus
          refrigerant points straight to replacement. Crucially, you also can&apos;t simply &quot;switch&quot;
          an R-22 system to a cheaper refrigerant &mdash; the compressor, metering device, and oil are all
          matched to R-22, so a real conversion means essentially replacing the system anyway.
        </p>
        <p>
          An <strong>R-410A system with the same leak</strong> is a very different conversation. The
          refrigerant is affordable and available, so the decision comes down to the cost of the repair
          itself versus the age of the unit, using the standard{' '}
          <a href="/blog/hvac-repair-vs-replace/" className="text-blue-600 hover:underline">
            repair-vs-replace framework
          </a>
          .
        </p>
        <p>
          A <strong>new R-454B or R-32 system</strong> is unlikely to have refrigerant issues this early,
          but it&apos;s worth knowing that the low-GWP transition means parts and procedures are still
          settling in across the industry.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">The Bottom Line</h2>
        <p>
          Refrigerant type is one of the most overlooked factors in HVAC decisions, and it&apos;s almost
          entirely predictable from the unit&apos;s age. Before you approve any refrigerant-related repair,
          find out two things: how old the system is and which refrigerant it uses. Both start at the data
          plate. Decode the{' '}
          <a href="/" className="text-blue-600 hover:underline">serial number with our free tool</a> to pin
          down the age, then check the plate to confirm the refrigerant &mdash; and you&apos;ll know whether
          that repair quote is a reasonable fix or a down payment on a system that&apos;s ready to retire.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          This article is for general information and isn&apos;t a substitute for a diagnosis from a
          licensed HVAC professional. Refrigerant handling is regulated and must be performed by
          EPA-certified technicians.
        </p>
      </div>
    </article>
  );
}
