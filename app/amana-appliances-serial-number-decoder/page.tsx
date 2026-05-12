import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Amana Appliances Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Amana appliance serial number to find manufacture year and month. Amana appliances are a Whirlpool brand. Free decoder for Amana refrigerators, washers, and more.',
}

const brand = getBrandBySlug('amana')!

export default function AmanaAppliancesDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Amana appliances (Whirlpool brand) use the same serial number format as Whirlpool. Position 2 = year letter, Position 3 = month letter. Year: F=1996, G=1997, H=1998, J=1999, K=2000, L=2001, M=2002, N=2003, P=2004, R=2005, S=2006, T=2007, V=2008, W=2009, X=2010, Y=2011, A=2012... Month: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec.`}
      formatExamples={[
        { serial: 'AYK123456', explanation: 'Position 2 "Y" = 2011, Position 3 "K" = October. Manufactured October 2011.' },
        { serial: 'AXG234567', explanation: 'Position 2 "X" = 2010, Position 3 "G" = July. Manufactured July 2010.' },
        { serial: 'AVF345678', explanation: 'Position 2 "V" = 2008, Position 3 "F" = June. Manufactured June 2008.' },
      ]}
      whereToFind={[
        'Refrigerator: Inside on the upper left wall of the fresh food section',
        'Washing machine: Inside the door frame or under the lid',
        'Dryer: Inside the door opening',
        'Important: Do NOT confuse Amana appliances (Whirlpool) with Amana HVAC (Daikin/Goodman) — they are different companies',
      ]}
      content={{
        intro: 'Decode your Amana appliance serial number to find the manufacture year and month. Amana is a Whirlpool Corporation brand — this decoder works for Amana refrigerators, washers, dryers, and ranges.',
        howItWorks: `Amana Corporation, founded in 1934 in Middle Amana, Iowa, was an early pioneer of the home refrigerator and the inventor of the microwave oven (Amana's Radarange in 1967). Amana was acquired by Maytag in 1999 and then by Whirlpool in 2006.

As a Whirlpool brand, Amana appliances now use Whirlpool's serial number encoding: position 2 for year (letter) and position 3 for month (letter). Amana is positioned as a value brand within the Whirlpool family, targeting cost-conscious consumers who want reliable basic functionality.

Important note: Amana appliances are completely separate from Amana HVAC. Amana HVAC is owned by Daikin/Goodman, while Amana appliances are owned by Whirlpool. They use different serial number formats.`,
        useCases: `Amana serial decoding helps with warranty verification, repair vs. replace decisions, and insurance documentation. Amana's value positioning means repairs can sometimes be economical even on older units.`,
        tipsParagraph: `If you're not sure whether you have Amana appliances or Amana HVAC, the product type is the giveaway: refrigerators, washers, and kitchen appliances are Whirlpool's Amana. Furnaces, air conditioners, and heat pumps are Daikin's Amana HVAC.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'Maytag', slug: 'maytag' },
      ]}
      faq={[
        { question: 'Is Amana appliances the same as Amana HVAC?', answer: 'No. Amana appliances is owned by Whirlpool Corporation. Amana HVAC is owned by Daikin Industries (via Goodman). They are completely separate companies with different serial number formats.' },
        { question: 'Who invented the microwave oven?', answer: 'The commercial microwave oven was developed by Raytheon, but Amana Corporation launched the first popular home microwave, the "Radarange," in 1967.' },
      ]}
    />
  )
}
