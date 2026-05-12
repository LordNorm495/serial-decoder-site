import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Frigidaire Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Frigidaire appliance serial number to find manufacture year and week. Free Frigidaire serial number decoder — works for all Frigidaire appliances.',
}

const brand = getBrandBySlug('frigidaire')!

export default function FrigidaireDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Frigidaire serial numbers follow a consistent format: the first two characters are a plant/factory code (letters), characters 3–4 are the 2-digit year (e.g. "20" = 2020), and characters 5–6 are the 2-digit week of manufacture (01–52). Example: "XC2005XXXXX" = plant XC, year 2020, week 05 (late January/early February 2020).`}
      formatExamples={[
        { serial: 'XC2005XXXXX', explanation: 'Plant code XC, year 20 = 2020, week 05 = early February. Manufactured February 2020.' },
        { serial: 'LA1737XXXXX', explanation: 'Plant code LA, year 17 = 2017, week 37 = mid-September. Manufactured September 2017.' },
        { serial: 'NF0823XXXXX', explanation: 'Plant code NF, year 08 = 2008, week 23 = early June. Manufactured June 2008.' },
      ]}
      whereToFind={[
        'Refrigerator: inside the fresh food compartment on the interior wall, or behind the crisper drawer',
        'Dishwasher: inside the door on the left side tub wall',
        'Washer: inside the door opening, behind the lid, or on the back panel',
        'Dryer: inside the door opening or on the back panel',
        'Range/oven: inside the storage drawer or behind the oven door',
        'Room air conditioner: on the back panel or inside the side panel access area',
      ]}
      content={{
        intro: 'Frigidaire is one of America\'s most recognizable appliance brands, owned by Electrolux. Use this free decoder to find your Frigidaire appliance\'s manufacture year, week, and age from the serial number in seconds.',
        howItWorks: `Frigidaire was founded in 1918 and became synonymous with American kitchen appliances for decades. Today it is owned by Electrolux and operates alongside the Electrolux brand in North America. Because both are under the same ownership, Frigidaire and Electrolux use the same serial number encoding format.

The Frigidaire serial format begins with a two-letter plant code identifying the factory where the appliance was built. The third and fourth characters form a two-digit year: values 00–79 are read as 2000–2079, while values 80–99 indicate 1980–1999. The fifth and sixth characters give the manufacturing week (01–52).

This week-based system provides precise manufacturing dates. Week 01 is early January, week 26 is late June/early July, and week 52 is late December. Together, the plant code, year, and week can pinpoint an appliance's manufacture date to within a week or two.

The serial number is distinct from the model number — the model number describes the product type and features, while the serial number uniquely identifies your specific unit and encodes when and where it was made.`,
        useCases: `Frigidaire serial decoding is essential for warranty claims (Frigidaire typically offers 1-year limited warranties, with extended coverage on specific parts), sourcing the right replacement components, and determining whether a recall affects your unit. It's also useful for landlords tracking appliance inventory, home inspectors noting appliance age, and buyers evaluating used appliances.`,
        tipsParagraph: `Frigidaire and Electrolux use the same serial format. If you have a Frigidaire Gallery or Frigidaire Professional appliance, the same plant-code + year + week format applies. The manufacturing week is particularly useful: it tells you not just the year, but approximately which month the appliance was built.`,
      }}
      relatedBrands={[
        { name: 'Electrolux', slug: 'electrolux' },
      ]}
      faq={[
        { question: 'What does the plant code in a Frigidaire serial mean?', answer: 'The first two letters of the Frigidaire serial number identify the factory where the appliance was manufactured. Frigidaire has plants across North America and occasionally uses contract manufacturing. The plant code doesn\'t affect the manufacture date calculation.' },
        { question: 'Is Frigidaire made by Electrolux?', answer: 'Yes. Frigidaire is owned and manufactured by Electrolux AB, a Swedish conglomerate. Electrolux acquired the Frigidaire brand in 1986. Both Frigidaire and Electrolux-branded appliances use the same serial number format in North America.' },
        { question: 'How do I find the manufacture week from a Frigidaire serial?', answer: 'Characters 5 and 6 of the serial number give the manufacturing week (01–52). Week 1 is early January, and week 52 is late December. Our decoder shows both the year and week automatically.' },
      ]}
    />
  )
}
