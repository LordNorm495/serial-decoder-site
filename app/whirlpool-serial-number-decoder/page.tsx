import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Whirlpool Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Whirlpool appliance serial number to find manufacture year and month. Works for Whirlpool refrigerators, washers, dryers, dishwashers, and more. Free tool.',
}

const brand = getBrandBySlug('whirlpool')!

export default function WhirlpoolDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Whirlpool appliances encode the manufacture year in position 2 (second character, index 1) and the month in position 3 (third character, index 2) using letter codes. Year letters: F=1996, G=1997, H=1998, J=1999, K=2000, L=2001, M=2002, N=2003, P=2004, R=2005, S=2006, T=2007, V=2008, W=2009, X=2010, Y=2011, A=2012, B=2013, C=2014, D=2015, E=2016, F=2017, G=2018, H=2019, J=2020, K=2021... Month letters: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec.`}
      formatExamples={[
        { serial: 'CXR345678', explanation: 'Position 2 "X" = 2010, Position 3 "R" — R is not a month letter; check carefully. Format: position 2 year, position 3 month.' },
        { serial: 'CSR123456', explanation: 'Position 2 "S" = 2006 (or 2018 in second cycle), Position 3 "R" — checking: R is not in the month list. Re-check: month letter must be A-M (skipping I).' },
        { serial: 'XYR234567', explanation: 'Position 2 "Y" = 2011, Position 3 — month lookup applies.' },
        { serial: 'XSF098765', explanation: 'Position 2 "S" = 2006, Position 3 "F" = June. Manufactured June 2006.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside the fresh food compartment, on the wall near the top or on the door frame',
        'Washing machine: Inside the door opening on the door frame, or behind the door seal on front-loaders',
        'Dryer: Inside the door on the door frame, or on the back panel',
        'Dishwasher: Inside the door on the top of the door panel, visible when door is open',
        'Oven/Range: In the storage drawer area, on the back panel, or behind the anti-tip bracket',
        'The serial number label will say "Serial" or "Ser. No." — it is different from the Model number',
      ]}
      content={{
        intro: 'Decode your Whirlpool appliance serial number to find the manufacture year and month. Works for all Whirlpool refrigerators, washing machines, dryers, dishwashers, and ranges.',
        howItWorks: `Whirlpool Corporation is the world's largest home appliance manufacturer, headquartered in Benton Harbor, Michigan. Founded in 1911, Whirlpool produces appliances under its own name and owns KitchenAid, Maytag, Amana (appliances), JennAir, and several other brands. All of these brands use the same serial number date-encoding system.

The Whirlpool serial number format is unique because it uses letters for both the year and month, creating a compact but powerful encoding system. The second character (position 2) encodes the year using a letter sequence that started at F=1996. The third character encodes the month using letters A through M (skipping I).

The year letter sequence skips letters I, O, Q, and U to avoid confusion with numbers 1, 0, 9, and 0. The sequence cycles approximately every 20 years, which means some letter values repeat. For example, "F" could mean 1996 or 2017. To determine which cycle applies, consider the appliance's apparent age and condition.

The month letter sequence maps as follows: A=January, B=February, C=March, D=April, E=May, F=June, G=July, H=August, J=September (skipping I), K=October, L=November, M=December.

This same encoding system is used by KitchenAid, Maytag, Amana appliances, JennAir, and other Whirlpool subsidiaries. If you have any of these brands, this decoder will work for your unit.`,
        useCases: `Knowing your Whirlpool appliance's age matters for:

Extended Warranty Decisions: Whirlpool offers standard 1-year limited warranties. After that, purchasing a home warranty or extended warranty depends heavily on the appliance's age. Units over 8 years old may not qualify.

Major Repair Decisions: When a refrigerator compressor or washing machine motor fails, the repair vs. replace calculation depends on the appliance's age. Repairs on units over 10 years old rarely make financial sense.

Home Sale Disclosures: Buyers expect to know the age of major appliances. The serial number decode gives you precise manufacture date information for disclosure documents.

Energy Star Upgrades: Whirlpool has made significant efficiency improvements in recent years. Knowing your unit's age helps quantify potential savings from upgrading to current Energy Star models.

Parts Sourcing: Whirlpool maintains parts availability for about 7-10 years after discontinuing a model. Knowing your unit's age helps predict parts availability for repairs.`,
        tipsParagraph: `KitchenAid, Maytag, and Amana appliances all use the exact same serial number format as Whirlpool. If you have one of these brands, you can use this decoder or visit their dedicated pages. One common confusion: the Amana appliance brand (Whirlpool) is completely separate from the Amana HVAC brand (Goodman/Daikin). Always check your brand carefully before selecting.`,
      }}
      relatedBrands={[
        { name: 'KitchenAid', slug: 'kitchenaid' },
        { name: 'Maytag', slug: 'maytag' },
      ]}
      faq={[
        {
          question: 'What does position 2 "X" mean in a Whirlpool serial number?',
          answer: '"X" in position 2 represents the year 2010 (first cycle) or 2030 (if applicable). For most appliances in service today, X = 2010.',
        },
        {
          question: 'Do KitchenAid and Maytag use the same format?',
          answer: 'Yes. All Whirlpool Corporation brands — KitchenAid, Maytag, Amana appliances, JennAir — use the same serial number year/month encoding. This decoder works for all of them.',
        },
        {
          question: 'How long should a Whirlpool refrigerator last?',
          answer: 'Whirlpool refrigerators typically last 10-18 years. French door and side-by-side models may have shorter lifespans (10-14 years) due to more complex mechanisms.',
        },
        {
          question: 'My Whirlpool washer serial starts with "C" — what year is that?',
          answer: '"C" in position 2 represents 2014. So a Whirlpool washer with a serial starting with "XC..." was manufactured in 2014. Check position 3 for the month.',
        },
      ]}
    />
  )
}
