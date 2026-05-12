export interface DecodeResult {
  brand: string
  year: number | null
  month: number | null
  week: number | null
  age: number | null
  monthName: string | null
  confidence: 'high' | 'medium' | 'low'
  notes: string[]
  rawSerial: string
  error?: string
}

function currentYear(): number {
  return new Date().getFullYear()
}

function calcAge(year: number | null): number | null {
  if (!year) return null
  return currentYear() - year
}

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]

function monthName(m: number | null): string | null {
  if (!m || m < 1 || m > 12) return null
  return MONTH_NAMES[m - 1]
}

// ─── CARRIER / BRYANT / PAYNE ────────────────────────────────────────────────
// Modern format: letters in position 4 (0-indexed: index 3) map to year
// Digits before the letter = week of year
// Year letter cycle: A=2000, B=2001, C=2002, D=2003, E=2004, F=2005,
//   G=2006, H=2007, J=2008 (no I), K=2009, L=2010, M=2011, N=2012,
//   P=2013 (no O), R=2014 (no Q), S=2015, T=2016, V=2017 (no U),
//   W=2018, X=2019, Y=2020, then cycle repeats A=2021, B=2022 ...
const CARRIER_YEAR_LETTERS: Record<string, number> = {
  A: 2000, B: 2001, C: 2002, D: 2003, E: 2004, F: 2005,
  G: 2006, H: 2007, J: 2008, K: 2009, L: 2010, M: 2011,
  N: 2012, P: 2013, R: 2014, S: 2015, T: 2016, V: 2017,
  W: 2018, X: 2019, Y: 2020,
}

function carrierDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  // Modern format: find the first letter in positions 1-5
  // The letter encodes the year, digits before it = week
  let letterIdx = -1
  for (let i = 0; i < Math.min(8, s.length); i++) {
    if (/[A-Z]/.test(s[i])) {
      letterIdx = i
      break
    }
  }

  if (letterIdx > 0) {
    const yearChar = s[letterIdx]
    const weekStr = s.substring(0, letterIdx)
    const baseYear = CARRIER_YEAR_LETTERS[yearChar]
    if (baseYear !== undefined) {
      // Determine if it's the first or second cycle (A=2000 or A=2021+)
      year = baseYear
      // If year seems in the past by more than 21 years, add 21
      if (currentYear() - year > 21 && year < 2010) {
        year += 21
      }
      week = parseInt(weekStr, 10) || null
      notes.push(`Year letter "${yearChar}" → ${year}`)
      if (week) notes.push(`Week: ${week}`)
    }
  }

  return {
    brand: 'Carrier',
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── TRANE / AMERICAN STANDARD ───────────────────────────────────────────────
// Serial format example: X4M123456
// Position 0: decade letter (T=1980s, U=1990s, X=2000s, Y=2010s, Z=2020s)
// Position 1: year digit within decade (0-9)
// Position 2-3: week (01-52)
const TRANE_DECADE: Record<string, number> = {
  T: 1980, U: 1990, X: 2000, Y: 2010, Z: 2020,
}

function traneDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 4) {
    const decadeLetter = s[0]
    const yearDigit = parseInt(s[1], 10)
    const weekStr = s.substring(2, 4)
    const decade = TRANE_DECADE[decadeLetter]
    if (decade !== undefined && !isNaN(yearDigit)) {
      year = decade + yearDigit
      week = parseInt(weekStr, 10) || null
      notes.push(`Decade "${decadeLetter}" → ${decade}s, digit ${yearDigit} → ${year}`)
      if (week) notes.push(`Week: ${week}`)
    }
  }

  return {
    brand: 'Trane',
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── LENNOX ──────────────────────────────────────────────────────────────────
// Positions 3-6 (0-indexed) = YYWW
// Example: AB0312XXXXX = year 2003, week 12
function lennoxDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 7) {
    const yy = parseInt(s.substring(3, 5), 10)
    const ww = parseInt(s.substring(5, 7), 10)
    if (!isNaN(yy) && !isNaN(ww)) {
      year = yy >= 0 && yy <= 99 ? (yy >= 80 ? 1900 + yy : 2000 + yy) : null
      week = ww >= 1 && ww <= 52 ? ww : null
      notes.push(`Characters 4-7: "${s.substring(3, 7)}" → Year: ${year}, Week: ${week}`)
    }
  }

  return {
    brand: 'Lennox',
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── YORK / JOHNSON CONTROLS / HEIL / ICP / COLEMAN ─────────────────────────
// Position 0: decade letter (H=1990s, J=2000s, K=2010s, L=2020s)
// Position 1: year digit (0-9)
// Position 2-3: month (01-12)
const YORK_DECADE: Record<string, number> = {
  H: 1990, J: 2000, K: 2010, L: 2020,
}

function yorkDecode(serial: string, brand = 'York'): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  if (s.length >= 4) {
    const decadeLetter = s[0]
    const yearDigit = parseInt(s[1], 10)
    const monthStr = s.substring(2, 4)
    const decade = YORK_DECADE[decadeLetter]
    if (decade !== undefined && !isNaN(yearDigit)) {
      year = decade + yearDigit
      month = parseInt(monthStr, 10) || null
      if (month && (month < 1 || month > 12)) month = null
      notes.push(`Decade "${decadeLetter}" → ${decade}s, digit ${yearDigit} → ${year}`)
      if (month) notes.push(`Month: ${month} (${monthName(month)})`)
    }
  }

  return {
    brand,
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── GOODMAN / AMANA / DAIKIN ────────────────────────────────────────────────
// First 4 digits: YYWW or first 2 = year, next 2 = week
// Example: 0612... = year 2006, week 12
function goodmanDecode(serial: string, brand = 'Goodman'): DecodeResult {
  const s = serial.replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 4) {
    const yy = parseInt(s.substring(0, 2), 10)
    const ww = parseInt(s.substring(2, 4), 10)
    if (!isNaN(yy) && !isNaN(ww)) {
      year = yy >= 80 ? 1900 + yy : 2000 + yy
      week = ww >= 1 && ww <= 52 ? ww : null
      notes.push(`First 4 digits "${s.substring(0, 4)}" → Year: ${year}, Week: ${week}`)
    }
  }

  return {
    brand,
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── RHEEM / RUUD ────────────────────────────────────────────────────────────
// Position 1-2 (0-indexed): year (e.g. 09 = 2009)
// Position 3-4: week
function rheemDecode(serial: string, brand = 'Rheem'): DecodeResult {
  const s = serial.replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 5) {
    const yy = parseInt(s.substring(1, 3), 10)
    const ww = parseInt(s.substring(3, 5), 10)
    if (!isNaN(yy) && !isNaN(ww)) {
      year = yy >= 80 ? 1900 + yy : 2000 + yy
      week = ww >= 1 && ww <= 52 ? ww : null
      notes.push(`Positions 2-3: "${s.substring(1, 3)}" → Year: ${year}`)
      if (week) notes.push(`Positions 4-5: Week ${week}`)
    }
  }

  return {
    brand,
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── WHIRLPOOL / KITCHENAID / MAYTAG / AMANA (appliances) ───────────────────
// Position 1: year letter, Position 2: month letter
const WHIRLPOOL_YEARS: Record<string, number> = {
  F: 1996, G: 1997, H: 1998, J: 1999, K: 2000, L: 2001, M: 2002,
  N: 2003, P: 2004, R: 2005, S: 2006, T: 2007, V: 2008, W: 2009,
  X: 2010, Y: 2011, A: 2012, B: 2013, C: 2014, D: 2015, E: 2016,
}
// After E(2016): F=2017, G=2018... continuing from F
const WHIRLPOOL_YEARS_EXT: Record<string, number> = {
  ...WHIRLPOOL_YEARS,
  // Second cycle continues from F=2017
}
// Build extended lookup
;(function buildWhirlpoolExt() {
  const seq = 'FGHJKLMNPRSTV WXYA BCDE'
    .replace(/ /g, '')
    .split('')
  let yr = 1996
  seq.forEach(c => {
    if (!WHIRLPOOL_YEARS_EXT[c]) WHIRLPOOL_YEARS_EXT[c] = yr
    yr++
  })
})()

// Month: A=Jan, B=Feb, C=Mar, D=Apr, E=May, F=Jun, G=Jul, H=Aug, J=Sep, K=Oct, L=Nov, M=Dec
const ALPHA_MONTHS: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6,
  G: 7, H: 8, J: 9, K: 10, L: 11, M: 12,
}

function whirlpoolDecode(serial: string, brand = 'Whirlpool'): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  if (s.length >= 3) {
    const yearChar = s[1]
    const monthChar = s[2]
    year = WHIRLPOOL_YEARS[yearChar] ?? null
    // If not in base map, check extended
    if (!year && WHIRLPOOL_YEARS_EXT[yearChar]) {
      year = WHIRLPOOL_YEARS_EXT[yearChar]
    }
    month = ALPHA_MONTHS[monthChar] ?? null
    if (year) notes.push(`Year letter "${yearChar}" → ${year}`)
    if (month) notes.push(`Month letter "${monthChar}" → ${monthName(month)}`)
  }

  return {
    brand,
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── GE / HOTPOINT ───────────────────────────────────────────────────────────
// Position 1: month (A-L = Jan-Dec)
// Position 2: year letter
const GE_YEARS: Record<string, number> = {
  R: 1997, S: 1998, T: 1999, V: 2000, Z: 2001, A: 2002, B: 2003,
  C: 2004, D: 2005, E: 2006, F: 2007, G: 2008, H: 2009, J: 2010,
  K: 2011, L: 2012, M: 2013, N: 2014, P: 2015, R2: 2016,
}
// GE cycles: R=1997 then R again=2016+ we need to handle duplicates
const GE_YEAR_SEQ: [string, number][] = [
  ['R', 1997], ['S', 1998], ['T', 1999], ['V', 2000], ['Z', 2001],
  ['A', 2002], ['B', 2003], ['C', 2004], ['D', 2005], ['E', 2006],
  ['F', 2007], ['G', 2008], ['H', 2009], ['J', 2010], ['K', 2011],
  ['L', 2012], ['M', 2013], ['N', 2014], ['P', 2015], ['R', 2016],
  ['S', 2017], ['T', 2018], ['V', 2019], ['Z', 2020], ['A', 2021],
  ['B', 2022], ['C', 2023], ['D', 2024], ['E', 2025], ['F', 2026],
]
const GE_MONTH_LETTERS: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6,
  G: 7, H: 8, J: 9, K: 10, L: 11, M: 12,
}

function geDecode(serial: string, brand = 'GE'): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  if (s.length >= 3) {
    const monthChar = s[1]
    const yearChar = s[2]
    month = GE_MONTH_LETTERS[monthChar] ?? null
    // Find most recent matching year
    const matches = GE_YEAR_SEQ.filter(([c]) => c === yearChar)
    if (matches.length > 0) {
      // Pick closest to current year without going over significantly
      const cy = currentYear()
      year = matches.reduce((best, [, y]) => {
        return Math.abs(y - cy) < Math.abs(best - cy) ? y : best
      }, matches[0][1])
    }
    if (year) notes.push(`Year letter "${yearChar}" → ${year}`)
    if (month) notes.push(`Month letter "${monthChar}" → ${monthName(month)}`)
  }

  return {
    brand,
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── SAMSUNG ─────────────────────────────────────────────────────────────────
// Position 3: year (A=2010, B=2011... N=2022, P=2023...)
// Position 4: month (A=Jan through L=Dec)
const SAMSUNG_YEARS: Record<string, number> = {
  A: 2010, B: 2011, C: 2012, D: 2013, E: 2014, F: 2015,
  G: 2016, H: 2017, J: 2018, K: 2019, L: 2020, M: 2021,
  N: 2022, P: 2023, R: 2024, S: 2025,
}
const SAMSUNG_MONTHS: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6,
  G: 7, H: 8, J: 9, K: 10, L: 11, M: 12,
}

function samsungDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  if (s.length >= 5) {
    const yearChar = s[3]
    const monthChar = s[4]
    year = SAMSUNG_YEARS[yearChar] ?? null
    month = SAMSUNG_MONTHS[monthChar] ?? null
    if (year) notes.push(`Position 4 "${yearChar}" → ${year}`)
    if (month) notes.push(`Position 5 "${monthChar}" → ${monthName(month)}`)
  }

  return {
    brand: 'Samsung',
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── LG ──────────────────────────────────────────────────────────────────────
// Position 1: year digit (decade ambiguous — use closest to current)
// Position 2-3: month (01-12) or position 2: month letter A-L
function lgDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  if (s.length >= 3) {
    const yearDigit = parseInt(s[1], 10)
    // Determine decade: LG started major production in 2000s
    const cy = currentYear()
    const candidates = [2000 + yearDigit, 2010 + yearDigit, 2020 + yearDigit]
    year = candidates.reduce((best, y) => {
      return y <= cy && Math.abs(y - cy) < Math.abs(best - cy) ? y : best
    }, candidates[0])

    // Month: try numeric first, then alpha
    const monthStr = s.substring(2, 4)
    const monthNum = parseInt(monthStr, 10)
    if (!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12) {
      month = monthNum
    } else {
      month = ALPHA_MONTHS[s[2]] ?? null
    }
    notes.push(`Position 2 "${s[1]}" → Year ${year} (decade estimated)`)
    if (month) notes.push(`Month: ${monthName(month)}`)
  }

  return {
    brand: 'LG',
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'medium' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── FRIGIDAIRE / ELECTROLUX ────────────────────────────────────────────────
// Format: 2-letter plant code + 2-digit year + 2-digit week + sequence
// Example: XC2005XXXXX → plant=XC, year=2020, week=05
function frigidaireDecode(serial: string, brand = 'Frigidaire'): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 6) {
    const plant = s.substring(0, 2)
    const yy = parseInt(s.substring(2, 4), 10)
    const ww = parseInt(s.substring(4, 6), 10)
    if (!isNaN(yy) && !isNaN(ww)) {
      year = yy < 80 ? 2000 + yy : 1900 + yy
      week = ww >= 1 && ww <= 52 ? ww : null
      notes.push(`Plant code: "${plant}"`)
      notes.push(`Characters 3-4: "${s.substring(2, 4)}" → Year: ${year}`)
      if (week) notes.push(`Characters 5-6: Week ${week}`)
    }
  }

  return {
    brand,
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── SPEED QUEEN ─────────────────────────────────────────────────────────────
// Format: First 2 digits = year, next 2 digits = week
// Example: 1807XXXXX → year=2018, week=07
function speedQueenDecode(serial: string): DecodeResult {
  const s = serial.replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let week: number | null = null

  if (s.length >= 4) {
    const yy = parseInt(s.substring(0, 2), 10)
    const ww = parseInt(s.substring(2, 4), 10)
    if (!isNaN(yy) && !isNaN(ww)) {
      year = yy < 80 ? 2000 + yy : 1900 + yy
      week = ww >= 1 && ww <= 52 ? ww : null
      notes.push(`First 2 digits "${s.substring(0, 2)}" → Year: ${year}`)
      if (week) notes.push(`Digits 3-4: Week ${week}`)
    }
  }

  return {
    brand: 'Speed Queen',
    year,
    month: null,
    week,
    age: calcAge(year),
    monthName: null,
    confidence: year ? 'high' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── BOSCH ───────────────────────────────────────────────────────────────────
// FD (Fertigungsdatum) format: FD YYMM or just YYMM
// Modern: first 2 chars = plant code (letters), next 2 = year, next 2 = month
// Example: FD8901XXXXX → year=1989, month=01; 9501XXXXX → year=1995, month=01
function boschDecode(serial: string): DecodeResult {
  const s = serial.toUpperCase().replace(/\s/g, '')
  const notes: string[] = []
  let year: number | null = null
  let month: number | null = null

  // Check for FD prefix
  let digits = s
  if (s.startsWith('FD') && s.length >= 6) {
    digits = s.substring(2)
    notes.push('FD (Fertigungsdatum) prefix detected')
  } else if (/^[A-Z]{2}\d/.test(s) && s.length >= 6) {
    // Plant code prefix (2 letters)
    notes.push(`Plant code: "${s.substring(0, 2)}"`)
    digits = s.substring(2)
  }

  if (digits.length >= 4) {
    const yy = parseInt(digits.substring(0, 2), 10)
    const mm = parseInt(digits.substring(2, 4), 10)
    if (!isNaN(yy) && !isNaN(mm)) {
      year = yy < 80 ? 2000 + yy : 1900 + yy
      month = mm >= 1 && mm <= 12 ? mm : null
      notes.push(`YY: "${digits.substring(0, 2)}" → Year: ${year}`)
      if (month) notes.push(`MM: "${digits.substring(2, 4)}" → Month: ${monthName(month)}`)
    }
  }

  return {
    brand: 'Bosch',
    year,
    month,
    week: null,
    age: calcAge(year),
    monthName: monthName(month),
    confidence: year ? 'medium' : 'low',
    notes,
    rawSerial: serial,
    error: year ? undefined : 'Could not decode year from serial number',
  }
}

// ─── AUTO-DETECT ─────────────────────────────────────────────────────────────
export type BrandKey =
  | 'carrier' | 'bryant' | 'payne'
  | 'trane' | 'american-standard'
  | 'lennox' | 'york' | 'heil' | 'coleman'
  | 'goodman' | 'amana-hvac' | 'daikin'
  | 'rheem' | 'ruud'
  | 'whirlpool' | 'kitchenaid' | 'maytag' | 'amana'
  | 'ge' | 'hotpoint'
  | 'samsung' | 'lg'
  | 'comfortmaker' | 'tempstar' | 'luxaire' | 'champion-hvac' | 'keeprite'
  | 'jennair' | 'kenmore' | 'roper'
  | 'frigidaire' | 'electrolux' | 'speed-queen' | 'bosch'

export function decodeByBrand(serial: string, brand: BrandKey): DecodeResult {
  const s = serial.trim()
  switch (brand) {
    case 'carrier':    return carrierDecode(s)
    case 'bryant':     return { ...carrierDecode(s), brand: 'Bryant' }
    case 'payne':      return { ...carrierDecode(s), brand: 'Payne' }
    case 'trane':      return traneDecode(s)
    case 'american-standard': return { ...traneDecode(s), brand: 'American Standard' }
    case 'lennox':     return lennoxDecode(s)
    case 'york':       return yorkDecode(s, 'York')
    case 'heil':       return yorkDecode(s, 'Heil')
    case 'coleman':    return yorkDecode(s, 'Coleman')
    case 'goodman':    return goodmanDecode(s, 'Goodman')
    case 'amana-hvac': return goodmanDecode(s, 'Amana')
    case 'daikin':     return goodmanDecode(s, 'Daikin')
    case 'rheem':      return rheemDecode(s, 'Rheem')
    case 'ruud':       return rheemDecode(s, 'Ruud')
    case 'whirlpool':  return whirlpoolDecode(s, 'Whirlpool')
    case 'kitchenaid': return whirlpoolDecode(s, 'KitchenAid')
    case 'maytag':     return whirlpoolDecode(s, 'Maytag')
    case 'amana':      return whirlpoolDecode(s, 'Amana')
    case 'ge':         return geDecode(s, 'GE')
    case 'hotpoint':   return geDecode(s, 'Hotpoint')
    case 'samsung':    return samsungDecode(s)
    case 'lg':         return lgDecode(s)
    // York/ICP family
    case 'comfortmaker': return yorkDecode(s, 'Comfortmaker')
    case 'tempstar':     return yorkDecode(s, 'Tempstar')
    case 'luxaire':      return yorkDecode(s, 'Luxaire')
    case 'champion-hvac': return yorkDecode(s, 'Champion HVAC')
    case 'keeprite':     return yorkDecode(s, 'Keeprite')
    // Whirlpool family
    case 'jennair':      return whirlpoolDecode(s, 'JennAir')
    case 'kenmore':      return whirlpoolDecode(s, 'Kenmore')
    case 'roper':        return whirlpoolDecode(s, 'Roper')
    // New decoders
    case 'frigidaire':   return frigidaireDecode(s, 'Frigidaire')
    case 'electrolux':   return frigidaireDecode(s, 'Electrolux')
    case 'speed-queen':  return speedQueenDecode(s)
    case 'bosch':        return boschDecode(s)
    default:           return { brand: 'Unknown', year: null, month: null, week: null, age: null, monthName: null, confidence: 'low', notes: [], rawSerial: serial, error: 'Unknown brand' }
  }
}

// Auto-detect brand from serial pattern
export function autoDetect(serial: string): { brand: BrandKey; confidence: 'high' | 'medium' | 'low' }[] {
  const s = serial.toUpperCase().trim()
  const results: { brand: BrandKey; confidence: 'high' | 'medium' | 'low' }[] = []

  // Samsung: usually starts with letters, 4th char = year letter from known set
  if (s.length >= 5 && /^[A-Z]{2}\d/.test(s) && SAMSUNG_YEARS[s[3]]) {
    results.push({ brand: 'samsung', confidence: 'medium' })
  }

  // Trane: starts with T, U, X, Y, Z followed by digit then 2 digits
  if (/^[TUXYZ]\d\d\d/.test(s)) {
    results.push({ brand: 'trane', confidence: 'high' })
  }

  // York/Heil/Coleman: starts with H, J, K, L + digit + 2 digits
  if (/^[HJKL]\d\d\d/.test(s)) {
    results.push({ brand: 'york', confidence: 'high' })
  }

  // Rheem/Ruud: starts with letter then 4 digits
  if (/^[A-Z]\d{4}/.test(s) && s.length >= 10) {
    results.push({ brand: 'rheem', confidence: 'medium' })
  }

  // Goodman: starts with 4 digits (YYWW)
  if (/^\d{4}/.test(s)) {
    results.push({ brand: 'goodman', confidence: 'medium' })
  }

  // GE: starts with any char, then month letter, then year letter
  if (s.length >= 3 && GE_MONTH_LETTERS[s[1]] && GE_YEAR_SEQ.some(([c]) => c === s[2])) {
    results.push({ brand: 'ge', confidence: 'medium' })
  }

  // Whirlpool: position 1 = year letter, position 2 = month letter
  if (s.length >= 3 && (WHIRLPOOL_YEARS[s[1]] || WHIRLPOOL_YEARS_EXT[s[1]]) && ALPHA_MONTHS[s[2]]) {
    results.push({ brand: 'whirlpool', confidence: 'medium' })
  }

  // Carrier: has letter after some leading digits
  if (/^\d{1,3}[A-Z]/.test(s) && CARRIER_YEAR_LETTERS[s.match(/^(\d+)([A-Z])/)?.[2] ?? '']) {
    results.push({ brand: 'carrier', confidence: 'high' })
  }

  return results
}
