import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'JennAir Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your JennAir appliance serial number to find manufacture year and month. JennAir is a premium Whirlpool brand. Free decoder tool.',
}

const brand = getBrandBySlug('jennair')!

export default function JennairDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`JennAir appliances use the Whirlpool serial number format. The second character (position 2) is a year letter and the third character (position 3) is a month letter. Year letters: F=1996 through E=2016, then cycling F=2017, G=2018, etc. Month letters: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec. Example: "KSR123456" — S=2006 (or 2017 in second cycle), R is not a month letter; interpret based on serial length and context.`}
      formatExamples={[
        { serial: 'CSR123456', explanation: 'Position 2 "S" = 2006 or 2017; position 3 "R" is not a standard month. Consult full serial context.' },
        { serial: 'KTF123456', explanation: 'Position 2 "T" = 2007 or 2018; position 3 "F" = June. Manufactured June 2007 or June 2018.' },
        { serial: 'XDC123456', explanation: 'Position 2 "D" = 2015 or 2024; position 3 "C" = March. Manufactured March of that year.' },
      ]}
      whereToFind={[
        'Refrigerator: inside the door on the left or right wall, or behind the crisper drawer',
        'Range/oven: inside the storage drawer, on the door frame, or behind the oven door',
        'Dishwasher: inside the door on the left side panel',
        'Microwave: inside the door frame or on the back panel',
      ]}
      content={{
        intro: 'JennAir is a premium Whirlpool appliance brand known for luxury kitchen appliances. Decode your JennAir serial number to find the exact manufacture year and month — useful for warranty verification and service scheduling.',
        howItWorks: `JennAir is owned by Whirlpool Corporation and manufactured in Whirlpool's facilities alongside KitchenAid, Maytag, and Whirlpool-branded appliances. As a result, JennAir uses the same serial number encoding system as all Whirlpool brands.

The Whirlpool/JennAir encoding places the year letter in the second position of the serial and the month letter in the third position. Year letters cycle through a defined sequence: F=1996, G=1997, H=1998, J=1999, K=2000, L=2001, M=2002, N=2003, P=2004, R=2005, S=2006, T=2007, V=2008, W=2009, X=2010, Y=2011, then A=2012, B=2013, C=2014, D=2015, E=2016, and the cycle repeats from F=2017 onward.

Month letters use a condensed alphabet: A through M, skipping I (so J=September, K=October, L=November, M=December). This system is consistent across all Whirlpool Corporation brands manufactured since the mid-1990s.`,
        useCases: `JennAir serial decoding is valuable for luxury appliance owners verifying warranty coverage (JennAir offers competitive warranties on refrigerators, ranges, and dishwashers), scheduling service appointments, and documenting appliance age when renovating or selling a home. JennAir's premium positioning means repairs can be costly — knowing the age helps you decide between repair and replacement.`,
        tipsParagraph: `JennAir, Whirlpool, KitchenAid, Maytag, Amana, and Roper all use the same Whirlpool serial format. If you have any Whirlpool Corporation appliance, this decoder applies. JennAir is particularly common in high-end kitchen renovations; the serial number is key to verifying the equipment age for real estate disclosure purposes.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'KitchenAid', slug: 'kitchenaid' },
        { name: 'Maytag', slug: 'maytag' },
      ]}
      faq={[
        { question: 'Is JennAir made by Whirlpool?', answer: 'Yes. JennAir is a premium brand owned and manufactured by Whirlpool Corporation. It was acquired by Whirlpool in 1999 and has since been positioned as their luxury kitchen appliance line.' },
        { question: 'Where is the serial number on a JennAir refrigerator?', answer: 'On JennAir refrigerators, the serial number is typically found on a label inside the refrigerator compartment on the left or right interior wall, or behind the bottom crisper drawer.' },
        { question: 'How long do JennAir appliances last?', answer: 'JennAir appliances typically last 10–15 years with proper maintenance. Higher-end models like their built-in refrigerators may last longer. Use the manufacture year to estimate remaining service life.' },
      ]}
    />
  )
}
