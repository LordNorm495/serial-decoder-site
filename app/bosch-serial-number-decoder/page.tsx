import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Bosch Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Bosch appliance serial number to find manufacture year and month. Bosch uses the FD (Fertigungsdatum) date code. Free decoder tool.',
}

const brand = getBrandBySlug('bosch')!

export default function BoschDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Bosch appliances use a Fertigungsdatum (FD) manufacturing date code. Serials may begin with "FD" followed by 4 digits (YYMM), or with a 2-letter plant code followed by 2-digit year and 2-digit month. Examples: "FD8901" = year 1989, month 01 (January 1989). "FD2103" = year 2021, month 03 (March 2021). For serials without "FD", the first two letters are the plant code and the next four digits are YYMM.`}
      formatExamples={[
        { serial: 'FD2103XXXXX', explanation: 'FD prefix, "21" = 2021, "03" = March. Manufactured March 2021.' },
        { serial: 'FD9506XXXXX', explanation: 'FD prefix, "95" = 1995, "06" = June. Manufactured June 1995.' },
        { serial: 'SG1811XXXXX', explanation: 'Plant code "SG", "18" = 2018, "11" = November. Manufactured November 2018.' },
      ]}
      whereToFind={[
        'Dishwasher: inside the door on the left side tub wall, or on the top of the door (visible when open)',
        'Refrigerator: inside the fresh food compartment on the interior wall or in the vegetable drawer',
        'Washer: inside the door frame, often on the tub side',
        'Dryer: inside the door frame or on the back panel',
        'Range/oven: inside the storage drawer or on the door frame',
        'Look for a sticker or plate that begins with "FD" or shows a 2-letter plant code',
      ]}
      content={{
        intro: 'Bosch appliances are renowned for German engineering and reliability. Decode your Bosch serial number using the FD (Fertigungsdatum) date system to find manufacture year, month, and age. Free and instant.',
        howItWorks: `Bosch is part of the BSH Hausgeräte group, a joint venture of Robert Bosch GmbH and Siemens AG. BSH also manufactures Siemens, Gaggenau, Thermador, and Neff appliances, many of which share manufacturing facilities and serial number formats with Bosch.

The Bosch Fertigungsdatum (German for "manufacturing date") code is the key to decoding Bosch serials. Appliances carry an FD code that encodes the year (YY) and month (MM) as a four-digit number. Older Bosch appliances may show the FD code separately on the data plate (e.g., "FD 8901"), while newer models integrate it directly into the serial number string.

For serials starting with "FD", the four digits immediately following encode YYMM. For serials starting with two letters (the plant code), the YYMM appears in positions 3–6. The year is encoded as a two-digit value: years 00–79 map to 2000–2079, while years 80–99 map to 1980–1999.

Bosch dishwashers are particularly well-known in North America and are the most commonly decoded Bosch appliances. The same FD format applies to Bosch washing machines, refrigerators, and cooking appliances.`,
        useCases: `Bosch serial decoding is valuable for warranty claims (Bosch typically offers 1-year limited warranties with optional extended coverage through Bosch Home Connect), finding the right certified service technician, sourcing European-specification parts for imported Bosch appliances, and verifying appliance age for resale or insurance purposes.`,
        tipsParagraph: `Bosch, Thermador, Gaggenau, and Siemens (all BSH brands) use similar FD-based date encoding. If the FD code appears elsewhere on your Bosch appliance's data plate, you can decode it directly: the first two digits after "FD" are the year and the next two are the month. Our decoder handles both formats automatically.`,
      }}
      relatedBrands={[]}
      faq={[
        { question: 'What does "FD" mean in a Bosch serial number?', answer: '"FD" stands for Fertigungsdatum, which is German for "manufacturing date." The four digits following "FD" encode the year (YY) and month (MM) of production.' },
        { question: 'Are Bosch appliances made in Germany?', answer: 'Some Bosch appliances are made in Germany, while others are manufactured in Spain, Poland, Turkey, and China. The plant code in the serial number identifies the manufacturing location, but the FD date format is consistent across all factories.' },
        { question: 'Can I use this decoder for Thermador or Gaggenau appliances?', answer: 'Thermador and Gaggenau are BSH sister brands to Bosch and may use similar FD-based encoding. However, their serial formats can vary. This decoder is optimized for Bosch-branded appliances.' },
      ]}
    />
  )
}
