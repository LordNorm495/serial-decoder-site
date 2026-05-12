import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Goodman Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Goodman HVAC serial number instantly. Find manufacture year and week from the first 4 digits. Works for all Goodman AC units, heat pumps, and furnaces.',
}

const brand = getBrandBySlug('goodman')!

export default function GoodmanDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Goodman uses a straightforward serial number format: the first 4 digits encode the manufacture date as YYWW — the first two digits are the last two digits of the year, and the next two digits are the week of the year (01-52). For example, a serial beginning with "0612" was manufactured in year 2006, week 12 (approximately late March 2006). This same format applies to Amana HVAC and Daikin USA units.`}
      formatExamples={[
        { serial: '0612XXXXXXX', explanation: 'First 4 digits "0612": Year 06 = 2006, Week 12 = approximately late March 2006.' },
        { serial: '1843YYYYYYY', explanation: 'First 4 digits "1843": Year 18 = 2018, Week 43 = approximately late October 2018.' },
        { serial: '9932ZZZZZZZ', explanation: 'First 4 digits "9932": Year 99 = 1999, Week 32 = approximately early August 1999.' },
        { serial: '2208AAAAAAA', explanation: 'First 4 digits "2208": Year 22 = 2022, Week 08 = approximately late February 2022.' },
      ]}
      whereToFind={[
        'Outdoor condenser unit: On the back or side panel, look for a sticker with "SERIAL" or "S/N"',
        'Air handler: On the side of the cabinet, usually near the bottom or behind an access panel',
        'Furnace: Inside the front door, on the blower or burner compartment',
        'The Goodman serial number is usually 10-12 characters long and begins with digits',
        'Do not confuse with the model number — the serial always starts with 4 numeric digits encoding date',
      ]}
      content={{
        intro: 'Decode your Goodman serial number in seconds. Enter the serial number above to find the manufacture year, week, and age of your Goodman air conditioner, heat pump, or furnace.',
        howItWorks: `Goodman Manufacturing, now a subsidiary of Daikin Industries, is one of the largest HVAC manufacturers in North America. Goodman is known for providing reliable HVAC equipment at value price points, and their systems are found in millions of American homes.

Goodman's serial number format is one of the easiest to decode in the HVAC industry. The first four characters are always digits, and they directly encode the year and week of manufacture in YYWW format. There's no letter substitution or decade encoding to worry about — just straightforward numbers.

For years 80-99, the unit was manufactured in the 1980s or 1990s respectively. For years 00-79, the unit was manufactured in the 2000s or later. Week numbers range from 01 (first week of January) to 52 (last week of December).

Daikin acquired Goodman in 2012, and Daikin USA units sold under the Daikin brand in North America often use the same serial number format as Goodman. Amana HVAC (not to be confused with Amana appliances, which is a Whirlpool brand) is also part of the Goodman/Daikin family and uses identical serial number encoding.

After the first 4 date digits, Goodman serial numbers typically contain a letter indicating the product family, followed by additional production tracking codes.`,
        useCases: `Goodman serial number age information is valuable for:

Budget Planning: Goodman units are designed as value products. HVAC technicians often recommend proactive replacement planning for Goodman systems over 12-15 years old, as repair costs can escalate.

Warranty Registration: Goodman offers 10-year limited warranty on registered units and 5-year on unregistered. You must register within 60 days of installation. The manufacture date helps verify eligibility.

Daikin Upgrade Path: Since Goodman is now a Daikin subsidiary, owners of aging Goodman units can upgrade to Daikin's premium line while working with the same dealer network.

Refrigerant Planning: Like other brands, Goodman units manufactured before 2010 use R-22. Given R-22's high current cost, knowing a Goodman unit's age helps you plan for refrigerant-related expenses.`,
        tipsParagraph: `Goodman's straightforward dating system (first 4 digits = YYWW) makes it one of the easiest brands to decode without any tools. But be careful: make sure those first 4 characters are all digits. If they're not, you might have the model number. Goodman model numbers start with letter codes like "GSX14" or "GMVC96". Also, Amana HVAC units (different from Amana appliances) use the exact same format and can be decoded here.`,
      }}
      relatedBrands={[
        { name: 'Amana HVAC', slug: 'amana' },
        { name: 'Daikin', slug: 'daikin' },
      ]}
      faq={[
        {
          question: 'How do I decode a Goodman serial number starting with "1843"?',
          answer: '"18" = year 2018, "43" = week 43 = approximately October 22-28, 2018. This unit was manufactured in late October 2018.',
        },
        {
          question: 'Does Daikin use the same serial number format as Goodman?',
          answer: 'Daikin USA units (manufactured in North America, often in Goodman\'s Houston facility) generally use the same YYWW format. Japanese-manufactured Daikin units for the US market may use a different format.',
        },
        {
          question: 'Is Amana HVAC the same as Amana appliances?',
          answer: 'No — they are completely different companies. Amana HVAC is owned by Daikin/Goodman. Amana appliances is owned by Whirlpool Corporation. The HVAC and appliance Amana brands use different serial number formats.',
        },
        {
          question: 'What is the typical lifespan of a Goodman HVAC unit?',
          answer: 'Goodman units typically last 12-15 years, sometimes longer with excellent maintenance. They are built to be economical rather than premium, so longevity is slightly lower than brands like Lennox or Carrier.',
        },
      ]}
    />
  )
}
