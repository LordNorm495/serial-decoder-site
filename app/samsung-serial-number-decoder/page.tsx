import type { Metadata } from 'next'
import BrandGuide from '@/components/BrandGuide'
import { getBrandBySlug } from '@/lib/brands'
const brand = getBrandBySlug('samsung')!
export const metadata: Metadata = {title: `${brand.name} Serial Number: Date Lookup & Verification`, description: `Find and interpret a ${brand.name} equipment label. Supported date formats, worked examples, limitations and manufacturer references.`, alternates: { canonical: '/samsung-serial-number-decoder/' } }
export default function Page() { return <BrandGuide brand={brand} /> }
