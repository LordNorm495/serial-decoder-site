import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Kenmore Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Kenmore appliance serial number to find manufacture year and month. Most Kenmore appliances are made by Whirlpool. Free decoder tool.',
}

const brand = getBrandBySlug('kenmore')!

export default function KenmoreDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Most Kenmore appliances are manufactured by Whirlpool and use the Whirlpool serial format. Position 2 = year letter, Position 3 = month letter. Year letter sequence: F=1996, G=1997, H=1998, J=1999, K=2000...E=2016, then F=2017 again. Month letters: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec. Note: Kenmore also had models made by LG, GE, and Frigidaire, which use different formats.`}
      formatExamples={[
        { serial: 'CTK123456', explanation: 'Position 2 "T" = 2007 or 2018; position 3 "K" = October. Manufactured October 2007 or October 2018.' },
        { serial: 'XKG123456', explanation: 'Position 2 "K" = 2000 or 2021; position 3 "G" = July. Manufactured July of that year.' },
        { serial: 'DXB123456', explanation: 'Position 2 "X" = 2010; position 3 "B" = February. Manufactured February 2010.' },
      ]}
      whereToFind={[
        'Refrigerator: inside the fresh food compartment on the interior wall or behind a crisper drawer',
        'Washer: inside the door opening or on the back panel',
        'Dryer: inside the door opening or on the back panel',
        'Dishwasher: inside the door on the left side panel',
        'Range/oven: inside the storage drawer or on the door frame',
      ]}
      content={{
        intro: 'Kenmore is Sears\' house brand, with most appliances manufactured by Whirlpool. Decode your Kenmore serial number to find the manufacture year and month — helpful for warranty claims and service decisions.',
        howItWorks: `Kenmore is a private-label brand owned by Sears (now Transform Holdco). Unlike most brands, Kenmore appliances were manufactured by various OEMs depending on the product line and era. The majority of Kenmore washing machines, dryers, refrigerators, and dishwashers were made by Whirlpool Corporation, which is why the Whirlpool serial format applies to most Kenmore appliances.

However, some Kenmore products were made by LG, GE, Frigidaire, or other manufacturers. The first three digits of the Kenmore model number (not the serial) often identify the OEM manufacturer: 110, 106, 107, 198, and 665 typically indicate Whirlpool; 796 indicates LG; 253 indicates Frigidaire.

For Whirlpool-made Kenmore units, the serial number places the year letter in position 2 and the month letter in position 3. The year letter cycles through a defined set starting from F=1996. The month uses letters A through M (skipping I), where J=September, K=October, L=November, M=December.`,
        useCases: `Kenmore serial decoding helps former Sears appliance owners verify warranty status (especially important since Kenmore warranties are now handled through third parties), determine appliance age for repair vs. replace decisions, and find compatible replacement parts. Many Kenmore appliances share parts with Whirlpool-branded models, making age identification critical for sourcing the right components.`,
        tipsParagraph: `If this decoder gives unexpected results for your Kenmore appliance, it may have been manufactured by LG, GE, or Frigidaire instead of Whirlpool. Check your model number's first three digits to identify the OEM and use the appropriate decoder. For Whirlpool-made Kenmore units (model prefix 110, 106, 665), this decoder is accurate.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'Maytag', slug: 'maytag' },
        { name: 'Roper', slug: 'roper' },
      ]}
      faq={[
        { question: 'Who makes Kenmore appliances?', answer: 'Most Kenmore appliances are made by Whirlpool Corporation. Some are made by LG (model prefix 796), Frigidaire (prefix 253), or GE. Check your model number prefix to identify the manufacturer.' },
        { question: 'Can I use Whirlpool parts in my Kenmore appliance?', answer: 'Often yes, if your Kenmore was made by Whirlpool (model prefix 110, 106, 107, etc.). The serial number manufacture date helps you find the right part by confirming the production year.' },
        { question: 'How old is my Kenmore appliance?', answer: 'Enter your serial number above to find the manufacture year and month. The age is calculated automatically based on the current year.' },
      ]}
    />
  )
}
