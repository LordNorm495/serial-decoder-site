import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Electrolux Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Electrolux appliance serial number to find manufacture year and week. Free decoder — works for all Electrolux North American appliances.',
}

const brand = getBrandBySlug('electrolux')!

export default function ElectroluxDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Electrolux North American appliances use the same format as Frigidaire: the first two characters are a plant/factory code (letters), characters 3–4 are the 2-digit year, and characters 5–6 are the 2-digit manufacturing week (01–52). Example: "XC2012XXXXX" = plant XC, year 2020, week 12 (late March 2020).`}
      formatExamples={[
        { serial: 'XC2012XXXXX', explanation: 'Plant code XC, year 20 = 2020, week 12 = late March. Manufactured March 2020.' },
        { serial: 'LA1845XXXXX', explanation: 'Plant code LA, year 18 = 2018, week 45 = early November. Manufactured November 2018.' },
        { serial: 'NF1503XXXXX', explanation: 'Plant code NF, year 15 = 2015, week 03 = mid-January. Manufactured January 2015.' },
      ]}
      whereToFind={[
        'Refrigerator: inside the fresh food compartment on the interior wall or behind a crisper drawer',
        'Dishwasher: inside the door on the left side tub wall',
        'Washer: inside the door opening or on the back panel',
        'Dryer: inside the door opening or on the back panel',
        'Range: inside the storage drawer or on the door frame',
      ]}
      content={{
        intro: 'Electrolux is a global appliance leader. In North America, Electrolux-branded appliances use the same serial format as Frigidaire. Decode your Electrolux serial number to find manufacture year, week, and age instantly.',
        howItWorks: `Electrolux AB is a Swedish multinational that owns several major appliance brands, including Frigidaire in North America. Because Frigidaire and Electrolux products are manufactured in the same facilities using the same production systems, they share an identical serial number encoding format.

The serial number begins with a two-letter plant code identifying the factory location. The next two digits encode the two-digit year of manufacture: years 00–79 map to 2000–2079, and years 80–99 map to 1980–1999. The following two digits give the manufacturing week (01–52).

Electrolux sells premium appliances in North America under its own brand — typically at a higher price point than comparable Frigidaire models, with more sophisticated designs and features. Despite the premium positioning, the serial encoding is identical, making this decoder equally applicable to both brands.

For Electrolux appliances sold in Europe, the serial format may differ. This decoder is optimized for North American Electrolux appliances manufactured by Electrolux North America.`,
        useCases: `Electrolux serial decoding is useful for warranty claims on higher-end appliances, finding the right service parts (Electrolux has some unique components not shared with Frigidaire), and verifying age when purchasing pre-owned or floor model Electrolux appliances. Home inspectors and real estate agents also use serial decoding to document premium appliance age in luxury homes.`,
        tipsParagraph: `Electrolux and Frigidaire share the same serial format because they are sister brands under Electrolux AB. If you have a Frigidaire Gallery or Frigidaire Professional appliance, use the Frigidaire decoder instead — the results will be identical. The plant code, year, and week are consistent across both brands.`,
      }}
      relatedBrands={[
        { name: 'Frigidaire', slug: 'frigidaire' },
      ]}
      faq={[
        { question: 'Is Electrolux the same as Frigidaire?', answer: 'Electrolux and Frigidaire are sister brands owned by Electrolux AB. In North America, Electrolux-branded appliances tend to be positioned as premium, while Frigidaire covers a broader market. Both use the same serial number format.' },
        { question: 'What does the week number mean in an Electrolux serial?', answer: 'Characters 5–6 in the serial represent the manufacturing week (01–52). Week 1 is early January and week 52 is late December. This lets you narrow down the manufacture date to within a couple of weeks.' },
        { question: 'Are Electrolux appliances reliable?', answer: 'Electrolux appliances generally rate well for reliability, particularly their dishwashers and front-load washers. The manufacture date from the serial can help you assess age and remaining expected service life.' },
      ]}
    />
  )
}
