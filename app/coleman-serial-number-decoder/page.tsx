import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Coleman HVAC Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Coleman HVAC serial number to find manufacture year and month. Coleman (Johnson Controls) uses the York format. Free decoder with full guide.',
}

const brand = getBrandBySlug('coleman')!

export default function ColemanDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Coleman HVAC (Johnson Controls) uses the York serial number format. Position 1 = decade letter (H=1990s, J=2000s, K=2010s, L=2020s). Position 2 = year digit (0-9). Positions 3-4 = manufacture month (01-12). Example: "K2081234567" = K (2010s) + 2 = 2012, month 08 = August 2012.`}
      formatExamples={[
        { serial: 'K2081234567', explanation: 'K = 2010s, 2 = 2nd year = 2012, 08 = August. Manufactured August 2012.' },
        { serial: 'J8041234567', explanation: 'J = 2000s, 8 = 8th year = 2008, 04 = April. Manufactured April 2008.' },
        { serial: 'L0121234567', explanation: 'L = 2020s, 0 = 0th year = 2020, 12 = December. Manufactured December 2020.' },
      ]}
      whereToFind={[
        'Outdoor unit: Data plate on the side or back',
        'Furnace: Inside the front door panel',
        'Air handler: Side of the unit on a sticker',
      ]}
      content={{
        intro: 'Decode your Coleman HVAC serial number to find manufacture year, month, and age. Coleman is a Johnson Controls brand using the same serial format as York.',
        howItWorks: `Coleman HVAC is a brand marketed by Johnson Controls through their ICP group. Coleman positions itself as a reliable, value-oriented HVAC brand. Note: Coleman HVAC is different from Coleman outdoor/camping products (those are a Coleman Co. brand). Coleman HVAC units are manufactured in Johnson Controls facilities and share the York serial number encoding system.

The York/Coleman format encodes decade (H/J/K/L), year digit, and month (01-12) in the first four characters of the serial number.`,
        useCases: `Coleman serial decoding helps with warranty claims, repair cost decisions, and refrigerant type identification.`,
        tipsParagraph: `Coleman, York, Heil, and other Johnson Controls HVAC brands all use identical serial number formats. The decode results are equally applicable across all these brands.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Heil', slug: 'heil' },
      ]}
      faq={[
        { question: 'Is Coleman HVAC related to Coleman camping gear?', answer: 'No. Coleman HVAC is a Johnson Controls brand. Coleman camping equipment is a completely separate company.' },
        { question: 'How long do Coleman HVAC units last?', answer: 'Coleman HVAC units typically last 15-20 years with proper maintenance, comparable to other Johnson Controls brands.' },
      ]}
    />
  )
}
