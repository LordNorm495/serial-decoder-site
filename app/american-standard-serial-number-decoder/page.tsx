import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'American Standard Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your American Standard HVAC serial number to find manufacture year and week. American Standard uses the same format as Trane. Free decoder tool.',
}

const brand = getBrandBySlug('american-standard')!

export default function AmericanStandardDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`American Standard HVAC uses the same serial number format as Trane (they share the same parent company). Position 1 = decade letter (T=1980s, U=1990s, X=2000s, Y=2010s, Z=2020s), Position 2 = year digit (0-9), Positions 3-4 = week of manufacture (01-52). Example: "Y5231234" = Y (2010s) + 5 = 2015, week 23 = early June 2015.`}
      formatExamples={[
        { serial: 'X3W987654', explanation: 'X = 2000s, 3 = 3rd year = 2003, W is part of the remainder. Week in positions 3-4.' },
        { serial: 'Y7151234567', explanation: 'Y = 2010s, 7 = 7th year = 2017, 15 = week 15 (April 2017).' },
        { serial: 'Z0082345678', explanation: 'Z = 2020s, 0 = 0th year = 2020, 08 = week 8 (February 2020).' },
      ]}
      whereToFind={[
        'Outdoor condenser unit: Metal rating plate on the right side panel',
        'Furnace: Inside the cabinet door, on the heat exchanger section',
        'Air handler: On the side or bottom exterior',
        'American Standard labels prominently display "Serial No." separate from model number',
      ]}
      content={{
        intro: 'Decode your American Standard HVAC serial number to find manufacture year, week, and age. American Standard is a Trane Technologies brand using the same serial number encoding as Trane.',
        howItWorks: `American Standard Heating & Air Conditioning and Trane are both owned by Trane Technologies (formerly Ingersoll Rand's climate segment). The two brands share manufacturing facilities, engineering, and serial number formats — the only meaningful difference is the branding and some cosmetic features.

American Standard uses Trane's decade-letter system: T for 1980s, U for 1990s, X for 2000s (note W is skipped), Y for 2010s, and Z for 2020s. The second character is the year digit within that decade, and characters 3-4 give the week of manufacture.

This makes American Standard serial numbers among the most human-readable in the industry — you can estimate manufacture date at a glance just from the first two characters.`,
        useCases: `American Standard serial decoding is used for warranty verification (10-year on registered units), repair vs. replace calculations, and determining refrigerant type (R-22 for pre-2010 units, R-410A for newer models).`,
        tipsParagraph: `American Standard and Trane use identical serial number formats. If you have an American Standard unit, you can use the Trane decoder as well. Both will give you the same result. The American Standard brand is sometimes sold under the name "American Standard Gold" or "American Standard Silver" — these are product tiers within the same brand, not different companies.`,
      }}
      relatedBrands={[
        { name: 'Trane', slug: 'trane' },
      ]}
      faq={[
        { question: 'Is American Standard the same as Trane?', answer: 'Yes. American Standard HVAC and Trane are owned by the same parent company (Trane Technologies) and use identical manufacturing processes and serial number formats.' },
        { question: 'What does "Y5" mean in an American Standard serial number?', answer: '"Y" = 2010s decade, "5" = 5th year = 2015. Any American Standard serial starting with "Y5" was manufactured in 2015.' },
      ]}
    />
  )
}
