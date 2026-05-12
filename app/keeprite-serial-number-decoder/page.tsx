import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Keeprite Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Keeprite HVAC serial number to find manufacture year and month. Keeprite is a Canadian ICP/York brand. Free serial number decoder.',
}

const brand = getBrandBySlug('keeprite')!

export default function KeepriteDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Keeprite is a Canadian ICP/Johnson Controls brand using the York serial format. The first character is a decade letter (H=1990s, J=2000s, K=2010s, L=2020s), the second is the year digit (0–9), and characters 3–4 are the two-digit manufacturing month (01–12). Example: "K6041234567" = K (2010s) + 6 = 2016, month 04 = April 2016.`}
      formatExamples={[
        { serial: 'J9011234567', explanation: 'J = 2000s, 9 = 2009, 01 = January. Manufactured January 2009.' },
        { serial: 'K6041234567', explanation: 'K = 2010s, 6 = 2016, 04 = April. Manufactured April 2016.' },
        { serial: 'L0091234567', explanation: 'L = 2020s, 0 = 2020, 09 = September. Manufactured September 2020.' },
      ]}
      whereToFind={[
        'Outdoor unit: metal data plate on the side or rear panel',
        'Furnace: inside the front access door on the interior cabinet wall',
        'Air conditioner: specification sticker near the refrigerant connections',
        'Keeprite serials follow ICP format: H/J/K/L + digit + 2-digit month',
      ]}
      content={{
        intro: 'Keeprite is Canada\'s leading ICP/Johnson Controls HVAC brand. Decode your Keeprite serial number to find the exact manufacture year, month, and unit age — useful for warranty claims, service planning, and home inspections.',
        howItWorks: `Keeprite is manufactured by International Comfort Products (ICP), a Johnson Controls company, and is primarily sold in Canada. It uses the same serial number format as other ICP brands — Heil, Tempstar, Comfortmaker, and Arcoaire — and Johnson Controls brands like York, Luxaire, and Coleman.

The format is consistent: the opening letter identifies the decade (H=1990s, J=2000s, K=2010s, L=2020s), the second character is a year digit (0–9), and the third and fourth characters encode the month (01–12). This makes it easy to date Keeprite equipment at a glance once you know the system.

Keeprite equipment is built to Canadian standards and must meet CSA certification requirements. The manufacturing dates encoded in the serial align with the same ICP production data used across North American markets.`,
        useCases: `Serial number decoding is important for Keeprite owners in Canada who need to file warranty claims, verify equipment age when buying or selling a home, or assess whether a unit predates modern refrigerant standards. Canadian HVAC technicians routinely decode Keeprite serials to determine R-22 vs. R-410A compatibility and estimate remaining equipment life.`,
        tipsParagraph: `Keeprite shares serial decoding with York, Heil, Tempstar, Comfortmaker, Champion, Luxaire, and Coleman — all Johnson Controls / ICP brands. If you're in Canada and have a Keeprite unit, this decoder provides the same accurate results. The decade letter is the key: "K" for 2010s, "L" for 2020s.`,
      }}
      relatedBrands={[
        { name: 'York', slug: 'york' },
        { name: 'Heil', slug: 'heil' },
        { name: 'Comfortmaker', slug: 'comfortmaker' },
      ]}
      faq={[
        { question: 'Is Keeprite available in the United States?', answer: 'Keeprite is primarily a Canadian brand. In the US, equivalent ICP brands like Heil, Tempstar, and Comfortmaker are sold instead. All share the same serial number format.' },
        { question: 'What does "K6" mean in a Keeprite serial?', answer: '"K" indicates the 2010s decade, and "6" is the sixth year = 2016. A Keeprite serial starting with "K6" was manufactured in 2016.' },
        { question: 'Where can I find the serial number on my Keeprite furnace?', answer: 'Open the front access panel of your Keeprite furnace. The serial number label is usually on the interior wall of the cabinet, near the burner or heat exchanger area.' },
      ]}
    />
  )
}
