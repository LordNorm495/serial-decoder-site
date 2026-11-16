import { BrandKey } from '@/lib/decoders'
import { guideFamilies } from '@/lib/guideData'

const cases = {
 carrier: {
  heading: 'Carrier: separate the week from the year',
  parts: [['05', 'Production week 5'], ['12', 'Year 2012'], ['C', 'Factory code'], ['12345', 'Unit sequence']],
  intro: 'Read this example from left to right. The first pair is a week, not a month. Carrier’s 38AU installation instructions show this layout in Figure 2; check the model documentation before applying it to a different product or older label.',
  rows: [
   ['0512C12345', 'Week 5 of 2012', 'Keep the week as a week; the code does not supply a calendar day.'],
   ['0106E00001', 'Week 1 of 2006', 'Leading zeros are part of the serial. Preserve them when copying the label.'],
   ['9912C12345', 'Rejected by this tool', '99 is not a valid production week. Check the transcription and model format.'],
  ],
  next: 'If the outdoor unit and indoor air handler give different dates, create two equipment records. Do not overwrite one date to make the system match. For an older label with a different length or letter arrangement, keep the full serial and ask Carrier for the format used by that model.',
  question: 'Does week 5 mean February?',
  answer: 'Do not convert it to an exact month or day. Carrier describes a fiscal production calendar. Record “2012, production week 5” and keep the label photo as the supporting evidence.'
 },
 goodman: {
  heading: 'Goodman: month codes are not week codes',
  parts: [['13', 'Year 2013'], ['06', 'Month: June'], ['123456', 'Unit sequence']],
  intro: 'The ten-digit example uses YYMM at the beginning. Goodman’s furnace warranty document explicitly illustrates 1306 as June 2013. The remaining six digits are retained to identify the unit; they are not needed for this date calculation.',
  rows: [
   ['1306123456', 'June 2013', '06 is the sixth month, not the sixth week.'],
   ['1812123456', 'December 2018', '12 is valid as a month. Check the brand and model before accepting the pattern.'],
   ['1843123456', 'Rejected by this tool', '43 cannot be a month. Do not reinterpret it as week 43 to force a result.'],
  ],
  next: 'For a replacement system, record the outdoor unit and furnace or air handler separately. If a repair invoice lists a compressor or motor serial, compare it with the complete equipment label before estimating system age. A component record and an equipment record answer different questions.',
  question: 'Does the decoded month tell me when the warranty expires?',
  answer: 'No. Keep manufacture date, installation date and any registration record in separate fields. Use the applicable manufacturer warranty and support response to establish coverage; this calculator does not decide warranty eligibility.'
 },
 whirlpool: {
  heading: 'Whirlpool: resolve the product family before the decade',
  parts: [['M', 'Dryer factory prefix'], ['8', 'Year ending in 8'], ['25', 'Production week 25'], ['10000', 'Unit sequence']],
  intro: 'The cited dryer service manual illustrates M82510000 as a 2018 example. A single year digit in an unknown unit does not independently establish the decade. That is why the calculator leaves a single year and age blank when multiple years fit.',
  rows: [
   ['M82510000', 'Selected dryer format', 'M is followed by a year digit and two week digits. The model and records must resolve the decade.'],
   ['TF82510000', 'Selected all-in-one format', 'TF is a two-letter prefix, so the year digit moves one position to the right.'],
   ['D74703117', 'Selected wall-oven format', 'The year ends in 7 and the week is 47. Do not apply a dryer model assumption to an oven.'],
  ],
  next: 'Start with the full model, including its suffix, and identify whether the appliance is a dryer, wall oven or all-in-one washer-dryer. Match that product to the separate service manual below. Use an original purchase or installation record to narrow the decade, then ask Whirlpool if more than one year remains plausible. A purchase date alone is not a manufacture date.',
  question: 'Why is my Whirlpool refrigerator serial not supported?',
  answer: 'These documented examples cover specific laundry and cooking products. A familiar brand name is not enough to transfer their date rules to a refrigerator, a letter-year code or an older Maytag label. Preserve the complete label and use model-specific manufacturer support.'
 }
}

export function hasCasework(brand: BrandKey) { return guideFamilies[brand] in cases }
export default function GuideCasework({brand}:{brand:BrandKey}) {
 const data=cases[guideFamilies[brand] as keyof typeof cases]
 if (!data) return null
 return <section className="my-10" aria-labelledby="casework-heading">
  <h2 id="casework-heading" className="text-2xl font-bold mb-4">{data.heading}</h2>
  <p className="text-gray-700 mb-5">{data.intro}</p>
  <figure className="rounded-xl bg-blue-50 border border-blue-200 p-5 mb-6">
   <div className="flex flex-wrap gap-3">{data.parts.map(([code,label])=><div key={label} className="bg-white border border-blue-200 rounded-lg p-3 flex-1 min-w-[110px]"><code className="text-2xl font-bold text-blue-900">{code}</code><p className="text-sm text-gray-700 mt-2">{label}</p></div>)}</div>
   <figcaption className="text-sm text-gray-600 mt-4">Annotated educational example. Read the blocks in order; spaces between blocks are not part of the serial.</figcaption>
  </figure>
  <h3 className="text-xl font-semibold mb-3">Compare these cases</h3>
  <div className="overflow-x-auto"><table className="w-full text-left border-collapse text-sm"><caption className="sr-only">Example serials and how to interpret them</caption><thead><tr>{['Serial','Interpretation','What to check'].map(h=><th key={h} scope="col" className="p-3 border bg-gray-50">{h}</th>)}</tr></thead><tbody>{data.rows.map(([serial,meaning,action])=><tr key={serial}><th scope="row" className="p-3 border font-mono">{serial}</th><td className="p-3 border">{meaning}</td><td className="p-3 border">{action}</td></tr>)}</tbody></table></div>
  <h3 className="text-xl font-semibold mt-6 mb-3">What to do with your result</h3><p className="text-gray-700">{data.next}</p>
  <h3 className="text-xl font-semibold mt-6 mb-3">{data.question}</h3><p className="text-gray-700">{data.answer}</p>
 </section>
}
