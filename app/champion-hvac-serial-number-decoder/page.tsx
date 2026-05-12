import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Champion HVAC Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Champion HVAC serial number to find manufacture year, month, and age. Champion uses the ICP/York format. Free decoder tool.',
}

const brand = getBrandBySlug('champion-hvac')!

export default function ChampionHvacDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Champion HVAC is an ICP/Johnson Controls brand using the York serial number format. Character 1 = decade letter (H=1990s, J=2000s, K=2010s, L=2020s). Character 2 = year digit (0–9). Characters 3–4 = two-digit month (01–12). Example: "K3091234567" = K (2010s) + 3 = 2013, month 09 = September.`}
      formatExamples={[
        { serial: 'J4061234567', explanation: 'J = 2000s, 4 = 2004, 06 = June. Manufactured June 2004.' },
        { serial: 'K7081234567', explanation: 'K = 2010s, 7 = 2017, 08 = August. Manufactured August 2017.' },
        { serial: 'L3021234567', explanation: 'L = 2020s, 3 = 2023, 02 = February. Manufactured February 2023.' },
      ]}
      whereToFind={[
        'Outdoor condenser unit: metal plate on the side or rear',
        'Furnace: inside the front service door on the cabinet wall',
        'Air handler: sticker on the exterior cabinet near electrical connections',
        'Champion serials use the ICP format: H/J/K/L prefix + digit + 2-digit month',
      ]}
      content={{
        intro: 'Champion HVAC is a Johnson Controls ICP brand. Use this free tool to decode your Champion serial number and find the exact manufacture year and month in seconds.',
        howItWorks: `Champion HVAC equipment is produced by International Comfort Products (ICP), a Johnson Controls company. The brand shares manufacturing facilities and components with Heil, Tempstar, Comfortmaker, Arcoaire, and Day & Night — all using the same serial number encoding system.

The serial number encodes three pieces of date information in its first four characters. The first letter — H, J, K, or L — indicates the decade. The second character, a digit from 0 to 9, specifies the year within that decade. The third and fourth characters together form a two-digit month number from 01 to 12.

This encoding system makes Champion HVAC serial numbers highly readable once you know the pattern. A "K" prefix unit is from the 2010s, "L" is from the 2020s, and so on.`,
        useCases: `Use the manufacture date to check whether your Champion HVAC unit is still within its 10-year limited parts warranty. HVAC technicians use serial decoding to determine refrigerant compatibility, assess remaining equipment life, and provide accurate quotes. Home inspectors decode serials during property evaluations to note HVAC system age for buyers.`,
        tipsParagraph: `Champion HVAC shares its serial format with York, Heil, Tempstar, Comfortmaker, Luxaire, Keeprite, and Coleman. Any ICP or Johnson Controls brand with an H, J, K, or L prefix can be decoded with this tool. Always use the data plate serial rather than any stickers added during service visits.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Heil', slug: 'heil' },
        { name: 'Luxaire', slug: 'luxaire' },
      ]}
      faq={[
        { question: 'Who makes Champion HVAC?', answer: 'Champion HVAC is manufactured by International Comfort Products (ICP), a division of Johnson Controls. It is part of the same family as Heil, Tempstar, Comfortmaker, Arcoaire, and Day & Night.' },
        { question: 'What does "J4" mean in a Champion serial number?', answer: '"J" means the 2000s decade, and "4" means the 4th year of that decade = 2004. A Champion serial starting with "J4" was manufactured in 2004.' },
        { question: 'Is Champion HVAC a good brand?', answer: 'Champion HVAC is a solid mid-tier brand. Because it shares components and manufacturing with Heil and Tempstar, it offers good reliability. It\'s commonly found in new construction and builder-grade installations.' },
      ]}
    />
  )
}
