import { BrandKey } from '@/lib/decoders'
import { guideFamilies } from '@/lib/guideData'

type Case = { heading:string; intro:string; parts?:[string,string][]; columns?:string[]; rows:string[][]; next:string; question:string; answer:string }
const cases: Record<string, Case> = {
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
 },
 trane: {
  heading: 'Trane: what the manufacturer year-code table covers',
  intro: 'Trane publishes one date-code reference, and it is written for light-commercial units. It says the code carries the year and week of manufacture, a sequence number and the manufacturing location, and it gives the year table summarised below. It does not say the same table applies to residential split systems or American Standard models, so this site does not calculate a Trane date automatically.',
  columns: ['Year code on the label', 'Year in Trane’s table', 'What to check'],
  rows: [
   ['T, U, W, X, Y', '1981 to 1985, in that order', 'Letters are not alphabetical by year. Do not count forward from A.'],
   ['S', '1986', 'S sits between Y (1985) and B (1987) in the table. This is the entry most often misread.'],
   ['B, C, D, E, F, G, H', '1987 to 1993, in that order', 'The letter I is not used.'],
   ['J, K, L, M, N, P', '1994 to 1999, in that order', 'O and Q are skipped in this run.'],
   ['R, Z', '2000 and 2001', 'Z is the last letter year in the table.'],
   ['A number', '2002 onward', 'From 2002 the table lists the year as digits. Use Trane’s diagram for where those digits sit in the serial.'],
  ],
  next: 'Open the Trane reference below and compare its diagram with your whole-unit label. If your equipment is a residential condenser, furnace or air handler, treat a match as a lead and confirm it with Trane or American Standard support using the full model and serial. Record the outdoor and indoor units separately.',
  question: 'Why does this page not decode my Trane serial automatically?',
  answer: 'Because the only manufacturer table found for this family is scoped to light-commercial products, and an earlier decade-letter calculator on this site gave confident answers it could not support. A table you can check against the source is more useful than a result you cannot verify.'
 },
 york: {
  heading: 'York: the documented legacy month and year letters',
  parts: [['N', 'First character, not part of the date'], ['E', 'Second character: month (May)'], ['G', 'Third character: year (1998)'], ['M123456', 'Remaining characters']] as [string,string][],
  intro: 'A Johnson Controls service document for York rooftop units states that the manufacture date is read from the second and third characters of the serial. The second is a month letter and the third is a year letter. The serial shown is an illustration built from that table, not a number copied from a unit.',
  columns: ['Position and letter', 'Meaning in the Johnson Controls table', 'What to check'],
  rows: [
   ['2nd: A B C D E F', 'January to June', 'Month letters run in order from A.'],
   ['2nd: G H K L M N', 'July to December', 'I and J are skipped, so K is September, not November.'],
   ['3rd: A B C D E F G H', '1992 to 1999', 'The table starts at 1992. An older unit can reuse the same letters for an earlier year.'],
   ['3rd: K L', 'Listed as 2000 and 2001', 'Some third-party charts place these letters a year later. Confirm with the installation record or Johnson Controls.'],
   ['Digit, letter, digit near the start', 'Not covered by this table', 'Inspectors commonly report a later layout with year digits around a month letter. We have not found a manufacturer document for it, so it is not decoded here.'],
  ],
  next: 'Write down every character before you look anything up, because the same letter means different things in different positions. If the label belongs to a Coleman, Luxaire or Champion unit, record the brand as printed. For anything other than a legacy rooftop unit, use the result as a starting point and ask Johnson Controls or the installing contractor to confirm the year.',
  question: 'My York serial starts with a letter, a digit and another letter. Which rule applies?',
  answer: 'Not the legacy table above, which expects letters in both the second and third positions. That pattern is usually described as a newer layout, but this site only calculates dates from formats it can cite to the manufacturer. Keep the full serial and model and ask York for the manufacture date.'
 },
 frigidaire: {
  heading: 'Frigidaire and Electrolux: one documented format, one that needs confirming',
  parts: [['1', 'Year digit'], ['35', 'Production week 35'], ['00016', 'Unit sequence']] as [string,string][],
  intro: 'Electrolux publishes a short rule for its European appliances: the first digit of the serial is the year and the next two digits are the production week. Its own example is 13500016, which it reads as week 35 of 2001. Frigidaire’s North American support pages explain where to find the label but do not publish a date rule, so that format is not decoded here.',
  columns: ['Serial', 'Interpretation', 'What to check'],
  rows: [
   ['13500016', 'Week 35, year ending in 1', 'Electrolux’s own example. It gives 2001; a single year digit repeats every ten years.'],
   ['Eight digits, all numeric', 'Electrolux European layout', 'Read the first digit as the year and digits two and three as the week. Use the purchase record to settle the decade.'],
   ['Two letters, then digits', 'Common on Frigidaire labels in North America', 'Often described as a plant and product prefix followed by a year digit and week. We have not found this in Frigidaire documentation, so confirm it with Frigidaire.'],
  ],
  next: 'Copy the model, the serial and any product number (PNC) exactly as printed, then register the appliance or contact Frigidaire with those three values. Registration asks for the delivery date, which is a different fact from the manufacture date. Keep both.',
  question: 'Can one year digit tell me the decade?',
  answer: 'No. A year digit of 1 fits 2001, 2011 and 2021. Use the model’s production years, the purchase receipt or the manufacturer to choose between them, and record how you decided.'
 },
 samsung: {
  heading: 'Samsung: where the label is on each appliance',
  intro: 'Samsung’s support pages document where to find the model and serial on each product, and they describe the serial as a unique identifier used for service and warranty. They do not publish which characters hold the manufacture date for home appliances, so this page helps you collect the right label and tells you what to ask for.',
  columns: ['Appliance', 'Where Samsung says to look', 'What to check'],
  rows: [
   ['Refrigerator', 'Inside the refrigerator compartment near the top, and on a second label low on the outside', 'Compare both labels. Keep the full model code including the suffix after the slash.'],
   ['Range', 'On the front frame behind the oven door, or behind the warming drawer', 'Samsung describes the range serial as 15 characters. Count them before you transcribe.'],
   ['Front-load washer', 'On a label inside the door', 'Open the door fully and photograph the label straight on so every character is legible.'],
   ['Top-load washer', 'On the back of the machine', 'Photograph it before the washer is pushed back into place.'],
   ['Dryer', 'On a label on the right side of the unit', 'Record the dryer separately from a matching washer. A pair bought together can still have different manufacture dates.'],
  ],
  next: 'With the full model code and serial, register the product with Samsung or contact support and ask for the manufacture month and year specifically. A warranty lookup may only return purchase coverage. If the appliance came with a house, note that the purchase date is unknown and keep the label photo with your records.',
  question: 'Is there a year letter in a Samsung serial?',
  answer: 'Year-letter charts for Samsung circulate widely, mostly for televisions and phones. We have not found a Samsung document that confirms one for home appliances, and the same letter can be read as different years depending on the chart. This site does not calculate a Samsung date for that reason.'
 },
 'model-specific': {
  heading: 'When no date format is published: which record answers which question',
  intro: 'For this brand we have not found a manufacturer document that maps serial characters to a manufacture date across its products, so this page does not calculate one. The table shows the records that can establish age, what each one proves, and where it falls short.',
  columns: ['Record you have', 'What it establishes', 'What to check'],
  rows: [
   ['A manufacture date printed on the rating label', 'The manufacture month and year, directly', 'Look for wording such as “MFD” or “Manufactured” near the model and serial. If it is there, you do not need a decoder.'],
   ['Full model and serial given to the manufacturer', 'The manufacture date held in the manufacturer’s records', 'Ask for the manufacture date specifically. A warranty answer alone may only tell you whether coverage is active.'],
   ['Product registration confirmation', 'That this serial was registered, and when', 'Registration follows purchase, sometimes by months. Treat it as a latest-possible date.'],
   ['Purchase receipt or delivery record', 'When the appliance was sold or delivered', 'Stock can sit in a warehouse. The appliance is at least this old, and possibly older.'],
   ['Installer or builder invoice', 'When it was installed at this address', 'In a new-build home the invoice may list several appliances under one date. Match the model number line by line.'],
  ],
  next: 'Photograph the whole rating label, then contact the manufacturer with the model and serial exactly as printed, including any suffix. Save the reply with the photo in an equipment record so the next owner or inspector does not have to repeat the request.',
  question: 'Other sites decode this brand from the serial. Why not here?',
  answer: 'Charts for this brand are usually borrowed from a parent company’s format for a different product line. They can be right for one appliance and wrong for the next. Where we can cite the manufacturer for a specific product family, as on the Whirlpool page, we calculate a date. Where we cannot, we say so.'
 }
}

const reviewed: Record<string,string> = { carrier:'October 21, 2026', goodman:'October 21, 2026', whirlpool:'October 21, 2026', trane:'November 16, 2026', york:'November 16, 2026', frigidaire:'November 16, 2026', samsung:'November 16, 2026', 'model-specific':'November 16, 2026' }
export function hasCasework(brand: BrandKey) { return guideFamilies[brand] in cases }
export function reviewDate(brand: BrandKey) { return reviewed[guideFamilies[brand]] ?? 'September 28, 2026' }
export default function GuideCasework({brand}:{brand:BrandKey}) {
 const data=cases[guideFamilies[brand]]
 if (!data) return null
 return <section className="my-10" aria-labelledby="casework-heading">
  <h2 id="casework-heading" className="text-2xl font-bold mb-4">{data.heading}</h2>
  <p className="text-gray-700 mb-5">{data.intro}</p>
  {data.parts && <figure className="rounded-xl bg-blue-50 border border-blue-200 p-5 mb-6">
   <div className="flex flex-wrap gap-3">{data.parts.map(([code,label])=><div key={label} className="bg-white border border-blue-200 rounded-lg p-3 flex-1 min-w-[110px]"><code className="text-2xl font-bold text-blue-900">{code}</code><p className="text-sm text-gray-700 mt-2">{label}</p></div>)}</div>
   <figcaption className="text-sm text-gray-600 mt-4">Annotated educational example. Read the blocks in order; spaces between blocks are not part of the serial.</figcaption>
  </figure>}
  <h3 className="text-xl font-semibold mb-3">{data.parts ? 'Compare these cases' : 'Reference table'}</h3>
  <div className="overflow-x-auto"><table className="w-full text-left border-collapse text-sm"><caption className="sr-only">{data.heading}</caption><thead><tr>{(data.columns ?? ['Serial','Interpretation','What to check']).map(h=><th key={h} scope="col" className="p-3 border bg-gray-50">{h}</th>)}</tr></thead><tbody>{data.rows.map(([serial,meaning,action])=><tr key={serial}><th scope="row" className={`p-3 border ${data.columns ? 'font-semibold' : 'font-mono'}`}>{serial}</th><td className="p-3 border">{meaning}</td><td className="p-3 border">{action}</td></tr>)}</tbody></table></div>
  <h3 className="text-xl font-semibold mt-6 mb-3">What to do with your result</h3><p className="text-gray-700">{data.next}</p>
  <h3 className="text-xl font-semibold mt-6 mb-3">{data.question}</h3><p className="text-gray-700">{data.answer}</p>
 </section>
}
