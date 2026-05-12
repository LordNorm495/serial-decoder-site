import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Heil Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Heil HVAC serial number to find manufacture year and month. Heil (ICP/Johnson Controls) uses the York format. Free decoder with complete guide.',
}

const brand = getBrandBySlug('heil')!

export default function HeilDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Heil (part of the ICP/Johnson Controls family) uses the York serial number format. Position 1 = decade letter (H=1990s, J=2000s, K=2010s, L=2020s). Position 2 = year digit (0-9). Positions 3-4 = month number (01-12). Example: "K5031234567" = K (2010s) + 5 = 2015, month 03 = March 2015.`}
      formatExamples={[
        { serial: 'J5031234567', explanation: 'J = 2000s, 5 = 5th year = 2005, 03 = March. Manufactured March 2005.' },
        { serial: 'K8111234567', explanation: 'K = 2010s, 8 = 8th year = 2018, 11 = November. Manufactured November 2018.' },
        { serial: 'L2071234567', explanation: 'L = 2020s, 2 = 2nd year = 2022, 07 = July. Manufactured July 2022.' },
      ]}
      whereToFind={[
        'Outdoor unit: Data plate on the side panel',
        'Furnace: Inside the access door, on the cabinet wall',
        'Air handler: Exterior sticker near the bottom',
        'Heil serial numbers start with H, J, K, or L for equipment manufactured from the 1990s onward',
      ]}
      content={{
        intro: 'Decode your Heil HVAC serial number to find manufacture year, month, and age. Heil is a Johnson Controls ICP brand using the same serial format as York.',
        howItWorks: `Heil is part of International Comfort Products (ICP), a division of Johnson Controls. Other ICP brands include Tempstar, Arcoaire, Comfortmaker, and Day & Night — all of which use the same serial number format as York and Heil.

The decade letter system (H, J, K, L) makes Heil serials easy to date at a glance. J-prefix units are from the 2000s, K-prefix from the 2010s, and L-prefix from the 2020s. The second character gives the specific year, and the third and fourth characters give the month (01-12).`,
        useCases: `Heil serial decoding helps with warranty claims (10-year registered, 5-year unregistered), repair cost calculations, and determining R-22 vs R-410A refrigerant type based on manufacture year.`,
        tipsParagraph: `Heil, Coleman, York, Luxaire, Champion, and other Johnson Controls brands all use the same serial format. This Heil decoder can be used for all ICP/Johnson Controls brands.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Coleman HVAC', slug: 'coleman' },
      ]}
      faq={[
        { question: 'Is Heil a good HVAC brand?', answer: 'Yes. Heil is an ICP/Johnson Controls brand known for reliability. It\'s positioned as a mid-tier brand below York\'s premium offerings but uses the same manufacturing quality.' },
        { question: 'What does "K5" mean in a Heil serial?', answer: '"K" = 2010s decade, "5" = 2015. A Heil serial starting with "K5" was manufactured in 2015.' },
      ]}
    />
  )
}
