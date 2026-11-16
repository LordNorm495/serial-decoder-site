import Link from 'next/link'
import GuideCasework, { hasCasework } from './GuideCasework'
import SerialDecoder from './SerialDecoder'
import { BrandInfo, brandHeading } from '@/lib/brands'
import { getGuide } from '@/lib/guideData'
import { automaticBrands } from '@/lib/decoders'

export default function BrandGuide({brand}:{brand:BrandInfo}) {
 const guide=getGuide(brand.key)
 const automated=automaticBrands.includes(brand.key)
 return <article className="max-w-4xl mx-auto px-4 py-10">
  <nav className="text-sm text-blue-700 mb-6"><Link href="/">Decoder</Link> / <Link href="/brands/">Brand guides</Link> / {brand.name}</nav>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Decoder',item:'https://serial-decoder.com/'},{'@type':'ListItem',position:2,name:'Brand guides',item:'https://serial-decoder.com/brands/'},{'@type':'ListItem',position:3,name:brand.name,item:`https://serial-decoder.com/${brand.slug}-serial-number-decoder/`}]})}}/>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{brandHeading(brand)}</h1>
  <p className="text-xl font-semibold text-gray-700 mb-4">{guide.title}</p>
  <p className="text-gray-600 text-lg mb-4">{guide.scope}</p>
  <p className="text-sm text-gray-500 mb-8">Format review: {hasCasework(brand.key) ? 'October 21, 2026' : 'September 28, 2026'} · Independent reference · <Link href="/methodology/" className="text-blue-700 underline">How we verify results</Link></p>
  {automated ? <SerialDecoder defaultBrand={brand.key}/> : <section className="rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-bold text-xl mb-2">Use the full model and serial together</h2><p>{guide.meaning}</p><p className="mt-3">The steps and references below explain what to collect and how to resolve the date. A confident-looking result from an unverified pattern would not be reliable.</p></section>}
  <section className="my-8 border border-gray-200 rounded-xl p-6 bg-white">
   <h2 className="text-2xl font-bold mb-3">Read the label in this order</h2>
   <p className="mb-4">{brand.serialLocation} Read only labels you can reach safely. Do not open energized equipment or remove service covers to use this website.</p>
   <p className="text-gray-700">Keep the full model and serial, including leading zeros. Prefer a printed manufacture date. <Link href="/methodology/" className="text-blue-700 underline">See the label-reading and verification checklist</Link>.</p>
  </section>
  <section className="my-8"><h2 className="text-2xl font-bold mb-3">Format and worked example</h2>
   <p className="font-semibold text-blue-900 mb-3">{guide.format}</p>
   {guide.example && <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4"><p className="font-mono text-2xl break-all">{guide.example}</p><p className="mt-3 text-gray-700">{guide.meaning}</p><p className="text-xs text-gray-500 mt-3">Example for explaining the format, not a warranty or ownership record.</p></div>}

  </section>
  <GuideCasework brand={brand.key}/>
  <section className="my-8"><h2 className="text-2xl font-bold mb-4">Mistakes that change the answer</h2><ul className="space-y-4">{guide.pitfalls.map(p=><li key={p} className="border-l-4 border-amber-300 pl-4 text-gray-700">{p}</li>)}</ul></section>
  <section className="my-8"><h2 className="text-2xl font-bold mb-3">Keep the evidence with the date</h2><p className="text-gray-700 mb-4">An unsupported serial is not proof of invalid equipment. <Link href="/methodology/" className="text-blue-700 underline">Follow the verification steps</Link> before relying on an estimate.</p><Link href="/equipment-record/" className="text-blue-700 underline">Create a printable equipment record →</Link></section>
  <section className="my-8 bg-gray-50 border rounded-xl p-6"><h2 className="text-xl font-bold mb-3">Manufacturer references</h2><ul className="space-y-3">{guide.sources.map(s=><li key={s.url}><a className="text-blue-700 underline break-words" href={s.url} target="_blank" rel="noopener noreferrer">{s.title} ↗</a></li>)}</ul><p className="text-sm text-gray-600 mt-4">Each source has a product and era scope. These links do not imply manufacturer endorsement of Serial Decoder.</p></section>
  <p className="text-sm text-gray-600">Found a contradiction between this guide and a manufacturer document? <Link className="text-blue-700 underline" href="/contact/">Report a correction</Link> with the model, date-code format and source. Please leave out addresses, account numbers and purchase documents containing personal information.</p>
 </article>
}
