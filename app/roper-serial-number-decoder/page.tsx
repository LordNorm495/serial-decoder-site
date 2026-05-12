import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Roper Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Roper appliance serial number to find manufacture year and month. Roper is a Whirlpool value brand. Free serial number decoder.',
}

const brand = getBrandBySlug('roper')!

export default function RoperDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Roper appliances are made by Whirlpool and use the Whirlpool serial format. Position 2 = year letter (F=1996 through E=2016, then cycling: F=2017, G=2018, etc.). Position 3 = month letter (A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec). Example: "XTF123456" — T=2007 or 2018, F=June.`}
      formatExamples={[
        { serial: 'XTF123456', explanation: 'Position 2 "T" = 2007 or 2018; position 3 "F" = June. Manufactured June 2007 or June 2018.' },
        { serial: 'DKB123456', explanation: 'Position 2 "K" = 2000 or 2021; position 3 "B" = February. Manufactured February of that year.' },
        { serial: 'MXH123456', explanation: 'Position 2 "X" = 2010; position 3 "H" = August. Manufactured August 2010.' },
      ]}
      whereToFind={[
        'Washer: inside the door opening, behind the lid, or on the back panel',
        'Dryer: inside the door opening or on the back panel',
        'Dishwasher: inside the door, on the left side panel',
        'Refrigerator: inside the door frame or behind a crisper drawer',
      ]}
      content={{
        intro: 'Roper is Whirlpool\'s value-tier appliance brand, commonly found in entry-level washers, dryers, and dishwashers. Decode your Roper serial number to find the manufacture year and month quickly and for free.',
        howItWorks: `Roper was originally a standalone appliance brand founded in 1892 before being acquired by Whirlpool Corporation in 1989. Today, Roper serves as Whirlpool's entry-level brand, offering basic, no-frills appliances at competitive price points. Because Roper is manufactured by Whirlpool, all Roper appliances use the Whirlpool serial number encoding system.

The Whirlpool serial format is consistent: the second character in the serial number is a year letter drawn from a defined sequence starting with F=1996. The third character is a month letter using a modified alphabet (A through M, skipping I). This system has remained stable since the mid-1990s.

Roper washers and dryers are among the most common entry-level appliances and are known for their straightforward design and ease of repair. The serial number manufacture date is especially useful when sourcing replacement parts, as Roper units often share parts with Whirlpool and Amana-branded appliances.`,
        useCases: `Roper serial decoding is useful for landlords and property managers who need to track appliance ages across multiple units, homeowners deciding whether to repair or replace an older Roper washer or dryer, and repair technicians confirming production date for parts compatibility. Roper appliances are often hand-me-down or secondary units, making age verification particularly important.`,
        tipsParagraph: `Roper, Whirlpool, Maytag, KitchenAid, Amana, and Kenmore (Whirlpool-made) all share the same serial format. Roper appliances are particularly common in rentals and starter homes — this decoder helps you quickly assess age and remaining useful life. The year letter in position 2 is the key data point.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'Amana Appliances', slug: 'amana-appliances' },
        { name: 'Kenmore', slug: 'kenmore' },
      ]}
      faq={[
        { question: 'Is Roper a good appliance brand?', answer: 'Roper is a reliable entry-level brand made by Whirlpool. It\'s designed for basic functionality without premium features. For straightforward washing and drying needs, Roper appliances offer good value and easy repair access.' },
        { question: 'Are Roper and Whirlpool parts interchangeable?', answer: 'Many Roper appliances share parts with Whirlpool and Amana appliances, especially for washers and dryers. The manufacture year from the serial number helps you identify the correct compatible parts.' },
        { question: 'Where is the serial number on a Roper washer?', answer: 'On Roper top-load washers, the serial number label is usually inside the door opening or on the back panel. On front-load models, check inside the door frame.' },
      ]}
    />
  )
}
