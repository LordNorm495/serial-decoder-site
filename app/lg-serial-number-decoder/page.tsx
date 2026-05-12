import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'LG Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your LG appliance serial number to find manufacture year and month. Works for LG refrigerators, washing machines, dryers, and dishwashers. Free decoder tool.',
}

const brand = getBrandBySlug('lg')!

export default function LGDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`LG appliance serial numbers encode the manufacture year in position 2 (second character, index 1) as a single digit, and the month in positions 3-4. The year digit represents the last digit of the manufacture year (e.g., 1 could mean 2001, 2011, or 2021 — context determines the decade). Month can be numeric (01-12) or letter-coded (A-L = Jan-Dec). LG serials often start with a letter indicating the product type or region, followed by these date codes.`}
      formatExamples={[
        { serial: 'R10H123456', explanation: 'Position 2 "1" = year ending in 1 (2011 or 2021), Positions 3-4 "0H" — 0H suggests position 3 is numeric "0" and position 4 is "H". Checking: month "0" is not valid. LG format varies; this appears to be: year digit + month code.' },
        { serial: 'R5A1234567', explanation: 'Position 2 "5" = year ending in 5 (2005 or 2015), Position 3 "A" = January. Most likely 2015 for a unit in service today.' },
        { serial: 'B9L9876543', explanation: 'Position 2 "9" = year ending in 9 (2009 or 2019), Position 3 "L" = November. Likely 2019 for a recent unit.' },
        { serial: 'F3F2345678', explanation: 'Position 2 "3" = year ending in 3 (2013 or 2023), Position 3 "F" = June. Context-dependent decode.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside the fresh food section on the upper left wall, or on the door frame near the hinge',
        'Washing machine (front-load): On the inner door rim, on the rubber boot seal area, or the door frame',
        'Washing machine (top-load): Under the lid on the back wall of the drum opening',
        'Dryer: Inside the door opening on the door frame, or on the back panel',
        'Dishwasher: On the door interior edge when the door is fully open',
        'LG serial numbers are typically 12 characters and printed on a white sticker with a QR code',
      ]}
      content={{
        intro: 'Decode your LG appliance serial number to find the approximate manufacture year and month. Works for LG refrigerators, washing machines, dryers, and dishwashers in North America.',
        howItWorks: `LG Electronics, originally founded in 1958 as GoldStar in South Korea, has become one of the world's top appliance manufacturers. LG stands for "Life's Good," and the company produces appliances ranging from budget-friendly models to premium InstaView and Signature luxury lines.

LG's serial number format for home appliances is slightly more variable than some other brands, which can make decoding somewhat contextual. The general format places the year as a single digit in position 2 and the month in position 3 (as a letter A-L) or positions 3-4 (as a number 01-12).

The year is encoded as a single digit representing the final digit of the year. This creates inherent ambiguity — a "5" could mean 2005, 2015, or theoretically 2025. The decoder uses context (typical appliance lifespan, current year) to determine the most likely decade.

LG has two main manufacturing bases for appliances sold in North America: Korea (LG's home country, typically for premium products) and the United States. LG opened a large manufacturing facility in Clarksville, Tennessee in 2019, producing washing machines for the North American market. US-manufactured LG units may have slightly different serial characteristics but follow the same general date-encoding pattern.

LG appliances are also marketed under sub-brands including LG Signature (ultra-premium), LG Studio (designer), and formerly Zenith (though Zenith is now primarily a TV brand).`,
        useCases: `LG serial number decoding is valuable for:

Compressor Warranty Claims: LG offers a 10-year linear compressor warranty on eligible refrigerators. The manufacture date establishes when this warranty period started. Several LG compressor class-action settlements have also been tied to specific production date ranges.

ThinQ Smart Features: LG's ThinQ smart home platform has evolved significantly. Knowing your appliance's manufacture year helps determine which ThinQ features are compatible with your unit.

Recall Verification: LG has issued recalls on specific washer models. The manufacture date combined with the model number determines if a recall applies to your unit.

Service Parts Availability: LG maintains parts for approximately 7-10 years after manufacture. Units nearing or exceeding 10 years old may face parts challenges.`,
        tipsParagraph: `LG's serial number decode has slightly lower confidence than some other brands because the year is encoded as a single digit without explicit decade information. Our decoder calculates the most probable year based on the current date and typical appliance lifespans. If the decoded year seems off, try adding or subtracting 10 years. Also, LG has improved its format consistency in recent years (2018+), so newer units may decode more precisely. For QR-code equipped units, scanning the QR code on the label may directly reveal the manufacture date without manual decoding.`,
      }}
      relatedBrands={[
        { name: 'Samsung', slug: 'samsung' },
      ]}
      faq={[
        {
          question: 'Why does LG serial number decoding have "medium" confidence?',
          answer: 'LG encodes the year as a single digit without explicit decade information, creating ambiguity. "5" could mean 2005, 2015, or 2025. Our decoder picks the most probable year, but you should verify against your purchase date if possible.',
        },
        {
          question: 'Is there an easier way to find my LG appliance age?',
          answer: 'Yes — many LG appliances with WiFi capability can display their manufacture date in the LG ThinQ app. Also, LG customer service can look up the manufacture date by serial number if you call 1-800-243-0000.',
        },
        {
          question: 'How long do LG refrigerators last?',
          answer: 'LG refrigerators typically last 10-17 years. Models with the linear compressor (LFX, LRMVS, etc.) that were manufactured between 2014-2019 have had some reported compressor issues. More recent models have improved reliability.',
        },
        {
          question: 'What is the LG linear compressor warranty?',
          answer: 'LG offers a 10-year parts warranty on the linear compressor in eligible refrigerators. Labor is typically covered for 1 year. The manufacture date determines when the 10-year warranty clock starts.',
        },
      ]}
    />
  )
}
