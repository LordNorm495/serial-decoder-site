import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Luxaire Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Luxaire HVAC serial number to find manufacture year and month. Luxaire is a York/Johnson Controls brand. Free serial number decoder tool.',
}

const brand = getBrandBySlug('luxaire')!

export default function LuxaireDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Luxaire is a York/Johnson Controls brand and uses the same serial format. The first character is a decade letter: H=1990s, J=2000s, K=2010s, L=2020s. The second character is a single digit representing the year within that decade. Characters 3–4 represent the two-digit month of manufacture (01–12). Example: "L1051234567" = L (2020s) + 1 = 2021, month 05 = May.`}
      formatExamples={[
        { serial: 'J7021234567', explanation: 'J = 2000s, 7 = 2007, 02 = February. Manufactured February 2007.' },
        { serial: 'K9101234567', explanation: 'K = 2010s, 9 = 2019, 10 = October. Manufactured October 2019.' },
        { serial: 'L1051234567', explanation: 'L = 2020s, 1 = 2021, 05 = May. Manufactured May 2021.' },
      ]}
      whereToFind={[
        'Outdoor unit: data plate on the side or rear panel',
        'Furnace: label on the interior cabinet wall, accessible through the front door',
        'Air handler: specification sticker near electrical connections',
        'Luxaire serials follow the York format: H, J, K, or L prefix followed by a digit and two-digit month',
      ]}
      content={{
        intro: 'Luxaire is an upscale York brand sold through specialty HVAC dealers. Use this decoder to instantly find your Luxaire unit\'s manufacture year and month from the serial number.',
        howItWorks: `Luxaire equipment is manufactured by York, a brand of Johnson Controls. Unlike some ICP brands, Luxaire is distributed exclusively through York's specialty dealer network, positioning it as a premium offering. Despite the separate branding, Luxaire units share the same serial number format as York, Heil, Coleman, and other Johnson Controls brands.

The decode logic is simple: the opening letter identifies the decade of manufacture, the following digit pinpoints the exact year, and the next two digits give the month. For example, a "K" prefix tells you the unit was built between 2010 and 2019, and the subsequent digit narrows it to a specific year within that range.

This format has remained consistent for decades, making it reliable for both new and older Luxaire equipment. Units older than those with "H" prefix serials may use a different format — check with York/Johnson Controls support for those.`,
        useCases: `Knowing your Luxaire unit's age is important for warranty verification (York/Luxaire offers 10-year parts warranties on registered equipment), determining refrigerant type (R-22 vs. R-410A), and making informed repair vs. replace decisions. Home buyers and inspectors also rely on serial decoding to assess HVAC system age during property transactions.`,
        tipsParagraph: `Luxaire, York, Coleman, Heil, Tempstar, Comfortmaker, Champion, and Keeprite all share the same serial number decoding system. If you have another Johnson Controls or ICP brand, this same decoder applies. When in doubt, the decade letter is the key — "L" for 2020s, "K" for 2010s, "J" for 2000s.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Champion HVAC', slug: 'champion-hvac' },
        { name: 'Coleman HVAC', slug: 'coleman' },
      ]}
      faq={[
        { question: 'Is Luxaire the same as York?', answer: 'Luxaire is made by York (Johnson Controls) and uses identical components and manufacturing. The main difference is distribution — Luxaire is sold through specialty dealers, while York has broader distribution.' },
        { question: 'Where is the serial number on a Luxaire unit?', answer: 'On outdoor units, check the metal data plate on the side panel. On furnaces, open the front access door and look for the label on the interior cabinet wall.' },
        { question: 'How do I know if my Luxaire uses R-22 or R-410A refrigerant?', answer: 'Units manufactured before approximately 2010 (serial starting with J8 or earlier) likely use R-22 refrigerant. Units from 2010 onward (K prefix) typically use R-410A. Check the data plate for the specific refrigerant type.' },
      ]}
    />
  )
}
