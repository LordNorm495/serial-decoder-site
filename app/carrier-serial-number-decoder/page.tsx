import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Carrier Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Carrier HVAC serial number instantly. Find manufacture year, week, and age of your Carrier air conditioner, heat pump, or furnace. Free tool with complete format guide.',
}

const brand = getBrandBySlug('carrier')!

export default function CarrierDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Carrier uses an alphanumeric serial number format where a letter encodes the manufacture year, and the digits before it indicate the week of that year. Modern Carrier serials (post-2000) typically begin with 2-4 digits (week) followed by a year letter. The letter cycle runs: A=2000, B=2001, C=2002, D=2003, E=2004, F=2005, G=2006, H=2007, J=2008, K=2009, L=2010, M=2011, N=2012, P=2013, R=2014, S=2015, T=2016, V=2017, W=2018, X=2019, Y=2020, then the cycle repeats (A=2021, B=2022, etc.). Note: letters I, O, Q, and U are skipped to avoid confusion with numbers.`}
      formatExamples={[
        { serial: '0105E12345', explanation: 'Week 01, Year letter E = 2004. This unit was manufactured in the 1st week of 2004.' },
        { serial: '2010L99876', explanation: 'Week 20, Year letter L = 2010. Manufactured during the 20th week (May) of 2010.' },
        { serial: '3216T55432', explanation: 'Week 32, Year letter T = 2016. Manufactured during week 32 (August) of 2016.' },
        { serial: '0821A12345', explanation: 'Week 08, Year letter A in second cycle = 2021. Manufactured in February 2021.' },
      ]}
      whereToFind={[
        'Outdoor condenser/compressor unit: Check the metal data plate on the side or back panel',
        'Furnace: Look inside the front access panel door, usually on a sticker on the blower compartment',
        'Air handler: Typically on the side or bottom of the unit, on a metal or paper label',
        'The label will be marked "Serial No." or "S/N" — do not confuse with the Model Number (Mod)',
        'On older units, the plate may be on the bottom or inside a control box',
      ]}
      content={{
        intro: 'Instantly decode your Carrier serial number to find the exact manufacture year and week. Our tool supports all modern Carrier formats including air conditioners, heat pumps, furnaces, and air handlers.',
        howItWorks: `Carrier Corporation, headquartered in Palm Beach Gardens, Florida, is one of the world's largest manufacturers of heating, air conditioning, and refrigeration equipment. Founded by Willis Carrier — the inventor of modern air conditioning — the company has been producing HVAC equipment since 1915.

Carrier's serial number system evolved over the decades, but the modern format used since the 1990s is consistent and easy to decode once you know the key. The year is encoded as a letter in approximately the 4th position of the serial number, preceded by a 2-digit week number.

The year letter sequence skips I, O, Q, and U to avoid confusion with the numbers 1, 0, 9, and 0. After Y (representing 2020), the cycle repeats from A, which now represents 2021. This means A can represent either 2000 or 2021, B can represent 2001 or 2022, and so on.

To determine which cycle applies to your unit, consider the context: if the letter and week decode to a year more than 21 years ago, the unit may be from the more recent cycle. Most Carrier HVAC systems last 15–20 years, so a unit claiming to be from 2000 is likely from 2021 if it appears to be in good condition.

The digits preceding the year letter indicate the week of manufacture, from 01 (first week of January) to 52 (last week of December). This gives you a precision of within one week for manufacture dating.`,
        useCases: `Knowing when your Carrier unit was manufactured is valuable in several situations:

Warranty Claims: Carrier offers standard 10-year limited warranties on registered equipment and 5-year on unregistered. The serial number's manufacture date establishes when the warranty period began.

Repair vs. Replace Decisions: HVAC technicians use the "5,000 rule" — multiply the unit's age by the repair cost. If the number exceeds $5,000, replacement is typically smarter. Knowing your Carrier's age makes this calculation easy.

Home Inspections: Real estate transactions often hinge on the age of major systems. A Carrier AC unit nearing 15 years may warrant negotiation or a home warranty.

Refrigerant Compliance: Carrier units manufactured before 2010 likely use R-22 refrigerant, which is now phased out and expensive. Knowing the manufacture year helps determine your refrigerant type.

Parts Availability: Carrier stops producing parts for discontinued models. Knowing your unit's age helps your HVAC tech determine parts availability before diagnosing issues.`,
        tipsParagraph: `Don't confuse the model number with the serial number. The model number (starting with a letter and number code like "24ACC636A003") describes what type of unit it is. The serial number is unique to your specific unit and contains the date information. Also note that Bryant and Payne units — both Carrier subsidiaries — use the exact same serial number format and decoder.`,
      }}
      relatedBrands={[
        { name: 'Bryant', slug: 'bryant' },
        { name: 'Payne', slug: 'payne' },
      ]}
      faq={[
        {
          question: 'What year is a Carrier serial number starting with "2510G"?',
          answer: 'The letter G represents 2006. The digits 25 are the week of manufacture. So this unit was made in the 25th week (June) of 2006, making it approximately 18-19 years old.',
        },
        {
          question: 'Does Bryant use the same serial number format as Carrier?',
          answer: 'Yes. Bryant is a wholly-owned subsidiary of Carrier Corporation and uses identical serial number encoding. You can use this same decoder for Bryant units.',
        },
        {
          question: 'How long do Carrier HVAC units typically last?',
          answer: 'Carrier central air conditioners typically last 15–20 years with proper maintenance. Furnaces often last 20–30 years. Heat pumps average 10–15 years due to year-round use.',
        },
        {
          question: 'My Carrier serial starts with letters — what format is that?',
          answer: 'Older Carrier serials from the 1980s and early 1990s may use different formats. Try entering the full serial number in our decoder; it will attempt to identify the year. For pre-1990 units, the format may not be fully supported.',
        },
      ]}
    />
  )
}
