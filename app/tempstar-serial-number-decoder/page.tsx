import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Tempstar Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Tempstar HVAC serial number instantly. Find manufacture year, month, and age of your Tempstar unit. Free decoder using the ICP/York format.',
}

const brand = getBrandBySlug('tempstar')!

export default function TempstarDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Tempstar is an ICP/Johnson Controls premium brand using the York serial number format. Position 1 = decade letter (H=1990s, J=2000s, K=2010s, L=2020s). Position 2 = year digit within that decade. Positions 3–4 = two-digit manufacturing month (01–12). Example: "J8071234567" = J (2000s) + 8 = 2008, month 07 = July.`}
      formatExamples={[
        { serial: 'J8071234567', explanation: 'J = 2000s, 8 = 2008, 07 = July. Manufactured July 2008.' },
        { serial: 'K4121234567', explanation: 'K = 2010s, 4 = 2014, 12 = December. Manufactured December 2014.' },
        { serial: 'L0031234567', explanation: 'L = 2020s, 0 = 2020, 03 = March. Manufactured March 2020.' },
      ]}
      whereToFind={[
        'Outdoor unit: metal data plate on the side or rear panel',
        'Furnace: inside the service access door on the blower or heat exchanger compartment',
        'Air conditioner: on the rating sticker near the electrical connections',
        'Tempstar serials begin with H (1990s), J (2000s), K (2010s), or L (2020s)',
      ]}
      content={{
        intro: 'Decode your Tempstar HVAC serial number to find manufacture year, month, and current age. Tempstar is a premium ICP brand known for high efficiency — quickly verify your unit\'s age for warranty or service decisions.',
        howItWorks: `Tempstar is positioned as a premium tier within the International Comfort Products (ICP) portfolio, which is owned by Johnson Controls. ICP brands — including Heil, Comfortmaker, Arcoaire, and Day & Night — all use the same compact serial format.

Decoding a Tempstar serial is straightforward: the opening letter identifies the decade, the next character specifies the year within that decade, and the following two digits reveal the manufacturing month. This format has been consistent across ICP brands for decades, making it highly reliable for dating equipment.

For older Tempstar equipment with serial numbers that don't follow this pattern, the unit may predate ICP's standardized encoding. In those cases, contact Tempstar/ICP customer support with the full model and serial number for assistance.`,
        useCases: `Use the manufacture date to verify whether your Tempstar unit is still under its 10-year limited parts warranty. It's also valuable for HVAC technicians assessing refrigerant type (units before 2010 may use R-22), homeowners calculating equipment age before buying or selling a home, and insurance adjusters documenting HVAC condition.`,
        tipsParagraph: `All Tempstar, Heil, Comfortmaker, Keeprite, and Arcoaire units share the same serial format — this decoder works for all of them. Tempstar units are known for quiet operation and energy efficiency; decode the serial to confirm model year when comparing efficiency ratings.`,
      }}
      relatedBrands={[
        { name: 'Heil', slug: 'heil' },
        { name: 'Comfortmaker', slug: 'comfortmaker' },
        { name: 'York', slug: 'york' },
      ]}
      faq={[
        { question: 'What is the difference between Tempstar and Heil?', answer: 'Tempstar and Heil are both ICP/Johnson Controls brands. Tempstar is typically sold through independent dealers with a focus on higher-efficiency models, while Heil is positioned for broader distribution. Both use identical serial number formats.' },
        { question: 'How long does a Tempstar unit typically last?', answer: 'Tempstar HVAC systems typically last 15–20 years with proper maintenance. Use the manufacture year from the serial decoder to estimate remaining service life.' },
        { question: 'Does Tempstar use the same serial format as York?', answer: 'Yes. Tempstar, York, Heil, Coleman, Comfortmaker, Luxaire, Keeprite, and other Johnson Controls / ICP brands all use the same decade-letter + year-digit + month format.' },
      ]}
    />
  )
}
