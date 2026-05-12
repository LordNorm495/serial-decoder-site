import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Bryant Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Bryant HVAC serial number to find manufacture year and week. Bryant uses the same format as Carrier. Free decoder with complete guide.',
}

const brand = getBrandBySlug('bryant')!

export default function BryantDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Bryant is a Carrier subsidiary and uses the exact same serial number format. A letter in approximately the 4th position encodes the year: A=2000, B=2001, C=2002, D=2003, E=2004, F=2005, G=2006, H=2007, J=2008, K=2009, L=2010, M=2011, N=2012, P=2013, R=2014, S=2015, T=2016, V=2017, W=2018, X=2019, Y=2020, A=2021 (cycle repeats). Digits before the letter = week of manufacture.`}
      formatExamples={[
        { serial: '0206F11111', explanation: 'Week 02, Year letter F = 2005. Manufactured in the 2nd week of January 2005.' },
        { serial: '3515S22222', explanation: 'Week 35, Year letter S = 2015. Manufactured in late August 2015.' },
        { serial: '1220W33333', explanation: 'Week 12, Year letter W = 2018. Manufactured in March 2018.' },
      ]}
      whereToFind={[
        'Outdoor condenser unit: Metal data plate on the back or side panel',
        'Furnace: Inside the front access panel on the blower compartment',
        'Air handler: Side of the unit near the bottom',
        'Bryant serial numbers start with week digits followed by a year letter',
      ]}
      content={{
        intro: 'Decode your Bryant heating and cooling serial number to find manufacture year, week, and age. Bryant is a Carrier brand — our decoder supports all Bryant Preferred, Evolution, and Legacy series.',
        howItWorks: `Bryant Heating & Cooling Systems is a wholly-owned subsidiary of Carrier Corporation, one of the world's largest HVAC manufacturers. Bryant was founded in 1904 and acquired by Carrier in 1955. Today, Bryant products are often manufactured in the same facilities as Carrier equipment, using the same or similar engineering designs.

Because Bryant is a Carrier subsidiary, it uses Carrier's serial number format identically. The year is encoded as a letter (following the A-Y sequence with gaps for I, O, Q, U), preceded by digits indicating the week of manufacture.

Bryant positions itself slightly below Carrier in terms of features and price point, offering high-quality HVAC at a value price. The Bryant Evolution series offers premium two-stage and variable speed technology, while the Legacy series provides reliable single-stage comfort.

The warranty for Bryant systems is similar to Carrier's: 10 years on registered units, 5 years on unregistered, for major components.`,
        useCases: `Bryant serial numbers are decoded for the same reasons as Carrier: warranty verification, repair vs. replace decisions, refrigerant type determination, and home inspection documentation. Bryant and Carrier are interchangeable for all practical decoding purposes.`,
        tipsParagraph: `Bryant and Carrier serial numbers are decoded identically. If you have a Bryant unit and you're not sure it's being decoded correctly, you can also use the Carrier decoder — the results will be the same. Payne is another Carrier sister brand that uses the same format.`,
      }}
      relatedBrands={[
        { name: 'Carrier', slug: 'carrier' },
        { name: 'Payne', slug: 'payne' },
      ]}
      faq={[
        { question: 'Is Bryant the same as Carrier?', answer: 'Bryant is a wholly-owned Carrier subsidiary. Products are similar or identical, manufactured in the same plants, with the same serial number format.' },
        { question: 'How long do Bryant HVAC units last?', answer: 'Bryant units typically last 15-20 years, the same as comparable Carrier models. Regular maintenance significantly extends their lifespan.' },
      ]}
    />
  )
}
