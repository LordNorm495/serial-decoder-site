import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Samsung Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Samsung appliance serial number to find manufacture year and month. Works for Samsung refrigerators, washing machines, dryers, and dishwashers. Free tool.',
}

const brand = getBrandBySlug('samsung')!

export default function SamsungDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Samsung appliance serial numbers encode the manufacture year in position 4 (fourth character, index 3) and the month in position 5 (fifth character, index 4). Year letters: A=2010, B=2011, C=2012, D=2013, E=2014, F=2015, G=2016, H=2017, J=2018, K=2019, L=2020, M=2021, N=2022, P=2023, R=2024, S=2025. Month letters: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec. (Letters I, O, Q, U are skipped in both sequences.)`}
      formatExamples={[
        { serial: 'RFG-H-A12345', explanation: 'Position 4 "H" = 2017, Position 5 "A" = January. Manufactured January 2017.' },
        { serial: 'WW80J5426FW', explanation: 'Position 4 "J" = 2018, Position 5 "5" — if position 5 is numeric, this may be a model/SKU segment. Check for dedicated serial sticker.' },
        { serial: 'XYZKA12345', explanation: 'Position 4 "K" = 2019, Position 5 "A" = January. Manufactured January 2019.' },
        { serial: 'ABCNA12345', explanation: 'Position 4 "N" = 2022, Position 5 "A" = January. Manufactured January 2022.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside the fresh food section, on the left wall near the top, or on the door frame',
        'Washing machine (front-load): Inside the door opening on the rubber door seal or door frame',
        'Washing machine (top-load): Under the lid on the front lip of the machine',
        'Dishwasher: On the left side wall of the door interior, visible when door is open',
        'Dryer: Inside the door opening, or on the back panel',
        'Samsung serial numbers are typically 15 characters long and printed on a white sticker',
      ]}
      content={{
        intro: 'Decode your Samsung appliance serial number to find the manufacture year and month. Our tool works for all Samsung refrigerators, washing machines, dryers, and dishwashers sold in North America.',
        howItWorks: `Samsung Electronics, founded in 1969 in South Korea, has become one of the world's leading consumer electronics and appliance manufacturers. Samsung's home appliance division produces refrigerators, washing machines, dryers, dishwashers, ranges, and microwaves sold globally.

Samsung's serial number format for home appliances places the manufacture date information in positions 4 and 5 of the serial number. The first three characters typically encode information about the product family, factory, or regional market.

Position 4 uses a letter code to identify the year, starting with A=2010. The sequence follows the alphabet but skips letters I, O, Q, and U. Position 5 uses a similar letter system for months: A=January through M=December (skipping I).

It's important to note that Samsung produces many product categories, and the serial number format can vary between product lines. The format described here applies to Samsung's major home appliances (refrigerators, washing machines, dryers) sold in North America. Samsung mobile phones, TVs, and other electronics use different serial number formats.

Samsung has invested heavily in the premium appliance market with their "Bespoke" line, which features customizable panel colors. Even these premium units use the same underlying serial number format.`,
        useCases: `Samsung serial number decoding helps with:

Smart Home Integration: Samsung SmartThings integration requires compatible appliance models. Knowing your appliance's manufacture year helps determine SmartThings compatibility and whether firmware updates are still available.

Recall Notices: Samsung has issued several appliance recalls, particularly for washing machines and ranges. Knowing your exact manufacture date helps verify if your specific unit is affected.

Service Contract Eligibility: Samsung Care+ and third-party warranty providers use manufacture date to determine service plan eligibility and pricing.

Resale Value: When selling used Samsung appliances, the manufacture date helps set appropriate pricing. Korean-manufactured Samsung units often command premium resale prices.

Energy Star Verification: Samsung updates its appliance efficiency ratings frequently. The manufacture year helps identify which efficiency certification your unit carries.`,
        tipsParagraph: `Samsung's serial number can sometimes be confused with the model number. The model number typically appears on the same sticker but is usually shorter and ends with letters/numbers indicating color and regional variant (like "WW" for white or "EW" for another color). The serial number is longer (typically 15 characters) and is the one that contains the manufacture date. For Samsung refrigerators, there is sometimes a QR code on the same label — scanning it may reveal the manufacture date directly.`,
      }}
      relatedBrands={[
        { name: 'LG', slug: 'lg' },
      ]}
      faq={[
        {
          question: 'What year is position 4 "H" in a Samsung serial?',
          answer: '"H" in position 4 = 2017. So any Samsung appliance with "H" as the 4th character was manufactured in 2017.',
        },
        {
          question: 'Does Samsung use different serial formats for different appliances?',
          answer: 'Yes. The format described here applies to Samsung\'s major home appliances. Samsung TVs, phones, and other electronics use different formats. This decoder is optimized for refrigerators, washers, dryers, and dishwashers.',
        },
        {
          question: 'How long do Samsung refrigerators last?',
          answer: 'Samsung refrigerators typically last 10-15 years. French door models may experience more compressor issues around the 7-10 year mark. Samsung\'s "Twin Cooling" technology refrigerators often have better longevity.',
        },
        {
          question: 'Where exactly is the serial number on a Samsung front-load washer?',
          answer: 'On Samsung front-load washing machines, the serial number sticker is typically on the inner door frame — the circular rubber ring (boot seal) area. Open the door and look around the inner rim for a white sticker.',
        },
      ]}
    />
  )
}
