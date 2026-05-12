import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Comfortmaker Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Comfortmaker HVAC serial number instantly. Find manufacture year, month, and age of your Comfortmaker unit. Free tool using the York/ICP format.',
}

const brand = getBrandBySlug('comfortmaker')!

export default function ComfortmakerDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Comfortmaker is an ICP/Johnson Controls brand and uses the York serial number format. The first character is a decade letter (H=1990s, J=2000s, K=2010s, L=2020s). The second character is a year digit (0–9). Characters 3 and 4 are the two-digit month (01–12). For example, "K5031234567" means K (2010s) + 5 = 2015, month 03 = March 2015.`}
      formatExamples={[
        { serial: 'J6051234567', explanation: 'J = 2000s decade, 6 = 6th year = 2006, 05 = May. Manufactured May 2006.' },
        { serial: 'K3091234567', explanation: 'K = 2010s, 3 = 2013, 09 = September. Manufactured September 2013.' },
        { serial: 'L2011234567', explanation: 'L = 2020s, 2 = 2022, 01 = January. Manufactured January 2022.' },
      ]}
      whereToFind={[
        'Outdoor condenser: data plate on the side panel',
        'Furnace: inside the front access panel, on the cabinet wall',
        'Air handler: exterior label near the bottom or back',
        'Comfortmaker serials start with H, J, K, or L followed by a digit and two-digit month',
      ]}
      content={{
        intro: 'Comfortmaker is a trusted ICP/Johnson Controls HVAC brand. Use this free decoder to find the manufacture year, month, and age of your Comfortmaker air conditioner, heat pump, or furnace in seconds.',
        howItWorks: `Comfortmaker equipment is manufactured by International Comfort Products (ICP), a division of Johnson Controls. Other ICP brands include Heil, Tempstar, Arcoaire, and Day & Night — all of which use the exact same serial number format.

The Comfortmaker serial number system uses a simple letter-digit-month encoding in the first four characters. The decade letter tells you which 10-year period the unit was made in, the following digit narrows it down to a specific year, and the next two digits give the manufacturing month. This makes Comfortmaker serials among the easiest HVAC serial numbers to decode once you know the system.

Comfortmaker units manufactured before the 1990s may use older formats not covered here. For units with an "H" prefix, manufacture was in the 1990s; "J" indicates the 2000s; "K" the 2010s; and "L" means the 2020s.`,
        useCases: `Knowing your Comfortmaker unit's manufacture date is essential for warranty claims (Comfortmaker offers 10-year limited warranties with registration), scheduling preventive maintenance, and deciding between repair and replacement. Units over 15 years old may also use R-22 refrigerant, which has been phased out — knowing the age helps you plan ahead.`,
        tipsParagraph: `Comfortmaker, Heil, Tempstar, York, Coleman, and Keeprite all share the same serial number format. If you have another ICP brand, the same decoder applies. Always locate the serial on the original data plate rather than any sticker labels added by technicians, which may not reflect the original manufacture date.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Heil', slug: 'heil' },
        { name: 'Tempstar', slug: 'tempstar' },
      ]}
      faq={[
        { question: 'Is Comfortmaker the same as Heil or Tempstar?', answer: 'Yes. Comfortmaker, Heil, and Tempstar are all ICP/Johnson Controls brands manufactured in the same factories. They share identical serial number formats and largely the same components.' },
        { question: 'What does "K7" mean in a Comfortmaker serial?', answer: '"K" represents the 2010s decade, and "7" is the 7th year of that decade, so "K7" means the unit was manufactured in 2017.' },
        { question: 'How do I find the month from a Comfortmaker serial?', answer: 'Characters 3 and 4 (positions 2 and 3, zero-indexed) are the month. For example, "05" = May, "11" = November. Values above 12 indicate an older or non-standard serial format.' },
      ]}
    />
  )
}
