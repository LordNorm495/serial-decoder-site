import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Daikin Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Daikin HVAC serial number to find manufacture year and week. Works for Daikin North America units using the Goodman format. Free decoder tool.',
}

const brand = getBrandBySlug('daikin')!

export default function DaikinDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Daikin North America (which owns Goodman) uses the same serial number format as Goodman for units manufactured in North America: the first 4 digits encode YYWW (year + week). Example: "1103ZZZZZZZ" = year 11 = 2011, week 03 = third week of January 2011. Note: Daikin units manufactured in Japan for the US market may use different formats.`}
      formatExamples={[
        { serial: '1103ZZZZZZZ', explanation: 'First 4 digits "1103": Year 11 = 2011, Week 03 = 3rd week of January 2011.' },
        { serial: '1948XXXXXXX', explanation: 'First 4 digits "1948": Year 19 = 2019, Week 48 = late November 2019.' },
        { serial: '2215YYYYYYY', explanation: 'First 4 digits "2215": Year 22 = 2022, Week 15 = mid-April 2022.' },
      ]}
      whereToFind={[
        'Outdoor unit: Data plate on the back or side of the condenser',
        'Air handler: Side panel exterior sticker',
        'Daikin units manufactured in Houston, TX use the same labeling as Goodman',
      ]}
      content={{
        intro: 'Decode your Daikin HVAC serial number to find manufacture year, week, and age. This decoder works for Daikin USA units manufactured at the Goodman facility in Houston, Texas.',
        howItWorks: `Daikin Industries, Ltd. is a Japanese multinational corporation and the world's largest HVAC manufacturer. In 2012, Daikin acquired Goodman Manufacturing, giving it a major foothold in the North American HVAC market.

For units manufactured at Daikin/Goodman's North American facilities (primarily the massive Houston, Texas plant), the serial number format follows Goodman's YYWW convention: the first four digits are the two-digit year followed by the two-digit week of manufacture.

Daikin also sells ductless mini-split and VRV commercial systems that may use different serial number formats from their Japanese manufacturing operations.`,
        useCases: `Daikin serial decoding helps with warranty claims, energy efficiency assessments, and planning refrigerant transitions. Daikin has been a leader in R-32 refrigerant adoption, which has lower global warming potential than R-410A.`,
        tipsParagraph: `Daikin and Goodman use identical serial formats for North American manufactured equipment. Amana HVAC is also the same. For Daikin ductless systems (mini-splits), the format may differ — contact Daikin support at 1-855-324-5461 for those units.`,
      }}
      relatedBrands={[
        { name: 'Goodman', slug: 'goodman' },
        { name: 'Amana HVAC', slug: 'amana' },
      ]}
      faq={[
        { question: 'Is Daikin the same as Goodman?', answer: 'Daikin owns Goodman. North American Daikin units are manufactured in Goodman facilities and use the same serial format.' },
        { question: 'How long do Daikin HVAC units last?', answer: 'Daikin units are known for excellent build quality. They typically last 15-20+ years, often outperforming the industry average.' },
      ]}
    />
  )
}
