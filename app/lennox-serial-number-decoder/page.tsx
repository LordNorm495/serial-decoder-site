import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Lennox Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Lennox HVAC serial number to find manufacture year and week. Works for Lennox air conditioners, heat pumps, and furnaces. Free tool with complete format guide.',
}

const brand = getBrandBySlug('lennox')!

export default function LennoxDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Lennox serial numbers encode the manufacture date in positions 4-7 (0-indexed: characters at index 3 through 6). These four characters follow a YYWW format: the first two digits are the last two digits of the year, and the second two digits are the week of the year. Characters 1-3 typically represent a factory/product code. Example: if positions 4-7 are "0312", the unit was made in year 2003, week 12.`}
      formatExamples={[
        { serial: 'AB0312XXXXX', explanation: 'Characters 4-7 are "0312": Year 03 = 2003, Week 12 = approximately late March 2003.' },
        { serial: 'XY9845YYYYY', explanation: 'Characters 4-7 are "9845": Year 98 = 1998, Week 45 = approximately November 1998.' },
        { serial: 'CD1523ZZZZZ', explanation: 'Characters 4-7 are "1523": Year 15 = 2015, Week 23 = approximately early June 2015.' },
        { serial: 'EF2108AAAAA', explanation: 'Characters 4-7 are "2108": Year 21 = 2021, Week 08 = approximately late February 2021.' },
      ]}
      whereToFind={[
        'Outdoor condenser unit: Look on the right-side panel for a metallic sticker or plate',
        'Furnace: Inside the front cabinet door, often on the left or right wall inside',
        'Air handler: On the side or behind the filter access door',
        'Lennox labels typically show both the model number and serial number — they are labeled separately',
        'The serial number on Lennox units is usually 11 characters long',
      ]}
      content={{
        intro: 'Decode your Lennox serial number to find the exact manufacture year and week. Our tool works for all Lennox residential and light commercial systems including Dave Lennox Signature, Elite, and Merit series.',
        howItWorks: `Lennox International, founded in 1895 in Marshalltown, Iowa, is one of the oldest and most respected HVAC manufacturers in the United States. The company produces a range of systems from entry-level Merit series to the ultra-high-efficiency Dave Lennox Signature Collection.

Lennox's serial number format places the manufacture date in a distinctive location: characters 4 through 7 (counting from 1). The first three characters typically encode factory and production information that isn't needed for date identification.

The four date characters follow a YYWW format — two digits for the year and two digits for the week. Years from 80-99 decode to 1980-1999, while years 00-79 decode to 2000-2079. This means a Lennox serial with "0312" in those positions was made in week 12 of 2003 (approximately late March).

Lennox is known for producing some of the most efficient HVAC systems on the market, with some models achieving SEER ratings above 25. The SL28XCV variable-speed air conditioner, for example, is one of the most efficient units available. Knowing your Lennox unit's age helps you understand whether upgrading to a newer model would provide meaningful efficiency gains.

Lennox also manufactures units under other brands for certain markets, and has subsidiaries including Heatcraft Worldwide Refrigeration and Service Experts.`,
        useCases: `Lennox serial number decoding helps in several important scenarios:

Efficiency Upgrade Calculations: Lennox units made before 2008 likely have SEER ratings of 10-13. Modern Lennox units can achieve SEER2 ratings of 20+. Knowing your unit's age lets you calculate potential annual savings from upgrading.

Comfort Controls Compatibility: Lennox's iComfort smart thermostat system requires compatible equipment. Knowing your unit's manufacture date helps determine if it's compatible with modern Lennox smart home features.

Service Planning: Lennox provides parts support for approximately 15-20 years after manufacture. Units more than 18 years old may face parts availability challenges.

Filter Media Dating: The advanced filter systems (like PureAir and Carbon Clean 16) have specific replacement schedules. Knowing your system's age helps track filter replacement history.`,
        tipsParagraph: `Lennox serial numbers are typically 11 characters long. If your serial appears shorter or longer, double-check you have the serial number rather than the model number. The model number on Lennox units often starts with letters like "XC21" or "ML14" followed by numbers. Also, note that some commercial Lennox units use a different format — this decoder is optimized for residential equipment.`,
      }}
      relatedBrands={[]}
      faq={[
        {
          question: 'Where exactly are characters 4-7 in a Lennox serial number?',
          answer: 'In a serial number like "AB0312XXXXX", counting from position 1: A=1, B=2, 0=3, 3=4, 1=5, 2=6 — so "0312" occupies positions 4-7, indicating 2003, week 12.',
        },
        {
          question: 'My Lennox serial is only 8 characters — is it a different format?',
          answer: 'Older Lennox units (pre-1990s) may use shorter serial numbers with different date encoding. For these, positions 4-5 still typically encode the year, but the format may vary. Try our decoder and compare with your known purchase date.',
        },
        {
          question: 'How long do Lennox units last?',
          answer: 'Lennox units are generally well-built. Air conditioners typically last 15-20 years, furnaces 20-30 years. The high-efficiency XC21 and XC25 series are designed for longevity with proper maintenance.',
        },
      ]}
    />
  )
}
