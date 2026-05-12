import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Ruud Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Ruud HVAC serial number to find manufacture year and week. Ruud uses the same format as Rheem. Free decoder with complete guide for all Ruud systems.',
}

const brand = getBrandBySlug('ruud')!

export default function RuudDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Ruud is owned by Rheem Manufacturing and uses Rheem's serial number format. The first character is a factory letter. Positions 2-3 (characters at index 1-2) give the 2-digit year. Positions 4-5 (index 3-4) give the 2-digit week of manufacture. Example: "B1504YYYYY" = factory B, year 15 = 2015, week 04 = late January 2015.`}
      formatExamples={[
        { serial: 'B1104YYYYY', explanation: 'Factory "B", year "11" = 2011, week "04" = late January 2011.' },
        { serial: 'A0736ZZZZZ', explanation: 'Factory "A", year "07" = 2007, week "36" = early September 2007.' },
        { serial: 'C2244AAAAA', explanation: 'Factory "C", year "22" = 2022, week "44" = early November 2022.' },
      ]}
      whereToFind={[
        'Outdoor unit: Data sticker on the side or back panel',
        'Furnace: Inside the access door, on the blower or heat exchanger compartment',
        'Air handler: On the side of the unit exterior',
        'Ruud and Rheem labels look similar — both brands label serial as "SERIAL NO." or "S/N"',
      ]}
      content={{
        intro: 'Decode your Ruud HVAC serial number to find manufacture year, week, and age. Ruud is a premium Rheem brand using the same serial number format.',
        howItWorks: `Ruud is a premium HVAC brand owned by Rheem Manufacturing Company. While Rheem is the primary brand, Ruud is often positioned as the higher-end option with additional features. Both brands share manufacturing facilities and use identical serial number formats.

The first character of a Ruud serial identifies the manufacturing facility (not needed for date decoding). Characters 2-3 give the two-digit year, and characters 4-5 give the manufacture week.

Ruud units are sold primarily through professional HVAC contractors. Like Rheem, Ruud offers heat pumps, air conditioners, and furnaces for residential and light commercial applications.`,
        useCases: `Ruud serial decoding is used for warranty claims, repair vs. replace decisions, and refrigerant type determination. Ruud units before 2010 use R-22, while newer units use R-410A or R-32 (in newer systems).`,
        tipsParagraph: `Ruud and Rheem are the same company. Serial numbers for both brands decode identically. If you have a Ruud unit, the Rheem decoder on this site will give you the same result.`,
      }}
      relatedBrands={[
        { name: 'Rheem', slug: 'rheem' },
      ]}
      faq={[
        { question: 'Is Ruud better than Rheem?', answer: 'Ruud is generally positioned as the premium contractor brand while Rheem serves the broader market. Internally, they share the same manufacturing and engineering.' },
        { question: 'How do I decode a Ruud serial number starting with "B15"?', answer: '"B" is the factory code. "15" = year 2015. The next two digits give the week.' },
      ]}
    />
  )
}
