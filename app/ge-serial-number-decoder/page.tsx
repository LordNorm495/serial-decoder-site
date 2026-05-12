import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'GE Appliances Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your GE appliance serial number to find manufacture year and month. Works for GE refrigerators, washers, dryers, dishwashers, and ranges. Free decoder tool.',
}

const brand = getBrandBySlug('ge')!

export default function GEDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`GE Appliances use a serial number format where position 2 (second character) = month (A-L = Jan-Dec, skipping I) and position 3 (third character) = year letter. Year letter sequence: R=1997, S=1998, T=1999, V=2000, Z=2001, A=2002, B=2003, C=2004, D=2005, E=2006, F=2007, G=2008, H=2009, J=2010, K=2011, L=2012, M=2013, N=2014, P=2015, then cycles back: R=2016, S=2017, T=2018, V=2019, Z=2020, A=2021... Note letters I, O, Q, U are skipped.`}
      formatExamples={[
        { serial: 'ZF123456', explanation: 'Position 2 "F" = June (month), Position 3 "1" — check: GE uses letters for year. Example reformat: ZFG123456 where F=June, G=2008.' },
        { serial: 'XAG345678', explanation: 'Position 2 "A" = January, Position 3 "G" = 2008 (first cycle) or 2024 (if in second cycle). Most likely 2008.' },
        { serial: 'XDM567890', explanation: 'Position 2 "D" = April, Position 3 "M" = 2013. Manufactured in April 2013.' },
        { serial: 'XBR234567', explanation: 'Position 2 "B" = February, Position 3 "R" = 1997 or 2016. Given typical appliance age, likely 2016.' },
      ]}
      whereToFind={[
        'Refrigerator: On the interior wall of the fresh food compartment, upper left or right side',
        'Dishwasher: On the left side of the door when the door is open, or on the door frame',
        'Range/Oven: In the storage drawer at the bottom, or on a sticker behind the lower drawer',
        'Washing machine: On the back of the machine or inside the lid (top-loaders)',
        'Dryer: On the back panel or inside the door opening',
        'GE labels are usually silver with black text, showing "Serial Number" or "S/N"',
      ]}
      content={{
        intro: 'Decode your GE appliance serial number to find the manufacture year and month. Our tool works for all GE Appliances including Profile, Café, and Monogram series refrigerators, dishwashers, washers, dryers, and ranges.',
        howItWorks: `GE Appliances has a rich history as one of America's most iconic appliance brands, stretching back to the early 20th century. In 2016, Haier — a Chinese multinational appliance manufacturer — acquired GE Appliances from General Electric, though the brand continues operating from its Louisville, Kentucky headquarters.

GE Appliances uses a distinctive serial number format where the second character identifies the month and the third character identifies the year — essentially position 2 and position 3 of the serial. This is slightly unusual compared to other brands where year typically comes before month.

The month is encoded as a letter A through L (skipping I), mapping to January through December. The year uses a different letter sequence starting with R for 1997, then proceeding through the alphabet with gaps (no I, O, Q, U), then cycling back when needed.

The year sequence includes some duplicate letters (R appeared in both 1997 and 2016 in the cycle) which can create ambiguity for older units. However, since most appliances in service today were manufactured after 2000, the decoder can typically determine the correct year based on which cycle is more likely.

GE's appliance portfolio includes the standard GE brand, GE Profile (higher-end features), GE Café (premium), GE Monogram (luxury professional), Hotpoint (value), and several other sub-brands. Hotpoint units use the same serial number format as GE Appliances.`,
        useCases: `GE serial number decoding is useful for:

Appliance Age for Warranty Claims: GE standard warranty is 1 year. Extended warranties and service plans from Haier/GE Appliances use the manufacture date to establish eligibility.

Smart Appliance Compatibility: GE's SmartHQ connected appliance platform requires compatible equipment. Knowing your appliance's age helps determine WiFi connectivity compatibility.

Recall Safety Checks: GE occasionally issues safety recalls on specific appliance models and production date ranges. Knowing your exact manufacture date helps verify if your unit is affected.

Professional Resale: When selling used GE appliances, buyers want to know the age. The serial decode gives you verifiable manufacture date information.`,
        tipsParagraph: `GE's year letter sequence can be tricky because some letters appear twice in the cycle. If the decoded year seems too far in the past (like 1997), consider that it may be from the more recent 2016+ cycle. Hotpoint (a GE brand) uses the same format. For GE Profile, GE Café, and GE Monogram — these are all GE Appliances products with the same serial format. Also note that after the Haier acquisition, GE Appliances still uses the same serial encoding system.`,
      }}
      relatedBrands={[
        { name: 'Hotpoint', slug: 'hotpoint' },
      ]}
      faq={[
        {
          question: 'How do I read the year from a GE serial number?',
          answer: 'Look at the THIRD character of the serial number. It\'s a letter that maps to a year: R=1997/2016, S=1998/2017, T=1999/2018, V=2000/2019, A=2002/2021, etc. The second character gives you the month (A=Jan through L=Dec).',
        },
        {
          question: 'Is Hotpoint the same as GE Appliances?',
          answer: 'Hotpoint is a budget brand owned by GE Appliances (Haier). Hotpoint and GE units share the same serial number format.',
        },
        {
          question: 'How long do GE refrigerators last?',
          answer: 'GE refrigerators typically last 10-20 years. Side-by-side models average 14-17 years. French door models average 10-15 years. Top-freezer models often last the longest.',
        },
        {
          question: 'My GE appliance serial starts with numbers — is that right?',
          answer: 'Some GE commercial appliances use different formats. For standard residential GE appliances, the serial typically starts with two letters. If yours starts with numbers, it may be a different product category or an older format.',
        },
      ]}
    />
  )
}
