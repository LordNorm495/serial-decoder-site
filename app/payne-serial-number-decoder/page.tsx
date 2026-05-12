import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Payne Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Payne HVAC serial number to find manufacture year and week. Payne uses the Carrier format. Free serial number decoder with complete guide.',
}

const brand = getBrandBySlug('payne')!

export default function PayneDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Payne is a Carrier value brand and uses Carrier's serial number format. A letter at approximately position 4 encodes the year: A=2000, B=2001, C=2002, D=2003, E=2004, F=2005, G=2006, H=2007, J=2008, K=2009, L=2010, M=2011, N=2012, P=2013, R=2014, S=2015, T=2016, V=2017, W=2018, X=2019, Y=2020 (then A=2021 cycle restarts). Digits before the letter = week of manufacture.`}
      formatExamples={[
        { serial: '1510G44321', explanation: 'Week 15, Year letter G = 2006. Manufactured in week 15 (April) of 2006.' },
        { serial: '0318V55555', explanation: 'Week 03, Year letter V = 2017. Manufactured in January 2017.' },
      ]}
      whereToFind={[
        'Outdoor unit: Side or back panel metal data plate',
        'Air handler or furnace: Inside access panel',
        'Serial number starts with week digits followed by a letter year code',
      ]}
      content={{
        intro: 'Decode your Payne heating and cooling serial number to find manufacture year and week. Payne is a Carrier Corporation value brand using the same serial number format.',
        howItWorks: `Payne is a value-tier HVAC brand sold exclusively through Carrier's authorized dealer network. Payne equipment is manufactured in the same Carrier facilities and uses Carrier's proven technology at a lower price point, making quality comfort systems accessible to budget-conscious homeowners.

Like Bryant, Payne uses Carrier's serial number format exactly. The year letter (A-Y, skipping I, O, Q, U) appears after the week digits and cycles every 21 years.`,
        useCases: `Payne serial number decoding helps with warranty claims, repair vs. replace decisions, and determining refrigerant type. Payne units manufactured before 2010 use R-22 refrigerant, while newer units use R-410A.`,
        tipsParagraph: `Payne serial numbers decode identically to Carrier and Bryant. All three brands are Carrier Corporation products with the same manufacturing standards and serial formats.`,
      }}
      relatedBrands={[
        { name: 'Carrier', slug: 'carrier' },
        { name: 'Bryant', slug: 'bryant' },
      ]}
      faq={[
        { question: 'Is Payne made by Carrier?', answer: 'Yes. Payne is a value brand manufactured by Carrier Corporation. The units are made in Carrier facilities and use the same serial number encoding.' },
        { question: 'How long does a Payne HVAC unit last?', answer: 'Payne units typically last 12-18 years, slightly less than premium Carrier models due to their economy-tier construction, but still comparable to industry averages.' },
      ]}
    />
  )
}
