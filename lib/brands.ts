import { BrandKey, automaticBrands } from './decoders'
import { getGuide } from './guideData'

export interface BrandInfo {
  key: BrandKey
  name: string
  slug: string
  category: 'hvac' | 'appliance'
  description: string
  serialLocation: string
  exampleSerial: string
  parent?: string
  relatedBrands?: string[]
}

const brandCatalog: BrandInfo[] = [
  {
    key: 'carrier',
    name: 'Carrier',
    slug: 'carrier',
    category: 'hvac',
    description: '',
    serialLocation: 'Found on the data plate/label on the side or back of the unit, or inside the service panel.',
    exampleSerial: '',
  },
  {
    key: 'bryant',
    name: 'Bryant',
    slug: 'bryant',
    category: 'hvac',
    description: '',
    serialLocation: 'Located on the rating plate attached to the outdoor unit or furnace cabinet.',
    exampleSerial: '',
    relatedBrands: ['Carrier', 'Payne'],
  },
  {
    key: 'payne',
    name: 'Payne',
    slug: 'payne',
    category: 'hvac',
    description: '',
    serialLocation: 'On the metal data plate on the exterior of the unit.',
    exampleSerial: '',
    relatedBrands: ['Carrier', 'Bryant'],
  },
  {
    key: 'trane',
    name: 'Trane',
    slug: 'trane',
    category: 'hvac',
    description: '',
    serialLocation: 'On the rating plate on the outdoor unit, air handler, or furnace.',
    exampleSerial: '',
  },
  {
    key: 'american-standard',
    name: 'American Standard',
    slug: 'american-standard',
    category: 'hvac',
    description: '',
    serialLocation: 'Data plate on the unit exterior or inside the cabinet door.',
    exampleSerial: '',
    relatedBrands: ['Trane'],
  },
  {
    key: 'lennox',
    name: 'Lennox',
    slug: 'lennox',
    category: 'hvac',
    description: '',
    serialLocation: 'On the specification plate inside the furnace cabinet or on the outdoor unit.',
    exampleSerial: '',
  },
  {
    key: 'york',
    name: 'York',
    slug: 'york',
    category: 'hvac',
    description: '',
    serialLocation: 'On the data plate located on the side panel of the outdoor unit or air handler.',
    exampleSerial: '',
  },
  {
    key: 'goodman',
    name: 'Goodman',
    slug: 'goodman',
    category: 'hvac',
    description: '',
    serialLocation: 'On the specification label on the side of the outdoor unit or inside the air handler.',
    exampleSerial: '',
  },
  {
    key: 'amana-hvac',
    name: 'Amana HVAC',
    slug: 'amana',
    category: 'hvac',
    description: '',
    serialLocation: 'On the rating plate on the unit exterior.',
    exampleSerial: '',
    relatedBrands: ['Goodman', 'Daikin'],
  },
  {
    key: 'daikin',
    name: 'Daikin',
    slug: 'daikin',
    category: 'hvac',
    description: '',
    serialLocation: 'On the specification plate on the outdoor or indoor unit.',
    exampleSerial: '',
  },
  {
    key: 'rheem',
    name: 'Rheem',
    slug: 'rheem',
    category: 'hvac',
    description: '',
    serialLocation: 'On the data label attached to the unit. May be inside the access panel.',
    exampleSerial: '',
  },
  {
    key: 'ruud',
    name: 'Ruud',
    slug: 'ruud',
    category: 'hvac',
    description: '',
    serialLocation: 'On the rating plate on the unit cabinet.',
    exampleSerial: '',
    relatedBrands: ['Rheem'],
  },
  {
    key: 'heil',
    name: 'Heil',
    slug: 'heil',
    category: 'hvac',
    description: '',
    serialLocation: 'On the data plate on the exterior of the furnace or air conditioner.',
    exampleSerial: '',
    relatedBrands: ['York', 'Coleman'],
  },
  {
    key: 'coleman',
    name: 'Coleman',
    slug: 'coleman',
    category: 'hvac',
    description: '',
    serialLocation: 'On the data plate on the side of the unit.',
    exampleSerial: '',
    relatedBrands: ['York', 'Heil'],
  },
  {
    key: 'whirlpool',
    name: 'Whirlpool',
    slug: 'whirlpool',
    category: 'appliance',
    description: '',
    serialLocation: 'On the label inside the door frame, behind the kick plate, or on the back panel.',
    exampleSerial: '',
  },
  {
    key: 'kitchenaid',
    name: 'KitchenAid',
    slug: 'kitchenaid',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the door, on the interior wall, or behind a drawer.',
    exampleSerial: '',
    relatedBrands: ['Whirlpool', 'Maytag'],
  },
  {
    key: 'maytag',
    name: 'Maytag',
    slug: 'maytag',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the door opening or on the back of the appliance.',
    exampleSerial: '',
    relatedBrands: ['Whirlpool', 'KitchenAid'],
  },
  {
    key: 'amana',
    name: 'Amana Appliances',
    slug: 'amana-appliances',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the refrigerator, behind the crisper drawer, or inside the oven door.',
    exampleSerial: '',
  },
  {
    key: 'ge',
    name: 'GE Appliances',
    slug: 'ge',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the door frame, under the lid, or on the back panel.',
    exampleSerial: '',
  },
  {
    key: 'hotpoint',
    name: 'Hotpoint',
    slug: 'hotpoint',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the door, on the back, or behind the kick plate.',
    exampleSerial: '',
    relatedBrands: ['GE'],
  },
  {
    key: 'samsung',
    name: 'Samsung',
    slug: 'samsung',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the refrigerator door, behind the crisper drawer, or inside the washing machine door.',
    exampleSerial: '',
  },
  {
    key: 'lg',
    name: 'LG',
    slug: 'lg',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the door frame, on the back of the unit, or behind the crisper drawer.',
    exampleSerial: '',
  },
  // ─── York/ICP family ──────────────────────────────────
  {
    key: 'comfortmaker',
    name: 'Comfortmaker',
    slug: 'comfortmaker',
    category: 'hvac',
    description: '',
    serialLocation: 'On the data plate affixed to the outdoor unit or furnace cabinet.',
    exampleSerial: '',
    relatedBrands: ['York', 'Heil', 'Tempstar'],
  },
  {
    key: 'tempstar',
    name: 'Tempstar',
    slug: 'tempstar',
    category: 'hvac',
    description: '',
    serialLocation: 'On the rating plate on the side panel of the outdoor unit or inside the furnace door.',
    exampleSerial: '',
    relatedBrands: ['York', 'Comfortmaker', 'Heil'],
  },
  {
    key: 'luxaire',
    name: 'Luxaire',
    slug: 'luxaire',
    category: 'hvac',
    description: '',
    serialLocation: 'On the metal data plate on the exterior of the unit or inside the access panel.',
    exampleSerial: '',
    relatedBrands: ['York', 'Champion HVAC'],
  },
  {
    key: 'champion-hvac',
    name: 'Champion HVAC',
    slug: 'champion-hvac',
    category: 'hvac',
    description: '',
    serialLocation: 'On the specification label on the outdoor unit, furnace, or air handler.',
    exampleSerial: '',
    relatedBrands: ['York', 'Luxaire'],
  },
  {
    key: 'keeprite',
    name: 'Keeprite',
    slug: 'keeprite',
    category: 'hvac',
    description: '',
    serialLocation: 'On the rating plate attached to the outdoor unit or furnace.',
    exampleSerial: '',
    relatedBrands: ['York', 'Comfortmaker', 'Heil'],
  },
  // ─── Whirlpool family ───────────────────────────────
  {
    key: 'jennair',
    name: 'JennAir',
    slug: 'jennair',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the oven door frame, on the back panel of the refrigerator, or inside the dishwasher door.',
    exampleSerial: '',
    relatedBrands: ['Whirlpool', 'KitchenAid', 'Maytag'],
  },
  {
    key: 'kenmore',
    name: 'Kenmore',
    slug: 'kenmore',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the appliance door, behind the kick plate, or on the rear panel.',
    exampleSerial: '',
    relatedBrands: ['Whirlpool', 'Maytag'],
  },
  {
    key: 'roper',
    name: 'Roper',
    slug: 'roper',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the appliance door opening, on the back panel, or behind the lower access panel.',
    exampleSerial: '',
    relatedBrands: ['Whirlpool'],
  },
  // ─── New decoders ────────────────────────────────────
  {
    key: 'frigidaire',
    name: 'Frigidaire',
    slug: 'frigidaire',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the refrigerator door, inside the washer door, or on the back panel of the appliance.',
    exampleSerial: '',
  },
  {
    key: 'electrolux',
    name: 'Electrolux',
    slug: 'electrolux',
    category: 'appliance',
    description: '',
    serialLocation: 'On the label inside the appliance door, behind the kick plate, or on the back of the unit.',
    exampleSerial: '',
    relatedBrands: ['Frigidaire'],
  },
  {
    key: 'speed-queen',
    name: 'Speed Queen',
    slug: 'speed-queen',
    category: 'appliance',
    description: '',
    serialLocation: 'On the label inside the washer lid or door, or on the back panel.',
    exampleSerial: '',
  },
  {
    key: 'bosch',
    name: 'Bosch',
    slug: 'bosch',
    category: 'appliance',
    description: '',
    serialLocation: 'Inside the dishwasher door, behind the kick plate, inside the refrigerator, or on the back panel.',
    exampleSerial: '',
  },
]

export const brands: BrandInfo[] = brandCatalog.map(b => ({ ...b, parent: undefined, description: getGuide(b.key).scope, exampleSerial: getGuide(b.key).example }))

export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return brands.find(b => b.slug === slug || b.key === slug)
}

export function getBrandsByCategory(category: 'hvac' | 'appliance'): BrandInfo[] {
  return brands.filter(b => b.category === category)
}

export const brandSelectOptions = brands.map(b => ({
  value: b.key,
  label: b.name,
  category: b.category,
}))


export function brandHeading(brand: BrandInfo): string {
  return automaticBrands.includes(brand.key)
    ? `${brand.name} Serial Number Decoder`
    : `${brand.name} Serial Number Date Guide`
}

export function brandMetadata(brand: BrandInfo) {
  const automated = automaticBrands.includes(brand.key)
  const url = `/${brand.slug}-serial-number-decoder/`
  const title = automated
    ? `${brand.name} Serial Number Decoder: Age & Date Lookup`
    : `${brand.name} Serial Number: Find the Manufacture Date`
  const description = `Find the manufacture date and age from a ${brand.name} serial number. Supported date-code formats, worked examples, limits and manufacturer references.`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website' as const, locale: 'en_US', siteName: 'Serial-Decoder.com', title, description, url },
    twitter: { card: 'summary' as const, title, description },
  }
}
