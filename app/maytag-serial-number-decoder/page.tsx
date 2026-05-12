import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Maytag Serial Number Decoder — Find Manufacture Date & Age',
  description: 'Decode your Maytag appliance serial number to find manufacture year and month. Maytag is a Whirlpool brand. Free decoder for Maytag washers, dryers, refrigerators, and more.',
}

const brand = getBrandBySlug('maytag')!

export default function MaytagDecoderPage() {
  return (
    <BrandPage
      brand={brand}
      formatDescription={`Maytag is a Whirlpool Corporation brand and uses the same serial number format. Position 2 = year letter, Position 3 = month letter. Year sequence: F=1996, G=1997, H=1998, J=1999, K=2000, L=2001, M=2002, N=2003, P=2004, R=2005, S=2006, T=2007, V=2008, W=2009, X=2010, Y=2011, A=2012, B=2013, C=2014, D=2015, E=2016, F=2017... Month: A=Jan through M=Dec (skip I).`}
      formatExamples={[
        { serial: 'MXT123456', explanation: 'Position 2 "X" = 2010, Position 3 "T" — T is not a month letter (checking: A-M skip I... T is not in the month list). Verify your serial — month letters are only A-M skipping I.' },
        { serial: 'XXG567890', explanation: 'Position 2 "X" = 2010, Position 3 "G" = July. Manufactured July 2010.' },
        { serial: 'XSA234567', explanation: 'Position 2 "S" = 2006, Position 3 "A" = January. Manufactured January 2006.' },
        { serial: 'XVK890123', explanation: 'Position 2 "V" = 2008, Position 3 "K" = October. Manufactured October 2008.' },
      ]}
      whereToFind={[
        'Washing machine: Inside the door frame or behind the lower panel',
        'Dryer: Inside the door opening or on the back panel',
        'Refrigerator: Inside the fresh food compartment on the upper left wall',
        'Dishwasher: On the interior door edge when fully open',
        'Range: In the storage drawer or on the back of the appliance',
      ]}
      content={{
        intro: 'Decode your Maytag appliance serial number to find the manufacture year and month. Maytag is a Whirlpool Corporation brand — our decoder works for all Maytag washers, dryers, refrigerators, and dishwashers.',
        howItWorks: `Maytag Corporation, founded in 1893 in Newton, Iowa, was one of America's most trusted appliance brands. Maytag was acquired by Whirlpool Corporation in 2006 after a bidding war, making it a Whirlpool subsidiary.

As a Whirlpool brand, Maytag uses the same serial number encoding system. The second character is the year letter and the third character is the month letter, both using the Whirlpool alpha code system.

Maytag is positioned as a durable, dependable brand — the "Maytag repairman" who has nothing to do became a famous advertising campaign. Maytag appliances target consumers who prioritize reliability over advanced features.`,
        useCases: `Maytag serial decoding helps with warranty claims, repair vs. replace decisions (Maytag washer and dryer repairs are often economical given their durable build), and home sale disclosures.`,
        tipsParagraph: `Maytag, Whirlpool, KitchenAid, and Amana appliances all use the same serial format. Maytag appliances manufactured after the 2006 Whirlpool acquisition may be closely related to Whirlpool products internally. The Maytag Bravos and Centennial series washing machines were discontinued, but their serials decode with the same system.`,
      }}
      relatedBrands={[
        { name: 'Whirlpool', slug: 'whirlpool' },
        { name: 'KitchenAid', slug: 'kitchenaid' },
      ]}
      faq={[
        { question: 'How long do Maytag washers last?', answer: 'Maytag washing machines are known for durability, typically lasting 10-15 years. Front-load models average slightly less than top-loaders. Maytag\'s Bravos series top-loaders are especially long-lived.' },
        { question: 'Is Maytag still made in the USA?', answer: 'Some Maytag products are manufactured in the US, including certain washing machines and dryers at their Clyde, Ohio facility. However, many Maytag products are now manufactured in Mexico and other countries.' },
      ]}
    />
  )
}
