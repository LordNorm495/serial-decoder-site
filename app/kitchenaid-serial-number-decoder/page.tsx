import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'KitchenAid Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your KitchenAid appliance serial number to find manufacture year and month. KitchenAid uses the Whirlpool format. Free decoder for all KitchenAid appliances.',
}

const brand = getBrandBySlug('kitchenaid')!

export default function KitchenAidDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`KitchenAid is a Whirlpool Corporation brand and uses the exact same serial number format. Position 2 = year letter, Position 3 = month letter. Year letters: F=1996, G=1997, H=1998, J=1999, K=2000, L=2001, M=2002, N=2003, P=2004, R=2005, S=2006, T=2007, V=2008, W=2009, X=2010, Y=2011, A=2012, B=2013, C=2014, D=2015, E=2016, F=2017... Month letters: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec.`}
      formatExamples={[
        { serial: 'CSR123456', explanation: 'Position 2 "S" = 2006, Position 3 "R" — R not in month map. Try: CSF123456 → S=2006, F=June.' },
        { serial: 'XSF098765', explanation: 'Position 2 "S" = 2006, Position 3 "F" = June. Manufactured June 2006.' },
        { serial: 'XVH223344', explanation: 'Position 2 "V" = 2008, Position 3 "H" = August. Manufactured August 2008.' },
        { serial: 'XDC445566', explanation: 'Position 2 "D" = 2015, Position 3 "C" = March. Manufactured March 2015.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside the fresh food compartment, upper wall or door frame',
        'Dishwasher: On the door interior, visible when door is fully open',
        'Range/Oven: Storage drawer, or the label behind the lower storage drawer',
        'Stand mixer: Underneath the base or on the motor head',
        'KitchenAid labels are usually silver with clear black text',
      ]}
      content={{
        intro: 'Decode your KitchenAid appliance serial number to find the manufacture year and month. KitchenAid is a Whirlpool brand — our decoder works for all KitchenAid refrigerators, dishwashers, ranges, and stand mixers.',
        howItWorks: `KitchenAid is one of the most beloved appliance brands in America, known for iconic stand mixers, professional-grade dishwashers, and premium kitchen appliances. KitchenAid was founded in 1919 and acquired by Whirlpool Corporation in 1986.

As a Whirlpool brand, KitchenAid uses Whirlpool's serial number encoding system identically. The second character encodes the manufacture year and the third character encodes the month — both using letter codes rather than numbers.

KitchenAid is positioned as Whirlpool's premium brand, targeting serious home cooks and design-conscious consumers. Their products often command premium prices and are frequently selected for luxury kitchen remodels.`,
        useCases: `KitchenAid serial decoding is particularly useful for stand mixer owners (as these are often passed down through families and repaired rather than replaced), warranty claims on major appliances, and resale value documentation.`,
        tipsParagraph: `KitchenAid and Whirlpool serials decode identically. Maytag and Amana appliances also use the same format. If you have a KitchenAid stand mixer, note that these are built to last 25+ years — knowing the age helps you plan for motor brush replacements and other maintenance items.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'Maytag', slug: 'maytag' },
      ]}
      faq={[
        { question: 'How do I find the serial number on a KitchenAid stand mixer?', answer: 'On KitchenAid stand mixers, the serial number is on a label on the bottom of the mixer base. Tilt the mixer back carefully to find the label.' },
        { question: 'How long does a KitchenAid stand mixer last?', answer: 'KitchenAid stand mixers are legendary for longevity — many last 25-50+ years with basic maintenance. The motors are built to handle heavy use. Gear grease replacement every 10-15 years is the main maintenance item.' },
      ]}
    />
  )
}
