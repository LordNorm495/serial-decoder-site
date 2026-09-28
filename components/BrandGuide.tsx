import Link from 'next/link'
import SerialDecoder from './SerialDecoder'
import { BrandInfo } from '@/lib/brands'
import { getGuide } from '@/lib/guideData'
import { automaticBrands } from '@/lib/decoders'

export default function BrandGuide({brand}:{brand:BrandInfo}) {
 const guide=getGuide(brand.key)
 const automated=automaticBrands.includes(brand.key)
 return <article className="max-w-4xl mx-auto px-4 py-10">
  <nav className="text-sm text-blue-700 mb-6"><Link href="/">Decoder</Link> / <Link href="/brands/">Brand guides</Link> / {brand.name}</nav>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
  <p className="text-gray-600 text-lg mb-4">{guide.scope}</p>
  <p className="text-sm text-gray-500 mb-8">Format review: September 28, 2026 · Independent reference · <Link href="/methodology/" className="text-blue-700 underline">How we verify results</Link></p>
  {automated ? <SerialDecoder defaultBrand={brand.key}/> : <section className="rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-bold text-xl mb-2">Use the full model and serial together</h2><p>{guide.meaning}</p><p className="mt-3">The steps and references below explain what to collect and how to resolve the date. A confident-looking result from an unverified pattern would not be reliable.</p></section>}
  <section className="my-8 border border-gray-200 rounded-xl p-6 bg-white">
   <h2 className="text-2xl font-bold mb-3">Read the label in this order</h2>
   <p className="mb-4">{brand.serialLocation} Read only labels you can reach safely. Do not open energized equipment or remove service covers to use this website.</p>
   <ol className="list-decimal pl-6 space-y-3 text-gray-700">
    <li>Record the brand, complete model and complete serial in separate fields. Keep leading zeros and letter suffixes.</li>
    <li>Check for a printed manufacture date first. A clearly labeled factory date is better evidence than an inferred code.</li>
    <li>Match the format and product scope below. Stop if a character does not fit; do not delete characters to force a match.</li>
   </ol>
  </section>
  <section className="my-8"><h2 className="text-2xl font-bold mb-3">Format and worked example</h2>
   <p className="font-semibold text-blue-900 mb-3">{guide.format}</p>
   {guide.example && <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4"><p className="font-mono text-2xl break-all">{guide.example}</p><p className="mt-3 text-gray-700">{guide.meaning}</p><p className="text-xs text-gray-500 mt-3">Example for explaining the format, not a warranty or ownership record.</p></div>}
   <p className="text-gray-700">A date pattern explains only part of the label. The remaining characters identify production details or the individual unit. They should stay intact when you contact the manufacturer, even when this tool does not use them in its calculation.</p>
  </section>
  <section className="my-8"><h2 className="text-2xl font-bold mb-4">Mistakes that change the answer</h2><ul className="space-y-4">{guide.pitfalls.map(p=><li key={p} className="border-l-4 border-amber-300 pl-4 text-gray-700">{p}</li>)}</ul></section>
  <section className="my-8"><h2 className="text-2xl font-bold mb-3">If the date is ambiguous or rejected</h2><p className="text-gray-700 mb-4">Photograph the entire label, then compare your transcription character by character. Check 0/O, 1/I and 5/S. A rejected serial may be legitimate equipment from a format this tool does not cover; it is not evidence of a counterfeit or a failed warranty.</p>
   <p className="text-gray-700 mb-4">Ask manufacturer support: “For this model and serial, what is the manufacture month or production week? Which date starts the warranty?” Keep those answers separate. For a used unit, a seller’s purchase date can narrow possibilities, but a replacement part date cannot prove the age of the original equipment.</p>
   <Link href="/equipment-record/" className="text-blue-700 underline">Save a printable equipment record with your evidence →</Link>
  </section>
  <section className="my-8 bg-gray-50 border rounded-xl p-6"><h2 className="text-xl font-bold mb-3">Manufacturer references</h2><ul className="space-y-3">{guide.sources.map(s=><li key={s.url}><a className="text-blue-700 underline break-words" href={s.url} target="_blank" rel="noopener noreferrer">{s.title} ↗</a></li>)}</ul><p className="text-sm text-gray-600 mt-4">Each source has a product and era scope. These links do not imply manufacturer endorsement of Serial Decoder.</p></section>
  <p className="text-sm text-gray-600">Found a contradiction between this guide and a manufacturer document? <Link className="text-blue-700 underline" href="/contact/">Report a correction</Link> with the model, date-code format and source. Please leave out addresses, account numbers and purchase documents containing personal information.</p>
 </article>
}
