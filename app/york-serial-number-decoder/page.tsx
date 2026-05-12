import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'York Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your York HVAC serial number to find manufacture year and month. Works for York air conditioners, heat pumps, and furnaces. Free decoder with full format guide.',
}

const brand = getBrandBySlug('york')!

export default function YorkDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`York (Johnson Controls) uses a serial number format where the first character is a decade letter, the second character is a year digit, and characters 3-4 encode the month (01-12). Decade letters: H = 1990s, J = 2000s, K = 2010s, L = 2020s. Example: "K5031234567" = K (2010s) + 5 (5th year) = 2015, month 03 = March 2015. The same format applies to Heil, Coleman, and other Johnson Controls brands.`}
      formatExamples={[
        { serial: 'J5031234567', explanation: 'J = 2000s, 5 = 5th year = 2005, 03 = March. Manufactured in March 2005.' },
        { serial: 'K2081234567', explanation: 'K = 2010s, 2 = 2nd year = 2012, 08 = August. Manufactured in August 2012.' },
        { serial: 'H9121234567', explanation: 'H = 1990s, 9 = 9th year = 1999, 12 = December. Manufactured in December 1999.' },
        { serial: 'L1031234567', explanation: 'L = 2020s, 1 = 1st year = 2021, 03 = March. Manufactured in March 2021.' },
      ]}
      whereToFind={[
        'Outdoor unit: Data plate on the side or back of the condenser unit',
        'Furnace: Inside the blower compartment or on the burner compartment side panel',
        'Air handler: On a sticker on the exterior or accessible panel',
        'York labels show model and serial side by side — serial usually begins with a letter (H, J, K, or L)',
        'On packaged units (rooftop), check the side panel near the electrical connections',
      ]}
      content={{
        intro: 'Decode your York serial number to find the manufacture year, month, and age. Our tool works for all York residential and commercial HVAC systems including LX, TM9V, and Affinity series.',
        howItWorks: `York is one of America's oldest HVAC brands, founded in 1874 in York, Pennsylvania. Today it operates under Johnson Controls, one of the world's largest HVAC manufacturers. Johnson Controls also owns several other HVAC brands including Coleman, Heil, and Champion — all of which use the same serial number format.

York's serial number format is notable for encoding the month of manufacture rather than the week, which gives you slightly less precision but more readable date information. The first character identifies the decade using a letter sequence that begins at H:
- H = 1990s (H0 = 1990, H9 = 1999)
- J = 2000s (J0 = 2000, J9 = 2009)
- K = 2010s (K0 = 2010, K9 = 2019)
- L = 2020s (L0 = 2020, L9 = 2029)

The second character (0-9) identifies the year within that decade. Characters three and four give the month (01-12). So "K5031234567" means: decade K (2010s) + year 5 = 2015, month 03 = March.

York's system is used across the entire Johnson Controls HVAC portfolio, making it one of the most widely applicable serial number formats in North America. York, Heil, Coleman, Champion, and Luxaire units can all be decoded using this same method.`,
        useCases: `York serial number decoding is valuable for:

Contractor Assessments: HVAC technicians can quickly determine if a unit is worth repairing by knowing its age. York technicians often recommend replacement for units over 15 years old.

Home Sale Disclosures: Many states require sellers to disclose HVAC age. The York serial decoder gives you this information instantly.

Refrigerant Type: York units from before 2010 typically use R-22 refrigerant. After 2010, they transitioned to R-410A. Knowing the manufacture year helps predict refrigerant costs.

Extended Warranty Evaluation: Third-party extended warranty companies use equipment age to determine eligibility. York units over 10 years old may not qualify for new extended warranties.`,
        tipsParagraph: `Remember that Coleman, Heil, Luxaire, and Champion HVAC units — all Johnson Controls brands — use exactly the same serial number format as York. If you have one of these brands, you can use this York decoder or visit their dedicated pages. The serial number on York units is typically 12-13 digits long and always begins with H, J, K, or L for equipment made from the 1990s onward.`,
      }}
      relatedBrands={[
        { name: 'Heil', slug: 'heil' },
        { name: 'Coleman HVAC', slug: 'coleman' },
      ]}
      faq={[
        {
          question: 'What does "K5" mean at the start of a York serial number?',
          answer: 'K = 2010s decade, 5 = 5th year of the decade = 2015. A serial starting with "K5" was manufactured in 2015.',
        },
        {
          question: 'Do Heil and Coleman use the same format as York?',
          answer: 'Yes. Heil, Coleman, Luxaire, Champion, and York are all Johnson Controls brands and use identical serial number formats. This decoder works for all of them.',
        },
        {
          question: 'How old is too old for a York HVAC unit?',
          answer: 'Most HVAC professionals recommend considering replacement when a York unit is 12-15 years old, especially if it requires significant repair. York units can last 20+ years with excellent maintenance.',
        },
      ]}
    />
  )
}
