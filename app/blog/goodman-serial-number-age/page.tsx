import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Goodman Serial Number Age: Read the Year and Month Code',
  description: 'Read Goodman YYMM date codes with worked examples, invalid-code checks, and a manufacturer reference. Learn why manufacture and installation dates differ.',
}
export default function GoodmanSerialPage() {
  return <article className="max-w-3xl mx-auto px-4 py-12 text-gray-700 space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Goodman Serial Number Age: Read the Year and Month Code</h1>
    <p className="text-sm">Updated September 28, 2026</p>
    <p>The supported Goodman HVAC serial format begins with four date digits: YYMM. The first pair gives the year and the second pair gives the month. It is a month code, not a week code.</p>
    <p><a className="text-blue-700 underline" href="/goodman-serial-number-decoder/">Open the Goodman serial number decoder</a> to check a complete ten-digit numeric serial.</p>
    <h2 className="text-2xl font-semibold">Work through an example</h2>
    <p>For the illustrative serial 1306123456, split the number into 13 | 06 | 123456. The date is June 2013. The last six digits identify the unit; this tool does not use them to calculate age. For 2208123456, the date portion is 22 | 08, or August 2022.</p>
    <h2 className="text-2xl font-semibold">Check the month before trusting the result</h2>
    <p>Month codes run from 01 (January) through 12 (December). A serial beginning 1843 cannot be decoded as October 2018 using this format: 43 is not a valid month. Recheck the rating plate, confirm you copied the serial instead of the model, and ask the manufacturer if the format differs.</p>
    <h2 className="text-2xl font-semibold">Resolve the year and equipment identity</h2>
    <p>The tool interprets years 80–99 as 1980–1999 and 00–79 as 2000–2079, and refuses a future date. That century choice is an estimate, not a manufacturer record. For an older system or an unusual serial, keep the model number and a photo of the label and request confirmation from the manufacturer.</p>
    <h2 className="text-2xl font-semibold">Record each part of the system separately</h2>
    <p>An outdoor unit, furnace, and air handler may have been replaced at different times. Record the serial and result for each unit separately. The manufacture date also differs from the date the equipment was installed. Use invoices and model-specific warranty terms when checking coverage.</p>
    <p>Age alone does not tell you the refrigerant, condition, efficiency, or remaining life. Read the refrigerant designation on the rating plate and use a service assessment for repair or replacement decisions.</p>
    <h2 className="text-2xl font-semibold">Source and limitations</h2>
    <p><a className="text-blue-700 underline" href="https://apps.goodmanmfg.com/brochures/files/55f9bce7bd52bPW-CFURNU.pdf">Goodman furnace warranty documentation</a> identifies the first four digits as YYMM for its listed models. This guide covers that date-code pattern, not every historical Goodman product.</p>
    <p>Amana HVAC and some Daikin equipment have documented YYMM formats too. Use their respective guides and verify the product family. Amana household appliances use a separate decoder.</p>
  </article>
}
