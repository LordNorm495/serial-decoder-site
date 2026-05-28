import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Find Your Water Heater\'s Age From the Serial Number',
  description:
    'Decode your water heater serial number to find the manufacture date. Covers Rheem, Bradford White, AO Smith, State, American, and Kenmore water heaters.',
};

export default function WaterHeaterAgePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-medium mb-2">Appliances · Tips</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How to Find Your Water Heater&apos;s Age From the Serial Number
        </h1>
        <p className="text-gray-500 text-sm">
          By Andrew Norman · Updated May 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          Water heaters are one of the most overlooked systems in a home — until they fail. Most
          residential gas and electric water heaters last 8–12 years before the tank starts to
          corrode or the elements and thermostats begin failing. Knowing your unit&apos;s age
          is the first step toward knowing when to start budgeting for a replacement.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">Instant result:</p>
          <p className="text-blue-800">
            <a href="/" className="underline font-medium">Use our free decoder</a>{' '}
            — paste the serial number, select your brand, and get the manufacture date immediately.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Where to Find the Serial Number on a Water Heater
        </h2>
        <p>
          The data plate is on the side of the tank, typically in the upper third. It includes
          the brand name, model number, serial number, BTU or wattage, capacity, and energy
          efficiency ratings. If the label is damaged, check for a secondary sticker near the
          pressure relief valve.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Rheem / Ruud Water Heaters</h2>
        <p>
          Rheem and Ruud are the same company and are the most common water heater brand in the US.
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p>First character = Month (A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec)</p>
          <p className="mt-1">Second character = Last digit of the year</p>
          <p className="mt-1"><strong>Example:</strong> F9XXXXXXX = June 2009 or June 2019</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">AO Smith Water Heaters</h2>
        <p>
          AO Smith also manufactures under the American and State brands for Home Depot and
          Lowe&apos;s respectively.
        </p>
        <div className="bg-gray-100 rounded-md px-4 py-3 font-mono text-sm">
          <p><strong>Current format:</strong> YYMXXXXXXX</p>
          <p>YY = Year (e.g., 18 = 2018), M = Month (A=Jan through M=Dec, skipping I)</p>
          <p className="mt-1"><strong>Example:</strong> 18CXXXXXXX = March 2018</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Bradford White Water Heaters</h2>
        <p>
          Bradford White uses an alpha-year code where a letter represents the year (cycling
          every 20 years). The first character is the year code, the second is the month.
        </p>
        <div className="overflow-x-auto my-3">
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
                ['A', '1984 / 2004', 'L', '1995 / 2015'],
                ['B', '1985 / 2005', 'M', '1996 / 2016'],
                ['C', '1986 / 2006', 'N', '1997 / 2017'],
                ['D', '1987 / 2007', 'P', '1998 / 2018'],
                ['E', '1988 / 2008', 'R', '1999 / 2019'],
                ['F', '1989 / 2009', 'S', '2000 / 2020'],
                ['G', '1990 / 2010', 'T', '2001 / 2021'],
                ['H', '1991 / 2011', 'U', '2002 / 2022'],
                ['J', '1992 / 2012', 'V', '2003 / 2023'],
                ['K', '1993 / 2013', 'W', '2004 / 2024'],
              ].map(([l1, y1, l2, y2], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{l1}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-sm">{y1}</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono text-center font-bold">{l2}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-sm">{y2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          How Long Should a Water Heater Last?
        </h2>
        <p>
          Standard tank-style gas water heaters typically last 8–12 years. Electric models can
          go 10–15 years. Tankless water heaters can last 20+ years with regular maintenance.
        </p>
        <p>Key signs that a water heater is near end of life:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Rust-colored water</strong> — interior tank corrosion. Time to replace.</li>
          <li><strong>Rumbling or popping sounds</strong> — sediment buildup, often indicates end of life on older tanks.</li>
          <li><strong>Visible corrosion or moisture around the base</strong> — replace before it becomes a flood.</li>
          <li><strong>Insufficient hot water</strong> — on an older tank, usually a failing element or burner.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Repair vs. Replace Decision</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Under 6 years old: repair most things</li>
          <li>6–10 years old: repair elements and thermostats; consider replacing on major issues</li>
          <li>Over 10 years old: replace rather than repair anything significant</li>
        </ul>
        <p>
          Find out your water heater&apos;s age with{' '}
          <a href="/" className="text-blue-600 hover:underline">
            our serial number decoder
          </a>
          .
        </p>
      </div>
    </article>
  );
}
