import type { Metadata } from 'next'
import BrandGuide from '@/components/BrandGuide'
import { getBrandBySlug, brandMetadata } from '@/lib/brands'
const brand = getBrandBySlug('frigidaire')!
export const metadata: Metadata = brandMetadata(brand)
export default function Page() { return <BrandGuide brand={brand} /> }
