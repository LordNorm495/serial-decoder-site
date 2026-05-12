import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Rheem Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Rheem HVAC or water heater serial number to find manufacture year and week. Free Rheem serial decoder with complete format guide for all Rheem systems.',
}

const brand = getBrandBySlug('rheem')!

export default function RheemDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Rheem serial numbers encode the manufacture year in positions 2-3 (characters at index 1-2, 0-indexed) and the week in positions 4-5 (index 3-4). The first character is a letter representing the manufacturing facility. Position 2-3 are the last two digits of the year, and positions 4-5 are the week number. Example: "A0912XXXXX" = facility A, year 09 = 2009, week 12 = late March 2009. Ruud uses the same format.`}
      formatExamples={[
        { serial: 'A0912XXXXX', explanation: 'Facility "A", year "09" = 2009, week "12" = late March 2009.' },
        { serial: 'B1504YYYYY', explanation: 'Facility "B", year "15" = 2015, week "04" = late January 2015.' },
        { serial: 'F9839ZZZZZ', explanation: 'Facility "F", year "98" = 1998, week "39" = late September 1998.' },
        { serial: 'C2132AAAAA', explanation: 'Facility "C", year "21" = 2021, week "32" = early August 2021.' },
      ]}
      whereToFind={[
        'Outdoor AC/heat pump unit: On the data plate sticker on the side or back panel',
        'Furnace: Inside the front door on a label in the heat exchanger area',
        'Water heater: On a label wrapped around the upper portion of the tank',
        'Air handler: On the exterior panel or inside an access door',
        'The label clearly marks Serial Number (S/N) separately from the Model Number (M/N)',
      ]}
      content={{
        intro: 'Decode your Rheem serial number to find the manufacture year, week, and age. Works for Rheem air conditioners, heat pumps, furnaces, and water heaters.',
        howItWorks: `Rheem Manufacturing Company is one of America's most recognized HVAC and water heating brands. Founded in 1925, Rheem produces a full range of residential and commercial heating and cooling equipment, along with water heaters which are sold in major home improvement stores nationwide.

Rheem's serial number format is consistent across their product lines — whether it's a central air conditioner, gas furnace, heat pump, or water heater. The format begins with a facility letter (which you don't need to decode), followed by the manufacture year (2 digits) and week (2 digits).

The factory letter at position 1 identifies the manufacturing plant where the unit was produced. Rheem operates facilities in several states including Arkansas, New Mexico, Texas, and California. While knowing the factory code doesn't affect the age calculation, it can be useful when contacting Rheem customer service.

Ruud is a premium brand owned by Rheem Manufacturing. Ruud and Rheem units share the same manufacturing plants and serial number format. Many Ruud products are essentially Rheem units with additional features or different branding — the serial decoder works identically for both.

In 2020, Rheem acquired Raypak, adding to its portfolio of water heating and pool heating products. Rheem is also a major supplier to the RV and manufactured housing markets.`,
        useCases: `Rheem serial number information is valuable for:

Water Heater Replacement Planning: Water heaters typically last 8-12 years. Knowing your Rheem water heater's age helps you plan for replacement before failure (which can cause water damage).

HVAC Efficiency Programs: Many utility companies offer rebates for replacing old HVAC systems. Knowing your Rheem unit's age and efficiency rating helps you determine rebate eligibility.

Homeowner Insurance: Some home insurance policies require equipment age for coverage. Knowing your Rheem system's manufacture date ensures accurate policy information.

Service Contracts: Home warranty companies often have age limits for equipment coverage. Rheem units over 10 years old may face different coverage terms or premiums.`,
        tipsParagraph: `Don't confuse Rheem and Ruud — they're the same company, and the serial number format is identical. If you have a Ruud unit, use our Ruud page or just use this Rheem decoder directly. Also, for water heaters, the serial is typically on a label wrapped around the top third of the tank. It may be partially under insulation — look carefully. Water heater serials start with the same factory letter + year + week format as HVAC serials.`,
      }}
      relatedBrands={[
        { name: 'Ruud', slug: 'ruud' },
      ]}
      faq={[
        {
          question: 'What does the first letter mean in a Rheem serial number?',
          answer: 'The first letter indicates the manufacturing plant/facility. It does not affect the date calculation. The date information starts at position 2 (the 2nd character).',
        },
        {
          question: 'Is Ruud the same as Rheem?',
          answer: 'Yes. Rheem Manufacturing owns the Ruud brand. Products are often nearly identical, and both use the same serial number format.',
        },
        {
          question: 'How do I read the age of my Rheem water heater?',
          answer: 'Rheem water heaters use the same serial format as HVAC units. Look at positions 2-3 for the year and positions 4-5 for the week. A serial starting with "A1832" would indicate 2018, week 32.',
        },
        {
          question: 'How long do Rheem HVAC units last?',
          answer: 'Rheem air conditioners typically last 15-20 years. Furnaces often last 20-25 years. Water heaters average 8-12 years for tank units and 20+ years for tankless models.',
        },
      ]}
    />
  )
}
