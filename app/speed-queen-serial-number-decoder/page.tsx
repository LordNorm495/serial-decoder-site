import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Speed Queen Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Speed Queen washer or dryer serial number to find manufacture year and week. Free Speed Queen serial number decoder tool.',
}

const brand = getBrandBySlug('speed-queen')!

export default function SpeedQueenDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Speed Queen serial numbers encode the manufacture date in the first four digits. The first two digits are the 2-digit year (e.g., "18" = 2018) and the next two digits are the manufacturing week (01–52). Example: "1807XXXXX" = year 2018, week 07 (mid-February 2018). The remaining characters are the production sequence.`}
      formatExamples={[
        { serial: '1807XXXXX', explanation: 'First two digits "18" = 2018, digits 3-4 "07" = week 7 (mid-February). Manufactured February 2018.' },
        { serial: '2135XXXXX', explanation: 'First two digits "21" = 2021, digits 3-4 "35" = week 35 (late August). Manufactured August 2021.' },
        { serial: '1452XXXXX', explanation: 'First two digits "14" = 2014, digits 3-4 "52" = week 52 (late December). Manufactured December 2014.' },
      ]}
      whereToFind={[
        'Top-load washer: inside the lid opening, on the tub rim or cabinet wall',
        'Front-load washer: inside the door frame on the tub side',
        'Commercial washer: on the rear panel or inside the coin door area',
        'Dryer: inside the door opening or on the back panel',
        'Speed Queen serial numbers typically begin with two digits (the year)',
      ]}
      content={{
        intro: 'Speed Queen is legendary for building the most durable residential and commercial washers and dryers available. Decode your Speed Queen serial number to find the exact manufacture year and week — crucial for warranty claims and parts sourcing.',
        howItWorks: `Speed Queen is manufactured by Alliance Laundry Systems, headquartered in Ripon, Wisconsin. Unlike many appliance brands that moved manufacturing overseas, Speed Queen continues to produce the majority of its products in the United States. This American-made heritage is central to the brand's identity and its reputation for extreme durability — Speed Queen washers are rated for 25-year lifespans.

The Speed Queen serial number format is refreshingly simple: the first two digits give the two-digit year, and the next two digits give the manufacturing week (01–52). There is no ambiguity about decade — the year digits uniquely identify the production year within a clear range. Week 01 is early January, and week 52 is late December.

Speed Queen serials beginning with digits higher than the current year are likely older units using a different encoding. Commercial Speed Queen equipment may use a slightly different serial format than residential models — if this decoder gives unexpected results, consult the Alliance Laundry Systems documentation for your specific model.`,
        useCases: `Speed Queen serial decoding is important for warranty verification (Speed Queen offers industry-leading 5-year limited parts and labor warranties, with some models offering extended coverage), tracking commercial laundry equipment for lease or maintenance contracts, and determining parts compatibility. Because Speed Queen is known for long service lives, serial decoding helps distinguish between generations of parts that may not be interchangeable.`,
        tipsParagraph: `Speed Queen's simple year+week format makes it one of the easiest appliance serial numbers to decode manually. The brand's focus on durability means you may be decoding serials for units that are 10, 15, or even 20+ years old — all of which follow the same format. Commercial Speed Queen units in laundromats and apartment buildings use the same encoding.`,
      }}
      relatedBrands={[]}
      faq={[
        { question: 'Why are Speed Queen washers so expensive?', answer: 'Speed Queen washers are built to commercial-grade standards with heavy-duty components designed to last 25 years. The higher upfront cost is offset by lower lifetime repair costs and superior durability compared to consumer-grade alternatives.' },
        { question: 'Is Speed Queen made in the USA?', answer: 'Yes. Speed Queen is manufactured by Alliance Laundry Systems in Ripon, Wisconsin. It is one of the few major appliance brands that maintains significant US manufacturing operations.' },
        { question: 'What does week 35 mean in a Speed Queen serial?', answer: 'Week 35 corresponds to approximately late August or early September. Speed Queen uses ISO-style week numbering where week 1 is early January and week 52 is late December.' },
      ]}
    />
  )
}
