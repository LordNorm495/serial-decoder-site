import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Trane Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Trane HVAC serial number to find manufacture year and week. Works for Trane air conditioners, heat pumps, and furnaces. Includes complete format guide.',
}

const brand = getBrandBySlug('trane')!

export default function TraneDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Trane (and American Standard) use a serial number format where the first character is a decade letter, the second character is a year digit (0-9), and characters 3-4 are the week of manufacture. Decade letters: T = 1980s, U = 1990s, X = 2000s, Y = 2010s, Z = 2020s. Example: X4M... means decade X (2000s) + digit 4 = year 2004, M (12th letter) further identifies the model. Characters 3-4 give the week.`}
      formatExamples={[
        { serial: 'X4M123456', explanation: 'X = 2000s decade, 4 = 4th year, so 2004. Characters 3-4 "M1" represent manufacturing details.' },
        { serial: 'U9W987654', explanation: 'U = 1990s decade, 9 = 9th year = 1999. Week encoded in positions 3-4.' },
        { serial: 'Y3052345', explanation: 'Y = 2010s decade, 3 = 3rd year = 2013, 05 = week 5 (early February 2013).' },
        { serial: 'Z1083333', explanation: 'Z = 2020s decade, 1 = 1st year = 2021, 08 = week 8 (February 2021).' },
      ]}
      whereToFind={[
        'Outdoor unit: On the metal data plate attached to the unit cabinet, usually on the right side',
        'Furnace: Inside the front access panel, on a label in the heat exchanger section',
        'Air handler: On the side or bottom of the unit on a sticker or metal plate',
        'The serial number label also shows the model number — look specifically for "SERIAL NO."',
        'On heat pumps, check both the outdoor unit and the air handler for matching serial numbers',
      ]}
      content={{
        intro: 'Decode your Trane serial number instantly to find manufacture year, week, and age. Our decoder supports all Trane formats including XR, XL, Comfort, and Hyperion series air conditioners, heat pumps, and furnaces.',
        howItWorks: `Trane Technologies (formerly Ingersoll Rand's Climate segment) is one of America's most trusted HVAC brands. With roots going back to 1885, Trane has developed one of the most readable serial number formats in the industry.

The Trane serial number format uses an alphabetical decade system that makes it easy to determine the approximate manufacture date at a glance. The first letter tells you the decade:
- T prefix: manufactured in the 1980s
- U prefix: manufactured in the 1990s  
- X prefix: manufactured in the 2000s (note: W was skipped)
- Y prefix: manufactured in the 2010s
- Z prefix: manufactured in the 2020s

The second character is a single digit (0-9) representing the year within that decade. So a Trane serial starting with "X4" was made in 2004, "U7" in 1997, "Y0" in 2010, and so on.

Characters 3 and 4 represent the week of manufacture (01-52), giving you precise dating to within about 7 days.

American Standard — which is owned by the same parent company as Trane — uses the identical serial number format. This makes sense as many American Standard products are essentially rebadged Trane units with the same engineering and manufacturing processes.`,
        useCases: `Trane serial number decoding is particularly important for:

R-22 vs R-410A Determination: Trane units manufactured before approximately 2010 (X0 series) typically use R-22 (Freon) refrigerant. Units from 2010 onward generally use R-410A (Puron). R-22 is now banned from production and extremely expensive — knowing your Trane's age helps you anticipate future refrigerant costs.

SEER Rating Assessment: Older Trane units have SEER ratings of 10-12, while modern units range from 14-21+. A unit more than 10 years old may be costing you significantly more in electricity than a replacement would.

Warranty Coverage: Trane's registered warranty is 10 years on parts for residential systems. Unregistered units get 5 years. The manufacture date starts the warranty clock.

Insurance Claims: After weather events or mechanical failures, insurance adjusters look at equipment age. Having the manufacture date documented helps with claims.`,
        tipsParagraph: `Trane and American Standard are essentially the same product — they share manufacturing plants, designs, and serial number formats. If you have an American Standard unit, use the Trane decoder or visit our dedicated American Standard page. One common mistake is confusing the Trane model number (which starts with a 4-letter product code like "4TTR4024") with the serial number. Always look for the label specifically marked "SERIAL" or "S/N."`,
      }}
      relatedBrands={[
        { name: 'American Standard', slug: 'american-standard' },
      ]}
      faq={[
        {
          question: 'What does "X4" mean in a Trane serial number?',
          answer: 'X = 2000s decade, 4 = 4th year of the decade = 2004. So any Trane serial starting with "X4" was manufactured in 2004.',
        },
        {
          question: 'Is American Standard the same as Trane?',
          answer: 'Yes. Trane Technologies manufactures both brands. American Standard and Trane units are often identical or very similar, and both use the same serial number format.',
        },
        {
          question: 'How long do Trane units last?',
          answer: 'Trane air conditioners typically last 15-20 years. Furnaces often last 20-30 years. Regular maintenance (annual tune-ups, filter changes) significantly extends lifespan.',
        },
        {
          question: 'My Trane starts with "4T" — what does that mean?',
          answer: 'If the serial starts with "4T", it may actually be the model number, not the serial number. Look for a separate label or field specifically for the serial number. Trane serial numbers should start with a decade letter (T, U, X, Y, or Z).',
        },
      ]}
    />
  )
}
