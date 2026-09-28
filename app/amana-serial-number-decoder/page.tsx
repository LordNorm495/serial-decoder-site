import type { Metadata } from 'next'
import BrandPage from '@/components/BrandPage'
import { getBrandBySlug } from '@/lib/brands'

export const metadata: Metadata = {
  title: "Amana HVAC Serial Number Decoder \u2014 Manufacture Month & Year",
  description: "Decode the supported ten-digit Amana HVAC HVAC serial format to estimate manufacture year and month. Includes examples, limitations, and manufacturer references.",
}

export default function DecoderPage() {
  return <>
    <BrandPage
      brand={getBrandBySlug('amana')!}
      formatDescription="Supported format: YYMM followed by six production digits. The first two digits indicate the year; the next two indicate the month (01–12), not the week. Check the manufacturer reference below and confirm that your equipment uses this format."
      formatExamples={[{"serial": "1306123456", "explanation": "Illustrative example: 13 = 2013; 06 = June. Estimated manufacture date: June 2013."}, {"serial": "2208123456", "explanation": "Illustrative example: 22 = 2022; 08 = August. Estimated manufacture date: August 2022."}]}
      whereToFind={['Look for the rating plate on the outdoor unit cabinet or the accessible label on the indoor unit.', 'Copy the complete field marked SERIAL or S/N, and record the MODEL separately.', 'Photograph the label so you can check ambiguous digits and consult the manufacturer.']}
      content={{"intro": "Enter the complete serial number from your Amana HVAC equipment label. This tool estimates the manufacture month and year for the supported ten-digit numeric HVAC format. For a refrigerator, washer, dryer, or other household appliance, use the separate Amana Appliances decoder.", "howItWorks": "Read the first four digits as YYMM: two year digits followed by two month digits. For example, 1306 means June 2013. The remaining six digits identify the individual unit and are not used here to determine its age. The examples below are illustrative, not records of actual equipment.\n\nThe tool accepts ten numeric digits, rejects month codes outside 01\u201312, and rejects dates in the future. It interprets 80\u201399 as 1980\u20131999 and 00\u201379 as 2000\u20132079, subject to the future-date check. This century choice is an estimate; confirm older equipment against its model and records. A matching pattern alone does not establish that a serial is genuine.", "useCases": "Use the result to label an equipment inventory, compare the ages of indoor and outdoor units, or prepare questions for a service technician. Units in one system can have different manufacture dates. Keep a photo of each rating plate and its model number with the result.\n\nManufacture date does not establish installation date, warranty eligibility, remaining service life, or refrigerant type. Check installation records, the model-specific warranty, and the refrigerant field on the rating plate for those details.", "tipsParagraph": "If the serial contains letters, has a different length, or produces an impossible date, do not force it into this pattern. Recheck the field marked SERIAL or S/N rather than MODEL. Ask the manufacturer or an authorized dealer to confirm unsupported formats. Read accessible labels without removing electrical covers or reaching into running equipment."}}
      relatedBrands={[{"name": "Goodman", "slug": "goodman"}, {"name": "Daikin", "slug": "daikin"}]}
      faq={[{"question": "Are the third and fourth digits a week code?", "answer": "For the supported YYMM format they are the month, from 01 for January through 12 for December. A value such as 43 is invalid for this format."}, {"question": "Does this work for every model?", "answer": "No. This decoder supports a ten-digit numeric HVAC format. Older equipment and other product families can use different formats. Confirm the result with the manufacturer when the label or model does not match."}, {"question": "Is the manufacture date my warranty start date?", "answer": "Not necessarily. Warranty terms depend on the model, installation, registration, and applicable terms. Use the equipment-specific warranty and installation records."}]}
    />
    <section className="max-w-4xl mx-auto px-4 py-8 text-gray-700">
      <h2 className="text-xl font-bold mb-3">Manufacturer reference and scope</h2>
      <p><a className="text-blue-700 underline" href="https://resource.ecmdi.com/is/content/Watscocom/Gemaire/amana_apg13481151_article_1395692849347_en_cl.pdf">Amana packaged-unit warranty, manufacture-date explanation</a> identifies the first four serial digits as year and month for the listed models. It does not establish that every product uses this format.</p>
      <p className="mt-3 text-sm">Date-code explanation checked September 28, 2026. This independent tool is not a manufacturer warranty lookup.</p>
      <p className="mt-3"><a className="text-blue-700 underline" href="/amana-appliances-serial-number-decoder/">Looking for an Amana household appliance? Use the appliance decoder.</a></p>
    </section>
  </>
}
