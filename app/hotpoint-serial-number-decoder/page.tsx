import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Hotpoint Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Hotpoint appliance serial number to find manufacture year and month. Hotpoint is a GE Appliances brand. Free decoder for all Hotpoint appliances.',
}

const brand = getBrandBySlug('hotpoint')!

export default function HotpointDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Hotpoint is a GE Appliances brand and uses the same serial number format. Position 2 = month letter (A=Jan through L=Dec, no I). Position 3 = year letter (R=1997, S=1998, T=1999, V=2000, Z=2001, A=2002, B=2003, C=2004, D=2005, E=2006, F=2007, G=2008, H=2009, J=2010, K=2011, L=2012, M=2013, N=2014, P=2015, then R=2016, S=2017...).`}
      formatExamples={[
        { serial: 'ZDG123456', explanation: 'Position 2 "D" = April (month), Position 3 "G" = 2008. Manufactured April 2008.' },
        { serial: 'ZAM987654', explanation: 'Position 2 "A" = January, Position 3 "M" = 2013. Manufactured January 2013.' },
        { serial: 'ZBN234567', explanation: 'Position 2 "B" = February, Position 3 "N" = 2014. Manufactured February 2014.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside the fresh food section on the upper wall',
        'Range: Behind the storage drawer at the bottom',
        'Washer/Dryer: Inside the door frame or on the back panel',
        'Hotpoint labels are typically white with black text, marked "SER" or "SERIAL"',
      ]}
      content={{
        intro: 'Decode your Hotpoint appliance serial number to find manufacture year and month. Hotpoint is a GE Appliances (Haier) brand using the same serial encoding as GE.',
        howItWorks: `Hotpoint is a budget-tier appliance brand owned by GE Appliances (now part of Haier). Hotpoint appliances use the same serial number encoding as GE Appliances, with position 2 encoding the month and position 3 encoding the year.

Hotpoint is positioned as an entry-level brand offering basic functionality at lower price points, typically sold through discount retailers and apartment suppliers. The brand targets first-time homeowners, landlords, and rental property managers.`,
        useCases: `Hotpoint serial decoding helps landlords and property managers track appliance ages across multiple rental units, and helps homeowners determine warranty status and optimal replacement timing.`,
        tipsParagraph: `Hotpoint and GE Appliances use identical serial formats. If you have a Hotpoint unit, the GE decoder will give you the same result.`,
      }}
      relatedBrands={[
        { name: 'GE Appliances', slug: 'ge' },
      ]}
      faq={[
        { question: 'Is Hotpoint owned by GE?', answer: 'Yes. In the US, Hotpoint is a brand owned by GE Appliances, which is owned by Haier. In the UK, Hotpoint is separately owned by Whirlpool — the brands are unrelated in different regions.' },
        { question: 'How long do Hotpoint appliances last?', answer: 'Hotpoint appliances typically last 8-12 years, slightly less than premium brands due to their economy-tier components.' },
      ]}
    />
  )
}
